function Menu({active, onSelect})
{
    return(
        <nav aria-label="Menu principal" className="menu">
            <ul>
                <li>
                    <a
                        href="#about"
                        className = {`${active === "about" ? "active" : ""}`}
                        onClick={() => onSelect("about")}
                    >
                        À propos
                    </a>
                    </li>

                <li>
                    <a
                        href="#school"
                        className={`${active === "school" ? "active" : ""}`}
                        onClick={() => onSelect("school")}
                    >
                        La formation
                    </a>
                    </li>

                <li>
                    <a
                        href="#journey"
                        className={`${active === "journey" ? "active" : ""}`}
                        onClick={() => onSelect("journey")}
                    
                    >
                        Parcours
                    </a>
                    </li>


                <li>
                    <a
                        href="#skills"
                        className={`${active === "skills" ? "active" : ""}`}
                        onClick={() => onSelect("skills")}
                    
                    >
                        Compétences
                    </a>
                    </li>

                <li>
                    <a
                        href="#projects"
                        className={`${active === "projects" ? "active" : ""}`}
                        onClick={() => onSelect("projects")}
                    
                    >
                        Projets et réalisations
                    </a>
                    </li>
                    
                <li>
                    <a
                        href="#contacts"
                        className={`${active === "contacts" ? "active" : ""}`}
                        onClick={() => onSelect("contacts")}
                    >
                        Contacts
                    </a>
                    </li>
            </ul>
        </nav>
    )
}


export default Menu