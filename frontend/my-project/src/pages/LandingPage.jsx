import { Sparkles, Image } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-black text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 p-2 rounded-xl">
            <Image size={22} />
          </div>

          <h1 className="text-2xl font-bold">
            Caption<span className="text-indigo-400">AI</span>
          </h1>
        </div>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <button className="bg-indigo-600 px-5 py-2 rounded-xl hover:bg-indigo-700 transition">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="grid lg:grid-cols-2 gap-12 items-center px-8 lg:px-20 py-20">
        {/* Left Side */}
        <div>
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-500/30 px-4 py-2 rounded-full text-indigo-300 mb-6">
            <Sparkles size={18} />
            AI Powered Image Captioning
          </div>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            Generate Smart
            <span className="text-indigo-400"> Captions </span>
            For Any Image
          </h1>

          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            Upload images and instantly generate AI-powered captions using deep
            learning and computer vision technology.
          </p>

          <div className="flex gap-5 mt-8">
            <button className="bg-indigo-600 hover:bg-indigo-700 px-7 py-3 rounded-2xl font-semibold transition">
              Try Now
            </button>

            <button className="border border-gray-600 hover:border-indigo-400 px-7 py-3 rounded-2xl font-semibold transition">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-12">
            <div>
              <h2 className="text-3xl font-bold text-indigo-400">10K+</h2>
              <p className="text-gray-400">Images Captioned</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-indigo-400">98%</h2>
              <p className="text-gray-400">Accuracy</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-indigo-400">24/7</h2>
              <p className="text-gray-400">Support</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
            alt="AI"
            className="rounded-3xl shadow-2xl w-full max-w-lg"
          />
        </div>
      </section>
    </div>
  );
}