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

                <div className="space-y-3">
                  <h4 className="text-base font-semibold text-foreground">
                    BCA - Bachelor of Computer Application
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Muthayammal College of Arts and Science, Rasipuram
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} className="text-primary" />
                    <span>2023 - 2026</span>
                  </div>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    5th Semester • 73%
                  </div>
                </div>
              </div>

              {/* Internship Summary Card */}
              <div className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-accent">
                    <Briefcase size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-display font-semibold">Internship Experience</h3>
                </div>

                <div className="space-y-3">
                  <h4 className="text-base font-semibold text-foreground">
                    Front End Web Developer Intern
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Raj Software Solution
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} className="text-primary" />
                    <span>12 May 2025 - 28 May 2025 (15 Days)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Internship Experience */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  🧑‍💻 Internship Project: Creative Website – Web-Pro
                </h3>
                <p className="text-muted-foreground">
                  A 15-day intensive frontend development training project
                </p>
              </div>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <a href="https://rajsoftwaresolution.in/Muthayammal/batch2025-6/project/t1/web-pro.html" target="_blank" rel="noopener noreferrer">
                  View Live Project
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </Button>
            </div>

            {/* Project Overview */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                📌 Project Overview
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                During my 15-day internship training at Raj Software Solution, I developed a creative and responsive web project titled <span className="text-foreground font-medium">Web-Pro</span>. The goal was to build a fully functional, visually appealing, and user-friendly website that showcases modern web design patterns, interactive features, and clean usability. Built from scratch using HTML, CSS, and JavaScript, I focused on writing clean code, organizing layouts efficiently, and ensuring responsiveness across devices.
              </p>
            </div>

            {/* Technologies Used */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-3">🛠️ Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "Bootstrap"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">🎯 Key Features Implemented</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    icon: "🖼️",
                    title: "Responsive Homepage",
                    description: "Hero section with title and clear navigation for visitors"
                  },
                  {
                    icon: "🎨",
                    title: "Modern Design & Layout",
                    description: "Clean typography, consistent color palette, mobile-first approach"
                  },
                  {
                    icon: "💡",
                    title: "Interactive Elements",
                    description: "Animated buttons, visual feedback, and hover effects"
                  },
                  {
                    icon: "📚",
                    title: "Project & Skills Showcase",
                    description: "Highlighted portfolio work with technology explanations"
                  },
                  {
                    icon: "📞",
                    title: "Contact Section",
                    description: "Simple layout for visitors to connect and reach out"
                  }
                ].map((feature) => (
                  <div key={feature.title} className="bg-secondary/50 rounded-xl p-4 border border-border">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">{feature.icon}</span>
                      <div>
                        <h5 className="font-semibold text-foreground text-sm">{feature.title}</h5>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What I Learned */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">🛠️ What I Learned & Improved</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Semantic HTML and accessible content structuring",
                  "Advanced CSS techniques (Flexbox, Grid, responsive breakpoints)",
                  "JavaScript for interactive user experiences",
                  "Debugging and optimizing for performance",
                  "Cross-browser testing for consistency",
                  "Layout testing across different screen sizes"
                ].map((skill) => (
                  <div key={skill} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why This Project Matters */}
            <div className="bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-xl p-6 border border-primary/20">
              <h4 className="text-lg font-semibold text-foreground mb-4">📝 Why This Project Matters</h4>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                This creative website is more than just a training exercise — it's a real working example of my frontend capabilities. It demonstrates:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Ability to transform design ideas into working web pages",
                  "Problem-solving skills through responsive layouts",
                  "Attention to detail in UI/UX and navigation",
                  "Readiness for real-world frontend tasks"
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <Star size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground text-sm font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
