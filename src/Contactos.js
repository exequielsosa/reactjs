import "./Home.css";
import Layout from "./components/layout";

const Contactos = () => {
  return (
    <Layout>
      <section className="main">
        <section className="articles">
          <article>
            <h2>Comunicate con nosotros</h2>
            <br />
            <p>
              En Estudio Dillon estamos su disposición para atender sus
              consultas y asesorarlo de la mejor manera.
            </p>
            <p>
              Contactese con nosotros por nuestro{" "}
              <a href="mailto:estudiodillonsosa@gmail.com?Subject:Consulta%20a%20Estudio%20Dillon">
                mail
              </a>{" "}
              o por intermedio nuestras redes sociales, nos comunicaremos
              inmediatamente para concretar una entrevista.
            </p>
            <br />
            <div align="center" className="quienes">
              <img
                src="imgs/quienes.jpg"
                tag="quienessomos"
                width="500"
                alt="Contactos"
              />
            </div>
          </article>
        </section>

        <aside>
          <div className="logosredes" align="center">
            <p>Nuestras Redes </p>
            <br />
            <a
              href="http://www.instagram.com/maugexxiv"
              target="_blank"
              rel="noreferrer"
            >
              <img src="imgs/instagram.png" alt="Instagram" tag="instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/maria-eugenia-dillon-05346113/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="Linkedin" src="imgs/linkedin.png" tag="linkedin" />
            </a>
            <a href="http://www.facebook.com/" target="_blank" rel="noreferrer">
              <img src="imgs/facebook.png" alt="Facebook" tag="facebook" />
            </a>
            <a
              href=" https://api.whatsapp.com/send?phone=5491158959823"
              target="_blank"
              rel="noreferrer"
            >
              <img src="imgs/whatsapp.png" alt="WhatsApp" tag="whatsapp" />
            </a>
            <a href="mailto:estudiodillonsosa@gmail.com?Subject:Consulta%20a%20Estudio%20Dillon">
              <img src="imgs/email.png" alt="Mail" tag="email" />
            </a>
          </div>{" "}
          <br />
          <p align="center">Otros links de interes</p>
          <br />
          <div align="center" className="otroslinks">
            <a href="http://www.arba.gob.ar" target="_blank" rel="noreferrer">
              <img src="imgs/arba22.png" alt="Arba" tag="arba" width="100" />
            </a>
            <br />
            <a href="http://www.afip.gov.ar" target="_blank" rel="noreferrer">
              <img src="imgs/afip22.png" alt="Afip" tag="afip" width="120" />
            </a>
          </div>
        </aside>
      </section>
    </Layout>
  );
};

export default Contactos;
