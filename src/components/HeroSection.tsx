import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-primary p-1 glow-primary">
              <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                <span className="text-4xl md:text-5xl font-display font-bold text-gradient">VG</span>
              </div>
            </div>
          </div>

          {/* Greeting */}
          <p className="text-muted-foreground font-medium mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <span className="text-gradient">Vinoth G</span>
          </h1>

          {/* Role */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Frontend Developer & UI/UX Designer
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            Passionate about creating responsive, user-friendly websites with clean code and beautiful interfaces.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 px-8 glow-primary">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <a
              href="https://www.linkedin.com/in/vinoth-gv"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:vinothvinoth1240@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com/vinothvinoth1240-a11y"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <Github size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
