function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-line" />

            <div className="footer-grid">
                <div className="footer-brand-block">
                    <div className="brand-monogram" aria-hidden="true">
                        <span>S</span>
                        <span>G</span>
                        <span>S</span>
                    </div>
                    <div className="brand-word">SIGON</div>
                </div>

                <div className="footer-column">
                    <h4>Contact us</h4>
                    <p>
                        Front desk: <span>(323) 850-2800</span>
                    </p>
                    <p>Info@sigonltd.com</p>
                    <a href="/contact">Facilities &amp; Contacts</a>
                </div>

                <div className="footer-column">
                    <h4>Marketing &amp; Press inquiries</h4>
                    <p>Marketing@sigonltd.com</p>
                    <a href="/contact">Employment Opportunities</a>
                </div>
            </div>

            <div className="footer-bottom-bar">
                <span>© Copyright 2026 Sigon Sound</span>
                <span>Part of Studio Media</span>
                <span>All Rights Reserved</span>
                <span>Privacy Policy</span>
                <span>Site by Siraw to Gold</span>
            </div>
        </footer>
    )
}

export default Footer
