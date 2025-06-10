
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  ArrowRight,
  TrendingUp,
  Smartphone,
  DollarSign,
  Megaphone,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const categories = [
    { name: "Fintech", icon: DollarSign, count: 12, color: "bg-green-100 text-green-800" },
    { name: "Technology", icon: Smartphone, count: 18, color: "bg-blue-100 text-blue-800" },
    { name: "Marketing", icon: Megaphone, count: 15, color: "bg-purple-100 text-purple-800" },
    { name: "Investment", icon: TrendingUp, count: 9, color: "bg-orange-100 text-orange-800" },
    { name: "Adtech", icon: Zap, count: 7, color: "bg-pink-100 text-pink-800" }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "The Future of AI in Financial Trading: Algorithmic Revolution",
      excerpt: "Explore how artificial intelligence is transforming the financial trading landscape with advanced algorithms and machine learning models.",
      category: "Fintech",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
      author: "canz Team"
    },
    {
      id: 2,
      title: "Building Scalable Web Applications with Modern Frameworks",
      excerpt: "A comprehensive guide to creating robust, scalable web applications using the latest development frameworks and best practices.",
      category: "Technology",
      readTime: "12 min read",
      date: "Dec 12, 2024",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      author: "canz Team"
    },
    {
      id: 3,
      title: "AR/VR in Advertising: Creating Immersive Brand Experiences",
      excerpt: "Discover how augmented and virtual reality technologies are revolutionizing advertising and creating unprecedented brand engagement.",
      category: "Adtech",
      readTime: "10 min read",
      date: "Dec 10, 2024",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop",
      author: "canz Team"
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: "Digital Marketing Trends for 2025: What to Expect",
      category: "Marketing",
      readTime: "6 min read",
      date: "Dec 8, 2024"
    },
    {
      id: 5,
      title: "Venture Capital Landscape: Investment Opportunities in Tech",
      category: "Investment",
      readTime: "9 min read",
      date: "Dec 5, 2024"
    },
    {
      id: 6,
      title: "Blockchain Technology: Beyond Cryptocurrency",
      category: "Fintech",
      readTime: "7 min read",
      date: "Dec 2, 2024"
    },
    {
      id: 7,
      title: "Motion Graphics in Modern Web Design",
      category: "Technology",
      readTime: "5 min read",
      date: "Nov 28, 2024"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl font-bold mb-8">
              <span className="text-gradient">canz</span> Blog
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Insights, trends, and expert perspectives on fintech, technology, marketing, 
              investment, and innovation from the canz team.
            </p>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category, index) => (
              <Badge
                key={category.name}
                variant="secondary"
                className={`${category.color} px-6 py-3 text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Posts */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured <span className="text-gradient">Articles</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <Card 
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 hover-glow overflow-hidden animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="bg-gradient-canz-light text-primary">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <Button variant="ghost" size="sm" className="p-0 h-auto">
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Recent Posts */}
      <section className="py-16 px-6 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold mb-12">
                Recent <span className="text-gradient">Posts</span>
              </h2>
              
              <div className="space-y-8">
                {recentPosts.map((post, index) => (
                  <Link key={post.id} to={`/blog/${post.id}`}>
                    <Card 
                      className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur-sm border-0 animate-fade-in cursor-pointer"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-3">
                              <Badge variant="secondary" className="bg-gradient-canz-light text-primary">
                                {post.category}
                              </Badge>
                              <div className="flex items-center text-sm text-gray-500">
                                <Clock className="w-4 h-4 mr-1" />
                                {post.readTime}
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="w-4 h-4 mr-1" />
                                {post.date}
                              </div>
                            </div>
                            
                            <h3 className="text-xl font-bold group-hover:text-gradient transition-colors duration-300 mb-2">
                              {post.title}
                            </h3>
                          </div>
                          
                          <Button variant="ghost" size="sm" className="ml-4">
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Button 
                  size="lg" 
                  className="bg-gradient-canz hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
                >
                  Load More Articles
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              <Card className="bg-white/90 backdrop-blur-sm border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Subscribe to Our Newsletter</h3>
                  <p className="text-gray-600 mb-6">
                    Get the latest insights and updates delivered directly to your inbox.
                  </p>
                  <div className="space-y-4">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 border border-input rounded-lg"
                    />
                    <Button className="w-full bg-gradient-canz">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/90 backdrop-blur-sm border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Popular Categories</h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <div key={category.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-gradient-secondary transition-colors cursor-pointer">
                        <div className="flex items-center">
                          <category.icon className="w-5 h-5 mr-3 text-primary" />
                          <span className="font-medium">{category.name}</span>
                        </div>
                        <Badge variant="secondary">{category.count}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">
              Want to Contribute or Learn More?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Join our community of innovators and thought leaders. Share your insights or get expert advice on your next project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-canz hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 px-8 py-4"
              >
                <Link to="/contact">
                  Get in Touch
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

export default Blog;
