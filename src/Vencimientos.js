import './Home.css';
import Layout from './components/layout';

const Vencimientos = () => {

    return (

<Layout>	

	<section className="main">
		<section className="articles">
			
			<article>
				<h2>Vencimientos 2020</h2><br />
				<div align="center" className="vencimientos">
					<a href="imgs/calendario2020.jpg" target="_blank"><img src="imgs/calendario2020.jpg" width="800" tag="vencimientos" /></a>
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
export default Vencimientos;
