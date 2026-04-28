import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] as const } }
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
        <a href="#" className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'var(--text)' }}>
          <img src="/youthxbharat_logo.jpeg" alt="YouthXBharat Logo" style={{ height: '36px', width: '36px', borderRadius: '50%', objectFit: 'cover' }} />
          <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>YouthXBharat</span>
        </a>
        <ul className="nav-links">
          <li><a href="#conference" className="nav-link">Conference Management</a></li>
          <li><a href="#academy" className="nav-link">Model UN Academy</a></li>
          <li><a href="#events" className="nav-link">Events</a></li>
          <li><a href="#team" className="nav-link">Our Team</a></li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: 'radial-gradient(circle at center, rgba(154, 52, 18, 0.04) 0%, transparent 60%)' }}>
      <div className="container">
        <motion.div className="hero-content" style={{ margin: '0 auto', maxWidth: '1200px' }} variants={stagger} initial="hidden" animate="visible">
          <motion.span className="kicker" variants={fadeUp}>Empowering the next generation</motion.span>
          <motion.h1 className="title-display" variants={fadeUp} style={{ lineHeight: 1.2 }}>
            <span style={{ whiteSpace: 'nowrap', fontWeight: 800, display: 'block', marginBottom: '1.25rem' }}>Shaping global leaders through</span>
            <em className="cursor-animate" style={{ fontWeight: 800 }}>deliberation & discourse.</em>
          </motion.h1>
          <motion.p className="subtitle" variants={fadeUp} style={{ margin: '0 auto 3rem auto', maxWidth: '800px' }}>
            A sophisticated platform combining premier conference management with elite Model UN training to build unshakeable confidence and global awareness.
          </motion.p>
          <motion.div className="hero-actions" variants={fadeUp} style={{ justifyContent: 'center' }}>
            <a href="#academy" className="btn btn-primary">Join the Academy</a>
            <a href="#conference" className="btn btn-secondary">Explore Management</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ConferenceManagement() {
  return (
    <section id="conference" className="section">
      <div className="container about-grid">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          <span className="kicker">Services</span>
          <h2 className="title-section">Conference Management.</h2>
          <p className="about-text" style={{ marginTop: '2rem' }}>
            Delivering seamless, high-end organizational experiences. From conceptualization to execution, we ensure every conference runs with absolute precision and professionalism.
          </p>
        </motion.div>
        
        <motion.div className="features-list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          <motion.div className="feature-item" variants={fadeUp}>
            <h3>End-to-End Execution</h3>
            <p>Comprehensive logistical planning, vendor management, and on-site coordination to guarantee a flawless event experience.</p>
          </motion.div>
          <motion.div className="feature-item" variants={fadeUp}>
            <h3>Executive Board Curation</h3>
            <p>Sourcing and integrating experienced, highly qualified Executive Board members to elevate the quality of debate.</p>
          </motion.div>
          <motion.div className="feature-item" variants={fadeUp}>
            <h3>Strategic Marketing</h3>
            <p>Targeted outreach and branding strategies to maximize delegate turnout and institutional prestige.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ModelUNAcademy() {
  return (
    <section id="academy" className="section">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="kicker">Education</span>
          <h2 className="title-section">Model UN Academy</h2>
          <p className="subtitle" style={{ margin: '0 auto 1.5rem auto' }}>
            In collaboration with <strong>Vineeta Malani Classes</strong>
          </p>
          <img src="/vmc_logo.png" alt="Vineeta Malani Classes" style={{ height: '60px', objectFit: 'contain' }} />
        </motion.div>

        <div className="courses-container">
          <motion.div className="course-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="course-header">
              <span className="course-badge">Foundation // 4th—7th Standard</span>
              <h3 style={{ marginTop: '1rem' }}>Beginner Form</h3>
            </div>
            <ul className="course-features" style={{ marginBottom: '3rem' }}>
              <li>Building confidence from the ground up</li>
              <li>Fundamentals of stage presence and speech</li>
              <li>Introduction to global geopolitical topics</li>
              <li>Core mechanisms of Model United Nations</li>
              <li>Evaluative mock sessions with personal critique</li>
            </ul>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfTYNtn5VeKgOD7sQbmWOZqHVaP5NCsIYhqnswoGOWVV37MHg/viewform?usp=pp_url" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: '100%' }}>Academy Registration Link</a>
          </motion.div>

          <motion.div className="course-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="course-header">
              <span className="course-badge">Advanced // 8th Standard +</span>
              <h3 style={{ marginTop: '1rem' }}>Intermediate Form</h3>
            </div>
            <ul className="course-features" style={{ marginBottom: '3rem' }}>
              <li>Advanced debate strategy and technique</li>
              <li>In-depth geopolitical research methodologies</li>
              <li>Mastery of committee rules of procedure</li>
              <li>Complex documentation and resolution drafting</li>
              <li>Comprehensive competitive conference preparation</li>
            </ul>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfTYNtn5VeKgOD7sQbmWOZqHVaP5NCsIYhqnswoGOWVV37MHg/viewform?usp=pp_url" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: '100%' }}>Academy Registration Link</a>
          </motion.div>
        </div>

        <motion.div className="course-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ marginTop: '4rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Conference Crash Course</h3>
          <p style={{ color: 'var(--text-light)', marginBottom: '2rem', maxWidth: '800px', lineHeight: 1.6 }}>
            Offered to all students a day or two before their conferences. This intensive preparation session ensures delegates are fully equipped, confident, and ready for their upcoming event.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd4CcZgN46t7rrhL-Y0g0BFb_37k53WvhHuIDzbC2nO0mYzxQ/viewform?usp=pp_url" target="_blank" rel="noreferrer" className="btn btn-secondary">Crash Course Registration Link</a>
        </motion.div>
      </div>
    </section>
  );
}

function Events() {
  return (
    <section id="events" className="section">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="kicker">What We Have Done</span>
          <h2 className="title-section">Past Events & Milestones</h2>
          <p className="subtitle" style={{ margin: '0 auto' }}>
            A legacy of excellence in hosting, managing, and inspiring through high-caliber conferences.
          </p>
        </motion.div>
        
        <motion.div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div className="course-card" variants={fadeUp}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Flagship Conferences</h4>
            <p style={{ color: 'var(--text-light)' }}>Successfully hosted multiple large-scale Model UN conferences with delegates from across the region.</p>
          </motion.div>
          <motion.div className="course-card" variants={fadeUp}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Institutional Collaborations</h4>
            <p style={{ color: 'var(--text-light)' }}>Partnered with prestigious educational institutions to elevate their debate and discourse platforms.</p>
          </motion.div>
          <motion.div className="course-card" variants={fadeUp}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Training Workshops</h4>
            <p style={{ color: 'var(--text-light)' }}>Conducted intensive public speaking and research workshops impacting hundreds of emerging leaders.</p>
          </motion.div>
          <motion.div className="course-card" variants={fadeUp}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Global Discourse</h4>
            <p style={{ color: 'var(--text-light)' }}>Facilitated discussions on critical global agendas, resulting in highly detailed student resolutions.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="section">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="kicker">Leadership</span>
          <h2 className="title-section">The YouthXBharat Team</h2>
          <p className="subtitle" style={{ margin: '0 auto' }}>Dedicated professionals shaping the future of global discourse.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center' }}>
            <div style={{ width: '130px', height: '130px', margin: '0 auto 1.5rem auto', borderRadius: '50%', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <img src="/shivika.jpeg" alt="Shivika Pandey" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 10%', transform: 'scale(1.05)' }} />
            </div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Shivika Pandey</h4>
            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginTop: '0.25rem' }}>Chief Marketing Officer</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center' }}>
            <div style={{ width: '130px', height: '130px', margin: '0 auto 1.5rem auto', borderRadius: '50%', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <img src="/arihant.jpeg" alt="Arihant" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', transform: 'scale(1.4)' }} />
            </div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Arihant</h4>
            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginTop: '0.25rem' }}>Chief Operating Officer</p>
          </motion.div>

          {/* Blank spaces for other team members */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center' }}>
            <div style={{ width: '130px', height: '130px', backgroundColor: 'var(--background)', borderRadius: '50%', margin: '0 auto 1.5rem auto', border: '1px solid var(--border)' }}></div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 600 }}>&nbsp;</h4>
            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginTop: '0.25rem' }}>&nbsp;</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center' }}>
            <div style={{ width: '130px', height: '130px', backgroundColor: 'var(--background)', borderRadius: '50%', margin: '0 auto 1.5rem auto', border: '1px solid var(--border)' }}></div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 600 }}>&nbsp;</h4>
            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginTop: '0.25rem' }}>&nbsp;</p>
          </motion.div>

        </div>
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
            <h2>YouthXBharat</h2>
            <p>Structuring thought. Empowering voices. Cultivating the leaders of tomorrow.</p>
          </div>
          <div className="footer-links">
            <h4>Index</h4>
            <ul>
              <li><a href="#conference">Conference Management</a></li>
              <li><a href="#academy">Model UN Academy</a></li>
              <li><a href="#events">Past Events</a></li>
              <li><a href="#team">Our Team</a></li>
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
        <ConferenceManagement />
        <ModelUNAcademy />
        <Events />
        <Team />
      </main>
      <Footer />
    </>
  );
}

export default App;
