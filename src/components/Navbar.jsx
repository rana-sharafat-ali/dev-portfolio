import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="navbar" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.5rem 2rem',
            position: 'sticky',
            top: 0,
            backgroundColor: 'var(--bg-color)',
            zIndex: 100,
            borderBottom: '1px solid var(--border-color)',
            backdropFilter: 'blur(10px)',
            opacity: 0.95
        }}>
            <a href="/" className="logo-container">
                <span className="logo-name">Sharafat Ali</span>
                <span className="logo-tag">{'</>'}</span>
                <span className="logo-text">{'<Full Stack Web Dev/ >'}</span>
            </a>

            {/* Desktop Menu */}
            <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <ul style={{ display: 'flex', gap: '1.5rem' }}>
                    {navLinks.map(link => (
                        <li key={link.name}><a href={link.href} style={{ color: 'var(--text-color)' }}>{link.name}</a></li>
                    ))}
                </ul>
                <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="mobile-menu-btn" onClick={toggleMenu} style={{ cursor: 'pointer', display: 'none', color: 'var(--text-color)' }}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '100%',
                    backgroundColor: 'var(--bg-color)',
                    borderBottom: '1px solid var(--border-color)',
                    padding: '1rem',
                    flexDirection: 'column',
                    gap: '1rem',
                    display: 'flex',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'center' }}>
                        {navLinks.map(link => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    style={{ color: 'var(--text-color)', fontSize: '1.1rem', display: 'block', padding: '0.5rem' }}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <ThemeToggle />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
