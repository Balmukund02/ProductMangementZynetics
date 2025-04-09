import { useState, useEffect } from "react"
import axios from "axios"

const EditProduct = ({ product, onClose, onUpdate }) => {
  const [formData, setFormData] = useState(product || {})

  useEffect(() => {
    if (product) setFormData(product)
  }, [product])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem("token")
    try {
      await axios.put(`http://localhost:4000/api/product/${product._id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      onUpdate()
      onClose()
    } catch {
      alert("Failed to update product")
    }
  }

  if (!product) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        <h2 className="text-xl font-bold mb-4">Edit Product</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            name="rating"
            type="number"
            value={formData.rating}
            onChange={handleChange}
            placeholder="Rating"
            className="w-full border px-3 py-2 rounded"
          />

          <div className="flex justify-between mt-4">
            <button type="button" onClick={onClose} className="text-gray-600 hover:underline">
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProduct
