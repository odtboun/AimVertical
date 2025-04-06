import Image from 'next/image';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center py-12">
          <h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            The Follower Grind Is Over.{" "}
            <br />
            Go Viral and Convert With Good Vertical Content.
          </h1>
          <p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Discover what content performs best in your industry, analyze successful strategies, and create engaging posts that drive real results.
          </p>
          <div className="flex items-center justify-center gap-12 mb-12">
            <div className="flex items-center gap-8">
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 opacity-60 hover:opacity-100 transition-opacity fill-current text-gray-900"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.88 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .55.04.81.12v-3.5a6.37 6.37 0 0 0-.81-.05C6.01 9.36 3 12.37 3 16.05s3.01 6.69 6.69 6.69 6.69-3.01 6.69-6.69V7.84c1.09.69 2.39 1.1 3.77 1.1v-3.5c-.1 0-.19.75-.56 1.25Z" />
              </svg>
              <Instagram 
                className="w-7 h-7 opacity-60 hover:opacity-100 transition-opacity text-gray-900" 
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Get Started
            </button>
            <div className="flex items-center gap-8">
              <Youtube 
                className="w-7 h-7 opacity-60 hover:opacity-100 transition-opacity text-gray-900"
              />
              <Facebook 
                className="w-7 h-7 opacity-60 hover:opacity-100 transition-opacity text-gray-900"
              />
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative w-full max-w-6xl mx-auto mt-8 px-4 md:px-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-[16/9] relative">
                <Image
                  src="/images/dashboard/tiktoks.png"
                  alt="TikTok Content Examples"
                  fill
                  className="object-contain bg-white"
                  priority
                />
              </div>
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