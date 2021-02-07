import "./Home.css";
import Layout from "./components/layout";
import Aside from "./Aside";

const Quienes = () => {
  return (
    <Layout>
      <section className="main">
        <section className="articles">
          <article>
            <h2>¿Quienes Somos?</h2>
            <br />
            <p>
              Estudio Dillon fue fundado en el año 2005, llegando a contar con
              una amplia cartera de cuentas. Desde hace 15 años trabajamos con
              el objetivo de estar a la altura de las expectativas de nuestros
              clientes y un paso adelante de los cambios en las exigencias.
              <br />
              Brindamos servicios a emprendedores, startups, pymes y empresas
              con presencia internacional. Nuestro equipo está formado por
              jóvenes profesionales en constante actualización para hacer de su
              negocio una unidad eficiente. Creemos firmemente en valor
              diferencial que le podemos aportar a su empresa, contáctenos y le
              contaremos de que se trata nuestra propuesta.
            </p>
            <br />
            <div align="center" className="quienes">
              <img
                src="imgs/quienes.jpg"
                tag="quienessomos"
                width="500"
                alt="Quienes"
              />
            </div>
          </article>
        </section>
        <Aside />
      </section>
    </Layout>
  );
};
export default Quienes;
