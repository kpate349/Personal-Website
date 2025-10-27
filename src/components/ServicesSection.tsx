import { Link } from "react-router-dom";
import { ArrowRight, Bot, Phone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "Voice AI Assistants for Customer Support",
    description: "24/7 Voice Assistant dedicated to your business with personalized responses based on your knowledge base.",
    icon: <Phone className="h-8 w-8 text-primary" />,
    badge: "Featured",
    features: [
      "24/7 automated customer support",
      "Personalized business responses",
      "Own WebSocket server hosted on cloud",
      "OpenAI's newest flagship RealTime API",
      "Live demo available",
      "Fixed monthly maintenance fee"
    ]
  },
  {
    title: "AI Workflow Automation",
    description: "Custom AI agents designed to automate repetitive tasks and integrate seamlessly with your existing tools.",
    icon: <Bot className="h-8 w-8 text-primary" />,
    features: [
      "Fixed monthly maintenance fee", 
      "One-time development cost", 
      "Seamless integration with existing systems",
      "Custom AI agent development",
      "Automated task processing"
    ]
  },
  {
    title: "Zapier/n8n Custom Automated Workflows",
    description: "Connect CRMs, automate lead generation, streamline content creation—we automate it all for your business.",
    icon: <Zap className="h-8 w-8 text-primary" />,
    features: [
      "CRM integration and automation",
      "Automated lead generation",
      "Content creation workflows",
      "One-time development cost",
      "Ongoing support and maintenance"
    ]
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">AI Solutions for Modern Businesses</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Automate your business operations with custom workflows and intelligent AI agents
            designed specifically for your unique needs. Save time, reduce costs, and scale effortlessly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border hover:shadow-lg transition-all bg-card/80 backdrop-blur-sm card-hover h-full flex flex-col relative overflow-hidden">
              {service.badge && (
                <Badge className="absolute top-4 right-4 bg-primary/90 text-primary-foreground">
                  {service.badge}
                </Badge>
              )}
              <CardHeader>
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2 mt-2 flex-shrink-0"></span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
        <Button asChild size="lg">
          <a target="_blank" href="https://calendly.com/pkush74/30min">
            Schedule a call
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
        </div>
      </div>
    </section>
  );
}