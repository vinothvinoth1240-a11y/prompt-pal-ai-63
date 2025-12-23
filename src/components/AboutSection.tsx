import { GraduationCap, Calendar, MapPin } from "lucide-react";

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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate web developer and UI/UX designer currently pursuing my B.Tech in 
                <span className="text-foreground font-medium"> Artificial Intelligence and Data Science</span> at 
                Muthayammal Engineering College.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With hands-on experience from my internship at Raj Software Solution, I specialize in 
                creating responsive, user-friendly websites using modern technologies. I'm dedicated to 
                writing clean code and designing beautiful, intuitive interfaces.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={18} className="text-primary" />
                <span>Kondayampalli, India</span>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-primary">
                  <GraduationCap size={28} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold">Education</h3>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">
                  B.Tech in AI and Data Science
                </h4>
                <p className="text-muted-foreground">
                  Muthayammal Engineering College
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={16} className="text-primary" />
                  <span>2021 - 2025</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Internship Experience
                </h4>
                <p className="text-muted-foreground">
                  Front End Web Development at Raj Software Solution (15 days)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
