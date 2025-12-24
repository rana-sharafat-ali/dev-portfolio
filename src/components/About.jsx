import { motion } from 'framer-motion';
import { MapPin, Mail, Linkedin, Server, Layout, Globe, Briefcase } from 'lucide-react';

const About = () => {
    const services = [
        { icon: <Server size={24} />, title: 'Backend Development', desc: 'Robust APIs, Database Design, Scalable Logic', cta: 'Architect My Backend' },
        { icon: <Layout size={24} />, title: 'UI/UX Implementation', desc: 'Responsive, Interactive, Accessibility-First', cta: 'Design My Interface' },
        { icon: <Globe size={24} />, title: 'Full Stack Solutions', desc: 'End-to-End Web Applications from scratch', cta: 'Build My Full App' },
        { icon: <Briefcase size={24} />, title: 'Portfolio & Landing', desc: 'Personal Branding & Business Showcases', cta: 'Launch My Portfolio' },
    ];

    return (
        <section id="about" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                style={{ marginBottom: '3rem', borderLeft: '4px solid var(--accent-color)', paddingLeft: '1rem', fontSize: '2.5rem' }}
            >
                About Me
            </motion.h2>

            <div className="grid-container" style={{ gap: '3rem', marginBottom: '4rem' }}>
                {/* Left Column: Bio */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                >
                    <p style={{ lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-color)' }}>
                        I'm a full-stack developer with a backend-first mindset. I love building systems that run fast, scale effortlessly, and actually make sense under the hood.
                    </p>
                    <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-color)' }}>
                        I work across the stack — from crafting clean UIs in React to fine-tuning APIs, databases, and cloud deployments. Logic, structure, and performance drive my work, but I never ignore the user experience that brings it all together.
                    </p>
                </motion.div>

                {/* Right Column: Personal Info Card */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    style={{
                        backgroundColor: 'var(--code-bg)',
                        padding: '2rem',
                        borderRadius: '12px',
                        border: '1px solid var(--border-color)',
                        maxHeight: 'fit-content'
                    }}
                >
                    <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-color)', fontSize: '1.4rem' }}>Personal Info</h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <MapPin size={20} style={{ color: 'var(--accent-color)' }} />
                            <span>Multan, Pakistan</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Mail size={20} style={{ color: 'var(--accent-color)' }} />
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=raosaifali@gmail.com&su=Let's%20Work%20Together&body=Hey%20Sharafat%20Ali,%20I%20saw%20your%20portfolio!" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>raosaifali@gmail.com</a>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Linkedin size={20} style={{ color: 'var(--accent-color)' }} />
                            <a href="https://linkedin.com/in/rana-sharafat-ali" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>/rana-sharafat-ali</a>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            {/* Reusing WhatsApp SVG for consistency */}
                            <div style={{ color: 'var(--accent-color)', display: 'flex' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                </svg>
                            </div>
                            <a href="https://wa.me/923006357871?text=Hey%20Sharafat%20Ali,%20I%20saw%20your%20portfolio!" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>+92 300 6357871</a>
                        </li>
                    </ul>
                </motion.div>
            </div>

            {/* Services Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
            >
                <h3 style={{ marginBottom: '2rem', fontSize: '1.8rem', textAlign: 'center' }}>What I Do For You</h3>
                <div className="services-grid" style={{ gap: '2rem' }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover="hover"
                            initial="initial"
                            variants={{
                                initial: { y: 0 },
                                hover: { y: -5 }
                            }}
                            style={{
                                backgroundColor: 'var(--bg-color)',
                                padding: '2rem',
                                borderRadius: '8px',
                                border: '1px solid var(--border-color)',
                                textAlign: 'center',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                position: 'relative',
                                overflow: 'hidden',
                                cursor: 'pointer'
                            }}
                        >
                            <motion.div variants={{ hover: { opacity: 0.3, filter: 'blur(2px)' } }} transition={{ duration: 0.3 }}>
                                <div style={{ marginBottom: '1rem', color: 'var(--accent-color)', display: 'flex', justifyContent: 'center' }}>
                                    {service.icon}
                                </div>
                                <h4 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>{service.title}</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-color)', opacity: 0.8 }}>{service.desc}</p>
                            </motion.div>

                            <motion.div
                                variants={{ initial: { opacity: 0, scale: 0.8 }, hover: { opacity: 1, scale: 1 } }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <a
                                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=raosaifali@gmail.com&su=${encodeURIComponent(service.title)}&body=${encodeURIComponent("Hi Sharafat,\n\nI'm interested in your " + service.title + " services.\n\n")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        backgroundColor: 'var(--accent-color)',
                                        color: 'var(--bg-color)',
                                        padding: '0.8rem 1.5rem',
                                        borderRadius: '4px',
                                        fontWeight: 'bold',
                                        textDecoration: 'none'
                                    }}
                                >
                                    {service.cta}
                                </a>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default About;
