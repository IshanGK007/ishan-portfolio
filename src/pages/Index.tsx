import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import ExperienceSection from "@/components/ExperienceSection";
import CVDownload from "@/components/CVDownload";
import DreamCompany from "@/components/DreamCompany";
import Achievements from "@/components/Achievements";
import { Card } from "@/components/ui/card";
import "../styles/custom.css";
import { Code, Database, Brain, GitBranchIcon, GithubIcon, MailIcon, Server, Layout, FileCode, Box, RefreshCcw, LineChart, PenTool, Palette, Globe, Eye } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const messages = ["Welcome to my portfolio", "I'm Ishan Kulkarni"];
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (charIndex < messages[messageIndex].length) {
        setText((prev) => prev + messages[messageIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
          setCharIndex(0);
          setText("");
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [charIndex, messageIndex, messages]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-4"
            >
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-md">
                IK
              </div>
              <span className="text-xl font-semibold gradient-text">
                Ishan Kulkarni
              </span>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              {["home", "about", "education","experience", "projects", "skills", "achievements", "dream-company","business-cases", "cv", "contact"].map((section) => (
                <motion.button
                  key={section}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => smoothScroll(section)}
                  className={`${
                    activeSection === section
                      ? "text-indigo-600 font-medium"
                      : "text-slate-600 hover:text-indigo-500"
                  } capitalize transition-colors duration-200 relative group`}
                >
                  {section}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 hero-gradient">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="gradient-text typing-cursor">{text}</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto"
            >
              "Stay Hungry, Stay Foolish" - Aspiring Software Engineer
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center space-x-6"
            >
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/ishan-kulkarni-42361832a", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/IshanGK007/", label: "GitHub" },
                { icon: Mail, href: "mailto:ikishankulkarni16@gmail.com", label: "Email" },
                { icon: Phone, href: "tel:+918431457815", label: "Phone" },
              ].map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-slate-600 hover:text-indigo-500 transition-colors p-2 rounded-full hover:bg-slate-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50 text-gray-900 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-12"
          >
            About Me
          </motion.h2>

          <div className="flex flex-col-reverse md:flex-row justify-between items-center">
            {/* Left Section - Text Block */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full md:w-1/2 text-center md:text-left"
            >
              <p className="text-2xl mb-6">
                Hey, I’m <span className="font-bold text-blue-600">Ishan Kulkarni</span>, a passionate software engineer
                who loves to work at the intersection of technology and creativity. Currently pursuing a B.Tech in Computer
                Science & Engineering, I’m deeply interested in <strong>Machine Learning, AI, and Web Development</strong>.
              </p>

              <p className="text-2xl mb-6">
                My journey began with problem-solving, and today I’m excited to dive into complex challenges with innovative solutions.
                Whether it's coding a website or designing machine learning models, I’m always eager to explore new ideas and learn.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-lg">
                <div className="flex items-center space-x-2 bg-blue-50 hover:bg-blue-200 transition duration-300 ease-in-out p-4 rounded-xl">
                  <i className="fas fa-laptop-code text-blue-600 text-3xl"></i>
                  <span className="font-semibold">Web Development</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-50 hover:bg-blue-200 transition duration-300 ease-in-out p-4 rounded-xl">
                  <i className="fas fa-robot text-blue-600 text-3xl"></i>
                  <span className="font-semibold">Machine Learning</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-50 hover:bg-blue-200 transition duration-300 ease-in-out p-4 rounded-xl">
                  <i className="fas fa-database text-blue-600 text-3xl"></i>
                  <span className="font-semibold">Data Science</span>
                </div>
              </div>
            </motion.div>

            {/* Right Section - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full md:w-1/3 mb-8 md:mb-0"
            >
              <img 
                src="Ishan_image.png" 
                alt="Ishan Kulkarni" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-xl mb-4">
              When I'm not coding, I’m diving into new books, attending tech events, and collaborating with other
              passionate individuals in the tech community. I believe in continuous learning and strive to contribute to
              open-source projects and creative endeavors.
            </p>

            <p className="text-xl">
              Let’s connect! Feel free to reach out if you want to collaborate or just chat about technology.
            </p>
          </motion.div>
        </div>
      </section>




      <section id="education" className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center gradient-text mb-12"
          >
            Education
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "B.Tech",
                institution: "Engineering College",
                year: "2020-2024",
                details: "Computer Science & Engineering"
              },
              {
                title: "PUC",
                institution: "Pre-University College",
                year: "2018-2020",
                details: "Science Stream"
              },
              {
                title: "SSLC",
                institution: "Secondary School",
                year: "2018",
                details: "High School Education"
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow card-hover bg-white border border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{edu.title}</h3>
                  <p className="text-slate-600">{edu.institution}</p>
                  <p className="text-slate-500 text-sm">{edu.year}</p>
                  <p className="text-indigo-600 mt-2 text-sm">{edu.details}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ExperienceSection />

      <section id="projects" className="py-20 bg-gradient-to-b from-slate-50 to-white px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center gradient-text mb-12"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Text-Based 3D Object Retrieval",
                description: "Developed a system to retrieve 3D models using natural language queries by combining PointNet, EfficientNetV2, and CLIP for multi-modal embedding. Improved retrieval accuracy on the ANIMAR dataset and optimized feature extraction.",
                tech: ["Python", "PointNet", "EfficientNetV2", "CLIP"],
                icon: Brain,
              },
              {
                title: "Vision-Based Billing System",
                description: "Created an automated billing solution by detecting product instances in images using YOLOv11. Automated bill generation based on object count, achieving 94.33% mAP accuracy.",
                tech: ["Python", "YOLOv11", "Computer Vision", "Deep Learning"],
                icon: Code,
              },
              {
                title: "Car Rental System",
                description: "Built a full-stack platform for car rentals with Razorpay integration, JWT authentication, and RESTful APIs. Enhanced UX with OTP recovery and feedback system.",
                tech: ["React.js", "Node.js", "MongoDB", "Razorpay"],
                icon: Database,
              },
              {
                title: "Thyroid Disease Analysis",
                description: "Conducted EDA on thyroid datasets using Python and visualization libraries. Applied SMOTE for balancing and Gradient Boosting, achieving 96.37% accuracy.",
                tech: ["Python", "Pandas", "SMOTE", "Gradient Boosting"],
                icon: Brain,
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="col-span-1"
              >
                <Card className="p-6 h-full card-hover bg-white border border-slate-200">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-indigo-100 rounded-lg">
                      <project.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-3">{project.title}</h3>
                      <p className="text-slate-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      <section id="skills" className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center gradient-text mb-10"
          >
            Technical Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Programming Languages',
                skills: [
                  { name: 'C', icon: Code },
                  { name: 'C++', icon: Code },
                  { name: 'Python', icon: Code },
                  { name: 'JavaScript', icon: FileCode },
                ]
              },
              {
                category: 'Frontend',
                skills: [
                  { name: 'HTML', icon: Layout },
                  { name: 'CSS', icon: Palette },
                  { name: 'React.js', icon: RefreshCcw },
                  { name: 'Tailwind CSS', icon: PenTool },
                ]
              },
              {
                category: 'Backend',
                skills: [
                  { name: 'Node.js', icon: Server },
                  { name: 'Express.js', icon: Server },
                  { name: 'MongoDB', icon: Database },
                ]
              },
              {
                category: 'Libraries & Frameworks',
                skills: [
                  { name: 'NumPy', icon: Brain },
                  { name: 'Pandas', icon: LineChart },
                  { name: 'Seaborn', icon: LineChart },
                  { name: 'Scikit-learn', icon: Brain },
                  { name: 'PyTorch', icon: Brain },
                ]
              },
              {
                category: 'Computer Vision',
                skills: [
                  { name: 'OpenCV', icon: Eye },
                  { name: 'YOLO', icon: Box },
                ]
              },
              {
                category: 'Tools',
                skills: [
                  { name: 'Git', icon: GitBranchIcon },
                  { name: 'GitHub', icon: GithubIcon },
                  { name: 'Postman', icon: Globe },
                ]
              }
            ].map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded-xl p-4"
              >
                <h3 className="text-lg font-semibold mb-4 text-center text-slate-800">
                  {group.category}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {group.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.04 }}
                      className="bg-white rounded-lg p-2 text-center card-hover border border-slate-100 flex flex-col items-center gap-2"
                    >
                      <skill.icon className="w-6 h-6 text-indigo-600" />
                      <span className="text-slate-700 font-medium text-xs text-center">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      <Achievements />

      <DreamCompany />

      <section id="business-cases" className="py-20 bg-gradient-to-b from-slate-50 to-white px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center gradient-text mb-12"
          >
            Business Cases
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                title: "AI-Driven Creative Assistance",
                description: "Adobe can integrate AI into creative tools like Photoshop and Premiere Pro, offering features like auto-color correction, object recognition, and smart crop tools to help users enhance projects faster, driving productivity and creativity.",
                tech: ["AI", "Photoshop", "Premiere Pro", "Machine Learning"],
                icon: "Code",
              },
              {
                title: "Cloud-Based Digital Asset Management (DAM)",
                description: "Adobe Experience Manager enables businesses to store and manage digital assets in the cloud, providing seamless collaboration and automated metadata tagging to streamline asset management across teams globally.",
                tech: ["Cloud", "DAM", "AEM", "Automation"],
                icon: "Database",
              },
              {
                title: "E-Commerce Personalization and Marketing",
                description: "Adobe's AI-driven tools like Adobe Target and Adobe Sensei help e-commerce businesses personalize their storefronts and marketing campaigns, improving conversion rates and customer satisfaction with dynamic, tailored content.",
                tech: ["E-Commerce", "AI", "Adobe Target", "Personalization"],
                icon: "ShoppingCart",
              }
            ].map((businessCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="col-span-1"
              >
                <Card className="p-6 h-full card-hover bg-white border border-slate-200">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-indigo-100 rounded-lg">
                      {/* Render the icon */}
                      <i className={`w-6 h-6 text-indigo-600 ${businessCase.icon}`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-3">{businessCase.title}</h3>
                      <p className="text-slate-600 mb-4">{businessCase.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {businessCase.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      <CVDownload />

      <section id="contact" className="py-20 bg-slate-50 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center gradient-text mb-12"
          >
            Get in Touch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-xl p-8 border border-slate-200"
          >
            <p className="text-lg text-slate-600 mb-8 text-center">
              Ready to collaborate on innovative projects? Let's connect!
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  href: "mailto:ikishankulkarni16@gmail.com",
                  icon: MailIcon,
                  text: "ikishankulkarni16@gmail.com",
                  label: "Email"
                },
                {
                  href: "tel:+918431457815",
                  icon: Phone,
                  text: "+91-8431457815",
                  label: "Phone"
                },
                {
                  href: "https://www.linkedin.com/in/ishan-kulkarni-42361832a",
                  icon: Linkedin,
                  text: "LinkedIn Profile",
                  label: "LinkedIn"
                },
                {
                  href: "https://github.com/IshanGK007",
                  icon: GithubIcon,
                  text: "GitHub Profile",
                  label: "GitHub"
                }
              ].map(({ href, icon: Icon, text, label }, index) => (
                <motion.a
                  key={text}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center p-4 space-x-4 rounded-lg hover:bg-slate-50 transition-all group"
                >
                  <div className="p-3 bg-indigo-50 rounded-full group-hover:bg-indigo-100 transition-colors">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-indigo-600">{label}</span>
                    <span className="text-sm text-slate-600">{text}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
