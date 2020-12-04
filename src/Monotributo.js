import './Home.css';
import Layout from './components/layout';

const Monotributo = () => {

    return (
<Layout>	
	<section className="main">
		<section className="articles">
			<article>
				<h2>Servicios especiales para Monotributistas</h2><br />
				<p>Brindamos asesoramiento integral a monotributistas. Realizamos un seguimiento personalizado
				de la situación de nuestros clientes, manteniendo actualizado el monto de facturación a fin de
				adelantarse a recategorizaciones o exclusiones.<br /><br /> Contamos con herramientas web que permiten un 
				seguimiento online de las gestiones realizadas por el estudio. <br /><br /> Ofrecemos la posibilidad de realizar las facturas electrónicas a través de webservices.
				<br /><br />Ayudamos al cumplimiento de tus obligaciones con AFIP y otros organismos, evitando el pago de multas por incumplimientos y aprovechando las facilidades vigentes para cada tipo de actividad o forma jurídica..</p><br />
				<h3>Trámites:</h3>
				<ul>
				<li>Alta de monotributo</li>
				<li>Recategorización</li>
				<li>Seguimiento online de tu facturación</li>
				<li>Convenio Multilateral</li>
				<li>Ingresos Brutos</li>
				</ul>

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
			</div>
				<br />
				<p align="center">Otros links de interes</p><br />
				<div align="center" className="otroslinks">
				<a href="http://www.arba.gob.ar" target="_blank"><img src="imgs/arba22.png" tag="arba" width="100" /></a><br />
				<a href="http://www.afip.gov.ar" target="_blank"><img src="imgs/afip22.png" tag="afip" width="120" /></a></div>
		</aside>

	</section>

</Layout>

    );

}
export default Monotributo;
