import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-hero text-foreground">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-4xl font-bold text-center mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full" />
          <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
            <a href="mailto:priyeshy673@gmail.com" className="flex items-center gap-3 text-foreground/80 hover:text-accent transition-colors">
              <Mail size={20} /> priyeshy673@gmail.com
            </a>
            <a href="tel:+919956698064" className="flex items-center gap-3 text-foreground/80 hover:text-accent transition-colors">
              <Phone size={20} /> +91-9956698064
            </a>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/priyayadav20" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors">
                <Github size={22} />
              </a>
              <a href="https://linkedin.com/in/priyaML20" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors">
                <Linkedin size={22} />
              </a>
            </div>
          </div>
          <p className="text-center text-foreground/40 text-sm mt-16">© 2026 Priya Yadav. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
