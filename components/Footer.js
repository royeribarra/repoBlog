import styles from '../styles/footer.module.css';
import { Container, Nav } from 'react-bootstrap';
import Link from 'next/link';

function Footer() {
  return (
    <div className={styles.footer}>
      <Container className={styles.contenedorFooter}>
        <div className={styles.paginasContacto}>
          <div className={styles.logoRepoFooter}>
            <img
              src="https://repo.com.pe/static/media/repoLogoGrande.44629e3f14828c482225b9de299e6a28.svg"
              width="70"
              height="70"
              className="logoFooter"
              alt="Repo"
            >
            </img>
          </div>
          <div className={styles.consultasFooter}>
            <p className={styles.footerCentral}>¿Tuviste algún inconveniente?</p>
            <p className={styles.footerCentral}>Escríbenos a contacto@repo.com.pe</p>
          </div>
          <div className={styles.logosFooter}>
            <Link className={styles.enlaceFooter} href="https://www.instagram.com/repo.pe/?hl=es">
              <img
                src="https://repo.com.pe/static/media/instagram.f8508ec67d77c3326c71bae8c75fa522.svg"
                width="50"
                height="50"
                className={styles.logoRedes}
                alt="instagram cambios y devoluciones desde casa"
              >
            </img>
            </Link>
            <Link className={styles.enlaceFooter} href="https://www.facebook.com/repocompany">
              <img
                src="https://repo.com.pe/static/media/facebook.091bf6ee7e6d8ff2396ff656b1bc2c2c.svg"
                width="50"
                height="50"
                className={styles.logoRedes}
                alt="facebook cambios y devoluciones desde casa"
              >
              </img>
            </Link>
            <Link className={styles.enlaceFooter} href="https://www.tiktok.com/@repo.pe">
              <img
                src="https://repo.com.pe/static/media/tiktok.9f56c70420bf40c0b2e04f0ca7a82748.svg"
                width="50"
                height="50"
                className={styles.logoRedes}
                alt="tiktok Repo cambios y devoluciones desde casa"
              >
              </img>
            </Link>
            <Link className={styles.enlaceFooter} href="https://pe.linkedin.com/company/turepo">
              <img
                src="https://repo.com.pe/static/media/linkedin.e3edd6757dfd4e4b639bc72e5cfc58ed.svg"
                width="50"
                height="50"
                className={styles.logoRedes}
                alt="linkedin cambios y devoluciones desde casa"
              >
              </img>
            </Link>
          </div>
        </div>
        <div className={styles.seccionesFooter}>
          <div>
            <p className={styles.titulosFooter}>Búscanos en</p>
            <ul className={styles.listaFooter}>
                <li className= {styles.seccionFooter} >
                    <Nav.Link className={styles.enlaceFooter} 
                        href="https://www.instagram.com/repo.pe/?hl=es">
                            Instagram
                    </Nav.Link>
                </li>
                <li className= {styles.seccionFooter} >
                    <Nav.Link className={styles.enlaceFooter} 
                        href="https://www.facebook.com/repocompany">
                            Facebook
                    </Nav.Link>
                </li>
                <li className= {styles.seccionFooter} >
                    <Nav.Link className={styles.enlaceFooter} 
                        href="https://www.facebook.com/repocompany">
                            LinkedIn
                    </Nav.Link>
                </li>
                <li className= {styles.seccionFooter} >
                    <Nav.Link className={styles.enlaceFooter} 
                        href="https://www.facebook.com/repocompany">
                            TikTok
                    </Nav.Link>
                </li>
            </ul>
          </div>
          <div>
            <p className={styles.titulosFooter}>Producto</p>
            <ul className={styles.listaFooter}> 
              <li className= {styles.seccionFooter} >
                <Nav.Link 
                    className= {styles.enlaceFooter} 
                    href="https://dashboard.repo.com.pe/#/" 

                >Soy Tienda Repo</Nav.Link>
              </li>
              <li className= {styles.seccionFooter} >
                <Nav.Link 
                    className= {styles.enlaceFooter}
                    href="https://repo.com.pe/tienda-aliada" 

                >Quiero ser tienda aliada</Nav.Link>
              </li>
              <li className= {styles.seccionFooter} >
                <Nav.Link 
                    className= {styles.enlaceFooter}
                    href="https://repo.com.pe/operador-aliado" 

                >Quiero ser logístico aliado</Nav.Link>
              </li>
            </ul>
          </div>
          <div>
            <p className={styles.titulosFooter}>Ayuda</p>
            <ul className={styles.listaFooter}>
              <li className= {styles.seccionFooter} >
                <Nav.Link 
                    className= {styles.enlaceFooter}
                    href="https://repo.com.pe/seguridad" 

                >Seguridad</Nav.Link>
              </li>
              <li className= {styles.seccionFooter} >
                <Nav.Link 
                    className= {styles.enlaceFooter}
                    href="https://repo.com.pe/ayuda" 

                >Devoluciones</Nav.Link>
              </li>
              <li className= {styles.seccionFooter} >
                <Nav.Link 
                    className= {styles.enlaceFooter}
                    href="https://repo.com.pe/ayuda" 

                >Cambios</Nav.Link>
              </li>
              <li className= {styles.seccionFooter} >
                <Nav.Link 
                    className= {styles.enlaceFooter}
                    href="https://repo.com.pe/libro-reclamaciones"

                >Reclamos</Nav.Link>
              </li>
              <li className= {styles.seccionFooter} >
                <Nav.Link
                    className= {styles.enlaceFooter}
                    href="https://repo.com.pe/contacto" 

                >Contáctanos</Nav.Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className={styles.lineaSuave}/>
        <div >
          <ul className={styles.legalFooter}>
            <li className={styles.seccionFooterLegal}>
              <Nav.Link 
                className= {styles.enlaceFooter}
                href="https://repo.com.pe/terminos-condiciones" 
              >Términos y condiciones</Nav.Link>
            </li>
            <li className={styles.seccionFooterLegal}>
              <Nav.Link 
                className= {styles.enlaceFooter}
                href="https://repo.com.pe/politica-privacidad" 
              >Política de privacidad</Nav.Link>
            </li>
          </ul>
        </div>
        <hr className={styles.lineaSuave}/>
        <div>
          <p className={styles.miniTextoFooter}>
              Repo es el primer servicio de cambios y devoluciones desde tu casa en el Perú. 
              Ayudamos a tiendas físicas y online para que puedan ofrecer cambios y devoluciones automatizados a sus clientes. 
              El cliente realiza su solicitud de cambio y devolución de sus compras en tan solo 3 minutos y nos encargamos de brindarle el servicio en menos de 24 horas. 
              Con Repo, cambia o devuelve tus compras desde cualquier tienda. 
          </p>
          <p className={styles.miniTextoFooter}>
              Cambia o devuelve tus compras online
              Repo es el primer servicio de cambios y devoluciones en el Perú. Te brindamos la opción de poder cambiar o devolver en más de 200 tiendas. Los clientes pueden elegir si quieren cambiar o devolver sus productos. Dependiendo de la política de cambios y devoluciones de la tienda, ofrecemos diversas opciones para el cliente como cambio de talla, cambio de color, cambio de producto, devolución de dinero, vale de compra, entre otros. En Repo, puedes cambiar o devolver un producto que no es para ti. ¿No te gustó? ¿No era lo que esperabas? ¿No te quedó? ¿No era tu talla? ¿El producto estaba dañado? ¿Te enviaron otro producto por error? No te preocupes, cambia o devuelve con Repo.
              Además, cambiar o devolver los productos de tus tiendas online favoritas es muy sencillo, ya que puedas cambiar o devolver con total comodidad desde tu casa, tu oficina o desde donde estés a través de nuestro sitio web www.repo.com.pe. En Repo, resolvemos tu cambio o devolución en menos de 24 horas, no más “acércate con el producto a una tienda”, “dirígete a nuestro centro de atención al cliente”, “comunícate con el call center” para cambiar o devolver tus productos de tus tiendas favoritas. Puedes realizar tu solicitud en tan solo 3 minutos los 7 días de la semana las 24 horas del día. Llegamos a todos los distritos de Lima gracias a nuestros operadores logísticos aliados.
          </p> 
          <p className={styles.miniTextoFooter}>
              Tiendas en Repo
              En Repo, podrás cambiar o devolver tus compras desde las principales tiendas del Perú como: Falabella, Ripley, Oechsle, Marathon, Adidas, Nike, Platanitos, Zara, H&M, Footloose, entre otras. 
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;