function Intro(prop)
{
    return (
        <div>
            <h1 className="nom-intro">Bastien Goumy</h1>
            <h2>Concepteur développeur d'applications</h2>
            <button onClick={prop.onStart}>Démarrer</button>
        </div>
    )
}


export default Intro