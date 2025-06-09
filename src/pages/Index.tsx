
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Smartphone, 
  DollarSign, 
  TrendingUp, 
  Megaphone,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Adtech",
    description: "Revolutionary IOT and AR/VR-based advertising solutions with smart digital signage technology.",
    icon: Zap,
    features: [
      "IOT-enabled advertising platforms",
      "AR/VR immersive ad experiences",
      "Smart digital signage solutions",
      "Real-time analytics & optimization"
    ]
  },
  {
    title: "Digital Product Development",
    description: "AI-powered automations, cutting-edge web & app development, and innovative software solutions.",
    icon: Smartphone,
    features: [
      "AI-powered automation systems",
      "Custom web & mobile applications",
      "Multi-sided platform development",
      "Scalable software architecture"
    ]
  },
  {
    title: "Fintech",
    description: "Advanced forex and cryptocurrency trading tools with algorithmic trading and Web3 technologies.",
    icon: DollarSign,
    features: [
      "Crypto & forex trading platforms",
      "Algorithmic trading systems",
      "Financial market insurance",
      "Tokenization & Web3 solutions"
    ]
  },
  {
    title: "Investment",
    description: "Strategic angel investments, equity-based venture capital, and comprehensive startup evaluation.",
    icon: TrendingUp,
    features: [
      "Angel investment opportunities",
      "Venture capital funding",
      "Startup evaluation & valuation",
      "Alternative investment strategies"
    ]
  },
  {
    title: "Marketing & Content Studio",
    description: "Creative motion graphics, AI-powered SEO optimization, and innovative guerrilla marketing strategies.",
    icon: Megaphone,
    features: [
      "Motion graphics & animations",
      "AI-powered SEO agents",
      "Digital marketing campaigns",
      "Guerrilla marketing strategies"
    ]
  }
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Overview */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">Our Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions across five innovative business areas, 
              each designed to drive your success in the digital economy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 200}
              />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-canz hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 px-8 py-4"
            >
              <Link to="/services/adtech">
                Explore All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-gradient-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-8">
                Why Choose <span className="text-gradient">canz</span>?
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                We combine innovation with execution, delivering cutting-edge solutions 
                that transform businesses and drive sustainable growth.
              </p>
              
              <div className="space-y-6">
                {[
                  "Expert team across multiple technology domains",
                  "Proven track record with 50+ successful projects",
                  "End-to-end solutions from concept to deployment",
                  "24/7 support and continuous optimization",
                  "Cutting-edge AI and emerging technology integration"
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-4 animate-fade-in"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-gradient-canz hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
                >
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="aspect-square bg-gradient-canz rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 rounded-3xl"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl font-bold mb-4">50+</div>
                    <div className="text-xl">Successful Projects</div>
                    <div className="text-sm opacity-80 mt-2">Across all business areas</div>
                  </div>
                </div>
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">
              Ready to Transform Your <span className="text-gradient">Business</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Let's discuss how canz can help you achieve your goals with our innovative solutions 
              and expert team. Get in touch today for a free consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-canz hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 px-8 py-4"
              >
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 hover:border-purple-400 hover:bg-gradient-secondary transition-all duration-300 px-8 py-4"
              >
                <a href="https://wa.me/989121941736" target="_blank" rel="noopener noreferrer">
                  WhatsApp Chat
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
