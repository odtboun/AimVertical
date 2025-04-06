import { Card } from "@/components/ui/card";
import { Search, Lightbulb, BarChart } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover Top Content",
    description: "Find high-performing videos in your industry with proven engagement and conversion rates.",
    color: "text-blue-600"
  },
  {
    icon: Lightbulb,
    title: "Analyze & Learn",
    description: "Understand what makes content successful with detailed analytics and insights.",
    color: "text-purple-600"
  },
  {
    icon: BarChart,
    title: "Create & Optimize",
    description: "Apply best practices to create content that resonates with your audience.",
    color: "text-green-600"
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            How AimVertical Works
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            A simple three-step process to transform your social media strategy
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index}>
                <Card className="p-6 bg-white shadow-lg border border-gray-100 hover:border-gray-200 transition-colors">
                  <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4 ${step.color}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </Card>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div 
          className="mt-16 text-center"
        >
          <div className="bg-white shadow-lg rounded-xl p-8 relative overflow-hidden border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 mix-blend-multiply" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Social Media Strategy?</h3>
            <p className="text-gray-600 mb-8">Join thousands of creators who are already using AimVertical to create viral content</p>
            <a href="#pricing" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 