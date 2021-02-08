import "./Home.css";
import Layout from "./components/layout";
import Aside from "./Aside";

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
                src="imgs/olas.png"
                tag="quienessomos"
                width="300"
                alt="Contactos"
              />
            </div>
          </article>
        </section>
        <Aside />
      </section>
    </Layout>
  );
};

export default Contactos;
