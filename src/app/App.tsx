import { Mail, Linkedin, Github, Download, ExternalLink, GraduationCap, Code, Database, Wrench, Award, Languages, Music2, Plane, PenTool, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './components/ui/button';
import { useState } from 'react';


export default function App() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4
      }
    })
  };

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#000814' }}>
      {/* Premium Dark Background with Gradient Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Base Dark Navy */}
        <div className="absolute inset-0" style={{ background: '#000814' }} />
        
        {/* Top Right Bright Blue-White Glow */}
        <div 
          className="absolute -top-1/2 -right-1/4 w-[1200px] h-[1200px]"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(96,165,250,0.25) 15%, rgba(59,130,246,0.2) 30%, rgba(37,99,235,0.15) 45%, transparent 70%)',
            filter: 'blur(120px)',
            opacity: 0.8
          }}
        />
        
        {/* Right Side Blue Glow */}
        <div 
          className="absolute top-1/4 -right-1/3 w-[900px] h-[900px]"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(37,99,235,0.25) 30%, rgba(30,58,138,0.15) 50%, transparent 70%)',
            filter: 'blur(100px)',
            opacity: 0.9
          }}
        />
        
        {/* Purple/Violet Accent Glow */}
        <div 
          className="absolute top-1/3 right-0 w-[700px] h-[800px]"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(109,40,217,0.15) 40%, transparent 70%)',
            filter: 'blur(90px)',
            opacity: 0.6
          }}
        />
        
        {/* Subtle Left Side Dark Blue Accent */}
        <div 
          className="absolute top-1/2 -left-1/4 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(circle, rgba(30,58,138,0.15) 0%, rgba(17,24,39,0.1) 50%, transparent 70%)',
            filter: 'blur(80px)',
            opacity: 0.5
          }}
        />
        
        {/* Diagonal Light Beams Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(59,130,246,0.03) 40%, transparent 60%, rgba(139,92,246,0.02) 80%, transparent 100%)',
            opacity: 0.4
          }}
        />
        
        {/* Noise/Texture Overlay for Depth */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 4px)',
            opacity: 0.15
          }}
        />
      </div>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-10 lg:px-20 relative z-10">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-6 text-center lg:text-left"
          >
            <motion.div variants={itemVariants}>
              <p className="text-base md:text-lg" style={{ color: '#38BDF8' }}>Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mt-2" style={{ color: '#F8FAFC' }}>Tanmay Bera</h1>
              <p className="text-lg md:text-xl lg:text-2xl mt-3" style={{ color: '#CBD5E1' }}>Web Developer | WordPress & PHP Developer</p>
            </motion.div>

            <motion.p variants={itemVariants} className="text-base md:text-lg" style={{ color: '#CBD5E1' }}>
              B.Tech Computer Science student with hands-on experience in WordPress, PHP, and Laravel.
            </motion.p>

            <motion.div variants={buttonVariants} className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection('projects')}
                  className="h-12 w-full sm:w-auto px-8 rounded-xl transition-all duration-300"
                  style={{ 
                    backgroundColor: '#38BDF8', 
                    color: '#0F172A',
                    boxShadow: '0 0 0 rgba(56, 189, 248, 0)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#56C9FB';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(56, 189, 248, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#38BDF8';
                    e.currentTarget.style.boxShadow = '0 0 0 rgba(56, 189, 248, 0)';
                  }}
                >
                  View Projects
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://drive.google.com/file/d/1oWCjEMQGUhC6foA5wEXVNM708pUZv7At/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Button
                  variant="outline"
                  className="h-12 w-full sm:w-auto px-8 rounded-xl border-2 transition-all duration-300"
                  style={{ 
                    borderColor: '#38BDF8', 
                    color: '#38BDF8', 
                    backgroundColor: 'transparent',
                    boxShadow: '0 0 0 rgba(56, 189, 248, 0)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.1)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(56, 189, 248, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.boxShadow = '0 0 0 rgba(56, 189, 248, 0)';
                  }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </a>
              </motion.div>
            </motion.div>

            <div className="flex gap-4 pt-4 justify-center lg:justify-start">
              {[
                { icon: Mail, href: 'mailto:tbera717@gmail.com' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/tanmay0021/' },
                { icon: Github, href: 'https://github.com/TANMAY0021' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={socialVariants}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-3 rounded-xl border-2 transition-all duration-300"
                  style={{ borderColor: '#1E293B', color: '#CBD5E1' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#38BDF8';
                    e.currentTarget.style.color = '#38BDF8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#1E293B';
                    e.currentTarget.style.color = '#CBD5E1';
                  }}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            whileHover={{ y: -8 }}
            className="relative flex items-center justify-center"
          >
            {/* Outer Glow */}
            <div
              className="absolute w-[300px] h-[300px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(56,189,248,0.35) 0%, rgba(37,99,235,0.25) 40%, transparent 70%)',
                filter: 'blur(60px)'
              }}
            />

            {/* Glass Orb */}
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                border: '2px solid rgba(56,189,248,0.35)',
                boxShadow:
                  '0 30px 80px rgba(0,0,0,0.6), inset 0 0 40px rgba(255,255,255,0.08)'
              }}
            >
              {/* Profile Image */}
            <img
              src="https://drive.google.com/thumbnail?id=1-Yceo0ICa6XgHNJ3tgzy8PWjgKtLvciO&sz=w1000"
              alt="Tanmay Bera"
              className="w-full h-full object-cover scale-105"
              referrerPolicy="no-referrer"
            />


              {/* Light Reflection */}
              <div
                className="absolute top-6 left-8 w-24 h-24 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.35), transparent 70%)',
                  opacity: 0.4
                }}
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-12 md:py-16 lg:py-20 px-4 md:px-10 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-8 md:mb-12" style={{ color: '#F8FAFC' }}>👋 About Me</h2>
            <motion.div 
              className="p-6 md:p-8 rounded-2xl transition-all duration-300"
              style={{ backgroundColor: '#1E293B' }}
              whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
            >
              <p className="text-base md:text-lg leading-relaxed" style={{ color: '#CBD5E1' }}>
                I am a B.Tech student in Computer Science and Business Systems with strong skills in PHP, WordPress, Laravel, and MySQL. 
                I have completed multiple professional trainings and developed real-world projects including management systems and tools. 
                I focus on clean UI, good UX, and scalable web solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 md:py-16 lg:py-20 px-4 md:px-10 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-8 md:mb-12" style={{ color: '#F8FAFC' }}>🎓 Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'B.Tech – Computer Science & Business Systems',
                  institution: 'Gargi Memorial Institute of Technology',
                  grade: 'CGPA: 7.3 | 2022–2026'
                },
                {
                  title: 'Higher Secondary – WBCHSE',
                  institution: 'Ruinan High School',
                  grade: '93.8% | 2020–2022'
                },
                {
                  title: 'Secondary – WBBSE',
                  institution: 'Ruinan High School',
                  grade: '79.14% | 2020'
                }
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 2px rgba(56, 189, 248, 0.3)'
                  }}
                  className="p-6 md:p-8 rounded-2xl transition-all duration-300"
                  style={{ backgroundColor: '#1E293B' }}
                >
                  <GraduationCap className="h-10 w-10 mb-4" style={{ color: '#38BDF8' }} />
                  <h3 className="text-lg md:text-xl mb-2" style={{ color: '#F8FAFC' }}>{edu.title}</h3>
                  <p style={{ color: '#CBD5E1' }}>{edu.institution}</p>
                  <p className="mt-3" style={{ color: '#38BDF8' }}>{edu.grade}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 md:py-16 lg:py-20 px-4 md:px-10 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-8 md:mb-12" style={{ color: '#F8FAFC' }}>🛠 Skills</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { icon: Code, title: 'Languages', desc: 'C, PHP, SQL' },
                { icon: Wrench, title: 'Frameworks', desc: 'Laravel' },
                { icon: Database, title: 'Platforms', desc: 'WordPress, MySQL' },
                { icon: PenTool, title: 'Tools', desc: 'Photoshop, Excel, PowerPoint' }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 2px rgba(56, 189, 248, 0.3)'
                  }}
                  onHoverStart={() => setHoveredSkill(index)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className="p-4 md:p-6 rounded-2xl text-center transition-all duration-300"
                  style={{ backgroundColor: '#1E293B' }}
                >
                  <motion.div
                    animate={{ 
                      rotate: hoveredSkill === index ? 5 : 0,
                      scale: hoveredSkill === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <skill.icon 
                      className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-4" 
                      style={{ color: hoveredSkill === index ? '#38BDF8' : '#56C9FB' }} 
                    />
                  </motion.div>
                  <h3 className="mb-2 text-sm md:text-base" style={{ color: '#F8FAFC' }}>{skill.title}</h3>
                  <p className="text-xs md:text-sm" style={{ color: '#CBD5E1' }}>{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-16 lg:py-20 px-4 md:px-10 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-8 md:mb-12" style={{ color: '#F8FAFC' }}>🚀 Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                {
                  title: 'Restaurant Management System',
                  tags: ['PHP', 'Laravel', 'MySQL'],
                  desc: 'System to manage restaurant operations and records.',
                  link: 'https://github.com/TANMAY0021/restaurant_Project'
                },
                {
                  title: 'Membership Management System',
                  tags: ['WordPress', 'PHP'],
                  desc: 'Membership-based site with user access control.',
                  link: 'https://membership21.infinityfreeapp.com'
                },
                {
                  title: 'Encoder Decoder Tool',
                  tags: ['Python'],
                  desc: 'Encoding & decoding tool for cybersecurity learning.',
                  link: 'https://github.com/TANMAY0021/Encoder-Decoder.git'
                },
                {
                  title: 'Fire Alarm System',
                  tags: ['IoT'],
                  desc: 'IoT-based fire detection and alert system.',
                  link: null
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 2px rgba(56, 189, 248, 0.4)'
                  }}
                  className="p-6 md:p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 cursor-pointer"
                  style={{ 
                    backgroundColor: 'rgba(30, 41, 59, 0.5)',
                    borderColor: 'rgba(56, 189, 248, 0.2)'
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl md:text-2xl" style={{ color: '#F8FAFC' }}>{project.title}</h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.div whileHover={{ scale: 1.2, rotate: 45 }}>
                          <ExternalLink className="h-6 w-6" style={{ color: '#38BDF8' }} />
                        </motion.div>
                      </a>
                    )}
                  </div>
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg text-xs md:text-sm" style={{ backgroundColor: '#38BDF8', color: '#0F172A' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm md:text-base" style={{ color: '#CBD5E1' }}>{project.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trainings & Certifications Section */}
      <section id="certifications" className="py-12 md:py-16 lg:py-20 px-4 md:px-10 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-8 md:mb-12" style={{ color: '#F8FAFC' }}>📜 Trainings & Certifications</h2>
            <div className="space-y-4">
              {[
                { title: 'PHP & Laravel', org: 'Euphoria GenX | Aug–Sep 2025' },
                { title: 'Cyber Security', org: 'Euphoria GenX | Feb–Mar 2025' },
                { title: 'PHP WordPress', org: 'Techno Exponent | Aug–Oct 2024' },
                { title: 'Web Development', org: 'Euphoria GenX | Dec 2023–Feb 2024' }
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ x: 10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' }}
                  className="p-4 md:p-6 rounded-2xl flex items-center gap-4 transition-all duration-300"
                  style={{ backgroundColor: '#1E293B' }}
                >
                  <Award className="h-6 w-6 md:h-8 md:w-8 flex-shrink-0" style={{ color: '#38BDF8' }} />
                  <div>
                    <h3 className="text-lg md:text-xl" style={{ color: '#F8FAFC' }}>{cert.title}</h3>
                    <p className="text-sm md:text-base" style={{ color: '#CBD5E1' }}>{cert.org}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Languages & Hobbies Section */}
      <section id="languages-hobbies" className="py-12 md:py-16 lg:py-20 px-4 md:px-10 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl mb-6 md:mb-8" style={{ color: '#F8FAFC' }}>🌐 Languages</h2>
              <div className="space-y-4">
                {['English', 'Hindi', 'Bengali'].map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' }}
                    className="p-4 md:p-6 rounded-2xl flex items-center gap-4 transition-all duration-300"
                    style={{ backgroundColor: '#1E293B' }}
                  >
                    <Languages className="h-6 w-6 md:h-8 md:w-8" style={{ color: '#38BDF8' }} />
                    <span className="text-lg md:text-xl" style={{ color: '#CBD5E1' }}>{lang}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl mb-6 md:mb-8" style={{ color: '#F8FAFC' }}>🎯 Hobbies</h2>
              <div className="space-y-4">
                {[
                  { icon: Music2, text: 'Listening to music' },
                  { icon: PenTool, text: 'Editing' },
                  { icon: Plane, text: 'Traveling' }
                ].map((hobby, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' }}
                    className="p-4 md:p-6 rounded-2xl flex items-center gap-4 transition-all duration-300"
                    style={{ backgroundColor: '#1E293B' }}
                  >
                    <hobby.icon className="h-6 w-6 md:h-8 md:w-8" style={{ color: '#38BDF8' }} />
                    <span className="text-lg md:text-xl" style={{ color: '#CBD5E1' }}>{hobby.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 lg:py-20 px-4 md:px-10 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-2xl text-center"
            style={{ backgroundColor: '#1E293B' }}
          >
            <h2 className="text-3xl md:text-4xl mb-6 md:mb-8" style={{ color: '#F8FAFC' }}>📩 Get In Touch</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8" style={{ color: '#CBD5E1' }}>
              I'm currently looking for new opportunities. Feel free to reach out!
            </p>
            
            <div className="flex flex-col gap-4 max-w-md mx-auto mb-6 md:mb-8">
              <motion.a
                href="mailto:tbera717@gmail.com"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(56, 189, 248, 0.3)' }}
                className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300"
                style={{ backgroundColor: '#0F172A' }}
              >
                <Mail className="h-6 w-6" style={{ color: '#38BDF8' }} />
                <span className="text-sm md:text-base" style={{ color: '#CBD5E1' }}>tbera717@gmail.com</span>
              </motion.a>
              <motion.a
                href="tel:+917679013815"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(56, 189, 248, 0.3)' }}
                className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300"
                style={{ backgroundColor: '#0F172A' }}
              >
                <Phone className="h-6 w-6" style={{ color: '#38BDF8' }} />
                <span className="text-sm md:text-base" style={{ color: '#CBD5E1' }}>+91 7679013815</span>
              </motion.a>
            </div>

            <div className="flex gap-4 justify-center">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/in/tanmay0021/' },
                { icon: Github, href: 'https://github.com/TANMAY0021' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-4 rounded-xl border-2 transition-all duration-300"
                  style={{ borderColor: '#38BDF8', color: '#38BDF8' }}
                >
                  <social.icon className="h-8 w-8" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Mobile Contact Button */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('contact')}
          className="px-8 py-4 rounded-full shadow-2xl"
          style={{ 
            backgroundColor: '#38BDF8', 
            color: '#0F172A',
            boxShadow: '0 10px 30px rgba(56, 189, 248, 0.5)'
          }}
        >
          Hire Me
        </motion.button>
      </div>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 md:px-10 lg:px-20 border-t relative z-10" style={{ borderColor: '#1E293B' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm md:text-base" style={{ color: '#CBD5E1' }}>© 2025 Tanmay Bera. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}