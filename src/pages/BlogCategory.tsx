
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";

const BlogCategory = () => {
  const { category } = useParams();
  
  // Mock data - in a real app, this would filter posts by category from a database
  const categoryPosts = {
    fintech: [
      {
        id: 1,
        title: "The Future of AI in Financial Trading: Algorithmic Revolution",
        excerpt: "Explore how artificial intelligence is transforming the financial trading landscape with advanced algorithms.",
        readTime: "8 min read",
        date: "Dec 15, 2024",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop"
      },
      {
        id: 6,
        title: "Blockchain Technology: Beyond Cryptocurrency",
        excerpt: "Discover the revolutionary applications of blockchain technology in various industries beyond digital currency.",
        readTime: "7 min read",
        date: "Dec 2, 2024",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop"
      }
    ],
    technology: [
      {
        id: 2,
        title: "Building Scalable Web Applications with Modern Frameworks",
        excerpt: "A comprehensive guide to creating robust, scalable web applications using the latest development frameworks.",
        readTime: "12 min read",
        date: "Dec 12, 2024",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
      },
      {
        id: 7,
        title: "Motion Graphics in Modern Web Design",
        excerpt: "Learn how motion graphics are enhancing user experiences in contemporary web design.",
        readTime: "5 min read",
        date: "Nov 28, 2024",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop"
      }
    ],
    marketing: [
      {
        id: 4,
        title: "Digital Marketing Trends for 2025: What to Expect",
        excerpt: "Stay ahead of the curve with the latest digital marketing trends and strategies for the upcoming year.",
        readTime: "6 min read",
        date: "Dec 8, 2024",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
      }
    ],
    investment: [
      {
        id: 5,
        title: "Venture Capital Landscape: Investment Opportunities in Tech",
        excerpt: "Analyze current investment opportunities and trends in the venture capital world.",
        readTime: "9 min read",
        date: "Dec 5, 2024",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop"
      }
    ],
    adtech: [
      {
        id: 3,
        title: "AR/VR in Advertising: Creating Immersive Brand Experiences",
        excerpt: "Discover how augmented and virtual reality technologies are revolutionizing advertising.",
        readTime: "10 min read",
        date: "Dec 10, 2024",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop"
      }
    ]
  };

  const posts = categoryPosts[category as keyof typeof categoryPosts] || [];
  const categoryName = category?.charAt(0).toUpperCase() + category?.slice(1);

  return (
    <Layout>
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>

          {/* Category header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-gradient">{categoryName}</span> Articles
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our latest insights and expertise in {categoryName?.toLowerCase()}
            </p>
          </div>

          {/* Posts grid */}
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Link key={post.id} to={`/blog/${post.id}`}>
                  <Card 
                    className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card/90 backdrop-blur-sm border-0 hover-glow overflow-hidden animate-fade-in cursor-pointer"
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
                          {categoryName}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </div>
                        <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80">
                          Read More
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold mb-4">No posts found in this category</h3>
              <p className="text-muted-foreground mb-8">Check back later for new content in {categoryName?.toLowerCase()}.</p>
              <Button asChild>
                <Link to="/blog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogCategory;
