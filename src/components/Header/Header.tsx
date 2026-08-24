import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logoMark from '../../assets/logo/Logomark - Light.png'
import logoType from '../../assets/logo/Logotype - Light.png'
import './Header.css'

const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/studio', label: 'Studio' },
    { to: '/projects', label: 'Projects' },
    { to: '/team', label: 'Team' },
]

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const location = useLocation()

    // Detect scroll for dynamic header styling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on page transition
    useEffect(() => {
        setIsMobileOpen(false)
    }, [location.pathname])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMobileOpen])

    // Close on Escape key press
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsMobileOpen(false)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    return (
        <>
            <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
                {/* Brand Logo Section */}
                <Link to="/" className="brand-wrap" aria-label="Sigon Sound Production Home">
                    <div className="brand-logo-group">
                        <img
                            src={logoMark}
                            alt="Sigon Sound Mark"
                            className="brand-mark"
                            width="38"
                            height="45"
                        />
                        <div className="brand-text-block">
                            <img
                                src={logoType}
                                alt="Sigon"
                                className="brand-type"
                                width="84"
                                height="22"
                            />
                            <span className="brand-subtext">Sound Production</span>
                        </div>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="site-nav" aria-label="Main navigation">
                    <ul className="nav-list">
                        {navItems.map((item) => (
                            <li key={item.to} className="nav-list-item">
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) =>
                                        isActive ? 'nav-link active' : 'nav-link'
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <span>{item.label}</span>
                                            {isActive && (
                                                <span
                                                    className="nav-active-dot"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Header Actions & CTA */}
                <div className="header-actions">
                    <div className="soundwave-bars" aria-hidden="true" title="Audio Studio Active">
                        <span className="bar bar-1"></span>
                        <span className="bar bar-2"></span>
                        <span className="bar bar-3"></span>
                        <span className="bar bar-4"></span>
                    </div>

                    <Link className="header-cta-btn" to="/contact">
                        <span>Contact</span>
                        <svg
                            className="cta-arrow"
                            width="14"
                            height="14"
                            viewBox="0 0 16 16"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M3.333 8h9.334M8.667 3.333L13.333 8l-4.666 4.667"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>

                    {/* Mobile Hamburger Button */}
                    <button
                        type="button"
                        className={`mobile-toggle-btn ${isMobileOpen ? 'open' : ''}`}
                        onClick={() => setIsMobileOpen((prev) => !prev)}
                        aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMobileOpen}
                    >
                        <span className="hamburger-line line-1"></span>
                        <span className="hamburger-line line-2"></span>
                        <span className="hamburger-line line-3"></span>
                    </button>
                </div>
            </header>

            {/* Mobile Drawer Backdrop */}
            <div
                className={`mobile-backdrop ${isMobileOpen ? 'active' : ''}`}
                onClick={() => setIsMobileOpen(false)}
                aria-hidden="true"
            />

            {/* Mobile Menu Drawer */}
            <aside
                className={`mobile-menu-drawer ${isMobileOpen ? 'open' : ''}`}
                aria-label="Mobile Navigation"
            >
                <div className="mobile-menu-inner">
                    <div className="mobile-menu-header">
                        <div className="mobile-brand-preview">
                            <img src={logoMark} alt="" className="mobile-brand-mark" />
                            <span className="mobile-brand-name">SIGON SOUND</span>
                        </div>
                        <div className="soundwave-bars" aria-hidden="true">
                            <span className="bar bar-1"></span>
                            <span className="bar bar-2"></span>
                            <span className="bar bar-3"></span>
                            <span className="bar bar-4"></span>
                        </div>
                    </div>

                    <nav className="mobile-nav-list" aria-label="Mobile navigation links">
                        {navItems.map((item, idx) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    isActive ? 'mobile-nav-item active' : 'mobile-nav-item'
                                }
                                onClick={() => setIsMobileOpen(false)}
                            >
                                <div className="mobile-item-left">
                                    <span className="mobile-item-index">0{idx + 1}</span>
                                    <span className="mobile-item-label">{item.label}</span>
                                </div>
                                <svg
                                    className="mobile-item-arrow"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </NavLink>
                        ))}
                    </nav>

                    <div className="mobile-drawer-footer">
                        <Link
                            to="/contact"
                            className="mobile-cta-btn"
                            onClick={() => setIsMobileOpen(false)}
                        >
                            <span>Book a Session</span>
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M3.333 8h9.334M8.667 3.333L13.333 8l-4.666 4.667"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Link>

                        <div className="mobile-contact-info">
                            <span className="mobile-contact-label">Studio Inquiries</span>
                            <a href="mailto:long.vu@sigonltd.com" className="mobile-contact-link">
                                long.vu@sigonltd.com
                            </a>
                            <a href="tel:+84764452912" className="mobile-contact-link">
                                (+84) 76 445 2912
                            </a>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Header
