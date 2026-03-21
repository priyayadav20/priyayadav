import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Study Buddy",
    date: "Feb 2026",
    tech: ["Django", "SQLite", "Python"],
    points: [
      "Built a Django-based web app enabling users to create and join study rooms for collaborative learning.",
      "Implemented secure user authentication including login, signup, and session management.",
      "Developed full CRUD functionality for study rooms, messages, and user interactions.",
    ],
    github: "https://github.com/priyayadav20",
  },
  {
    title: "Personal Expense Tracker",
    date: "Jul 2025",
    tech: ["Python", "Data Visualization", "UI"],
    points: [
      "Implemented budget planning, monthly summaries, and interactive visualizations.",
      "Designed a clean database structure with real-time charts for expense insights.",
      "Built automated data processing for daily spending categorization and analysis.",
    ],
    github: "https://github.com/priyayadav20",
  },
  {
    title: "Tire Pressure Monitoring System",
    date: "Apr 2025",
    tech: ["Machine Learning", "Streamlit", "Python"],
    points: [
      "Developed an ML-based system using Isolation Forest to detect tire anomalies.",
      "Supervised a complete data pipeline including simulation, preprocessing, and real-time inference.",
      "Deployed an interactive Streamlit dashboard for tire health monitoring and live alerts.",
    ],
    github: "https://github.com/priyayadav20",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-section-alt2 relative overflow-hidden">
      <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-4xl font-bold text-primary text-center mb-4">Projects</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.date}</p>
                  </div>
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-xs font-medium bg-accent/15 text-accent-foreground">{t}</span>
                  ))}
                </div>
                <ul className="space-y-2">
                  {project.points.map((point, j) => (
                    <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-accent mt-1 shrink-0">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
