import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const [skillsData, setSkillsData] = useState({});

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}data/skills.json`)
            .then(response => response.json())
            .then(data => setSkillsData(data))
            .catch(error => console.error('Error fetching skills:', error));
    }, []);

    return (
        <section id="skills" style={{ padding: '4rem 2rem' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ marginBottom: '3rem', borderLeft: '4px solid var(--accent-color)', paddingLeft: '1rem' }}
                >
                    Skills
                </motion.h2>

                <div className="masonry-container" style={{ columnGap: '2rem' }}>
                    {Object.entries(skillsData).map(([category, skills], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            style={{
                                backgroundColor: 'var(--code-bg)',
                                padding: '1.5rem',
                                borderRadius: '8px',
                                border: '1px solid var(--border-color)',
                                breakInside: 'avoid',
                                marginBottom: '2rem',
                                display: 'inline-block', // Helps with breaking behavior in some browsers
                                width: '100%'
                            }}
                        >
                            <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)', fontSize: '1.1rem' }}>{category}</h3>
                            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {skills.map(skill => (
                                    <li key={skill} style={{
                                        fontSize: '0.9rem',
                                        padding: '0.2rem 0.5rem',
                                        borderRadius: '4px',
                                        backgroundColor: 'var(--bg-color)',
                                        border: '1px solid var(--border-color)'
                                    }}>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
