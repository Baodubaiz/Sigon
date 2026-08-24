import { services } from '../data/services'

function ServicesPage() {
    return (
        <>
            <section className="page-intro">
                <p className="eyebrow">SERVICES</p>
                <h1>Audio solutions for stories that deserve to be heard.</h1>
            </section>

            <section className="services-grid services-page-grid">
                {services.map((service) => (
                    <article key={service.title} className="service-card">
                        <div className="service-icon" aria-hidden="true">
                            {service.icon}
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </article>
                ))}
            </section>
        </>
    )
}

export default ServicesPage
