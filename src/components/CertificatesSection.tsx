import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  { title: "Gen AI Fundamentals", issuer: "Coursera", date: "Jan 2025" },
  { title: "Data Structures and Algorithms", issuer: "Iamneo Certificate", date: "Dec 2024" },
  { title: "The Bits and Bytes of Computer Networking", issuer: "Google Certificate", date: "Sep 2024" },
  { title: "Python Industrial Training", issuer: "Code Sprint", date: "Mar 2024" },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 bg-section-alt2 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-4xl font-bold text-primary text-center mb-4">Certificates</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full" />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-xl p-5 shadow-card flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Award className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer} · {cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;
