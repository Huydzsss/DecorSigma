import React from "react";

export default function Header() {
  return (
    <div>
      <Header/>
      <header id="header" className="fixed-top bg-body bg-opacity-0" data-bs-theme="dark">
     <nav className="navbar navbar-header navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand me-5" href="/">
      <img src="assets/img/logo/logo.png" alt="MiShop" height={40} />
    </a>
    <div className="offcanvas offcanvas-navbar offcanvas-end border-start-0" tabIndex={-1} id="offcanvasNavbar">
      <div className="offcanvas-header border-bottom p-4">
        <a className="navbar-brand" href="/">
          <img src="assets/img/logo/logo.png" alt="MiShop" height={32} />
        </a>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body p-4 p-lg-0">
        <ul className="navbar-nav flex-grow-1 ff-h fw-normal ls-1 justify-content-end">
          <li className="nav-item me-3">
            <a className="nav-link text-uppercase pt-3 pb-3 pt-lg-4 pb-lg-4 active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link text-uppercase pt-3 pb-3 pt-lg-4 pb-lg-4" href="/AboutUs">About</a>
          </li>
          <li className="nav-item dropdown me-3">
            <a className="nav-link text-uppercase dropdown-toggle-hover pt-3 pb-3 pt-lg-4 pb-lg-4" href="#" aria-expanded="false"data-bs-toggle="dropdown">
              <span>Services</span>
              <i className="bi bi-chevron-down dropdown-toggle-icon" />
            </a>
            <ul className="dropdown-menu fw-light rounded-0 lh-lg text-uppercase small border-0 shadow bg-body-tertiary ps-2 pe-2 pt-3 pb-3 mt-2">
              <li><a className="dropdown-item" href="single-service.html">Architectural Design</a></li>
              <li><a className="dropdown-item" href="single-service.html">Interior Design</a></li>
              <li><a className="dropdown-item" href="single-service.html">Exterior Design</a></li>
              <li><a className="dropdown-item" href="single-service.html">Furniture Design</a></li>
              <li><a className="dropdown-item" href="single-service.html">Decor Plan</a></li>
              <li><a className="dropdown-item" href="single-service.html">3D Modelling</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown me-3">
            <a className="nav-link text-uppercase dropdown-toggle-hover pt-3 pb-3 pt-lg-4 pb-lg-4" href="#" aria-expanded="false"data-bs-toggle="dropdown">
              <span>Projects</span>
              <i className="bi bi-chevron-down dropdown-toggle-icon" />
            </a>
            <ul className="dropdown-menu fw-light rounded-0 lh-lg text-uppercase small border-0 shadow bg-body-tertiary ps-2 pe-2 pt-3 pb-3 mt-2">
              <li><a className="dropdown-item" href="project-1-column.html">1 column</a></li>
              <li><a className="dropdown-item" href="project-2-column.html">2 column</a></li>
            </ul>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link text-uppercase pt-3 pb-3 pt-lg-4 pb-lg-4" href="blog.html">Blog</a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link text-uppercase pt-3 pb-3 pt-lg-4 pb-lg-4" href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </div>
    <button className="navbar-toggler shadow-none border-0 mt-4 mb-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
  </div>
</nav>

      </header>
    </div>
  );
  
}
