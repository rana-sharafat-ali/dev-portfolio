import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    const [education, setEducation] = useState([]);

    useEffect(() => {
        fetch('/data/education.json')
            .then(res => res.json())
            .then(data => setEducation(data))
            .catch(err => console.error("Error loading education:", err));
    }, []);

    return (
        <section id="education" style={{ padding: '4rem 2rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ marginBottom: '3rem', borderLeft: '4px solid var(--accent-color)', paddingLeft: '1rem' }}
                >
                    Education
                </motion.h2>

                <div style={{ position: 'relative', paddingLeft: '1rem', borderLeft: '2px solid var(--border-color)' }}>
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            style={{
                                marginBottom: '3rem',
                                position: 'relative'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                left: '-1.6rem',
                                top: '0',
                                background: 'var(--bg-color)',
                                padding: '0.2rem',
                                border: '1px solid var(--accent-color)',
                                borderRadius: '50%',
                                color: 'var(--accent-color)'
                            }}>
                                <GraduationCap size={16} />
                            </div>

                            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.2rem' }}>{edu.degree}</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--text-color)', opacity: 0.8 }}>
                                <span style={{ fontFamily: 'var(--font-main)', fontWeight: 'bold' }}>{edu.institution}</span>
                                <span>{edu.duration}</span>
                            </div>
                            <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>{edu.description}</p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {edu.achievements && edu.achievements.map(achievement => (
                                    <span key={achievement} style={{
                                        fontSize: '0.8rem',
                                        padding: '0.2rem 0.5rem',
                                        borderRadius: '4px',
                                        backgroundColor: 'var(--code-bg)',
                                        border: '1px solid var(--border-color)',
                                        fontStyle: 'italic'
                                    }}>
                                        {achievement}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
