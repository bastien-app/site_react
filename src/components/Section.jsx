function Section({title, id, children})
{
    return(
        <section id={id} className="frutiger-section">
            <h2>{title}</h2>
            <div className="section-body">
                {children}
            </div>
        </section>
    )
    
}

export default Section