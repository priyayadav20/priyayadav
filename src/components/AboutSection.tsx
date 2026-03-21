import { motion } from "framer-motion";
import { Code, Brain, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-section-alt2 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-4xl font-bold text-primary text-center mb-4">About Me</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full" />
          <p className="max-w-2xl mx-auto text-center text-muted-foreground text-lg leading-relaxed mb-12">
            I'm a passionate Computer Science Engineering student at Lovely Professional University with a strong foundation in full-stack development and machine learning. I love building efficient, user-centric web applications and exploring data-driven solutions to real-world problems.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Code, title: "Developer", desc: "Proficient in Python, Java, C++ & modern web frameworks like Django and Flask." },
              { icon: Brain, title: "ML Enthusiast", desc: "Experience with machine learning models, data pipelines, and Streamlit dashboards." },
              { icon: Users, title: "Team Player", desc: "Strong leadership, problem-solving, and adaptability skills for collaborative work." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow text-center"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-accent" size={28} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
