import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const TrainingSection = () => {
  return (
    <section id="training" className="py-20 bg-section-alt relative overflow-hidden">
      <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-4xl font-bold text-primary text-center mb-4">Training</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full" />
          <div className="max-w-3xl mx-auto bg-card rounded-xl p-8 shadow-card">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                <BookOpen className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">Foundations and Data Structures in C++</h3>
                <p className="text-sm text-accent font-medium mb-3">LPU Certificate · Jun 2025</p>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground flex gap-2"><span className="text-accent shrink-0">•</span>Strengthened logical thinking and debugging skills through real-world computational problems.</li>
                  <li className="text-sm text-muted-foreground flex gap-2"><span className="text-accent shrink-0">•</span>Gained in-depth knowledge of arrays, linked lists, stacks, queues, trees, and graphs in C++.</li>
                  <li className="text-sm text-muted-foreground flex gap-2"><span className="text-accent shrink-0">•</span>Developed optimized algorithmic solutions using sorting, searching, and recursion.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingSection;
