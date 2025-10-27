import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Solutions",
    content: "Kush's AI workflow automation saved us 15+ hours per week. The custom solution integrated perfectly with our existing systems.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    name: "Michael Chen",
    role: "Operations Manager, GrowthCo",
    content: "The Voice AI Assistant transformed our customer support. We now handle 3x more inquiries with better response times.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, Digital Marketing Agency",
    content: "Professional, responsive, and delivered exactly what we needed. The automated workflows have been game-changing for our agency.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">What Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it—hear from businesses that have transformed their operations with AI automation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border bg-card/80 backdrop-blur-sm card-hover">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name} profile picture`}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
