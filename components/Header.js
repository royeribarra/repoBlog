import styles from '../styles/header.module.css';
import Link from 'next/link';


function Header() {
   
    return (

<div className={styles.container}>

<nav className="navBar navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className={styles.logo} href="/">
    <img
                  src="https://repo.com.pe/static/media/repologo.be247a6c.svg"
                  height="50"
                  className={styles.logo}
                  alt="Repo"
                />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li key={1} className={styles.botonesPaginas}>
          <Link className={styles.tituloNav} aria-current="page" href="https://repo.com.pe/#/servicios">¿Qué hacemos?</Link>
        </li>
        <li key={2} className={styles.botonesPaginas}>
          <Link className={styles.tituloNav} href="https://repo.com.pe/#/ayuda">Ayuda</Link>
        </li>
        <li key={3} className={styles.botonesPaginas}>
          <Link className={styles.tituloNav} href="https://repo.com.pe/#/contacto">Contáctanos</Link>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>



     </div>

    );
  };
  
  export default Header