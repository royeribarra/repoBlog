import styles from '../styles/header.module.css';


function Header() {
   
    return (

<div className={styles.container}>

<nav class="navBar navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class={styles.logo} href="/">
    <img
                  src="https://repo.com.pe/static/media/repologo.be247a6c.svg"
                  height="50"
                  className={styles.logo}
                  alt="Repo"
                />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class={styles.botonesPaginas}>
          <a class={styles.tituloNav} aria-current="page" href="https://repo.com.pe/#/servicios">¿Qué hacemos?</a>
        </li>
        <li class={styles.botonesPaginas}>
          <a class={styles.tituloNav} href="https://repo.com.pe/#/ayuda">Ayuda</a>
        </li>
        <li class={styles.botonesPaginas}>
          <a class={styles.tituloNav} href="https://repo.com.pe/#/contacto">Contáctanos</a>
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