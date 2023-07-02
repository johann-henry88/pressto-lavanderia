const Footer = () => {
    return(
        // <div class="card text-light vh-25 bg-dark border-success mb-3   " >
        //   <div class="card-header bg-transparent border-success">Header</div>
        //   <div class="card-body text-success">
        //     <h5 class="card-title">Success card title</h5>
        //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //   </div>
        //   <div class="card-footer bg-transparent border-success">Footer</div>
        // </div>
        <footer>
      <div className="container ">
        <p>&copy; {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
      </div>
    </footer>
    )
}

export default Footer;

