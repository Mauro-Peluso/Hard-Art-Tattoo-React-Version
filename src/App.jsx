import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Artists from "./components/Artists";
import BookingForm from "./components/BookingForm";
import AsideMenu from "./components/AsideMenu";
import Footer from "./components/Footer";

export default function App() {

  return (
    <>

      <Header />

      <div className="container">

        <main>
          

          <section className="about">
            
            <h2>Arte en la piel. Filosofía en la tinta.</h2>

            <p>
            Hard Art nace del cruce entre expresión corporal, estética urbana y
            búsqueda interior. Cada línea trazada sobre la piel es una decisión
            estética, pero también una afirmación personal.
            </p>

            <p>
            El tatuaje no es solo imagen: es memoria, símbolo y narrativa.
            Trabajamos el cuerpo como lienzo y la tinta como lenguaje.
            </p>

            <p>
            Inspirados en el arte clásico, la cultura callejera y la filosofía
            contemporánea, buscamos piezas que trasciendan la moda y se conviertan
            en identidad.
            </p>

            <p>
            Minimalismo, realismo, blackwork o color: cada estilo es una forma
            distinta de contar quién sos.
            </p>

          </section>

          <Gallery />

          <Artists />

          <BookingForm />

        </main>

        <AsideMenu />

      </div>

      <Footer />

    </>

  );
}