
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  
  // Mock blog post data - in a real app, this would fetch from a database
  const posts = {
    "1": {
      id: 1,
      title: "The Future of AI in Financial Trading: Algorithmic Revolution",
      content: `
        <div class="prose prose-lg max-w-none">
          <p>Artificial intelligence is fundamentally transforming the financial trading landscape, introducing unprecedented levels of sophistication in algorithmic decision-making. This revolution extends far beyond simple automated trading to encompass complex machine learning models that can process vast amounts of market data in real-time.</p>
          
          <h2>The Evolution of Trading Technology</h2>
          <p>Traditional trading methods relied heavily on human intuition and basic technical analysis. Today's AI-powered systems can analyze thousands of variables simultaneously, including market sentiment, news events, social media trends, and economic indicators to make informed trading decisions.</p>
          
          <h2>Machine Learning in Market Analysis</h2>
          <p>Modern trading algorithms employ various machine learning techniques:</p>
          <ul>
            <li><strong>Neural Networks:</strong> Deep learning models that can identify complex patterns in market data</li>
            <li><strong>Natural Language Processing:</strong> Analyzing news and social media for sentiment analysis</li>
            <li><strong>Reinforcement Learning:</strong> Algorithms that learn from market feedback to improve performance</li>
          </ul>
          
          <h2>Risk Management and Compliance</h2>
          <p>AI systems excel at risk assessment, continuously monitoring portfolios and adjusting positions based on real-time risk calculations. This helps prevent catastrophic losses and ensures compliance with regulatory requirements.</p>
          
          <h2>The Future Outlook</h2>
          <p>As AI technology continues to advance, we can expect even more sophisticated trading systems that combine multiple AI approaches for enhanced performance. The integration of quantum computing and advanced neural networks promises to unlock new possibilities in financial markets.</p>
        </div>
      `,
      category: "Fintech",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
      author: "canz Team"
    },
    "2": {
      id: 2,
      title: "Building Scalable Web Applications with Modern Frameworks",
      content: `
        <div class="prose prose-lg max-w-none">
          <p>Creating scalable web applications requires careful consideration of architecture, technology choices, and development practices. Modern frameworks provide powerful tools for building applications that can grow with your business needs.</p>
          
          <h2>Framework Selection Criteria</h2>
          <p>When choosing a framework for your web application, consider these key factors:</p>
          <ul>
            <li>Performance requirements and optimization capabilities</li>
            <li>Developer experience and learning curve</li>
            <li>Community support and ecosystem maturity</li>
            <li>Scalability features and deployment options</li>
          </ul>
          
          <h2>Architecture Best Practices</h2>
          <p>Modern web applications benefit from well-designed architectures that separate concerns and enable independent scaling of different components. Microservices, serverless functions, and edge computing all play crucial roles in scalable application design.</p>
          
          <h2>Performance Optimization</h2>
          <p>Optimizing application performance involves multiple strategies including code splitting, lazy loading, caching strategies, and efficient data fetching patterns. These techniques ensure your application remains responsive as it scales.</p>
        </div>
      `,
      category: "Technology",
      readTime: "12 min read",
      date: "Dec 12, 2024",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      author: "canz Team"
    },
    "3": {
      id: 3,
      title: "AR/VR in Advertising: Creating Immersive Brand Experiences",
      content: `
        <div class="prose prose-lg max-w-none">
          <p>Augmented and virtual reality technologies are revolutionizing the advertising industry by creating unprecedented opportunities for immersive brand experiences. These technologies allow brands to engage with consumers in entirely new ways.</p>
          
          <h2>The Power of Immersive Advertising</h2>
          <p>Traditional advertising relies on passive consumption of content. AR and VR advertising transforms consumers into active participants, creating memorable experiences that drive higher engagement rates and brand recall.</p>
          
          <h2>Implementation Strategies</h2>
          <p>Successful AR/VR advertising campaigns require careful planning and execution. Key considerations include target audience analysis, platform selection, content creation, and performance measurement.</p>
          
          <h2>Case Studies and Results</h2>
          <p>Leading brands have already demonstrated the effectiveness of immersive advertising through innovative campaigns that combine creativity with cutting-edge technology to deliver measurable results.</p>
        </div>
      `,
      category: "Adtech",
      readTime: "10 min read",
      date: "Dec 10, 2024",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop",
      author: "canz Team"
    }
  };

  const post = posts[id as keyof typeof posts];

  if (!post) {
    return (
      <Layout>
        <div className="py-24 px-6 text-center">
          <h1 className="text-4xl font-bold mb-8">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>

          {/* Featured image */}
          <div className="aspect-video mb-8 overflow-hidden rounded-lg">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Post header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="secondary" className="bg-gradient-canz-light text-primary">
                {post.category}
              </Badge>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
            </div>
            
            <h1 className="text-4xl font-bold mb-6 text-gradient">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </div>
            </div>
          </header>

          {/* Post content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Call to action */}
          <div className="mt-16 p-8 bg-gradient-secondary rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Want to Learn More?
            </h3>
            <p className="text-gray-600 mb-6">
              Get in touch with our experts to discuss how we can help your business.
            </p>
            <Button asChild className="bg-gradient-canz">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
