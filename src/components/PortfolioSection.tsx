import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Clock, Target, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    title: "E-commerce Customer Support Automation",
    client: "Online Retail Store",
    description: "Implemented 24/7 Voice AI Assistant handling customer inquiries, order tracking, and product recommendations.",
    results: [
      "300% increase in customer inquiry handling",
      "60% reduction in support costs",
      "24/7 availability with no wait times"
    ],
    tags: ["Voice AI", "Customer Support", "E-commerce"],
    icon: <Target className="h-6 w-6 text-primary" />
  },
  {
    title: "Lead Generation Workflow Automation",
    client: "B2B SaaS Company",
    description: "Automated lead qualification, CRM updates, and follow-up email sequences using custom AI agents.",
    results: [
      "50% increase in qualified leads",
      "15 hours saved per week",
      "Seamless CRM integration"
    ],
    tags: ["AI Automation", "Lead Gen", "CRM"],
    icon: <TrendingUp className="h-6 w-6 text-primary" />
  },
  {
    title: "Content Creation Pipeline",
    client: "Digital Marketing Agency",
    description: "Built automated workflow connecting research, content generation, and publishing across multiple platforms.",
    results: [
      "4x faster content production",
      "Consistent quality across channels",
      "90% time savings on repetitive tasks"
    ],
    tags: ["Automation", "Content", "Zapier"],
    icon: <Clock className="h-6 w-6 text-primary" />
  }
];

export function PortfolioSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">Case Studies & Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from real businesses. See how AI automation has transformed operations for companies like yours.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card key={index} className="border bg-card/80 backdrop-blur-sm card-hover h-full flex flex-col">
              <CardHeader>
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  {study.icon}
                </div>
                <CardTitle className="text-xl mb-2">{study.title}</CardTitle>
                <CardDescription className="text-xs font-semibold text-primary">
                  {study.client}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-sm text-muted-foreground mb-6">
                  {study.description}
                </p>
                
                <div className="mb-6">
                  <p className="text-xs font-semibold mb-3 text-foreground">Key Results:</p>
                  <ul className="space-y-2">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2 mt-2 flex-shrink-0"></span>
                        <span className="text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {study.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
