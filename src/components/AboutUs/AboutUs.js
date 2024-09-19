import React from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

export default function AboutUs(){
    return(
        <div>
            <Header/>
             <section id="about" data-bs-theme="dark" className="pt-5 text-body" >
  <div className="pt-5 pb-4" />
  <div className="container pt-5 pb-4">
    <div className="card card-float-start border-0 rounded-0 bg-transparent">
      <img src="assets/img/about/a1.jpg" className="card-img-top w-100 rounded-0" alt="..." />
      <div className="card-body bg-body-tertiary p-4 d-flex align-items-center shadow">
        <div className="p-2">
          <small className="text-uppercase fw-light ls-3 ff-h d-block mb-2 text-primary">
            Get to know us
          </small>
          <h2 className="card-title display-6 fw-medium text-uppercase ff-h text-body-emphasis mb-4 ls-1">
            About Acrino
          </h2>
          <div className="mb-4">
            <p>
              Sale sanctus atomorum qui id, eu nec scaevola laboramus tincidunt, eos iusto delicata
              maiestatis ut. Id fabulas instructior mel, molestie explicari vel ea, et posse
              regione pri. Graeci vivendum an has, ea tollit recusabo urbanitas cum.
            </p>
            <p className="card-text">
              Vim at augue facilisi salutatus, mei alia tincidunt ei, at his diam
              doctus. Dicit tacimates eos ei. Et habeo nobis appareat quo. Eum an causae adipisci
              disputationi, et qui tota praesent persequeris.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      <Footer/>
        </div>
    )
}