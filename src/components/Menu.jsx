function Menu({active, onSelect})
{
    return(
        <nav aria-label="Menu principal" className="menu">
            <ul>
                <li>
                    <a
                        href="#about"
                        className={active === "about" ? "active" : ""}
                        onClick={() => onSelect("about")}
                    >
                        À propos
                    </a>
                    </li>

                <li>
                    <a
                        href="#school"
                        className={active === "school" ? "active" : ""}
                        onClick={() => onSelect("school")}
                    >
                        L'école
                    </a>
                    </li>

                <li>
                    <a
                        href="#skills"
                        className={active === "skills" ? "active" : ""}
                        onClick={() => onSelect("skills")}
                    
                    >
                        Compétences
                    </a>
                    </li>

                <li>
                    <a
                        href="#projects"
                        className={active === "projects" ? "active" : ""}
                        onClick={() => onSelect("projects")}
                    
                    >
                        Projets et réalisations
                    </a>
                    </li>
                    
                <li>
                    <a
                        href="#contact"
                        className={active === "contact" ? "active" : ""}
                        onClick={() => onSelect("contact")}
                    >
                        Contact
                    </a>
                    </li>
            </ul>
        </nav>
    )
}


export default Menu