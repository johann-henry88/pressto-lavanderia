import GallerySection from "./galeria";

const Inicio = () => {
    return(
        <>

<div id="carouselExampleFade" class="carousel slide carousel-fade">
          <div className="carousel-inner">
           <div className="carousel-item active">
               <img src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" class="d-block w-100" alt="..." />
           </div>
           <div className="carousel-item">
           <img src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" class="d-block w-100" alt="..." />
           </div>
           <div className="carousel-item">
           <img src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" class="d-block w-100" alt="..." />
           </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
           <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <GallerySection />
        
        </>

        
        
    )
}

export default Inicio;