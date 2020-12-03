import { Children } from 'react';
import './style.css';

const Layout = (props) => {
    return (    
        <div>
            <header>
                <div className="logotipo">
                    <img src="imgs/logo.jpg" width="300" alt="logotipo" />
                </div>
                <nav>                    
                    <ul>
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="impuestos.html">impuestos</a></li>
                        <li><a href="sueldos.html">Sueldos</a></li>
                        <li><a href="monotributo.html">Monotributo</a></li>
                        <li><a href="tramites.html">Trámites</a></li>
                        <li><a href="novedades.html">Novedades</a></li>
                        <li><a href="vencimientos.html">Vencimientos</a></li>
                        <li><a href="quienes.html">Quienes Somos</a></li>
                        <li><a href="contactos.html">Contactos</a></li>
                    </ul>                    
                </nav>                
            </header>
            {props.children}
            <footer>
                <p>Estudio Contable Dillon - 2020 - Todos los derechos reservados</p>
            </footer>
        </div> 
    );
};


export default Layout;
