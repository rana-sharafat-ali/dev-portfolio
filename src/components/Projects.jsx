import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}data/projects.json`)
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(err => console.error("Error loading projects:", err));
    }, []);

    return (
        <section id="projects" style={{ padding: '4rem 2rem', backgroundColor: 'var(--code-bg)' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ marginBottom: '3rem', borderLeft: '4px solid var(--accent-color)', paddingLeft: '1rem' }}
                >
                    Projects
                </motion.h2>

                <div className="grid-container" style={{ gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            style={{
                                backgroundColor: 'var(--bg-color)',
                                padding: '2rem',
                                borderRadius: '8px',
                                border: '1px solid var(--border-color)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-color)', opacity: 0.8, marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                {project.description}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                                {project.techStack.map(tech => (
                                    <span key={tech} style={{
                                        fontSize: '0.8rem',
                                        color: 'var(--accent-color)',
                                        fontFamily: 'monospace'
                                    }}>
                                        #{tech}
                                    </span>
                                ))}
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-color)' }}>
                                    <Github size={16} /> Code
                                </a>
                                {project.liveLink && (
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-color)' }}>
                                        <ExternalLink size={16} /> Live
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
