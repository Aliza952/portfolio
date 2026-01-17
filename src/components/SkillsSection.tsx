import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Globe, Shield, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "JavaScript", "Java", "C/C++", "TypeScript"],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["React", "HTML/CSS", "Three.js", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    skills: ["Wireshark", "Digital Forensics", "Vulnerability Analysis", "Penetration Testing", "Malware Analysis"],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: ["SQL/PostgreSQL", "Supabase", "Power BI", "Git/GitHub", "Linux"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm">04. </span>
          <h2 className="text-3xl md:text-4xl font-bold inline text-foreground">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-5 h-5 text-primary" />
                </span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: catIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-full bg-muted/50 text-muted-foreground text-sm font-medium
                             border border-border hover:border-primary/50 hover:text-primary hover:bg-primary/10
                             transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
