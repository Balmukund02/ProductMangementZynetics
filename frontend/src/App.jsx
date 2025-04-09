import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import DashBoard from "./pages/DashBoard"
import ProtectedRoute from "./pages/ProtectedRoute"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
 
  return (
    <div>
       <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashBoard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<div className="text-center p-4 text-xl">404 Not Found</div>} />
          </Routes>
        </main>

        <Footer />
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </Router>
  
    </div>
  )
   
}

export default App
