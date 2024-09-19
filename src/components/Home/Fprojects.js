import React from "react";

export default function Fprojects(){
    return(
        <div>
            <section id="project" className="pt-5 pb-5 text-body" data-bs-theme="dark" >
  <div className="container pt-5">
    <div className="pb-3 mb-1 text-center">
      <span className="text-uppercase fw-light ls-3 ff-h d-block mb-2 text-primary">Acrino</span>
      <h2 className="display-6 fw-medium text-uppercase ff-h text-body-emphasis mb-4 ls-1">Featured projects
      </h2>
    </div>
  </div>
  <div className="project-slider splide">
    <div className="splide__arrows">
      <button className="splide__arrow splide__arrow--prev splide__arrow__primary ms-0 ms-md-5">
        <i className="bi bi-arrow-left-short" />
      </button>
      <button className="splide__arrow splide__arrow--next splide__arrow__primary ms-0 me-md-5">
        <i className="bi bi-arrow-right-short" />
      </button>
    </div>
    <div className="splide__track">
      <ul className="splide__list">
        <li className="splide__slide">
          <div className="mb-4">
            <a href="single-project.html" className="card card-float-bottom border-0 rounded-0 text-center bg-transparent">
              <figure className="image-hover-scale rounded-0 mb-0">
                <img src="assets/img/project/p1.jpg" className="card-img-top rounded-0 w-100" alt="..." />
              </figure>
              <div className="card-body bg-body-tertiary d-block p-4 shadow">
                <span className="card-sub-title text-uppercase ls-2 small text-primary ff-h fw-light d-block mb-2">
                  Exterior Design
                </span>
                <h5 className="card-title ff-h text-uppercase fw-normal text-body-emphasis ls-1 mb-3">
                  In eam omittam iudica
                </h5>
                <span className="small text-uppercase ls-2 card-sub-title">
                  <span>Details</span>
                  <i className="bi bi-plus-lg" />
                </span>
              </div>
            </a>
          </div>
        </li>
        <li className="splide__slide">
          <div className="mb-4">
            <a href="single-project.html" className="card card-float-bottom border-0 rounded-0 text-center bg-transparent">
              <figure className="image-hover-scale rounded-0 mb-0">
                <img src="assets/img/project/p2.jpg" className="card-img-top rounded-0 w-100" alt="..." />
              </figure>
              <div className="card-body bg-body-tertiary d-block p-4 shadow">
                <span className="card-sub-title text-uppercase ls-2 small text-primary ff-h fw-light d-block mb-2">
                  Interior Design
                </span>
                <h5 className="card-title ff-h text-uppercase fw-normal text-body-emphasis ls-1 mb-3">
                  Esse tollit iuvaret iusat
                </h5>
                <span className="small text-uppercase ls-2 card-sub-title">
                  <span>Details</span>
                  <i className="bi bi-plus-lg" />
                </span>
              </div>
            </a>
          </div>
        </li>
        <li className="splide__slide">
          <div className="mb-4">
            <a href="single-project.html" className="card card-float-bottom border-0 rounded-0 text-center bg-transparent">
              <figure className="image-hover-scale rounded-0 mb-0">
                <img src="assets/img/project/p3.jpg" className="card-img-top rounded-0 w-100" alt="..." />
              </figure>
              <div className="card-body bg-body-tertiary d-block p-4 shadow">
                <span className="card-sub-title text-uppercase ls-2 small text-primary ff-h fw-light d-block mb-2">
                  Exterior Design
                </span>
                <h5 className="card-title ff-h text-uppercase fw-normal text-body-emphasis ls-1 mb-3">
                  Adhuc reque complec
                </h5>
                <span className="small text-uppercase ls-2 card-sub-title">
                  <span>Details</span>
                  <i className="bi bi-plus-lg" />
                </span>
              </div>
            </a>
          </div>
        </li>
        <li className="splide__slide">
          <div className="mb-4">
            <a href="single-project.html" className="card card-float-bottom border-0 rounded-0 text-center bg-transparent">
              <figure className="image-hover-scale rounded-0 mb-0">
                <img src="assets/img/project/p4.jpg" className="card-img-top rounded-0 w-100" alt="..." />
              </figure>
              <div className="card-body bg-body-tertiary d-block p-4 shadow">
                <span className="card-sub-title text-uppercase ls-2 small text-primary ff-h fw-light d-block mb-2">
                  Architecture Design
                </span>
                <h5 className="card-title ff-h text-uppercase fw-normal text-body-emphasis ls-1 mb-3">
                  Facilis corrumpit dignis
                </h5>
                <span className="small text-uppercase ls-2 card-sub-title">
                  <span>Details</span>
                  <i className="bi bi-plus-lg" />
                </span>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>

        </div>
    )
}