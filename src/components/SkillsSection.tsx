import { motion } from "framer-motion";

const skillCategories = [
  { title: "Languages", skills: ["C", "C++", "Java", "Python", "JavaScript"] },
  { title: "Frontend", skills: ["HTML & CSS", "Tailwind CSS"] },
  { title: "Backend", skills: ["Flask", "Django", "FastAPI"] },
  { title: "Tools & Platforms", skills: ["MySQL", "GitHub", "ML Flow", "Jupyter Notebook", "DSA"] },
  { title: "Soft Skills", skills: ["Leadership", "Problem-Solving", "Adaptability"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-section-alt relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-4xl font-bold text-primary text-center mb-4">Skills</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card"
              >
                <h3 className="font-semibold text-foreground mb-4 text-lg">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
