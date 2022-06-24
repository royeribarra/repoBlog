import styles from '../styles/header.module.css';
import Link from 'next/link';
import { Navbar, Nav, Container } from "react-bootstrap";



function Header() {
   
    return (

<div className={styles.container}>

<Navbar collapseOnSelect expand="lg" className={styles.navBar}>
        <Container>
          <Navbar.Brand href="https://repo.com.pe/">
            <img
              src="https://repo.com.pe/static/media/repologo.be247a6c7d4c7e6402eb5df1f460c14e.svg"
              height="50"
              className="logoNav"
              alt="Repo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={styles.botonesPaginas}>
              <Nav.Link href="https://repo.com.pe/servicios" className={styles.tituloNav}>¿Qué hacemos?</Nav.Link>
              <Nav.Link href="https://repo.com.pe/ayuda" className={styles.tituloNav}>Ayuda</Nav.Link>
              <Nav.Link href="https://repo.com.pe/contacto" className={styles.tituloNav}>Contáctanos</Nav.Link>
              <Nav.Link href="/" className={styles.tituloNav}>Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

     </div>

    );
  };
  
  export default Header