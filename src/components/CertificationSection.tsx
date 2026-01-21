import { GraduationCap, ExternalLink, Folder, CheckCircle, Rocket, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const CertificationSection = () => {
  return (
    <section id="certification" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Certification & <span className="text-gradient">Learning</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Value Added Course Card */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-primary">
                  <GraduationCap size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold">Value Added Course</h3>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                I have successfully completed a Value Added Course that enhanced my technical knowledge beyond the academic curriculum. This course provided hands-on experience and improved my understanding of industry-oriented concepts, practical implementation, and professional learning practices. It helped strengthen my technical mindset and prepared me for real-world projects and internships.
              </p>

              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <a href="https://drive.google.com/file/d/1gRSRO3Qc_NyMSIzmZuSh-1SWl2nPAsjs/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                  View Certificate
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </Button>
            </div>

            {/* Academic & Internship Projects Card */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-accent">
                  <Folder size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold">Academic & Internship Projects</h3>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                I have completed multiple academic and internship-based projects that allowed me to apply theoretical knowledge to real-time solutions. These projects improved my skills in planning, development, UI design, testing, and documentation, with a strong focus on usability and performance.
              </p>

              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <a href="https://docs.google.com/spreadsheets/d/1IoMye1tCbXF9GgqZpIWyGGYfqP3QSYSQm3PEh8FEDG8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                  View Project Details
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Skills Gained & Learning Growth */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Skills Gained */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-primary">
                  <Lightbulb size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold">Skills Gained</h3>
              </div>

              <div className="space-y-3">
                {[
                  "Front-end & basic back-end development",
                  "UI/UX design fundamentals",
                  "Logical thinking and debugging",
                  "Teamwork and individual responsibility",
                  "Time management and task execution"
                ].map((skill) => (
                  <div key={skill} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning & Career Growth */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-accent">
                  <Rocket size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold">Learning & Career Growth</h3>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                My project work and value-added learning have helped me build a strong technical foundation, gain confidence in real-world applications, and improve communication and presentation skills. I am continuously learning new technologies and seeking opportunities to grow professionally and contribute effectively to an organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
