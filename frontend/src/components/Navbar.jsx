import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const Navbar = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")

  const handleLogout = () => {
    localStorage.removeItem("token")
    toast.success("Logged out successfully")
    navigate("/login")
  }

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">Product Manager</h1>
      <div className="space-x-6 text-gray-600 font-medium">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        {!token ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar
