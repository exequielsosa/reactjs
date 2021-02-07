import "./Home.css";
import Layout from "./components/layout";
import Aside from "./Aside";

const Tramites = () => {
  return (
    <Layout>
      <section className="main">
        <section className="articles">
          <article>
            <h2>Trámites Societarios - Gestión de Sociedades</h2>
            <br />
            <p>
              Ofrecemos la prestación de Servicios de Gestión de sociedades y
              trámites societarios. El detalle de la Oferta incluye lo
              siguiente:
            </p>
            <ul>
              <li>
                Constitución, transformación y disolución de Sociedades
                Comercialesen IGJ CABA: SAS, SRL, SA.
              </li>
              <li>
                Modificaciones de Estatutos, Autoridades, Composición
                Accionaria, etc.
              </li>
              <li>
                Trámites ante Inspección General de Justicia. Vistas y
                seguimiento de expedientes.
              </li>
              <li>Publicaciones Art. 60 con designación de autoridades.</li>
              <li>Mantenimiento actualizado de libros societarios.</li>
              <li>
                Preparación y conducción de reunión societaria. Actas. Fijación
                del Orden del Día.
              </li>
              <li>
                Trámites Sociedades y Sucursales del Exterior: inscripción y
                servicios generales de bookkeeping.
              </li>
              <li>
                Negociación, confección e implementación de Acuerdos Societarios
                entre Accionistas, Socios, etc..
              </li>
              <li>Confección de Estatutos y Reglamentos.</li>
            </ul>
          </article>

          <article>
            <h2>Certificados Contables</h2>
            <br />
            <p>
              Emitimos a solicitud de particular interesado distintos
              Certificados Contables, los cuales son requeridos por diversas
              instituciones o particulares a efectos de constatar determinada
              situación económica, financiera, patrimonial, fiscal, etc.. Dichos
              Certificados son confeccionados por Profesional Contable y
              legalizados por el Consejo Profesional de Ciencias Económicas de
              la Ciudad Autónoma de Buenos Aires (CABA). Algunos tipos de
              certificados solicitados en forma corriente son:
            </p>
            <ul>
              <li>Certificado de Sueldos percibidos.</li>
              <li>Certificado de Ingresos por Ventas.</li>
              <li>
                Certificado de Ingresos personales por alquileres, intereses,
                dividendos, etc.
              </li>
              <li>Manifestación de Bienes.</li>
              <li>Origen lícito de fondos.</li>
              <li>
                Informe sobre cumplimiento de obligaciones impositivas y
                previsionales.
              </li>
            </ul>
          </article>
        </section>
        <Aside /> 
      </section>
    </Layout>
  );
};
export default Tramites;
