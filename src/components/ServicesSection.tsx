
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Workflow, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "AI Workflow Automation",
    description: "Custom AI agents designed to automate repetitive tasks and integrate with your existing tools.",
    icon: <Bot className="h-8 w-8 text-primary" />,
    features: ["24/7 operation", "Self-learning capabilities", "Seamless tool integration"]
  },
  {
    title: "Custom n8n Workflows",
    description: "Tailored n8n workflows that connect your apps and automate complex business processes.",
    icon: <Workflow className="h-8 w-8 text-primary" />,
    features: ["Visual workflow builder", "100+ app integrations", "API-first architecture"]
  },
  {
    title: "Zapier Integration Solutions",
    description: "Connect hundreds of apps without code using custom Zapier integrations built for your business.",
    icon: <Layers className="h-8 w-8 text-primary" />,
    features: ["No-code solutions", "Multi-step zaps", "Real-time data processing"]
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">AI Agents as a Service</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transform your business operations with custom automated workflows and intelligent AI agents
            designed specifically for your unique needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/contact">
              Get Custom Solution
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
