import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center py-12">
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
              Get Started
            </button>
          </div>

          {/* Dashboard Preview */}
          <div className="relative w-full max-w-6xl mx-auto mt-8 px-4 md:px-8">
            <div className="aspect-[16/9] relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/dashboard/tiktoks.png"
                alt="TikTok Content Examples"
                fill
                className="object-contain bg-white"
                priority
              />
            </div>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-xl" />
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl font-bold text-gray-900">98.2B+</div>
              <div className="text-gray-600">Total Views Analyzed</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl font-bold text-gray-900">35.2%</div>
              <div className="text-gray-600">Avg. Engagement Rate</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl font-bold text-gray-900">245K+</div>
              <div className="text-gray-600">Active Creators</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 