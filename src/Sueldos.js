import "./Home.css";
import Layout from "./components/layout";
import Aside from "./Aside";

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

        <Aside />
      </section>
    </Layout>
  );
};

export default Sueldos;
