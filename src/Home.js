import './Home.css';
import Layout from './components/layout';

function Home() {
  return (
    <div className="App">
		<Layout />

  <section className="main">
	<section className="articles">
	<article>
		<h2>Estudio Contable Dillon</h2><br />
		<p>En Estudio Contable Dillon entendemos que preferís dedicarle la menor cantidad
		 de tiempo a tus obligaciones impositivas, para poder concentrarte en ganar nuevos negocios
		  y disfrutar de tu tiempo libre. Por eso nuestro principal objetivo es darte la tranquilidad
		   de que tus impuestos están en orden.
		Trabajamos con cientos de monotributistas, startups y empresas de todas las formas y tamaños de todo el país. 
		Nos hemos esforzado mucho en  escuchar sus necesidades, invertir en tecnología y capacitar a nuestros contadores 
		para brindarles un alto nivel de servicio.</p>
	</article>
	<article>
		<h2>Novedades del mes de Diciembre</h2><br />
		<ul>
			<li>Vencimiento de la Moratoria 2020</li>
			<li>Beneficio para contribuyentes cumplidores</li>
			<li>Se extiende el reintegro del 15% para compras con tarjeta de Debito</li>
			<li>Abierto el sistema de créditos a tasa subsidiada y el REPRO II</li>
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

<footer>
	<p>Estudio Contable Dillon - 2020 - Todos los derechos reservados</p>
</footer>

    </div>
  );
}

export default Home;
