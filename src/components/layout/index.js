import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Layout = (props) => {
  return (
    <div>
      <header>
        <div className="logotipo">
          <img src="imgs/logo.jpg" width="300" alt="logotipo" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/impuestos">Impuestos</Link>
            </li>
            <li>
              <Link to="/sueldos">Sueldos</Link>
            </li>
            <li>
              <Link to="/monotributo">Monotributo</Link>
            </li>
            <li>
              <Link to="/tramites">Trámites</Link>
            </li>
            <li>
              <Link to="/novedades">Novedades</Link>
            </li>
            <li>
              <Link to="/vencimientos">Vencimientos</Link>
            </li>
            <li>
              <Link to="/quienes">Quienes Somos</Link>
            </li>
            <li>
              <Link to="/contactos">Contactos</Link>
            </li>
          </ul>
        </nav>
      </header>
      {props.children}
      <footer>
        <p>Estudio Contable Dillon - 2021 - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Layout;
