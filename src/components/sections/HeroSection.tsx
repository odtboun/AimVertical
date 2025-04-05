import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Transform Your Social Media Strategy with AI-Powered Content Optimization
          </h1>
          <p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Discover what content performs best in your industry, analyze successful strategies, and create engaging posts that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Start Free Trial
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-8 rounded-lg transition-colors">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-blue-600">500K+</div>
              <div className="text-gray-600">Videos Analyzed</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-purple-600">45%</div>
              <div className="text-gray-600">Avg. Engagement Increase</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-green-600">10K+</div>
              <div className="text-gray-600">Active Creators</div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10" />
          <img 
            src="/images/dashboard-preview.png" 
            alt="AimVertical Dashboard" 
            className="w-full rounded-t-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
} 