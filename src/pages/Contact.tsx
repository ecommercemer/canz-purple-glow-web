
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic will be added when backend is connected
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
              Ready to transform your business? Let's discuss how canz can help you achieve 
              your goals with our innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 hover-glow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-canz rounded-2xl flex items-center justify-center mb-6 group-hover:animate-float">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-colors duration-300">
                    Email Us
                  </h3>
                  <p className="text-gray-600 mb-4">Send us a message anytime</p>
                  <a 
                    href="mailto:Amir.Mirmehrkar.de@gmail.com"
                    className="text-primary hover:text-gradient transition-colors duration-300 font-semibold"
                  >
                    Amir.Mirmehrkar.de@gmail.com
                  </a>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 hover-glow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-canz rounded-2xl flex items-center justify-center mb-6 group-hover:animate-float">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-colors duration-300">
                    Call or Message
                  </h3>
                  <p className="text-gray-600 mb-4">WhatsApp & Telegram available</p>
                  <p className="text-primary font-semibold">+98 912 194 1736</p>
                  <div className="flex gap-4 mt-4">
                    <Button 
                      asChild 
                      size="sm"
                      className="bg-green-500 hover:bg-green-600 transition-colors duration-300"
                    >
                      <a href="https://wa.me/989121941736" target="_blank" rel="noopener noreferrer">
                        WhatsApp
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      size="sm"
                      className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
                    >
                      <a href="https://t.me/989121941736" target="_blank" rel="noopener noreferrer">
                        Telegram
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 hover-glow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-canz rounded-2xl flex items-center justify-center mb-6 group-hover:animate-float">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-colors duration-300">
                    Location
                  </h3>
                  <p className="text-gray-600">
                    Global operations with<br />
                    international reach
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Card className="bg-white/90 backdrop-blur-sm border-0 hover-glow">
                <CardContent className="p-12">
                  <h2 className="text-3xl font-bold mb-8 text-gradient">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300 resize-none"
                        placeholder="Tell us about your project and requirements..."
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-canz hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 py-4"
                    >
                      <Send className="mr-2 w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Live Chat Section */}
      <section className="py-16 px-6 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">
              Need <span className="text-gradient">Immediate</span> Assistance?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Connect with us instantly through WhatsApp or Telegram for quick responses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-green-500 hover:bg-green-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-8 py-4"
              >
                <a href="https://wa.me/989121941736" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              
              <Button 
                asChild 
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-8 py-4"
              >
                <a href="https://t.me/989121941736" target="_blank" rel="noopener noreferrer">
                  Message on Telegram
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
