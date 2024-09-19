import React from "react";

export default function Service(){
    return(
        <div>
            <section id="services" data-bs-theme="dark" className="pt-5 pb-5 text-body" >
  <div className="container pt-3">
    <div className="pb-3 text-center">
      <span className="text-uppercase fw-light ls-3 ff-h d-block mb-2 text-primary">Acrino</span>
      <h2 className="display-6 fw-medium text-uppercase ff-h text-body-emphasis mb-4 ls-1">Our Services</h2>
    </div>
    <div className="service-slider splide">
      <div className="splide__arrows splide__arrows__dark">
        <button className="splide__arrow splide__arrow--prev ms-4 ms-md-0">
          <i className="bi bi-arrow-left-short" />
        </button>
        <button className="splide__arrow splide__arrow--next me-4 me-md-0">
          <i className="bi bi-arrow-right-short" />
        </button>
      </div>
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide">
            <div className="mb-4">
              <a href="single-service.html" className="card card-img-hide border-0 rounded-0 text-center bg-body-tertiary shadow">
                <img src="assets/img/service/s1.jpg" className="card-img w-100 rounded-0" alt="..." />
                <div className="card-img-overlay p-4 d-flex align-items-center">
                  <div className="w-100">
                    <span className="d-inline-block mb-4">
                      <img src="assets/img/icon/i1.png" alt="..." width={48} />
                    </span>
                    <h5 className="card-title ff-h text-uppercase ls-2 fw-normal text-body-emphasis">
                      Architectural Design
                    </h5>
                    <p className="card-text d-none d-lg-block">
                      Lorem ipsum dolor sit amet, congue doctus vix eu. At molestie conceptam qui, dicam explicari ea nec. Vix ad lorem debet.
                    </p>
                    <span className="small text-primary text-uppercase ls-2">
                      <span>Read more</span>
                      <i className="bi bi-arrow-right" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li className="splide__slide">
            <div className="mb-4">
              <a href="single-service.html" className="card card-img-hide border-0 rounded-0 text-center bg-body-tertiary shadow">
                <img src="assets/img/service/s2.jpg" className="card-img w-100 rounded-0" alt="..." />
                <div className="card-img-overlay p-4 d-flex align-items-center">
                  <div className="w-100">
                    <span className="d-inline-block mb-4">
                      <img src="assets/img/icon/i2.png" alt="..." width={48} />
                    </span>
                    <h5 className="card-title ff-h text-uppercase ls-2 fw-normal text-body-emphasis">
                      Interior Design
                    </h5>
                    <p className="card-text d-none d-lg-block">
                      Lorem ipsum dolor sit amet, congue doctus vix eu. At molestie conceptam qui, dicam explicari ea nec. Vix ad lorem debet.
                    </p>
                    <span className="small text-primary text-uppercase ls-2">
                      <span>Read more</span>
                      <i className="bi bi-arrow-right" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li className="splide__slide">
            <div className="mb-4">
              <a href="single-service.html" className="card card-img-hide border-0 rounded-0 text-center bg-body-tertiary shadow">
                <img src="assets/img/service/s3.jpg" className="card-img w-100 rounded-0" alt="..." />
                <div className="card-img-overlay p-4 d-flex align-items-center">
                  <div className="w-100">
                    <span className="d-inline-block mb-4">
                      <img src="assets/img/icon/i3.png" alt="..." width={48} />
                    </span>
                    <h5 className="card-title ff-h text-uppercase ls-2 fw-normal text-body-emphasis">
                      Exterior Design
                    </h5>
                    <p className="card-text d-none d-lg-block">
                      Lorem ipsum dolor sit amet, congue doctus vix eu. At molestie conceptam qui, dicam explicari ea nec. Vix ad lorem debe.
                    </p>
                    <span className="small text-primary text-uppercase ls-2">
                      <span>Read more</span>
                      <i className="bi bi-arrow-right" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li className="splide__slide">
            <div className="mb-4">
              <a href="single-service.html" className="card card-img-hide border-0 rounded-0 text-center bg-body-tertiary shadow">
                <img src="assets/img/service/s4.jpg" className="card-img w-100 rounded-0" alt="..." />
                <div className="card-img-overlay p-4 d-flex align-items-center">
                  <div className="w-100">
                    <span className="d-inline-block mb-4">
                      <img src="assets/img/icon/i4.png" alt="..." width={48} />
                    </span>
                    <h5 className="card-title ff-h text-uppercase ls-2 fw-normal text-body-emphasis">
                      Furniture Design
                    </h5>
                    <p className="card-text d-none d-lg-block">
                      Lorem ipsum dolor sit amet, congue doctus vix eu. At molestie conceptam qui, dicam explicari ea nec. Vix ad lorem debet.
                    </p>
                    <span className="small text-primary text-uppercase ls-2">
                      <span>Read more</span>
                      <i className="bi bi-arrow-right" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}