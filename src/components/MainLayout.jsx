import { useState } from "react";
import Menu from "./Menu";


function Main(){
    const [activeSection, setActiveSection] = useState("about")

    function onSelect(sectionId){
        setActiveSection(sectionId)
    }

    return(
        <div>
            <Menu active={activeSection} onSelect={onSelect}/>
        </div>
            
        
    )
}

export default Main