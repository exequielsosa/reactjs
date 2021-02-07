import React from "react";
import "./style.css";
import Navbar from "../navBar/Navbar";

const Layout = (props) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      {props.children}

      <div className="pie">
        <div className="logosredes" align="center">
          <p>Nuestras Redes </p>
          <br />
          <a
            href="http://www.instagram.com/maugexxiv"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="imgs/instagram.png"
              alt="Instagram"
              tag="instagram"
              className="logos"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/maria-eugenia-dillon-05346113/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="Linkedin"
              src="imgs/linkedin.png"
              tag="linkedin"
              className="logos"
            />
          </a>
          <a href="http://www.facebook.com/" target="_blank" rel="noreferrer">
            <img
              src="imgs/facebook.png"
              alt="Facebook"
              tag="facebook"
              className="logos"
            />
          </a>
          <a
            href=" https://api.whatsapp.com/send?phone=5491158959823"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="imgs/whatsapp.png"
              alt="WhatsApp"
              tag="whatsapp"
              className="logos"
            />
          </a>
          <a href="mailto:estudiodillonsosa@gmail.com?Subject:Consulta%20a%20Estudio%20Dillon">
            <img
              src="imgs/email.png"
              alt="Mail"
              tag="email"
              className="logos"
            />
          </a>
        </div>{" "}
        <br />
        <div className="logos_Links">
          <p align="center">Otros links de interes</p>
          <br />
          <div align="center" className="otroslinks">
            <a href="http://www.arba.gob.ar" target="_blank" rel="noreferrer">
              <img
                src="imgs/arba22.png"
                alt="Arba"
                tag="arba"
                width="100"
                className="links"
              />
            </a>
            <br />
            <a href="http://www.afip.gov.ar" target="_blank" rel="noreferrer">
              <img
                src="imgs/afip22.png"
                alt="Afip"
                tag="afip"
                width="120"
                className="links"
              />
            </a>
          </div>
        </div>
      </div>

      <footer>
        <p>Estudio Contable Dillon - 2021 - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Layout;
