import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const AchievementSection = () => {
  return (
    <section id="achievement" className="py-20 bg-section-alt relative overflow-hidden">
      <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-4xl font-bold text-primary text-center mb-4">Achievement</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full" />
          <div className="max-w-2xl mx-auto bg-card rounded-xl p-8 shadow-card text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Trophy className="text-accent" size={32} />
            </div>
            <h3 className="font-semibold text-xl text-foreground mb-2">LeetCode Problem Solver</h3>
            <p className="text-muted-foreground">
              Solved <span className="font-bold text-accent">150+</span> questions on LeetCode and achieved the <span className="font-bold text-accent">100 Days Badge</span>.
            </p>
            <p className="text-sm text-muted-foreground mt-2">Sep 2025</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementSection;
