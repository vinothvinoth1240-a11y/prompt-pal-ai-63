import { GraduationCap, Calendar, MapPin, Briefcase } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
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

              {/* Internship Card */}
              <div className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-accent">
                    <Briefcase size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-display font-semibold">Internship Experience</h3>
                </div>

                <div className="space-y-3">
                  <h4 className="text-base font-semibold text-foreground">
                    Front End Web Developer
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Raj Software Solution
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Developed responsive web pages and websites using HTML, CSS, JavaScript & Bootstrap with focus on Responsive Design.
                  </p>
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
