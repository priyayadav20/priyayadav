import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Eye, Download } from "lucide-react";
import priyaPhoto from "@/assets/priya-photo.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-hero relative overflow-hidden pt-16">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center md:text-left"
          >
            <p className="text-accent font-medium mb-2 tracking-widest uppercase text-sm">Hello, I'm</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-4">
              Priya Yadav
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-lg mb-8">
              B.Tech CSE Student | Full-Stack Developer | Machine Learning Enthusiast
            </p>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <a href="https://github.com/priyayadav20" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-foreground/10 flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/priyaML20" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-foreground/10 flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:priyeshy673@gmail.com" className="w-11 h-11 rounded-full bg-foreground/10 flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+919956698064" className="w-11 h-11 rounded-full bg-foreground/10 flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                <Phone size={20} />
              </a>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start mt-2">
              <a href="/Priya_Yadav_Resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity">
                <Eye size={16} /> View Resume
              </a>
              <a href="/Priya_Yadav_Resume.pdf" download className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground/30 text-foreground font-medium text-sm hover:bg-foreground/10 transition-colors">
                <Download size={16} /> Download CV
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-accent overflow-hidden shadow-2xl">
              <img src={priyaPhoto} alt="Priya Yadav" className="w-full h-full object-cover object-top" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
