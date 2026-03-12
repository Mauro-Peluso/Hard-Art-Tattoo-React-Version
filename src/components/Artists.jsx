export default function Artists(){

const artists=[

{
name:"Raul Quevedo",
text:"Especialista en blackwork",
img:"https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=600"
},

{
name:"Mateo Lines",
text:"Realismo y sombreado",
img:"https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=600"
},

{
name:"Sofía Color",
text:"Tatuajes a color",
img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600"
}

]

return(

<section className="artists">

<h2>Artistas</h2>

<div className="artist-list">

{artists.map((artist,index)=> (

<div key={index} className="artist-card">

<img src={artist.img} />

<h3>{artist.name}</h3>

<p>{artist.text}</p>

</div>

))}

</div>

</section>

)

}