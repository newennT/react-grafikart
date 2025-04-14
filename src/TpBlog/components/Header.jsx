import { activeClassIf } from "../utils/Classname"
import { useToggle } from "../hooks/useToggle"



export function Header ({page}) {

    const [expanded, toggleExpanded] = useToggle(false)

    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Mon site</a>
            <button onClick={toggleExpanded} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={expanded} aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className={activeClassIf(page === 'home', 'nav-link')} aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className={activeClassIf(page === 'contact', 'nav-link')} aria-current="page" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}