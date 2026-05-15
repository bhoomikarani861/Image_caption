import { useState } from "react";
import { Eye, EyeOff, Image } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl text-white">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="bg-indigo-600 p-2 rounded-xl">
            <Image size={22} />
          </div>

          <h1 className="text-2xl font-bold">
            Caption<span className="text-indigo-400">AI</span>
          </h1>
        </div>

        <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>

        <p className="text-gray-400 mb-8">
          Login to continue your AI journey
        </p>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block mb-2 text-gray-300">Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-slate-900/60 border border-gray-700 px-4 py-3 rounded-2xl outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full bg-slate-900/60 border border-gray-700 px-4 py-3 rounded-2xl outline-none focus:border-indigo-500"
              />

              <button
                type="button"
                className="absolute right-4 top-4 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-400">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" className="text-indigo-400 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-2xl font-semibold transition">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-gray-700"></div>

          <span className="text-gray-400 text-sm">OR</span>

          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Social Buttons */}
        <div className="space-y-4">
          <button className="w-full border border-gray-700 py-3 rounded-2xl hover:border-indigo-500 transition">
            Continue with Google
          </button>

          <button className="w-full border border-gray-700 py-3 rounded-2xl hover:border-indigo-500 transition">
            Continue with GitHub
          </button>
        </div>

        <p className="text-center text-gray-400 mt-8">
          Don’t have an account?
          <span className="text-indigo-400 ml-1 cursor-pointer hover:underline">
            Signup
          </span>
        </p>
      </div>
    </div>
  );
}