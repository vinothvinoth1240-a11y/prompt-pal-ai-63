import { GraduationCap, Calendar, MapPin, Briefcase, ExternalLink, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            {/* About Text */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Frontend Developer and UI/UX Designer currently pursuing my
                <span className="text-foreground font-medium"> BCA (Bachelor of Computer Application)</span> at 
                Muthayammal College of Arts and Science, Rasipuram.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With hands-on experience from my internship at Raj Software Solution, I specialize in 
                creating responsive, user-friendly websites using modern technologies. I'm dedicated to 
                crafting clean designs and intuitive user experiences.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={18} className="text-primary" />
                <span>Kondayampalli, Salem, Tamil Nadu, India</span>
              </div>
            </div>

            {/* Education & Experience Cards */}
            <div className="space-y-6">
              {/* Education Card */}
              <div className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-primary">
                    <GraduationCap size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-display font-semibold">Education</h3>
                </div>

                <div className="space-y-4">
                  {/* BCA */}
                  <div className="pb-4 border-b border-border">
                    <h4 className="text-base font-semibold text-foreground">
                      BCA - Bachelor of Computer Application
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Muthayammal College of Arts and Science, Rasipuram
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Calendar size={14} className="text-primary" />
                      <span>2023 - 2026</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mt-2">
                      5th Semester • 73%
                    </div>
                  </div>

                  {/* HSC */}
                  <div className="pb-4 border-b border-border">
                    <h4 className="text-base font-semibold text-foreground">
                      HSC - Higher Secondary Certificate
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Government Higher Secondary School, Kondayampalli
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Calendar size={14} className="text-primary" />
                      <span>2022 - 2023</span>
                    </div>
                  </div>

                  {/* SSLC */}
                  <div>
                    <h4 className="text-base font-semibold text-foreground">
                      SSLC - Secondary School Leaving Certificate
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Government Higher Secondary School, Kondayampalli
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Calendar size={14} className="text-primary" />
                      <span>2020 - 2021</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Internship Experience Card - Merged */}
              <div className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-accent">
                    <Briefcase size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold">Internship Experience</h3>
                    <p className="text-muted-foreground text-xs">Front End Web Developer Intern</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="text-foreground font-medium">Raj Software Solution</span>
                    <span className="text-muted-foreground">•</span>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar size={12} className="text-primary" />
                      <span>12 May - 28 May 2025 (15 Days)</span>
                    </div>
                  </div>

                  {/* Project Title */}
                  <div className="bg-secondary/50 rounded-xl p-4 border border-border">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <h4 className="text-base font-semibold text-foreground">
                        🧑‍💻 Project: Creative Website – Web-Pro
                      </h4>
                      <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs" asChild>
                        <a href="https://rajsoftwaresolution.in/Muthayammal/batch2025-6/project/t1/web-pro.html" target="_blank" rel="noopener noreferrer">
                          View Live
                          <ExternalLink size={12} className="ml-1" />
                        </a>
                      </Button>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      Developed a creative and responsive website showcasing modern web design patterns, interactive features, and clean usability using HTML, CSS, JavaScript & Bootstrap.
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {["HTML", "CSS", "JavaScript", "Bootstrap"].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Key Highlights */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        "Responsive Design",
                        "Modern UI/UX",
                        "Interactive Elements",
                        "Cross-browser Compatible"
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-1.5">
                          <CheckCircle size={12} className="text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Gained */}
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-2">Skills Gained:</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {["Semantic HTML", "Flexbox/Grid", "JavaScript DOM", "Debugging", "Responsive Layouts"].map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded-md border border-border">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
