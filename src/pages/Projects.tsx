
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with product management, cart functionality, and secure checkout process.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/placeholder.svg",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website with smooth animations and responsive design.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/placeholder.svg",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity app for managing tasks with drag-and-drop interface and real-time updates.",
    tags: ["React", "Firebase", "Redux", "Material UI"],
    image: "/placeholder.svg",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description: "A weather application that provides forecasts based on user location with interactive maps.",
    tags: ["JavaScript", "OpenWeather API", "Leaflet", "Chart.js"],
    image: "/placeholder.svg",
    liveUrl: "#",
    repoUrl: "#",
  },
];

const Projects = () => {
  return (
    <div className="container px-4 mx-auto">
      <section className="py-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 md:text-4xl">Projects</h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            A selection of projects I've worked on, showcasing my skills in web development, design, and problem-solving.
          </p>
          
          <div className="grid grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow hover:shadow-md transition-all duration-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted h-60 md:h-auto"></div>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <Button asChild size="sm" variant="outline" className="gap-2">
                        <a href={project.liveUrl} target="_blank" rel="noreferrer">
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="outline" className="gap-2">
                        <a href={project.repoUrl} target="_blank" rel="noreferrer">
                          <Github size={16} />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
