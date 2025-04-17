
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  return (
    <div className="container px-4 mx-auto">
      <section className="py-12 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 md:text-4xl">About Me</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <p>
              Hello! I'm a passionate developer and designer with over 5 years of experience creating beautiful, functional digital experiences. My approach combines clean code with thoughtful design to build products that delight users.
            </p>
            
            <p>
              I specialize in front-end development using modern technologies like React, TypeScript, and Tailwind CSS. I'm also comfortable working with back-end technologies and have experience with full-stack development.
            </p>
            
            <p>
              When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or hiking in the mountains.
            </p>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js", "UI/UX Design", "Responsive Design", "Figma", "Git"].map((skill) => (
                <div 
                  key={skill} 
                  className="rounded-md bg-secondary px-3 py-2 text-sm font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Experience</h2>
            <div className="space-y-8">
              {[
                {
                  role: "Senior Frontend Developer",
                  company: "Tech Company",
                  period: "2020 - Present",
                  description: "Led development of the company's main product, improving performance by 40%."
                },
                {
                  role: "UI Developer",
                  company: "Design Agency",
                  period: "2018 - 2020",
                  description: "Created responsive interfaces for various clients across different industries."
                }
              ].map((job, index) => (
                <div key={index} className="border-l-2 pl-6 -ml-px border-muted">
                  <h3 className="font-semibold">{job.role}</h3>
                  <p className="text-sm text-muted-foreground">{job.company} | {job.period}</p>
                  <p className="mt-2">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12">
            <Button className="flex items-center gap-2">
              <Download size={16} />
              Download Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
