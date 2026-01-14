import { Palette, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Design",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    skills: ["Wireframing", "User Flow Design", "Responsive Layout", "Visual Design"],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "from-blue-500 to-cyan-500",
    skills: ["Figma", "Canva", "GitHub", "Google AI Studio", "Replit"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    color: "from-green-500 to-emerald-500",
    skills: ["Adaptability", "Time Management", "Problem Solving", "Virtual Communication"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              A blend of design expertise, technical tools, and interpersonal abilities
            </p>
          </div>

          {/* Skills Categories Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                    <category.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 bg-secondary text-muted-foreground rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="mt-16">
            <h3 className="text-xl font-display font-semibold mb-6 text-center">
              Technical Proficiencies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["HTML", "CSS", "JavaScript", "Bootstrap", "React", "Tailwind CSS"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-gradient-primary text-primary-foreground rounded-full text-sm font-medium shadow-md hover:scale-105 transition-transform cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
