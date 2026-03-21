import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Lovely Professional University, Punjab",
    degree: "B.Tech – Computer Science & Engineering",
    detail: "CGPA: 6.11",
    period: "Aug 2023 – Present",
  },
  {
    institution: "Little Flower Children School, Mau, U.P",
    degree: "Intermediate – PCM",
    detail: "Percentage: 64.5%",
    period: "Apr 2021 – Mar 2023",
  },
  {
    institution: "St. Norbert School, Mau, U.P",
    degree: "Matriculation",
    detail: "",
    period: "",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-section-alt2 relative overflow-hidden">
      <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-4xl font-bold text-primary text-center mb-4">Education</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full" />
          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-card rounded-xl p-6 shadow-card flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{edu.institution}</h3>
                  <p className="text-sm text-primary font-medium">{edu.degree}</p>
                  {edu.detail && <p className="text-sm text-muted-foreground">{edu.detail}</p>}
                  {edu.period && <p className="text-xs text-muted-foreground mt-1">{edu.period}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
