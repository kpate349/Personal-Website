
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServicesSection } from "@/components/ServicesSection";

const Index = () => {
  return (
    <div className="container px-4 mx-auto">
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Creative Developer & Designer
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
            I craft elegant digital experiences with a focus on clean design and performant code. Let's bring your vision to life.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      <section className="py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((project) => (
              <div key={project} className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-md">
                <div className="bg-muted h-48"></div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">Project {project}</h3>
                  <p className="text-muted-foreground mb-4">
                    A brief description of this project and the technologies used.
                  </p>
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
