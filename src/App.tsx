import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Mic2, Users, GraduationCap, Award, CheckCircle2, Globe2, BookOpen } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo-container">
            <img src="/logo.jpeg" alt="YouthXBharat Logo" className="logo-img" />
            <span>YouthXBharat</span>
          </a>
          <ul className="nav-links">
            <li><a href="#about" className="nav-link">About Us</a></li>
            <li><a href="#courses" className="nav-link">Courses</a></li>
            <li><a href="#hybrid" className="nav-link">Hybrid Program</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
          <a href="#courses" className="btn btn-primary" style={{ display: 'none' }}>Enroll Now</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-grid">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeIn}>
              Master the Art of <span className="title-highlight">Public Speaking</span> & MUNs
            </motion.h1>
            <motion.p variants={fadeIn}>
              Empowering the next generation of leaders with confidence, deliberation skills, and global awareness. Build your stage presence with YouthXBharat.
            </motion.p>
            <motion.div className="hero-actions" variants={fadeIn}>
              <a href="#courses" className="btn btn-primary">
                Explore Courses <ChevronRight size={20} />
              </a>
              <a href="#about" className="btn btn-secondary">
                Learn More
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Students participating in a Model United Nations" 
              className="hero-image"
            />
            <div className="floating-badge badge-top">
              <Award className="title-highlight" size={24} />
              <span>Expert Feedback</span>
            </div>
            <div className="floating-badge badge-bottom">
              <Users className="title-highlight" size={24} />
              <span>Real-time Exposure</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="title-center"
          >
            <h2 className="title">Why Model United Nations?</h2>
            <p className="subtitle">Develop crucial life skills that set you apart in academics and beyond.</p>
          </motion.div>

          <motion.div 
            className="features-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="feature-card" variants={fadeIn}>
              <div className="feature-icon-wrapper">
                <Mic2 size={32} />
              </div>
              <h3>Public Speaking</h3>
              <p>Overcome stage fright and develop a commanding stage presence that captures any audience.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeIn}>
              <div className="feature-icon-wrapper">
                <Award size={32} />
              </div>
              <h3>Confidence Building</h3>
              <p>Build unshakeable confidence from scratch through continuous mock sessions and personalized feedback.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeIn}>
              <div className="feature-icon-wrapper">
                <Globe2 size={32} />
              </div>
              <h3>Deliberation & Persuasion</h3>
              <p>Master the art of negotiation, understanding global topics, and convincing others of your viewpoints.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="section courses-bg">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="title-center"
          >
            <h2 className="title">Our <span className="title-highlight">Courses</span></h2>
            <p className="subtitle">Tailored learning paths designed for different age groups and experience levels.</p>
          </motion.div>

          <div className="courses-grid">
            {/* Beginner Course */}
            <motion.div 
              className="course-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="course-header">
                <h3>Beginner Course</h3>
                <span className="course-badge">4th - 7th Standard</span>
              </div>
              <div className="course-body">
                <div className="course-feature-list">
                  <div className="course-feature-item">
                    <CheckCircle2 className="feature-check" size={20} />
                    <p>Building confidence from scratch</p>
                  </div>
                  <div className="course-feature-item">
                    <CheckCircle2 className="feature-check" size={20} />
                    <p>Fundamentals of public speaking</p>
                  </div>
                  <div className="course-feature-item">
                    <CheckCircle2 className="feature-check" size={20} />
                    <p>Understanding basic global topics</p>
                  </div>
                  <div className="course-feature-item">
                    <CheckCircle2 className="feature-check" size={20} />
                    <p>Introduction to Model United Nations</p>
                  </div>
                  <div className="course-feature-item">
                    <CheckCircle2 className="feature-check" size={20} />
                    <p>Mock sessions with personal feedback</p>
                  </div>
                </div>
                <div style={{ marginTop: '2.5rem' }}>
                  <a href="#contact" className="btn btn-secondary" style={{ width: '100%' }}>Get Started</a>
                </div>
              </div>
            </motion.div>

            {/* Intermediate Course */}
            <motion.div 
              className="course-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="course-header">
                <h3>Intermediate Course</h3>
                <span className="course-badge">8th Standard and Above</span>
              </div>
              <div className="course-body">
                <div className="course-feature-list">
                  <div className="course-feature-item">
                    <CheckCircle2 className="feature-check" size={20} />
                    <p>Advanced public speaking and debate technique</p>
                  </div>
                  <div className="course-feature-item">
                    <CheckCircle2 className="feature-check" size={20} />
                    <p>In-depth research and geopolitics</p>
                  </div>
                  <div className="course-feature-item">
                    <CheckCircle2 className="feature-check" size={20} />
                    <p>Rules of procedures of the committee</p>
                  </div>
                  <div className="course-feature-item">
                    <CheckCircle2 className="feature-check" size={20} />
                    <p>Understanding MUN documentation</p>
                  </div>
                  <div className="course-feature-item">
                    <CheckCircle2 className="feature-check" size={20} />
                    <p>Comprehensive competition preparation</p>
                  </div>
                </div>
                <div style={{ marginTop: '2.5rem' }}>
                  <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>Get Started</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hybrid Program */}
      <section id="hybrid" className="section" style={{ paddingBottom: '8rem' }}>
        <div className="container">
          <motion.div 
            className="hybrid-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="hybrid-content">
              <h2>Hybrid <span className="title-highlight">Training Program</span></h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                Learn at your pace with our flexible online and in-person sessions. Master research, public speaking, and committee strategy through an immersive experience.
              </p>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <div style={{ padding: '0.5rem', background: '#ffedd5', borderRadius: '50%', color: 'var(--primary)' }}>
                    <Users size={20} />
                  </div>
                  <span><strong>Intra MUN Conference:</strong> Real time exposure</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <div style={{ padding: '0.5rem', background: '#ffedd5', borderRadius: '50%', color: 'var(--primary)' }}>
                    <GraduationCap size={20} />
                  </div>
                  <span><strong>Expert Guidance:</strong> Experienced Executive Board</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <div style={{ padding: '0.5rem', background: '#ffedd5', borderRadius: '50%', color: 'var(--primary)' }}>
                    <BookOpen size={20} />
                  </div>
                  <span><strong>Practical Focus:</strong> Build strong agenda understanding</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <div style={{ padding: '0.5rem', background: '#ffedd5', borderRadius: '50%', color: 'var(--primary)' }}>
                    <Award size={20} />
                  </div>
                  <span><strong>Recognition:</strong> Trophies and detailed personalized feedback</span>
                </li>
              </ul>
            </div>
            
            <div style={{ position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Students in a training session" 
                style={{ width: '100%', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h2>
                <img src="/logo.jpeg" alt="Logo" style={{ height: '32px', borderRadius: '4px' }} />
                YouthXBharat
              </h2>
              <p>Empowering students to become confident speakers, strategic thinkers, and global leaders through comprehensive Model United Nations training.</p>
            </div>
            
            <div className="footer-links">
              <h4>Programs</h4>
              <ul>
                <li><a href="#courses">Beginner Course</a></li>
                <li><a href="#courses">Intermediate Course</a></li>
                <li><a href="#hybrid">Hybrid Training</a></li>
                <li><a href="#hybrid">Intra MUN Conference</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Contact Us</h4>
              <ul>
                <li><a href="mailto:info@youthxbharat.com">info@youthxbharat.com</a></li>
                <li><a href="#">Join our Community</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} YouthXBharat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
