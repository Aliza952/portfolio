import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Shield, Code, Cpu, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", name: "All", icon: Code },
  { id: "cybersecurity", name: "Cybersecurity", icon: Shield },
  { id: "ai", name: "AI/ML", icon: Cpu },
  { id: "web", name: "Web Dev", icon: Code },
  { id: "hardware", name: "Hardware", icon: Wrench },
];

const projects = [
  {
    title: "StormBreaker Analysis",
    description: "Comprehensive analysis of StormBreaker phishing tool, documenting attack vectors and mitigation strategies.",
    category: "cybersecurity",
    tech: ["Python", "Wireshark", "Linux"],
    featured: true,
  },
  {
    title: "Android RAT Analysis",
    description: "Reverse engineering and behavioral analysis of Android Remote Access Trojans for threat intelligence.",
    category: "cybersecurity",
    tech: ["Android", "Frida", "APKTool", "Java"],
    featured: true,
  },
  {
    title: "WannaCry Ransomware Analysis",
    description: "In-depth study of WannaCry ransomware including propagation mechanisms and decryption possibilities.",
    category: "cybersecurity",
    tech: ["Python", "IDA Pro", "Volatility"],
  },
  {
    title: "CVE Scanner",
    description: "Automated vulnerability scanner that checks systems against known CVE databases.",
    category: "cybersecurity",
    tech: ["Python", "NVD API", "Nmap"],
  },
  {
    title: "Password Security Assessment",
    description: "Tool for evaluating password strength and detecting common vulnerabilities in authentication systems.",
    category: "cybersecurity",
    tech: ["Python", "Hashcat", "John the Ripper"],
  },
  {
    title: "Metaverse 3D Campus Tour",
    description: "Immersive virtual reality campus tour built with Three.js and WebXR technologies.",
    category: "web",
    tech: ["Three.js", "React", "WebXR", "Blender"],
    featured: true,
  },
  {
    title: "Face Attendance System",
    description: "Automated attendance tracking using facial recognition with real-time processing.",
    category: "ai",
    tech: ["Python", "OpenCV", "TensorFlow", "Flask"],
    featured: true,
  },
  {
    title: "AI Quality Prediction",
    description: "Machine learning model for predicting product quality in manufacturing processes.",
    category: "ai",
    tech: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
  },
  {
    title: "AI Mock Interview",
    description: "AI-powered interview preparation platform with real-time feedback and analysis.",
    category: "ai",
    tech: ["React", "OpenAI API", "Node.js", "MongoDB"],
  },
  {
    title: "Document PDF Parser",
    description: "Intelligent document parser for extracting and structuring data from PDF files.",
    category: "ai",
    tech: ["Python", "PyPDF2", "NLP", "Tesseract"],
  },
  {
    title: "Library Management System",
    description: "Full-stack library management solution with book tracking and user management.",
    category: "web",
    tech: ["React", "Node.js", "PostgreSQL", "JWT"],
  },
  {
    title: "PPE Detection System",
    description: "Computer vision system for detecting proper PPE usage in industrial settings.",
    category: "ai",
    tech: ["Python", "YOLO", "OpenCV", "TensorFlow"],
  },
  {
    title: "Motion Detection System",
    description: "Real-time motion detection and alert system for security applications.",
    category: "hardware",
    tech: ["Python", "OpenCV", "Raspberry Pi", "GPIO"],
  },
  {
    title: "Smart Door Lock System",
    description: "IoT-based door lock with multiple authentication methods and remote access.",
    category: "hardware",
    tech: ["Arduino", "RFID", "C++", "Firebase"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-primary text-sm">03. </span>
          <h2 className="text-3xl md:text-4xl font-bold inline text-foreground">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat.id)}
              className="gap-2"
            >
              <cat.icon size={16} />
              {cat.name}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index % 6) }}
              className={`glass glass-hover rounded-xl p-6 group relative ${
                project.featured ? "ring-1 ring-primary/30" : ""
              }`}
            >
              {project.featured && (
                <span className="absolute top-4 right-4 text-xs font-mono px-2 py-1 rounded bg-primary/20 text-primary">
                  Featured
                </span>
              )}
              
              <div className="flex items-center gap-2 mb-4">
                {project.category === "cybersecurity" && (
                  <Shield className="text-primary" size={24} />
                )}
                {project.category === "ai" && (
                  <Cpu className="text-primary" size={24} />
                )}
                {project.category === "web" && (
                  <Code className="text-primary" size={24} />
                )}
                {project.category === "hardware" && (
                  <Wrench className="text-primary" size={24} />
                )}
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-1 rounded bg-muted text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/50">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
