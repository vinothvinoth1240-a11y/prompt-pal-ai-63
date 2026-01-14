import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Tattoo Studio",
    description: "An AI-powered tattoo design platform that transforms creative ideas into unique, personalized tattoo designs. Features an intuitive interface for seamless design generation.",
    technologies: ["HTML", "CSS", "JavaScript", "AI Integration"],
    link: "https://clone-forge--vinothg1240.replit.app",
    gradient: "from-purple-600/20 to-pink-600/20",
  },
  {
    title: "AI Assistant",
    description: "An intelligent virtual assistant application powered by AI, designed to help users with various tasks through natural conversation and smart responses.",
    technologies: ["HTML", "CSS", "JavaScript", "AI"],
    link: "https://beautiful-monstera-1144e1.netlify.app/",
    gradient: "from-blue-600/20 to-cyan-600/20",
  },
  {
    title: "Studio Website",
    description: "A responsive Bootstrap-based studio website featuring modern design, smooth animations, and mobile-friendly layout. Built during my internship at Raj Software Solution.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    link: "https://rajsoftwaresolution.in/Muthayammal/batch2025-6/project/t1/web-pro.html",
    gradient: "from-primary/20 to-purple-600/20",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Featured work showcasing my skills and creativity
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`group relative bg-gradient-to-br ${project.gradient} border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-xl`}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10">
                  <h3 className="text-xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground rounded-md border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ExternalLink size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              More projects coming soon as I continue to learn and build!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
