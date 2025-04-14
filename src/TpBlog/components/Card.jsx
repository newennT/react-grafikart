import { Button } from "./Button"

export function Card ({image, title, description, href, buttonLabel}) {
    const showButton = href && buttonLabel

    return <div className="card">
        {image && <img src={image} className="card-img-top" alt="" />}
        <div className="card-body">
            {title && <h5 className="card-title">{title}</h5>}
            {description && <p className="card-text">{description}</p>}
            {showButton && <Button variant="primary" href={href}>{buttonLabel}</Button>}
        </div>
    </div>
}