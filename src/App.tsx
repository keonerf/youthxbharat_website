import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo-container">
          <img src="/logo.jpeg" alt="YouthXBharat" className="logo-img" />
          <span>YouthXBharat</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#courses" className="nav-link">Programs</a></li>
          <li><a href="#hybrid" className="nav-link">Hybrid</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <motion.div className="hero-content" variants={stagger} initial="hidden" animate="visible">
          <motion.span className="kicker" variants={fadeUp}>Model United Nations Academy</motion.span>
          <motion.h1 className="title-display" variants={fadeUp}>
            Master the art of <br />
            <em>deliberation.</em>
          </motion.h1>
          <motion.p className="subtitle" variants={fadeUp}>
            A sophisticated curriculum designed to build unshakeable confidence, refined stage presence, and global awareness for the next generation of leaders.
          </motion.p>
          <motion.div className="hero-actions" variants={fadeUp}>
            <a href="#courses" className="btn btn-primary">Discover Programs</a>
            <a href="#about" className="btn btn-secondary">Our Philosophy</a>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, clipPath: 'inset(10% 10% 10% 10%)' }}
          animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <img 
            src="https://images.unsplash.com/photo-1475721028070-2051152a4cb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Minimalist architecture representing structure and order" 
            className="hero-image"
          />
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          <span className="kicker">Why YouthXBharat</span>
          <h2 className="title-section">Elevating potential.</h2>
          <p className="about-text" style={{ marginTop: '2rem' }}>
            We believe that true leadership begins with the ability to articulate thought. Our methodology strips away the fear of public speaking, replacing it with a structured, confident approach to global discourse.
          </p>
        </motion.div>
        
        <motion.div className="features-list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          <motion.div className="feature-item" variants={fadeUp}>
            <h3>Public Speaking</h3>
            <p>Develop a commanding stage presence that captures any audience through refined vocal techniques and body language.</p>
          </motion.div>
          <motion.div className="feature-item" variants={fadeUp}>
            <h3>Confidence Architecture</h3>
            <p>Build unshakeable confidence systematically through mock sessions, debate frameworks, and highly personalized feedback.</p>
          </motion.div>
          <motion.div className="feature-item" variants={fadeUp}>
            <h3>Persuasion & Deliberation</h3>
            <p>Master the subtle art of negotiation, global topic analysis, and convincing deliberation in high-stakes environments.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Courses() {
  return (
    <section id="courses" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center' }}>
          <span className="kicker">Curriculum</span>
          <h2 className="title-section">Academic Programs</h2>
          <p className="subtitle" style={{ margin: '0 auto' }}>Tailored frameworks designed for precision and excellence.</p>
        </motion.div>

        <div className="courses-container">
          <motion.div className="course-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="course-header">
              <span className="course-badge">Foundation // 4th—7th Standard</span>
              <h3 style={{ marginTop: '1rem' }}>Beginner Form</h3>
            </div>
            <ul className="course-features">
              <li>Building confidence from the ground up</li>
              <li>Fundamentals of stage presence and speech</li>
              <li>Introduction to global geopolitical topics</li>
              <li>Core mechanisms of Model United Nations</li>
              <li>Evaluative mock sessions with personal critique</li>
            </ul>
          </motion.div>

          <motion.div className="course-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="course-header">
              <span className="course-badge">Advanced // 8th Standard +</span>
              <h3 style={{ marginTop: '1rem' }}>Intermediate Form</h3>
            </div>
            <ul className="course-features">
              <li>Advanced debate strategy and technique</li>
              <li>In-depth geopolitical research methodologies</li>
              <li>Mastery of committee rules of procedure</li>
              <li>Complex documentation and resolution drafting</li>
              <li>Comprehensive competitive conference preparation</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HybridProgram() {
  return (
    <section id="hybrid" className="hybrid-banner">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <span className="kicker" style={{ color: '#ffffff' }}>The Next Level</span>
          <h2 className="title-section">Hybrid Training Environment</h2>
          <p className="subtitle">
            A flexible, intensive methodology bridging online pace with in-person immersion.
          </p>
        </motion.div>
        
        <motion.div className="hybrid-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div className="hybrid-stat" variants={fadeUp}>
            <h4>Intra MUN Conference</h4>
            <p>Real-time, high-stakes exposure to apply learned strategies.</p>
          </motion.div>
          <motion.div className="hybrid-stat" variants={fadeUp}>
            <h4>Executive Board</h4>
            <p>Guidance from highly experienced, seasoned professionals.</p>
          </motion.div>
          <motion.div className="hybrid-stat" variants={fadeUp}>
            <h4>Agenda Documentation</h4>
            <p>Build robust understanding of drafting and committee strategy.</p>
          </motion.div>
          <motion.div className="hybrid-stat" variants={fadeUp}>
            <h4>Personalized Critique</h4>
            <p>Detailed performance analytics, feedback, and tangible recognition.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>
              <img src="/logo.jpeg" alt="Logo" style={{ height: '24px', borderRadius: '2px', filter: 'grayscale(100%)' }} />
              YouthXBharat
            </h2>
            <p>Structuring thought. Empowering voices. Cultivating the leaders of tomorrow.</p>
          </div>
          <div className="footer-links">
            <h4>Index</h4>
            <ul>
              <li><a href="#about">Philosophy</a></li>
              <li><a href="#courses">Academic Programs</a></li>
              <li><a href="#hybrid">Hybrid Environment</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:info@youthxbharat.com">info@youthxbharat.com</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} YouthXBharat. All rights reserved.</p>
          <p>Design Language: Minimal</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="divider" />
        <About />
        <Courses />
        <HybridProgram />
      </main>
      <Footer />
    </>
  );
}

export default App;
