import { Link } from "react-router-dom";


const Header = () => {
    return(
      <header>
        <div className="container py-5">
            <div className="row">
                {/* <div className="col">
                <Link to="/"><img src="" alt=""
                    width={150}/></Link>
                </div> */}
                <div className="col">
                 <ul className="nav nav-underline justify-content-end align-items-center">
                    <li className="nav-item">
                      <Link className="nav-link text-light " aria-current="page" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-light" to="/servicios">Servicios</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-light" to="/locales">Nuestros Locales</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-light" to="/ofertas">Ofertas en Locales</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-light" to="/nosotros">Sobre Nosotros</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-light" to="/contactos">Contactos</Link>
                    </li>
                 </ul>
                </div>
            </div>
        </div>
      </header>  
    )
}

export default Header;