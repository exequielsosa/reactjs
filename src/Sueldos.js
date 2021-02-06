import "./Home.css";
import Layout from "./components/layout";

const Sueldos = () => {
  return (
    <Layout>
      <section className="main">
        <section className="articles">
          <article>
            <h2>
              Asesoramiento en liquidación de haberes y administración de
              personal
            </h2>
            <br />
            <p>
              Este servicio comprende la realización de un amplio abanico de
              trámites y tareas inherentes a los procesos de incorporación,
              administración y egreso del personal de su empresa. Nosotros nos
              encargamos de la ejecución de estos procedimientos, o bien le
              ofrecemos asesoramiento sobre cómo llevarlos a cabo de una forma
              idónea para su compañía.
            </p>
            <br />
            <h3>Incorporación de personal:</h3>
            <ul>
              <li>Trámite de obtención de CUIL</li>
              <li>Obtención de exámenes preocupacionales</li>
              <li>Obtención de alta temprana</li>
              <li>Determinación del convenio colectivo de trabajo a aplicar</li>
              <li>Confección de legajo del empleado</li>
            </ul>
            <br />
            <h3>Administración de personal:</h3>
            <ul>
              <li>Inscripciones como empleador</li>
              <li>Inscripciones del empleador en obra social o sindicato</li>
              <li>
                Cálculo de haberes (esto incluye todos los convenios colectivos
                de trabajo)
              </li>
              <li>Cálculo de impuestos a las ganancias</li>
              <li>
                Estudio de beneficios promocionales (rebaja de cargas sociales)
              </li>
              <li>Confección de recibos de sueldos</li>
              <li>Confección y rubricación de libro de sueldos y jornales</li>
              <li>
                Liquidación y presentación de SUSS y demás cargas sociales
              </li>
              <li>
                Entrega mensual o quincenal de recibos y boletas de depósito
                para pagar las cargas sociales
              </li>
            </ul>
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

export default Sueldos;
