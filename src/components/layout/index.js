import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMoneyBillAlt,
  faFileInvoice,
  faPager,
  faPaperPlane,
  faRss,
  faNewspaper,
  faAddressCard,
  faEnvelope,
  faBars,
} from "@fortawesome/free-solid-svg-icons";


const Layout = (props) => {
  return (
    <div>
      <header>
        <div className="logotipo">
          <img
            src="imgs/logo.png"
            alt="logotipo"
            className="logo"
          />
        </div>
        <div className="menu_bar">
          <Link to="#" className="icon_menu">
            <span>
              <FontAwesomeIcon icon={faBars} />
            </span>
            Menu
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">
                <span className="icon">
                  <FontAwesomeIcon icon={faHome} />
                </span>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/impuestos">
                <span className="icon">
                  <FontAwesomeIcon icon={faMoneyBillAlt} />
                </span>
                Impuestos
              </Link>
            </li>
            <li>
              <Link to="/sueldos">
                <span className="icon">
                  <FontAwesomeIcon icon={faFileInvoice} />
                </span>
                Sueldos
              </Link>
            </li>
            <li>
              <Link to="/monotributo">
                <span className="icon">
                  <FontAwesomeIcon icon={faPager} />
                </span>
                Monotributo
              </Link>
            </li>
            <li>
              <Link to="/tramites">
                <span className="icon">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </span>
                Trámites
              </Link>
            </li>
            <li>
              <Link to="/novedades">
                <span className="icon">
                  <FontAwesomeIcon icon={faRss} />
                </span>
                Novedades
              </Link>
            </li>
            <li>
              <Link to="/vencimientos">
                <span className="icon">
                  <FontAwesomeIcon icon={faNewspaper} />
                </span>
                Vencimientos
              </Link>
            </li>
            <li>
              <Link to="/quienes">
                <span className="icon">
                  <FontAwesomeIcon icon={faAddressCard} />
                </span>
                Quienes Somos
              </Link>
            </li>
            <li>
              <Link to="/contactos">
                <span className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                Contactos
              </Link>
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
