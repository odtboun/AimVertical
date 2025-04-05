import { Card } from "@/components/ui/card";
import { 
  TrendingUp, 
  LineChart, 
  Target, 
  Zap,
  Search,
  BarChart3
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Trend Analysis",
    description: "Track top TikTok keywords, sounds, and content formats in real-time across all regions.",
    color: "text-blue-600"
  },
  {
    icon: Search,
    title: "Content Discovery",
    description: "Find high-performing videos in your industry with proven engagement and conversion rates.",
    color: "text-purple-600"
  },
  {
    icon: Target,
    title: "Marketing Strategy",
    description: "Get a detailed analysis of your product and create data-driven marketing plans.",
    color: "text-green-600"
  },
  {
    icon: LineChart,
    title: "Performance Tracking",
    description: "Monitor your content performance with detailed analytics and insights.",
    color: "text-orange-600"
  },
  {
    icon: Zap,
    title: "Best Practices",
    description: "Access platform-specific best practices and proven content strategies.",
    color: "text-pink-600"
  },
  {
    icon: BarChart3,
    title: "ROI Analytics",
    description: "Track and optimize your marketing spend with full ROI transparency.",
    color: "text-cyan-600"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 relative overflow-hidden bg-gray-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Soft gradient shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Everything You Need for Short-Form Success
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Powerful tools and insights to help you create viral content that converts
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index}>
                <Card className="p-6 bg-white shadow-lg border border-gray-100 hover:border-gray-200 transition-colors">
                  <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4 ${feature.color}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Example Dashboard Preview */}
        <div 
          className="mt-20 text-center"
        >
          <div className="bg-white shadow-lg rounded-xl p-8 relative overflow-hidden border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 mix-blend-multiply" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-Time Analytics Dashboard</h3>
            <p className="text-gray-600 mb-8">Track performance metrics, engagement rates, and content analytics all in one place</p>
            <img 
              src="/images/dashboard-preview.png" 
              alt="Analytics Dashboard" 
              className="rounded-lg shadow-xl border border-gray-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 