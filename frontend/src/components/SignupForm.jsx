import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const SignupForm = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await axios.post("http://localhost:4000/api/auth/signup", formData)
      const { token } = res.data
      localStorage.setItem("token", token)
      navigate("/dashboard")
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
      <label>
        <p className="mb-1 text-sm text-gray-700 font-medium">
          Email Address <sup className="text-pink-500">*</sup>
        </p>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="form-style w-full border px-3 py-2 rounded-md shadow-sm"
          placeholder="you@example.com"
        />
      </label>

      <label>
        <p className="mb-1 text-sm text-gray-700 font-medium">
          Password <sup className="text-pink-500">*</sup>
        </p>
        <input
          type="password"
          name="password"
          required
          value={formData.password}
          onChange={handleChange}
          className="form-style w-full border px-3 py-2 rounded-md shadow-sm"
          placeholder="••••••••"
        />
      </label>

      {error && <p className="text-red-600 text-sm text-center">{error}</p>}

      <button
        type="submit"
        className="mt-4 bg-yellow-400 hover:bg-yellow-300 py-2 rounded-md font-semibold text-black"
        disabled={loading}
      >
        {loading ? "Creating Account..." : "Sign Up"}
      </button>
    </form>
  )
}

export default SignupForm
