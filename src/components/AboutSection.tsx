import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Code, Brain, Server } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Digital forensics, vulnerability analysis, and penetration testing",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "React, Node.js, and modern web technologies",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Machine learning, computer vision, and NLP applications",
  },
  {
    icon: Server,
    title: "System Design",
    description: "Scalable architectures and cloud infrastructure",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm">01. </span>
          <h2 className="text-3xl md:text-4xl font-bold inline text-foreground">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a dedicated <span className="text-primary">Computer Science Engineering</span> student 
              with a deep passion for cybersecurity, artificial intelligence, and web development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in tech began with curiosity about how systems can be both built and broken. 
              This led me to explore <span className="text-primary">digital forensics</span>, 
              <span className="text-primary"> malware analysis</span>, and 
              <span className="text-primary"> vulnerability assessment</span> while simultaneously 
              developing robust web applications and AI-powered solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through internships at <span className="text-secondary">Maharashtra Cyber Cell</span>, 
              <span className="text-secondary"> Google</span>, and 
              <span className="text-secondary"> HPCL</span>, I've gained hands-on experience in 
              real-world scenarios, from analyzing cyber threats to building scalable applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in continuous learning and contributing to the tech community. 
              My goal is to create secure, intelligent systems that make a positive impact.
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="glass glass-hover rounded-xl p-6 group cursor-default"
              >
                <item.icon className="w-10 h-10 text-primary mb-4 group-hover:animate-pulse-glow transition-all" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
