import logo from '../assets/logo/Pairing - Light.png'

function ContactPage() {
    return (
        <>
            <section className="page-intro">
                <p className="eyebrow">CONTACT</p>
                <h1>Let&apos;s build the sound of your next story.</h1>
            </section>

            <section className="contact-section">
                <div className="contact-brand">
                    <img src={logo} alt="Sigon Sound logo" />
                </div>

                <div className="contact-details">
                    <div className="contact-item">
                        <h3>Mr. Long Vu (Founder)</h3>
                        <a href="mailto:long.vu@sigonltd.com">long.vu@sigonltd.com</a>
                        <a href="tel:+84764452912">(+84) 76 445 2912</a>
                    </div>

                    <div className="contact-item">
                        <h3>Ms. Dung Lai (Sound Post Producer)</h3>
                        <a href="mailto:jun@sigonltd.com">jun@sigonltd.com</a>
                        <a href="tel:+84907929795">(+84) 90 792 9795</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactPage
