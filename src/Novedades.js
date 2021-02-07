import "./Home.css";
import Layout from "./components/layout";
import Aside from "./Aside";

const Novedades = () => {
  return (
    <Layout>
      <section className="main">
        <section className="articles">
          <article>
            <h2>Nueva Moratoria Afip</h2>
            <br />
            <p>
              Se extiende el universo de beneficiarios y ofrece alivio para las
              deudas acumuladas durante la pandemia del Covid-19. El plan
              permite regularizar obligaciones en hasta 120 cuotas.Se habilitó
              la adhesión a la ampliación de la Moratoria 2020. Pymes,
              comerciantes, profesionales, grandes empresas, monotributistas,
              autónomos, cooperativas y entidades sin fines de lucro podrán
              regularizar sus deudas tributarias, aduaneras y previsionales en
              hasta 120 cuotas. Los contribuyentes tienen tiempo hasta el 31 de
              octubre para registrarse a través de la página de la Afip.
            </p>
          </article>

          <article>
            <h2>Programa ATP Sueldos</h2>
            <br />
            <p>
              La AFIP reabre el Programa de Asistencia de Emergencia al Trabajo
              y la Producción (ATP) del 14 al 21 de mayo para cargar la
              información para los beneficios aplicables al mes corriente. Así
              lo establece la resolución 4.716 de la AFIP publicada este jueves
              en el Boletín Oficial.
            </p>
          </article>

          <article>
            <h2>Créditos a Tasa Cero</h2>
            <br />
            <p>
              Monotributistas y autónomos pueden iniciar el trámite para acceder
              a un crédito a tasa cero a través de la página web de la AFIP
              hasta el 29 de mayo. El servicio estará habilitado para aquellas
              personas que cumplan con los criterios de elegibilidad adoptados
              por la Jefatura de Gabinete de Ministros. La normativa establece,
              a su vez, dos requisitos para comenzar el trámite: contar con una
              Clave Fiscal con nivel de seguridad 2 y tener registrado un
              Domicilio Fiscal Electrónico. El monto del Crédito a Tasa Cero que
              podrá solicitar cada persona depende de la categoría en la que
              está inscripto. El máximo previsto por la normativa es de
              $150.000.
            </p>
          </article>
        </section>
        <Aside />
      </section>
    </Layout>
  );
};
export default Novedades;
