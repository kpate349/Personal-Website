import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PortfolioSection } from "@/components/PortfolioSection";

const Index = () => {

  return (
    <div className="container px-4 mx-auto">
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Transform Your Business with <span className="gradient-text">AI Automation</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
            I help small and medium-sized businesses unlock the power of AI to automate customer support, streamline workflows, and scale operations—saving time and reducing costs without the complexity.
          </p>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            <strong>Who I Help:</strong> E-commerce stores, SaaS companies, digital agencies, and service businesses looking to automate repetitive tasks and improve customer experience with AI-powered solutions.
          </p>
          
          <div className="mt-12 grid gap-6 md:grid-cols-3 text-left max-w-4xl mx-auto">
            <div className="p-6 rounded-lg border bg-card card-hover backdrop-blur-sm">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl" role="img" aria-label="Robot">🤖</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">24/7 Voice AI Support</h3>
              <p className="text-sm text-muted-foreground">
                Deploy Voice AI Assistants that handle customer inquiries around the clock using OpenAI's cutting-edge RealTime API—no human intervention needed.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card card-hover backdrop-blur-sm">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl" role="img" aria-label="Lightning">⚡</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Workflow Automation</h3>
              <p className="text-sm text-muted-foreground">
                Automate repetitive tasks like lead qualification, CRM updates, and content creation—freeing your team to focus on revenue-driving activities.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card card-hover backdrop-blur-sm">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl" role="img" aria-label="Gear">⚙️</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Custom AI Solutions</h3>
              <p className="text-sm text-muted-foreground">
                Get tailored AI agents that integrate seamlessly with your existing tools—from Zapier to custom APIs—designed for your unique business needs.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 rounded-lg border bg-card/80 backdrop-blur-sm card-hover max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">My Process</h2>
            <div className="space-y-4 text-left">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Free Consultation</h4>
                  <p className="text-sm text-muted-foreground">
                    We discuss your business needs, challenges, and the problems you're trying to solve—completely free.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Custom Solution</h4>
                  <p className="text-sm text-muted-foreground">
                    I present a tailored solution with a clear timeline and transparent pricing for development and ongoing support.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Implementation & Support</h4>
                  <p className="text-sm text-muted-foreground">
                    I build your solution and provide month-to-month ongoing support to ensure everything runs smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/about">
                Learn More About My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://calendly.com/pkush74/" target="_blank" rel="noreferrer">
                Schedule a Call
              </a>
            </Button>
          </div>
          <p className="mt-8 text-muted-foreground">
            Email: <a href="mailto:pkush74@gmail.com" className="text-primary hover:underline">pkush74@gmail.com</a>
          </p>
        </div>
      </section>

      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
    </div>
  );
};

export default Index;