import "./Home.css";
import Layout from "./components/layout";
import Aside from "./Aside";

function Home() {
  return (
    <Layout>
      <section className="main">
        <section className="articles">
          <article>
            <h2>Estudio Contable Dillon</h2>
            <br />
            <p>
              En Estudio Contable Dillon entendemos que preferís dedicarle la
              menor cantidad de tiempo a tus obligaciones impositivas, para
              poder concentrarte en ganar nuevos negocios y disfrutar de tu
              tiempo libre. Por eso nuestro principal objetivo es darte la
              tranquilidad de que tus impuestos están en orden. Trabajamos con
              cientos de monotributistas, startups y empresas de todas las
              formas y tamaños de todo el país. Nos hemos esforzado mucho en
              escuchar sus necesidades, invertir en tecnología y capacitar a
              nuestros contadores para brindarles un alto nivel de servicio.
            </p>
          </article>
          <article>
            <h2>Novedades del mes de Diciembre</h2>
            <br />
            <ul>
              <li>Vencimiento de la Moratoria 2020</li>
              <li>Beneficio para contribuyentes cumplidores</li>
              <li>
                Se extiende el reintegro del 15% para compras con tarjeta de
                Debito
              </li>
              <li>
                Abierto el sistema de créditos a tasa subsidiada y el REPRO II
              </li>
            </ul>
          </article>
        </section>
        <Aside />
      </section>
    </Layout>
  );
}

export default Home;
