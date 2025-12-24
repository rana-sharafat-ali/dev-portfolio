import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '4rem 2rem'
        }}>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-main)', fontSize: '1.2rem', marginBottom: '1rem' }}
            >
                <span className="subtle-pulse">&gt; initializing_portfolio...</span>
            </motion.p>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                style={{ fontSize: '4rem', marginBottom: '1rem' }}
            >
                Full Stack Developer
                <br />
                <span style={{ color: 'var(--text-color)', opacity: 0.7 }}>fluent in APIs and Pixels.</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                style={{ maxWidth: '600px', lineHeight: '1.6', fontSize: '1.1rem', color: 'var(--text-color)' }}
            >
                I design scalable systems, craft responsive UIs, and make sure every click feels fast and intentional.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                style={{ marginTop: '2rem' }}
            >
                <a href="#projects" style={{
                    padding: '0.8rem 1.5rem',
                    border: '1px solid var(--accent-color)',
                    color: 'var(--accent-color)',
                    borderRadius: '4px',
                    marginRight: '1rem',
                    transition: 'all 0.3s ease'
                }}>
                    View Work
                </a>
                <a href="#contact" style={{
                    padding: '0.8rem 1.5rem',
                    backgroundColor: 'var(--accent-color)',
                    color: 'var(--bg-color)',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease'
                }}>
                    Contact Me
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
