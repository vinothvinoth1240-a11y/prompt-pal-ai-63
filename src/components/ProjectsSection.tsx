import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
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
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Featured work from my internship experience
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative bg-gradient-to-br ${project.gradient} border border-border rounded-2xl p-8 md:p-10 hover:border-primary/50 transition-all duration-300 overflow-hidden`}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-background/80 backdrop-blur-sm text-sm font-medium text-foreground rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <Button
                    variant="outline"
                    className="group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ExternalLink size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
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
