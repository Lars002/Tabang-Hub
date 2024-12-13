export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-teal-400 to-blue-500">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-3xl">
        <div className="text-center">
          <img
            className="mx-auto h-24 w-24 rounded-full"
            src="/images/logo.png"
            alt="TabangHub Logo"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-800">
            Welcome Back, Volunteer!
          </h2>
          <p className="mt-2 text-gray-600">
            Please log in to access your volunteer account
          </p>
        </div>

        <form className="mt-10 space-y-6" action="/volunteer/dashboard" method="POST">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none sm:text-sm"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none sm:text-sm"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="font-medium text-green-600 hover:text-green-500">
                  Forgot password?
                </a>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-sm font-bold text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="./register" className="text-green-600 font-medium hover:text-green-500">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
