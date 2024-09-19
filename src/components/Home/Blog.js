import React from "react";

export default function Blog(){
    return(
        <div>
            <section id="blog" data-bs-theme="dark" className="pb-5 pt-5" >
  <div className="container pt-3">
    <div className="pb-3 mb-1 text-center">
      <span className="text-uppercase fw-light ls-3 ff-h d-block mb-2 text-primary">Acrino Blog</span>
      <h2 className="display-6 fw-medium text-uppercase ff-h text-body-emphasis mb-4 ls-1">
        Lastest news
      </h2>
    </div>
    <div className="row">
      <div className="col-12 col-xl-4 col-lg-6">
        <a href="single-post.html" className="card card-float-bottom border-0 rounded-0 text-center mb-4">
          <figure className="image-hover-scale rounded-0 mb-0">
            <img src="assets/img/blog/b1.jpg" className="card-img-top rounded-0 w-100" alt="..." />
          </figure>
          <div className="card-body bg-body-tertiary d-block p-4 shadow">
            <div className="mb-2 small text-uppercase ls-1">
              <span className="card-sub-title small me-3">Architecture</span>
              <span className="card-sub-title small">3 hours ago</span>
            </div>
            <h5 className="card-title ff-h text-uppercase fw-normal text-body-emphasis ls-1 mb-3">
              Lorem ipsum dolor sit amet discere inermis euper
            </h5>
            <span className="small text-uppercase ls-2 card-sub-title text-primary">
              <span>Details</span>
              <i className="bi bi-arrow-right" />
            </span>
          </div>
        </a>
      </div>
      <div className="col-12 col-xl-4 col-lg-6">
        <a href="single-post.html" className="card card-float-bottom border-0 rounded-0 text-center mb-4">
          <figure className="image-hover-scale rounded-0 mb-0">
            <img src="assets/img/blog/b2.jpg" className="card-img-top rounded-0 w-100" alt="..." />
          </figure>
          <div className="card-body bg-body-tertiary d-block p-4 shadow">
            <div className="mb-2 small text-uppercase ls-1">
              <span className="card-sub-title small me-3">Design</span>
              <span className="card-sub-title small">1 day ago</span>
            </div>
            <h5 className="card-title ff-h text-uppercase fw-normal text-body-emphasis ls-1 mb-3">
              Ei vide cotidie dissent duo eu saepe veniam accu
            </h5>
            <span className="small text-uppercase ls-2 card-sub-title text-primary">
              <span>Details</span>
              <i className="bi bi-arrow-right" />
            </span>
          </div>
        </a>
      </div>
      <div className="col-12 col-xl-4 col-lg-6">
        <a href="single-post.html" className="card card-float-bottom border-0 rounded-0 text-center mb-4">
          <figure className="image-hover-scale rounded-0 mb-0">
            <img src="assets/img/blog/b3.jpg" className="card-img-top rounded-0 w-100" alt="..." />
          </figure>
          <div className="card-body bg-body-tertiary d-block p-4 shadow">
            <div className="mb-2 small text-uppercase ls-1">
              <span className="card-sub-title small me-3">Interior</span>
              <span className="card-sub-title small">20-11-2023</span>
            </div>
            <h5 className="card-title ff-h text-uppercase fw-normal text-body-emphasis ls-1 mb-3">
              Cetero torquatos no vim in usu docendi alienum
            </h5>
            <span className="small text-uppercase ls-2 card-sub-title text-primary">
              <span>Details</span>
              <i className="bi bi-arrow-right" />
            </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}