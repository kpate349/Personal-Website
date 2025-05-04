import { Link } from "react-router-dom";
import { ArrowRight, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "AI Workflow Automation",
    description: "I will build custom AI agents designed to automate repetitive tasks and integrate with your existing tools.",
    icon: <Bot className="h-8 w-8 text-primary" />,
    features: ["Fixed monthly maintenance fee", "One-Time development cost", "Seamless integration"]
  },
  {
    title: "Zapier/n8n custom automated workflows",
    description: "Whether it's connecting CRMs to other apps, or automating leads generation, or content creation, we can automate it all",
    icon: <Bot className="h-8 w-8 text-primary" />,
    features: ["Fixed monthly maintenance fee", "One-Time development cost", "Seamless integration"]
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">Selling AI Agents as a Service on the Side</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Automate your business operations with custom workflows and intelligent AI agents
            designed specifically for your unique needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border hover:shadow-md transition-shadow bg-card h-full flex flex-col">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
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