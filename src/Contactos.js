import './Home.css';
import Layout from './components/layout';

const Contactos = () => {

    return (

<Layout>	

	<section className="main">
		<section className="articles">
			<article>
				<h2>Contactenos</h2><br />
					<form name="frm" method="post" action="envio.php">
						<fieldset id="form">
							<div align="center">
								<ol>
									<li><label>Nombre: </label><input type="text" name="fname" size="40" /></li>
									<li><label>E-mail: </label><input type="text" name="femail" size="40" /></li>
									<li><label>Telefono: </label><input type="text" name="fdireccion" size="40" /></li>    
									<li><label>Asunto: </label><input type="text" name="fdireccion" size="40" /></li>
									<li><label>Su Mensaje: </label><input type="text" name="fdireccion" size="40" /></li>
								</ol>
									<p align="center"><input type="submit" name="submit" className="btn" value="Enviar" /></p>
							</div>
						</fieldset>
					</form>
							
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
			</div>	<br />
				<p align="center">Otros links de interes</p><br />
				<div align="center" className="otroslinks">
				<a href="http://www.arba.gob.ar" target="_blank"><img src="imgs/arba22.png" tag="arba" width="100" /></a><br />
				<a href="http://www.afip.gov.ar" target="_blank"><img src="imgs/afip22.png" tag="afip" width="120" /></a></div>

		</aside>

	</section>

</Layout>

    );

}

export default Contactos;
