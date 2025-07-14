
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Target, 
  Heart, 
  Award,
  ArrowRight,
  Lightbulb,
  Rocket,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We constantly push boundaries and embrace emerging technologies to deliver cutting-edge solutions."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority. We build lasting partnerships through exceptional service and results."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Consistent delivery, robust solutions, and unwavering support you can count on, 24/7."
    },
    {
      icon: Rocket,
      title: "Growth Mindset",
      description: "We help businesses scale and evolve, adapting to market changes with agility and foresight."
    }
  ];

  const team = [
    {
      name: "Leadership Team",
      role: "Strategic Vision",
      description: "Experienced leaders driving innovation across multiple technology domains."
    },
    {
      name: "Development Team",
      role: "Technical Excellence",
      description: "Full-stack developers, AI specialists, and software architects."
    },
    {
      name: "Investment Team",
      role: "Financial Growth",
      description: "Venture capital experts and alternative investment specialists."
    },
    {
      name: "Marketing Team",
      role: "Creative Solutions",
      description: "Digital marketers, content creators, and SEO optimization experts."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-6xl font-bold mb-8">
              About <span className="text-gradient">canz</span>
            </h1>
            <p className="text-2xl text-readable max-w-4xl mx-auto leading-relaxed">
              We are a forward-thinking innovation hub that transforms ideas into reality 
              through cutting-edge technology and strategic expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-readable leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between innovative technology and practical business solutions, 
                  canz has evolved into a comprehensive innovation hub serving diverse industries.
                </p>
                <p>
                  Our journey began with a simple belief: that technology should empower businesses to reach their 
                  full potential. Today, we operate across five dynamic business areas, each contributing to our 
                  mission of driving digital transformation.
                </p>
                <p>
                  From adtech and fintech to investment and marketing, we combine deep industry expertise with 
                  cutting-edge technology to deliver solutions that make a real difference.
                </p>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="aspect-square bg-gradient-canz rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 rounded-3xl"></div>
                <div className="relative z-10 h-full flex flex-col justify-center text-white text-center">
                  <Award className="w-24 h-24 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold mb-4">Excellence</h3>
                  <p className="text-lg opacity-90">Recognized for innovation and quality across all our business areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-gradient-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Card className="bg-white/90 backdrop-blur-sm border-0 hover-glow transition-all duration-300 animate-fade-in">
              <CardContent className="p-12">
                <Target className="w-16 h-16 text-primary mb-8" />
                <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                <p className="text-lg text-readable leading-relaxed">
                  To empower businesses and individuals with innovative technology solutions that drive growth, 
                  efficiency, and sustainable success in an ever-evolving digital landscape.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/90 backdrop-blur-sm border-0 hover-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-12">
                <Heart className="w-16 h-16 text-primary mb-8" />
                <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                <p className="text-lg text-readable leading-relaxed">
                  To be the leading innovation hub that shapes the future of technology, creating meaningful 
                  impact across industries through pioneering solutions and strategic partnerships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl font-bold mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-readable max-w-3xl mx-auto leading-relaxed">
              The principles that guide our work and define our commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 hover-glow animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-canz rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-float">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-gradient transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-readable leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-24 px-6 bg-gradient-light-blue">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl font-bold mb-6">
              Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-readable max-w-3xl mx-auto leading-relaxed">
              Passionate professionals dedicated to delivering exceptional results across all our business areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 hover-glow animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-gradient transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-4">{member.role}</p>
                  <p className="text-readable leading-relaxed">{member.description}</p>
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
              Ready to Work with <span className="text-gradient">Us</span>?
            </h2>
            <p className="text-xl text-readable mb-12 leading-relaxed">
              Join the growing number of businesses that trust canz to drive their digital transformation 
              and accelerate their growth journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-canz hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 px-8 py-4"
              >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 hover:border-purple-400 hover:bg-gradient-secondary transition-all duration-300 px-8 py-4"
              >
                <Link to="/services/adtech">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
