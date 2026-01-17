import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Trophy, Medal } from "lucide-react";

const education = [
  {
    degree: "B.Tech Electronics & Computer Science Engineering",
    institution: "Shah & Anchor Kutchhi Engineering College (SAKEC)",
    year: "2021 - 2025",
    grade: "CGPA: 9.3",
    icon: GraduationCap,
    highlight: true,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Pace Junior Science College",
    year: "2019 - 2021",
    grade: "75.67%",
    icon: Award,
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "St. Anthony Girls' High School",
    year: "2019",
    grade: "86.20%",
    icon: Medal,
  },
];

const achievements = [
  {
    title: "Gold Medal - Rank 1",
    description: "Achieved first rank in academics for the year 2023-24",
    icon: Trophy,
  },
  {
    title: "Events Co-Head",
    description: "Led Institution's Innovation Cell events and initiatives",
    icon: Award,
  },
];

const certifications = [
  "Tata Cybersecurity Job Simulation",
  "Ethical Hacking Certification",
  "AWS Cloud Practitioner",
  "Intel AI for Youth",
  "Udemy Full-Stack Development",
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm">05. </span>
          <h2 className="text-3xl md:text-4xl font-bold inline text-foreground">
            Education & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`glass glass-hover rounded-xl p-6 ${
                    edu.highlight ? "ring-1 ring-primary/30" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <edu.icon className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground">{edu.degree}</h4>
                      <p className="text-muted-foreground text-sm mt-1">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-4 mt-3 text-sm">
                        <span className="font-mono text-primary">{edu.grade}</span>
                        <span className="text-muted-foreground">{edu.year}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div className="space-y-8">
            {/* Achievements */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Trophy className="text-primary" />
                Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="glass glass-hover rounded-xl p-5 flex items-center gap-4"
                  >
                    <div className="p-3 rounded-lg bg-secondary/20">
                      <achievement.icon className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{achievement.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Award className="text-primary" />
                Certifications
              </h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="glass rounded-xl p-6"
              >
                <div className="flex flex-wrap gap-3">
                  {certifications.map((cert, index) => (
                    <motion.span
                      key={cert}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                      className="px-3 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {cert}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
