import './style.css';

const Layout = () => {
    return (     
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
    );
};

export default Layout;
