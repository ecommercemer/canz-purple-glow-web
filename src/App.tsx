import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogCategory from "./pages/BlogCategory";
import Adtech from "./pages/services/Adtech";
import DigitalDevelopment from "./pages/services/DigitalDevelopment";
import Fintech from "./pages/services/Fintech";
import Investment from "./pages/services/Investment";
import Marketing from "./pages/services/Marketing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/blog/category/:category" element={<BlogCategory />} />
          
          {/* Service routes */}
          <Route path="/services/adtech" element={<Adtech />} />
          <Route path="/services/digital-development" element={<DigitalDevelopment />} />
          <Route path="/services/fintech" element={<Fintech />} />
          <Route path="/services/investment" element={<Investment />} />
          <Route path="/services/marketing" element={<Marketing />} />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
