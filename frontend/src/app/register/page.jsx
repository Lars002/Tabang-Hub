export default function Register() {
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
            Join Our Volunteer Community
          </h2>
          <p className="mt-2 text-gray-600">
            Sign up to start making a difference
          </p>
        </div>

        <form className="mt-10 space-y-6" action="#" method="POST">
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
                autoComplete="new-password"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none sm:text-sm"
                placeholder="Create a password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none sm:text-sm"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-sm font-bold text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already a member?{" "}
            <a href="./login" className="text-green-600 font-medium hover:text-green-500">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
