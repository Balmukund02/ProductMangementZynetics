import SignupForm from "../components/SignupForm"

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Create Account</h1>
        <SignupForm />
      </div>
    </div>
  )
}

export default SignupPage
