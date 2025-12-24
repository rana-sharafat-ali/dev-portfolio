import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '4rem 2rem', textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ position: 'relative', height: '3rem', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem' }}>
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: [0, 1, 1, 0], scale: [0.5, 1.2, 1.2, 0.8] }}
                    viewport={{ once: true }}
                    transition={{
                        times: [0, 0.3, 0.7, 1],
                        duration: 2,
                        ease: "easeInOut"
                    }}
                    style={{ position: 'absolute', fontSize: '2.5rem' }}
                >
                    🤝
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    style={{ fontSize: '2rem', margin: 0 }}
                >
                    Initialize Handshake
                </motion.h2>
            </div>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ marginBottom: '3rem', color: 'var(--text-color)', opacity: 0.8 }}
            >
                Ready to scale your product, front to back? Let’s connect.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}
            >
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=raosaifali@gmail.com&su=Let's%20Work%20Together&body=Hey%20Sharafat%20Ali,%20I%20saw%20your%20portfolio!" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'var(--text-color)' }}>
                    <div style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '50%', transition: 'all 0.3s ease' }} className="contact-icon">
                        <Mail size={24} />
                    </div>
                    <span>Email</span>
                </a>
                <a href="https://github.com/rana-sharafat-ali" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'var(--text-color)' }}>
                    <div style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '50%', transition: 'all 0.3s ease' }} className="contact-icon">
                        <Github size={24} />
                    </div>
                    <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in
/rana-sharafat-ali
" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'var(--text-color)' }}>
                    <div style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '50%', transition: 'all 0.3s ease' }} className="contact-icon">
                        <Linkedin size={24} />
                    </div>
                    <span>LinkedIn</span>
                </a>
                <a href="https://wa.me/923006357871?text=Hey%20Sharafat%20Ali,%20I%20saw%20your%20portfolio!" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'var(--text-color)' }}>
                    <div style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '50%', transition: 'all 0.3s ease' }} className="contact-icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="lucide lucide-message-circle"
                        >
                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                        </svg>
                    </div>
                    <span>WhatsApp</span>
                </a>
            </motion.div>
        </section>
    );
};

export default Contact;
