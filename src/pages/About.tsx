import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  return (
    <div className="container px-4 mx-auto">
      <section className="py-12 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-12">
            <img
              src="/profile_picture.jpg" // Replace with your actual image URL
              alt="Kush Patel Profile"
              className="w-48 h-48 rounded-full object-cover"
            />
          </div>
          
          <h1 className="text-3xl font-bold mb-8 md:text-4xl">About Me</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <p>
              I'm Kush Patel, a Senior Software Engineer with close to 5 years of experience building large-scale data pipelines, web applications, and AI solutions. My work focuses on leveraging Apache Spark, Kafka, Azure DataBricks, and Azure Data Factory to create robust, scalable pipelines that drive data-driven decision-making and business logic.
            </p>
            
            <p>
              At UnitedHealth Group, I design and implement big data pipelines using Scala and Spark, enabling efficient ETL processes for critical operational workflows. I'm passionate about AI and actively work with tools like Microsoft AI Foundry and Microsoft AutoGen to develop innovative solutions, like AI Agents. My technical leadership extends to mentoring junior engineers and collaborating with cross-functional teams to deliver high-impact projects under strict SLAs.
            </p>
            
            <p>
              Outside of work, I stay engaged with the latest advancements in AI and cloud technologies, contribute to open-source projects, and enjoy exploring new tools and frameworks to push the boundaries of what's possible in software engineering.
            </p>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Scala", 
                "PySpark", 
                "Apache Spark", 
                "Apache Kafka", 
                "Azure DataBricks", 
                "Azure Data Factory",
                "Azure Functions",
                "Python", 
                "SQL", 
                "Java", 
                "Docker", 
                "Jenkins", 
                "Azure DevOps", 
                "Microsoft AI Foundry",
                "Flutter"
              ].map((skill) => (
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
                  role: "Senior Software Engineer",
                  company: "UnitedHealth Group",
                  period: "February 2024 - Present",
                  description: [
                    "Designed and implemented big data pipelines using Apache Spark and Azure DataBricks in Scala, enabling ETL processes for Oracle and file systems, supporting operational workflows.",
                    "Monitored data pipeline failures and performed fixes to support critical business operations.",
                    "Mentored junior engineers in data engineering best practices, fostering clean, well-tested, and documented code to support mission-critical applications.",
                    "Collaborated with third-party vendors (Cognizant, Exusia, Publicis Sapient) using Agile methodologies to deploy clinical templates on scale, resulting in more internal teams becoming interested to use our products."
                  ]
                },
                {
                  role: "Software Engineer",
                  company: "UnitedHealth Group",
                  period: "June 2020 - February 2024",
                  description: [
                    "Developed, maintained, and collaborated with development teams to build clinical web applications, using React.js.",
                    "Developed a batch streaming pipeline using Kafka and Databricks to ingest millions of provider records.",
                    "Served as a Senior Data Engineer, managing development, production launches, and acting as the primary liaison with business stakeholders, achieving a very high satisfaction rate, through consistent issue resolution and timely deployments."
                  ]
                },
                {
                  role: "Web Development Intern",
                  company: "University of Illinois at Chicago",
                  period: "June 2019 - August 2019",
                  description: [
                    "Accelerated the migration of 200+ knowledge base articles to the new UIC website by automating content import scripts, completing the project three weeks ahead of schedule.",
                    "Tested WordPress functionalities for 100+ university services using automated testing tools, ensuring seamless user experience and full accessibility compliance with WCAG 2.0 standards."
                  ]
                }
              ].map((job, index) => (
                <div key={index} className="border-l-2 pl-6 -ml-px border-muted">
                  <h3 className="font-semibold">{job.role}</h3>
                  <p className="text-sm text-muted-foreground">{job.company} | {job.period}</p>
                  {Array.isArray(job.description) ? (
                    <ul className="mt-2 list-disc list-inside">
                      {job.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2">{job.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12">
            <a 
              href="/Kush_Patel_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="flex items-center gap-2">
                <Download size={16} />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;