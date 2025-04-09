import { useEffect, useState } from "react"
import axios from "axios"
import ProductForm from "../components/ProductForm"
import EditProduct from "../components/EditProduct"
import { toast } from "react-toastify"

const Dashboard = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [editProduct, setEditProduct] = useState(null)
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")

  const token = localStorage.getItem("token")

  const fetchProducts = () => {
    axios
      .get("http://localhost:4000/api/product", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setProducts(res.data)
        setLoading(false)
      })
      .catch(() => {
        setError("Failed to load products")
        setLoading(false)
      })
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/product/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      toast.success("Product deleted!")
      fetchProducts()
    } catch {
      toast.error("Failed to delete product")
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || p.category === category)
  )

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Dashboard</h1>

      {/* Add Product */}
      <ProductForm onProductCreated={fetchProducts} />

      {/* Edit Product Modal */}
      {editProduct && (
        <EditProduct
          product={editProduct}
          onClose={() => setEditProduct(null)}
          onUpdate={fetchProducts}
        />
      )}

      {/* Search & Filter */}
      <div className="mb-4 flex flex-col md:flex-row gap-4 justify-between items-center">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-1/3"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-1/4"
        >
          <option value="">All Categories</option>
          {[...new Set(products.map((p) => p.category))].map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Product List */}
      {loading ? (
        <p className="text-center">Loading products...</p>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white border shadow rounded-lg p-4 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                <p className="text-sm text-gray-500 mt-1">{product.description}</p>
                <p className="mt-2 text-sm text-gray-700">₹{product.price}</p>
                <p className="text-sm text-gray-700">⭐ {product.rating}</p>
                <p className="text-sm text-gray-700">Category: {product.category}</p>
              </div>

              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => setEditProduct(product)}
                  className="px-3 py-1 text-sm bg-yellow-400 text-black rounded hover:bg-yellow-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dashboard
