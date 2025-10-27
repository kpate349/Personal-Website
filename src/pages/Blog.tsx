import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Add your blog articles here - each article will automatically appear on the blog page
const blogArticles = [
  {
    id: "ai-automation-small-business",
    title: "How AI Automation Can Transform Your Small Business in 2025",
    excerpt: "Discover practical ways to implement AI automation in your business without breaking the bank. Learn which tasks to automate first for maximum ROI.",
    category: "AI Automation",
    date: "January 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
  },
  {
    id: "voice-ai-customer-support",
    title: "The Future of Customer Support: Voice AI Assistants",
    excerpt: "Why 24/7 Voice AI assistants are becoming essential for e-commerce and SaaS companies. Real case studies and implementation strategies.",
    category: "Voice AI",
    date: "January 10, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80"
  },
  {
    id: "zapier-automation-guide",
    title: "Complete Guide to Workflow Automation with Zapier and n8n",
    excerpt: "Step-by-step guide to automating your CRM, lead generation, and content workflows. Save 15+ hours per week with these strategies.",
    category: "Workflow Automation",
    date: "January 5, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  }
];

const Blog = () => {
  return (
    <div className="container px-4 mx-auto py-12">
      <section className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">AI Automation Insights & Guides</h1>
        <p className="text-lg text-muted-foreground">
          Expert insights on AI automation, Voice AI, and workflow optimization for modern businesses.
          Learn how to implement cutting-edge AI solutions to save time and scale your operations.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogArticles.map((article) => (
          <Link key={article.id} to={`/blog/${article.id}`}>
            <Card className="border bg-card/80 backdrop-blur-sm card-hover h-full flex flex-col overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {article.category}
                </Badge>
              </div>
              
              <CardHeader className="flex-grow">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="line-clamp-3 mb-4">
                  {article.excerpt}
                </CardDescription>
                <div className="flex items-center text-primary font-semibold text-sm">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
