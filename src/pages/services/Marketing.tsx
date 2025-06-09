
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Megaphone, 
  Video, 
  Search, 
  Zap,
  ArrowRight,
  CheckCircle,
  Camera,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";

const Marketing = () => {
  const features = [
    {
      icon: Video,
      title: "Motion Graphics & Animation",
      description: "Creative motion graphics, video animations, and visual storytelling that captivate audiences and enhance brand messaging."
    },
    {
      icon: Search,
      title: "AI-Powered SEO",
      description: "Advanced SEO optimization agents powered by artificial intelligence for maximum search visibility and organic traffic growth."
    },
    {
      icon: Target,
      title: "Digital Marketing Campaigns",
      description: "Comprehensive digital marketing strategies including social media, content marketing, and performance advertising campaigns."
    },
    {
      icon: Zap,
      title: "Guerrilla Marketing",
      description: "Innovative guerrilla marketing strategies that create memorable brand experiences and generate viral word-of-mouth marketing."
    }
  ];

  const benefits = [
    "Increase brand visibility by 400% with creative campaigns",
    "AI-powered content optimization for maximum engagement",
    "Multi-channel marketing approach for broader reach",
    "Data-driven insights and performance optimization",
    "Creative storytelling that resonates with audiences",
    "Measurable ROI tracking and campaign analytics"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-canz rounded-3xl mb-8">
              <Megaphone className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl font-bold mb-8">
              <span className="text-gradient">Marketing</span> & Content Studio
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Creative motion graphics, AI-powered SEO optimization, and innovative guerrilla marketing 
              strategies that amplify your brand and drive meaningful engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-8">Creative Marketing Excellence</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our marketing and content studio combines artistic creativity with data-driven strategies 
                to create campaigns that not only look amazing but deliver exceptional results for your business.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-canz hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact">
                  Launch Your Campaign
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            <div className="relative animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="aspect-square bg-gradient-canz rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 rounded-3xl"></div>
                <div className="relative z-10 h-full flex items-center justify-center text-white text-center">
                  <div>
                    <Camera className="w-24 h-24 mx-auto mb-6" />
                    <h3 className="text-3xl font-bold mb-4">Creative Studio</h3>
                    <p className="text-lg opacity-90">Professional content creation and brand storytelling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-24 px-6 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl font-bold mb-6">
              Marketing <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive marketing and content creation services for modern brands.
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
                  <p className="text-gray-600 leading-relaxed">
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
              Ready to Amplify Your <span className="text-gradient">Brand</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Let's create marketing campaigns that capture attention, engage audiences, and drive measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-canz hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 px-8 py-4"
              >
                <Link to="/contact">
                  Start Your Campaign
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

export default Marketing;
