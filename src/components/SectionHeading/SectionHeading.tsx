type SectionHeadingProps = {
    eyebrow?: string
    title: string
    subtitle?: string
    align?: 'left' | 'center'
    className?: string
}

function SectionHeading({
    eyebrow,
    title,
    subtitle,
    align = 'left',
    className = '',
}: SectionHeadingProps) {
    return (
        <div
            className={[
                'section-heading',
                align === 'center' ? 'center-aligned' : '',
                className,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h2>{title}</h2>
            {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        </div>
    )
}

export default SectionHeading
