
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Coins,
  ArrowRight,
  CheckCircle,
  Bitcoin,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";

const Fintech = () => {
  const features = [
    {
      icon: Bitcoin,
      title: "Crypto & Forex Trading",
      description: "Advanced trading platforms with real-time market data, automated trading algorithms, and comprehensive portfolio management tools."
    },
    {
      icon: TrendingUp,
      title: "Algorithmic Trading",
      description: "AI-powered trading algorithms that analyze market patterns, execute trades automatically, and optimize investment strategies."
    },
    {
      icon: Shield,
      title: "Financial Insurance",
      description: "Comprehensive financial market insurance solutions to protect investments and minimize risks in volatile markets."
    },
    {
      icon: Coins,
      title: "Web3 & Tokenization",
      description: "Cutting-edge blockchain solutions including tokenization services, DeFi protocols, and Web3 application development."
    }
  ];

  const benefits = [
    "24/7 automated trading with AI-powered algorithms",
    "Real-time market analysis and risk assessment",
    "Secure blockchain-based transaction processing",
    "Multi-currency support and global market access",
    "Advanced portfolio optimization and management",
    "Comprehensive insurance and risk mitigation"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-canz rounded-3xl mb-8">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl font-bold mb-8">
              <span className="text-gradient">Fintech</span> Solutions
            </h1>
            <p className="text-2xl text-readable max-w-4xl mx-auto leading-relaxed">
              Advanced forex and cryptocurrency trading tools with algorithmic trading systems 
              and comprehensive Web3 technologies for the modern financial landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-8">Next-Generation Financial Technology</h2>
              <p className="text-lg text-readable mb-8 leading-relaxed">
                Our fintech solutions combine traditional financial expertise with cutting-edge blockchain 
                technology to deliver secure, efficient, and profitable trading and investment platforms.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-readable-secondary">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-canz hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact">
                  Explore Trading Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            <div className="relative animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="aspect-square bg-gradient-canz rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 rounded-3xl"></div>
                <div className="relative z-10 h-full flex items-center justify-center text-white text-center">
                  <div>
                    <BarChart3 className="w-24 h-24 mx-auto mb-6" />
                    <h3 className="text-3xl font-bold mb-4">AI Trading</h3>
                    <p className="text-lg opacity-90">Advanced algorithms for optimal trading performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-24 px-6 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl font-bold mb-6">
              Financial <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-readable max-w-3xl mx-auto leading-relaxed">
              Comprehensive fintech solutions for modern trading and investment needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 hover-glow animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-canz rounded-2xl flex items-center justify-center mb-6 group-hover:animate-float">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-readable leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">
              Ready to Enter the <span className="text-gradient">Future of Finance</span>?
            </h2>
            <p className="text-xl text-readable mb-12 leading-relaxed">
              Join the financial revolution with our advanced trading tools and blockchain technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-canz hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 px-8 py-4"
              >
                <Link to="/contact">
                  Start Trading
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
                  WhatsApp Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Fintech;
