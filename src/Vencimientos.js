import "./Home.css";
import Layout from "./components/layout";
import Aside from "./Aside";

const Vencimientos = () => {
  return (
    <Layout>
      <section className="main">
        <section className="articles">
          <article>
            <h2>Vencimientos 2020</h2>
            <br />
            <div align="center" className="vencimientos">
              <a href="imgs/Calendario+Vencimientos+2021.png" target="_blank">
                <img
                  src="imgs/Calendario+Vencimientos+2021.png"
                  width="100%"
                  tag="vencimientos"
                  alt="Vencimientos"
                />
              </a>
            </div>
          </article>
        </section>
        <Aside />
      </section>
    </Layout>
  );
};
export default Vencimientos;
