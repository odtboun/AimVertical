"use client";

import { Check } from 'lucide-react';
import { useState } from 'react';

interface PricingTier {
  name: string;
  description: string;
  price: {
    monthly: number;
    annual: number;
  };
  features: string[];
  highlight?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "AimVertical Engage",
    description: "All you need to grow organically",
    price: {
      monthly: 20,
      annual: 14
    },
    features: [
      "Trend, sound, and format insights",
      "Proven examples and case studies",
      "Basic analytics dashboard",
      "Regular data updates"
    ]
  },
  {
    name: "AimVertical Convert",
    description: "Boost your organic growth with the right ads",
    price: {
      monthly: 129,
      annual: 99
    },
    features: [
      "Top TikTok Keywords, Sounds, Products analysis",
      "Content Format insights for any region",
      "Click-Through & Conversion Rate metrics",
      "High-performing video examples across platforms",
      "Full website/product analysis",
      "Step-by-step marketing plan",
      "Platform-specific best practices",
      "Weekly data updates"
    ],
    highlight: true
  },
  {
    name: "AimVertical Viral",
    description: "Dominate your product vertical",
    price: {
      monthly: 1000,
      annual: 800
    },
    features: [
      "All Convert features included",
      "Custom data sources",
      "One-on-one video analysis",
      "Personalized feedback",
      "Team collaboration features",
      "Priority support"
    ]
  },
  {
    name: "AimVertical Enterprise",
    description: "Replace entire marketing agencies",
    price: {
      monthly: 0,
      annual: 0
    },
    features: [
      "All Viral features included",
      "Advanced collaboration tools",
      "Dedicated account manager",
      "Custom integration support",
      "Flexible pricing options",
      "Enterprise-grade security"
    ]
  }
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  const calculateAnnualSavings = (monthly: number, annual: number) => {
    return ((monthly * 12) - (annual * 12)).toFixed(0);
  };

  return (
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Growth Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Scale your social media presence with our powerful analytics and insights
          </p>

          {/* Billing Switch */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              style={{ backgroundColor: isAnnual ? '#3B82F6' : '#E5E7EB' }}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Annual</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`relative ${tier.highlight ? 'transform -translate-y-4' : ''}`}>
              <div className={`
                h-full rounded-2xl p-8 bg-white shadow-lg border
                ${tier.highlight ? 'border-blue-200 shadow-blue-100' : 'border-gray-100'}
                hover:border-blue-300 transition-all duration-300
              `}>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 h-12">{tier.description}</p>
                </div>

                <div className="mb-8">
                  {tier.price.monthly === 0 ? (
                    <div className="text-gray-900">
                      <span className="text-2xl font-bold">Contact Us</span>
                    </div>
                  ) : (
                    <>
                      <div className="text-gray-900 flex items-baseline gap-2">
                        <span className="text-4xl font-bold">
                          ${isAnnual ? tier.price.annual : tier.price.monthly}
                        </span>
                        <span className="text-gray-600">/mo</span>
                        {isAnnual && tier.price.monthly > tier.price.annual && (
                          <span className="text-lg text-gray-500 line-through">
                            ${tier.price.monthly}
                          </span>
                        )}
                      </div>
                      {isAnnual && tier.price.monthly > tier.price.annual && (
                        <div className="text-sm text-green-600 mt-1">
                          Save ${calculateAnnualSavings(tier.price.monthly, tier.price.annual)} per year
                        </div>
                      )}
                    </>
                  )}
                </div>

                <ul className="space-y-4 mb-8 min-h-[320px]">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`
                  w-full py-3 px-6 rounded-lg font-semibold transition-colors
                  ${tier.highlight 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}
                `}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 