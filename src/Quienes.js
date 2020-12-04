import './Home.css';
import Layout from './components/layout';

const Quienes = () => {

    return (

<Layout>	

	<section className="main">
		<section className="articles">
		
			<article>
					<h2>¿Quienes Somos?</h2><br />
					<p>Estudio Dillon fue fundado en el año 2005, llegando a contar con una amplia cartera de cuentas. 
						Desde hace 15 años trabajamos con el objetivo de estar a la altura de las expectativas de nuestros 
						clientes y un paso adelante de los cambios en las exigencias.<br />
						Brindamos servicios a emprendedores, startups, pymes y empresas con presencia internacional. 
						Nuestro equipo está formado por jóvenes profesionales en constante actualización para hacer de su negocio una unidad 
						eficiente. Creemos firmemente en valor diferencial que le podemos aportar a su empresa, contáctenos y le contaremos 
						de que se trata nuestra propuesta.</p><br />
						<div align="center" className="quienes">
							<img src="imgs/quienes.jpg" tag="quienessomos" width="500" />
						</div>
					
			</article>

		</section>


		<aside>
			<div className="logosredes" align="center">
				<p>Nuestras Redes </p><br />

				<a href="http://www.instagram.com/maugexxiv" target="_blank"><img src="imgs/instagram.png" tag="instagram" /></a>	
				<a href="https://www.linkedin.com/in/maria-eugenia-dillon-05346113/" target="_blank"><img src="imgs/linkedin.png" tag="linkedin" /></a>
				<a href="http://www.facebook.com/" target="_blank"><img src="imgs/facebook.png" tag="facebook" /></a>
				<a href=" https://api.whatsapp.com/send?phone=5491158959823" target="_blank"><img src="imgs/whatsapp.png" tag="whatsapp" /></a>
				<a href="mailto:estudiodillonsosa@gmail.com?Subject:Consulta%20a%20Estudio%20Dillon"><img src="imgs/email.png" tag="email" /></a>
			</div><br />
				<p align="center">Otros links de interes</p><br />
				<div align="center" className="otroslinks">
				<a href="http://www.arba.gob.ar" target="_blank"><img src="imgs/arba22.png" tag="arba" width="100" /></a><br />
				<a href="http://www.afip.gov.ar" target="_blank"><img src="imgs/afip22.png" tag="afip" width="120" /></a></div>

		</aside>
	</section>

</Layout>

    );

}
export default Quienes;
