import "./Home.css";
import Layout from "./components/layout";
import Aside from "./Aside";

const Impuestos = () => {
  return (
    <Layout>
      <section className="main">
        <section className="articles">
          <article>
            <h2>Impuestos y DDJJ de presentación</h2>
            <br />
            <ul>
              <li>Impuesto al Valor Agregado</li>
              <li>Libro IVA - Ventas y IVA - Compras</li>
              <li>DDJJ de Ganancias y Bienes Personales</li>
              <li>Impuesto a la Renta Financiera</li>
              <li>Impuesto sobre los Ingresos Brutos</li>
            </ul>
          </article>
          <article>
            <h2>Gestiones</h2>
            <br />
            <ul>
              <li>
                Regulación de deudas impositivas y/o previsionales de plazo
                vencido.
              </li>
              <li>Confección de planes de facilidades de pago.</li>
              <li>Reintegro por exportaciones.</li>
              <li>
                Devoluciones, transferencias y/o compensaciones con deudas
                exigibles o futuros ingresos.
              </li>
              <li>
                Inspecciones, minimización de los efectos y consideración de
                medidas preventivas.
              </li>
              <li>
                Asesoramiento y patrocinio en materia contencioso tributaria,
                tanto en la instancia administrativa como en la instancia
                judicial.
              </li>
            </ul>
          </article>
        </section>

        <Aside />
      </section>
    </Layout>
  );
};

export default Impuestos;
