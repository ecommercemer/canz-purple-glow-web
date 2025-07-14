
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-full animate-gradient-shift">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-pink/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-light-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dark-purple/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-monochrome backdrop-blur-sm border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 mr-2 text-light-on-dark" />
            <span className="text-sm font-medium text-light-on-dark">Innovation Hub for Tomorrow</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="text-gradient">canz</span>
            <br />
            <span className="text-dark-blue">transforms ideas</span>
            <br />
            <span className="text-gradient-light text-4xl lg:text-5xl">into reality</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-dark-blue mb-12 max-w-4xl mx-auto leading-relaxed">
            From cutting-edge adtech and fintech solutions to innovative digital products and marketing strategies, 
            we're your partner in building the future of technology.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-warm text-light-gray hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              <Link to="/services/adtech">
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 border-dark-blue hover:bg-gradient-cool hover:text-light-on-dark transition-all duration-300 px-8 py-4 text-lg text-dark-blue"
            >
              <Link to="/about">
                Learn About Us
              </Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-dark-blue">Projects Delivered</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">5</div>
              <div className="text-dark-blue">Business Areas</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-dark-blue">Support Available</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-8 h-8 bg-dark-purple rounded-lg animate-float opacity-60"></div>
      <div className="absolute top-3/4 right-10 w-6 h-6 bg-light-blue rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-pink rounded-full animate-float opacity-50" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
}
