import { Link } from 'react-router-dom'
import logoMark from '../../assets/logo/Logomark - Light.png'
import logoType from '../../assets/logo/Logotype - Light.png'
import './Footer.css'

const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Audio Services' },
    { to: '/studio', label: 'Studio Facilities' },
    { to: '/projects', label: 'Film Projects' },
    { to: '/team', label: 'Sound Team' },
    { to: '/contact', label: 'Contact Us' },
]

const servicesList = [
    'Location Sound Recording',
    'Audio Post Production & FX',
    'Dialogue Editing & ADR / Foley',
    '5.1 & 7.1 Surround Mixing',
    'Live Event Sound Design',
    'Music Mastering & TVC Audio',
]

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <footer className="site-footer">
            {/* Glowing Accent Line */}
            <div className="footer-accent-line" aria-hidden="true" />

            <div className="footer-container">
                {/* Top Call-to-Action Banner */}
                <div className="footer-cta-banner">
                    <div className="footer-cta-text">
                        <h3>Ready to build the sound of your next story?</h3>
                        <p>
                            From indie masterpieces to theatrical blockbusters, our 7 sound rooms
                            and award-winning team are ready.
                        </p>
                    </div>
                    <Link to="/contact" className="footer-cta-btn">
                        <span>Book a Session</span>
                        <svg
                            className="cta-arrow-icon"
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
                </div>

                {/* Main 4-Column Footer Grid */}
                <div className="footer-main-grid">
                    {/* Column 1: Brand & Studio Info */}
                    <div className="footer-col footer-brand">
                        <Link
                            to="/"
                            className="footer-brand-logo-link"
                            aria-label="Sigon Sound Production"
                        >
                            <img
                                src={logoMark}
                                alt="Sigon Logo"
                                className="footer-logo-mark"
                                width="38"
                                height="45"
                            />
                            <div className="brand-text-block">
                                <img
                                    src={logoType}
                                    alt="Sigon"
                                    className="footer-logo-type"
                                    width="84"
                                    height="22"
                                />
                                <span className="footer-brand-tag">Sound Production</span>
                            </div>
                        </Link>

                        <p className="footer-brand-bio">
                            One of Vietnam&apos;s leading audio production studios, delivering
                            theatrical surround mixing, foley, and sound design for feature films
                            and international productions.
                        </p>

                        <div className="footer-status-pill">
                            <span className="status-dot" aria-hidden="true" />
                            <span>7 Sound Rooms Active in HCMC</span>
                        </div>

                        {/* Social Links */}
                        <div className="footer-socials" aria-label="Social links">
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                className="social-icon-btn"
                                aria-label="Facebook"
                                title="Facebook"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.imdb.com/name/nm10072997/"
                                target="_blank"
                                rel="noreferrer"
                                className="social-icon-btn"
                                aria-label="IMDb"
                                title="IMDb"
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                                    <line x1="7" y1="2" x2="7" y2="22" />
                                    <line x1="17" y1="2" x2="17" y2="22" />
                                    <line x1="2" y1="12" x2="22" y2="12" />
                                    <line x1="2" y1="7" x2="7" y2="7" />
                                    <line x1="2" y1="17" x2="7" y2="17" />
                                    <line x1="17" y1="17" x2="22" y2="17" />
                                    <line x1="17" y1="7" x2="22" y2="7" />
                                </svg>
                            </a>
                            <a
                                href="https://www.youtube.com"
                                target="_blank"
                                rel="noreferrer"
                                className="social-icon-btn"
                                aria-label="YouTube"
                                title="YouTube"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                            <a
                                href="mailto:info@sigonltd.com"
                                className="social-icon-btn"
                                aria-label="Email"
                                title="Email Us"
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Navigation</h4>
                        <ul className="footer-links-list">
                            {quickLinks.map((link) => (
                                <li key={link.to}>
                                    <Link to={link.to} className="footer-nav-link">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Sound Services */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Services</h4>
                        <ul className="footer-links-list">
                            {servicesList.map((service) => (
                                <li key={service} className="footer-service-item">
                                    <span className="service-bullet">✦</span>
                                    <span>{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact & Facilities */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Studio Inquiries</h4>
                        <div className="footer-contact-block">
                            <div className="footer-contact-card">
                                <span className="contact-card-role">Founder / Mixer</span>
                                <span className="contact-card-name">Mr. Vũ Thành Long</span>
                                <a
                                    href="mailto:long.vu@sigonltd.com"
                                    className="contact-card-link"
                                >
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                    <span>long.vu@sigonltd.com</span>
                                </a>
                                <a
                                    href="tel:+84764452912"
                                    className="contact-card-link"
                                >
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    <span>(+84) 76 445 2912</span>
                                </a>
                            </div>

                            <div className="footer-contact-card">
                                <span className="contact-card-role">Sound Post Producer</span>
                                <span className="contact-card-name">Ms. Dung Lại</span>
                                <a
                                    href="mailto:jun@sigonltd.com"
                                    className="contact-card-link"
                                >
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                    <span>jun@sigonltd.com</span>
                                </a>
                                <a
                                    href="tel:+84907929795"
                                    className="contact-card-link"
                                >
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    <span>(+84) 90 792 9795</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Back to Top */}
                <div className="footer-bottom">
                    <p className="footer-copy-text">
                        © {new Date().getFullYear()} <span>Sigon Sound Production Ltd.</span> All rights reserved.
                    </p>

                    <ul className="footer-bottom-links">
                        <li>
                            <Link to="/contact" className="footer-bottom-link">
                                Facilities &amp; Booking
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="footer-bottom-link">
                                About Studio
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className="footer-bottom-link">
                                Portfolio
                            </Link>
                        </li>
                    </ul>

                    <button
                        type="button"
                        className="footer-back-to-top"
                        onClick={scrollToTop}
                        aria-label="Back to top"
                    >
                        <span>Top</span>
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 16 16"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M8 12.667V3.333M3.333 8L8 3.333 12.667 8"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer
