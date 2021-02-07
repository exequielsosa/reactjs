import "./Home.css";
import Layout from "./components/layout";
import Aside from "./Aside";

const Monotributo = () => {
  return (
    <Layout>
      <section className="main">
        <section className="articles">
          <article>
            <h2>Servicios especiales para Monotributistas</h2>
            <br />
            <p>
              Brindamos asesoramiento integral a monotributistas. Realizamos un
              seguimiento personalizado de la situación de nuestros clientes,
              manteniendo actualizado el monto de facturación a fin de
              adelantarse a recategorizaciones o exclusiones.
              <br />
              <br /> Contamos con herramientas web que permiten un seguimiento
              online de las gestiones realizadas por el estudio. <br />
              <br /> Ofrecemos la posibilidad de realizar las facturas
              electrónicas a través de webservices.
              <br />
              <br />
              Ayudamos al cumplimiento de tus obligaciones con AFIP y otros
              organismos, evitando el pago de multas por incumplimientos y
              aprovechando las facilidades vigentes para cada tipo de actividad
              o forma jurídica..
            </p>
            <br />
            <h3>Trámites:</h3>
            <ul>
              <li>Alta de monotributo</li>
              <li>Recategorización</li>
              <li>Seguimiento online de tu facturación</li>
              <li>Convenio Multilateral</li>
              <li>Ingresos Brutos</li>
            </ul>
          </article>
        </section>
        <Aside />
      </section>
    </Layout>
  );
};
export default Monotributo;
