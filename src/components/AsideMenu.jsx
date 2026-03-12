export default function AsideMenu(){

function show(msg){
    alert(msg)
}

return(

    <aside>

    <div className="panel">

        <h2>Tatuajes</h2>

        <button onClick={()=>show("Tatuaje chico: $20.000")}>Chico — $20.000</button>

        <button onClick={()=>show("Tatuaje mediano: $40.000")}>Mediano — $40.000</button>

        <button onClick={()=>show("Tatuaje grande: $70.000")}>Grande — $70.000</button>

    </div>

    <div className="panel">

        <h2>Piercings</h2>

        <button onClick={()=>show("Piercing: $10.000")}>Piercing — $10.000</button>

    </div>

    <div className="panel">

        <h2>Bar</h2>

        <button onClick={()=>show("Cerveza tirada $2500")}>Cerveza tirada — $2500</button>

        <button onClick={()=>show("Fernet Branca $4500")}>Fernet — $4500</button>

    </div>

    </aside>

)

}