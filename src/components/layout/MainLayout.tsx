"use client";

import { ReactNode, useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Continuous background layer with parallax effect */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Soft gradient shapes with parallax effect */}
        <div 
          className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob"
          style={{ transform: `translateY(${-scrollY * 0.5}px)` }}
        />
        <div 
          className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-2000"
          style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-4000"
          style={{ transform: `translateY(${-scrollY * 0.7}px)` }}
        />
        <div 
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-6000"
          style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-8000"
          style={{ transform: `translateY(${-scrollY * 0.4}px)` }}
        />
      </div>
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/dashboard/logo.png"
              alt="AimVertical Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <div className="font-plus-jakarta text-2xl font-semibold text-gray-900 tracking-tight">
              AimVertical
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </header>
      <main className="relative z-10 pt-20">
        {children}
      </main>
      <footer className="bg-white text-gray-600 py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">AimVertical</h3>
              <p className="text-gray-500">Transform your social media strategy with data-driven insights.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-500 hover:text-gray-900 transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-gray-500 hover:text-gray-900 transition-colors">Pricing</a></li>
                <li><a href="#testimonials" className="text-gray-500 hover:text-gray-900 transition-colors">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Company</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-500 hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="#contact" className="text-gray-500 hover:text-gray-900 transition-colors">Contact</a></li>
                <li><a href="#blog" className="text-gray-500 hover:text-gray-900 transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} AimVertical. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 