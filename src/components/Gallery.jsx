import tattoo1 from "../assets/gallery/tattoo1.png"
import tattoo2 from "../assets/gallery/tattoo2.png"
import tattoo3 from "../assets/gallery/tattoo3.png"
import tattoo4 from "../assets/gallery/tattoo4.png"

export default function Gallery(){

const images = [
    tattoo1,
    tattoo2,
    tattoo3,
    tattoo4
]

return(

    <section className="gallery">

    <h2>Galería de tatuajes</h2>

    <div className="gallery-grid">

        {images.map((img,index)=>(

        <img
            key={index}
            src={img}
            alt="tatuaje"
        />

        ))}

    </div>

    </section>

)

}