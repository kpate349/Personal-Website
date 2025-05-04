import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "ICanCookFood",
    description: "ICanCooKFood is a social media network where users can share dishes they cook with their friends and family via timeline. A marketplace feature allows users to buy local recipes and sellers to earn $$$.",
    tags: ["Flutter", "Express.js", "Cassandra", "Wasabi", "BunnyCDN"],
    image: "/icancook_app_icon.png",
    liveUrl: "https://apps.apple.com/us/app/icancookfood/id6593659930",
    repoUrl: "https://icancookai.com/",
  }, 
];

const Projects = () => {
  return (
    <div className="container px-4 mx-auto">
      <section className="py-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 md:text-4xl">Projects</h1>
          
          <div className="grid grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow hover:shadow-md transition-all duration-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="h-60 md:h-auto">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover"
                    />
                  </div>
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
                          App Link
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="outline" className="gap-2">
                        <a href={project.repoUrl} target="_blank" rel="noreferrer">
                          <ExternalLink size={16} />
                          Website
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