import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Cybersecurity Intern",
    company: "Maharashtra Cyber Cell",
    period: "2024",
    description: [
      "Analyzed malware samples including RATs and ransomware variants",
      "Conducted vulnerability assessments using industry-standard tools",
      "Assisted in digital forensics investigations",
      "Documented threat intelligence reports for law enforcement",
    ],
    tools: ["Wireshark", "Volatility", "Autopsy", "Burp Suite"],
  },
  {
    title: "Computer Science Development Intern",
    company: "HPCL (Hindustan Petroleum)",
    period: "2023",
    description: [
      "Developed internal tools for process optimization",
      "Worked on database management and reporting systems",
      "Collaborated with cross-functional teams on digital transformation",
      "Implemented automation scripts for routine tasks",
    ],
    tools: ["Python", "SQL", "Power BI", "Excel VBA"],
  },
  {
    title: "Android Developer Intern",
    company: "Google",
    period: "2023",
    description: [
      "Built Android applications following Material Design guidelines",
      "Implemented features using Kotlin and Java",
      "Participated in code reviews and agile development cycles",
      "Optimized app performance and user experience",
    ],
    tools: ["Kotlin", "Java", "Android Studio", "Firebase"],
  },
  {
    title: "Data Analytics Intern",
    company: "YBI Foundation",
    period: "2023",
    description: [
      "Analyzed datasets to extract meaningful insights",
      "Created visualizations and dashboards for stakeholders",
      "Applied statistical methods for data-driven decisions",
      "Worked on machine learning models for predictions",
    ],
    tools: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
  },
  {
    title: "Python Intern",
    company: "SAKEC",
    period: "2022",
    description: [
      "Developed automation scripts and utilities",
      "Learned software development best practices",
      "Built projects demonstrating Python proficiency",
      "Contributed to open-source educational resources",
    ],
    tools: ["Python", "Flask", "SQLite", "Git"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm">02. </span>
          <h2 className="text-3xl md:text-4xl font-bold inline text-foreground">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row items-start mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 glow-sm z-10" />

              {/* Content Card */}
              <div
                className={`ml-8 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                <div className="glass glass-hover rounded-xl p-6 group">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Briefcase size={18} />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground text-sm flex items-start"
                      >
                        <span className="text-primary mr-2">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
