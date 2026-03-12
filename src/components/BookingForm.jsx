import { useState } from "react";

export default function BookingForm(){

const [message, setMessage] = useState("");

function handleSubmit(e){
    e.preventDefault();

    const name = e.target.name.value;

    setMessage(`Turno solicitado correctamente, ${name}. Te contactaremos.`);
    e.target.reset();
}

return(

    <section className="booking">

    <h2>Reservar turno</h2>

    <form onSubmit={handleSubmit}>

        <input name="name" placeholder="Nombre" required />

        <input type="email" placeholder="Email" required />

        <input type="date" required />

        <select>
        <option>Tatuaje chico</option>
        <option>Tatuaje mediano</option>
        <option>Tatuaje grande</option>
        <option>Piercing</option>
        </select>

        <button type="submit">Reservar</button>

    </form>

    <p>{message}</p>

    </section>

)

}