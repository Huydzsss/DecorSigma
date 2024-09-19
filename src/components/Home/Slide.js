import React from "react";

export default function Slide(){
    return(
        <div>
            <section id="hero" className="hero-carousel bg-body-secondary">
  <div id="crsHero" className="carousel slide carousel-fade">
    <div className="carousel-indicators pb-3">
      <button type="button" data-bs-target="#crsHero" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#crsHero" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#crsHero" data-bs-slide-to={2} aria-label="Slide 3" />
    </div>
    <div className="carousel-inner">
    <div className="carousel-item active" style={{ backgroundImage: 'url(/assets/img/hero/h1.jpg)'}}>
        <div className="carousel-caption">
          <div className="container">
            <span className="text-uppercase ff-h ls-5 fw-light">Architectural design</span>
            <h5 className="display-2 fw-medium text-uppercase ff-h mb-4 text-white ls-3">Secluded Bali Villas</h5>
            <a href="project-1-column.html" className="btn btn-lg btn-primary fs-6 rounded-0 ls-2 text-uppercase d-inline-block fw-light">
              <span>See project</span>
              <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="carousel-item bg-image" style={{ backgroundImage: 'url(/assets/img/hero/h2.jpg)'}}>
        <div className="container h-100">
          <div className="carousel-caption">
            <div className="container">
              <span className="text-uppercase ff-h ls-5 fw-light">Architectural design</span>
              <h5 className="display-2 fw-medium text-uppercase ff-h mb-4 mb-4 text-white ls-3">Hawaii Beach Resort</h5>
              <a href="project-1-column.html" className="btn btn-lg btn-primary fs-6 rounded-0 ls-2 text-uppercase d-inline-block fw-light">
                <span>See project</span>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item bg-image" style={{ backgroundImage: 'url(/assets/img/hero/h3.jpg)'}}>
        <div className="container h-100">
          <div className="carousel-caption">
            <div className="container">
              <span className="text-uppercase ff-h ls-5 fw-light">Architectural design</span>
              <h5 className="display-2 fw-medium text-uppercase ff-h mb-4 mb-4 text-white ls-3">Pine Hill Villa</h5>
              <a href="project-1-column.html" className="btn btn-lg btn-primary fs-6 rounded-0 ls-2 text-uppercase d-inline-block fw-light">
                <span>See project</span>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev pe-5 d-none d-lg-flex" type="button" data-bs-target="#crsHero" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next ps-5 d-none d-lg-flex" type="button" data-bs-target="#crsHero" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  
</section>

        </div>
    )
}