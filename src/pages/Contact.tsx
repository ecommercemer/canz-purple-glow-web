
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin,
  MessageCircle,
  Send,
  Clock,
  Globe
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      value: "+98 912 194 1736",
      link: "https://wa.me/989121941736",
      description: "Available 24/7 for urgent inquiries"
    },
    {
      icon: MessageCircle,
      title: "Telegram",
      value: "+98 912 194 1736",
      link: "https://t.me/+989121941736",
      description: "Quick responses via Telegram"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@canz.com",
      link: "mailto:info@canz.com",
      description: "General inquiries and support"
    },
    {
      icon: Globe,
      title: "Website",
      value: "www.canz.com",
      link: "#",
      description: "Explore our full portfolio"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-6xl font-bold mb-8">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business? Let's discuss how canz can help you achieve your goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 hover-glow transition-all duration-300 animate-fade-in">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-semibold mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm font-semibold mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company" className="text-sm font-semibold mb-2 block">
                        Company
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="service" className="text-sm font-semibold mb-2 block">
                        Service Interest
                      </Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm"
                      >
                        <option value="">Select a service</option>
                        <option value="adtech">Adtech</option>
                        <option value="digital-development">Digital Product Development</option>
                        <option value="fintech">Fintech</option>
                        <option value="investment">Investment</option>
                        <option value="marketing">Marketing & Content Studio</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-canz hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We're here to help you succeed. Reach out through any of these channels 
                  and let's start building something amazing together.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={info.title}
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-0"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-canz rounded-lg flex items-center justify-center flex-shrink-0 group-hover:animate-float">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                          <a 
                            href={info.link}
                            className="text-primary font-medium hover:text-purple-600 transition-colors duration-200"
                            target={info.link.startsWith('http') ? '_blank' : '_self'}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          >
                            {info.value}
                          </a>
                          <p className="text-sm text-gray-600 mt-1">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Business Hours */}
              <Card className="bg-gradient-secondary border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-canz rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Emergency support only</p>
                        <p className="text-primary font-medium mt-2">24/7 support available for enterprise clients</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Contact Buttons */}
      <section className="py-16 px-6 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Need <span className="text-gradient">Immediate</span> Assistance?
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            For urgent inquiries or quick questions, reach us directly through these instant channels.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 hover:shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 px-8 py-4"
            >
              <a href="https://wa.me/989121941736" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp Chat
              </a>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              className="bg-blue-500 hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 px-8 py-4"
            >
              <a href="https://t.me/+989121941736" target="_blank" rel="noopener noreferrer">
                <Send className="mr-2 w-5 h-5" />
                Telegram
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-300 hover:border-purple-400 hover:bg-gradient-secondary transition-all duration-300 px-8 py-4"
            >
              <a href="tel:+989121941736">
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
