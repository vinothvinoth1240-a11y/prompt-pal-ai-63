const skills = [
  { name: "HTML", level: 90, color: "from-orange-500 to-red-500" },
  { name: "CSS", level: 85, color: "from-blue-500 to-cyan-500" },
  { name: "JavaScript", level: 75, color: "from-yellow-400 to-orange-500" },
  { name: "Bootstrap", level: 85, color: "from-purple-500 to-indigo-500" },
  { name: "Python", level: 70, color: "from-green-500 to-teal-500" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-16">
            <h3 className="text-xl font-display font-semibold mb-6 text-center">
              Also familiar with
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Git", "VS Code", "Responsive Design", "UI/UX Principles", "Web Accessibility"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-secondary text-muted-foreground rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
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
