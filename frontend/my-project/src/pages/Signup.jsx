import { useState } from "react";
import { Eye, EyeOff, Image } from "lucide-react";

export default function SignUp() {
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

        <h2 className="text-3xl font-bold mb-2">Create Account</h2>

        <p className="text-gray-400 mb-8">
          Signup and start generating captions
        </p>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block mb-2 text-gray-300">Full Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-slate-900/60 border border-gray-700 px-4 py-3 rounded-2xl outline-none focus:border-indigo-500"
            />
          </div>

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
                placeholder="Create password"
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

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-2xl font-semibold transition">
            Signup
          </button>
        </form>

        <p className="text-center text-gray-400 mt-8">
          Already have an account?
          <span className="text-indigo-400 ml-1 cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  );
}