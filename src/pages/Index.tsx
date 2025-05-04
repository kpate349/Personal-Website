import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServicesSection } from "@/components/ServicesSection";

const Index = () => {
  const projects = [
    {
      title: "ICanCookFood",
      description: "ICanCooKFood is a social media network where users can share dishes they cook with their friends and family via timeline. A marketplace feature allows users to buy local recipes and sellers to earn $$$.",
      image: "/icancook_app_icon.png",
      liveUrl: "https://apps.apple.com/us/app/icancookfood/id6593659930",
    },
  ];

  return (
    <div className="container px-4 mx-auto">
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Senior Software Engineer
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
            I craft elegant digital products with a focus on clean design and performant code. Let's bring your vision to life.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <ServicesSection />

      <section className="py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-md"
              >
                <div className="h-20">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Link
                    to="/projects"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    View Project
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;