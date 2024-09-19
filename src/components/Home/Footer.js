import React from "react";

export default function Footer(){
    return(
        <div>
            <footer id="footer" className="pt-5 pb-5 text-body" data-bs-theme="dark" data-cue="fadeIn">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="mb-5 pb-5 text-center">
          <span className="text-uppercase fw-light ls-3 ff-h d-block mb-2 text-primary">Let's take</span>
          <h2 className="display-6 fw-medium text-uppercase ff-h text-body-emphasis mb-4 ls-1">
            About Your Project
          </h2>
          <a href="contact.html" className="btn btn-lg fs-6 btn-primary rounded-0 text-uppercase ls-2 fw-light">
            <span>Get in touch</span>
            <i className="bi bi-arrow-right" />
          </a>
        </div>
        <div className="mb-5 pb-5 text-center">
          <h5 className="h4 mb-3 ff-h fw-normal text-body-emphasis text-uppercase ls-2">Contact Info</h5>
          <div className="pt-2 lh-sm">
            <p>
              <span>610 Placer Loquen, Paris, France.</span>
            </p>
            <p>
              <span>+33 321-654-9876 (Ext: 123).</span>
            </p>
            <p>
              <a href="#" className="text-body link-hover-primary">contact@example.com</a>
            </p>
            <p>
              <a href="#" className="text-body link-hover-primary">www.example.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="row">
          <div className="col-12 col-lg-4 text-center text-lg-start">
            <p>© 2023 Acrino. All rights reserved.</p>
          </div>
          <div className="col-12 col-lg-4">
            <div className="text-center mb-4">
              <a href="#" className="ms-1 me-1 link-secondary"><i className="bi bi-facebook" /></a>
              <a href="#" className="ms-1 me-1 link-secondary"><i className="bi bi-twitter" /></a>
              <a href="#" className="ms-1 me-1 link-secondary"><i className="bi bi-instagram" /></a>
              <a href="#" className="ms-1 me-1 link-secondary"><i className="bi bi-pinterest" /></a>
              <a href="#" className="ms-1 me-1 link-secondary"><i className="bi bi-youtube" /></a>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="text-center text-lg-end mb-4">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a className="text-body link-hover-primary" href="#">Privacy Policy</a>
                </li>
                <li className="list-inline-item">
                  <a className="text-body link-hover-primary" href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
<div
      className="footer-background bg-image"
      style={{
        backgroundImage: `url('assets/img/background/b1.jpg')`,
       
      }}
    />
        </div>
    )
}