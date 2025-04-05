import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Soft gradient shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-6000" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-8000" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Transform Your Social Media Strategy with Data-Driven Short-Form Content
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-gray-600 mb-8"
          >
            Stop guessing what works. Start creating viral content that converts with real-time TikTok, Instagram, and Facebook analytics.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8"
            >
              Start Free Trial
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-100 text-lg px-8"
            >
              Schedule Demo
            </Button>
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