function Menu({active, onSelect})
{
    return(
        <nav aria-label="Menu principal" className="menu frutiger">
            <ul>
                <li>
                    <a
                        href="#about"
                        className = {`frutiger ${active === "about" ? "active" : ""}`}
                        onClick={() => onSelect("about")}
                    >
                        À propos
                    </a>
                    </li>

                <li>
                    <a
                        href="#school"
                        className={`frutiger ${active === "school frutiger" ? "active" : ""}`}
                        onClick={() => onSelect("school")}
                    >
                        La formation
                    </a>
                    </li>

                <li>
                    <a
                        href="#journey"
                        className={`frutiger ${active === "journey frutiger" ? "active" : ""}`}
                        onClick={() => onSelect("journey")}
                    
                    >
                        Parcours
                    </a>
                    </li>


                <li>
                    <a
                        href="#skills"
                        className={`frutiger ${active === "skills frutiger" ? "active" : ""}`}
                        onClick={() => onSelect("skills")}
                    
                    >
                        Compétences
                    </a>
                    </li>

                <li>
                    <a
                        href="#projects"
                        className={`frutiger ${active === "projects frutiger" ? "active" : ""}`}
                        onClick={() => onSelect("projects")}
                    
                    >
                        Projets et réalisations
                    </a>
                    </li>
                    
                <li>
                    <a
                        href="#contacts"
                        className={`frutiger ${active === "contacts frutiger" ? "active" : ""}`}
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