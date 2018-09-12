import React, { Component } from "react";
import "./Contact.css";
import Gps from "./imgs/gpsIcon.svg.js";
class Contact extends Component {
  render() {
    return (
      <div>
        <section className="hero contactFormHero">
          <div
            className="background-image"
            style={{
              backgroundImage:
                "url(https://upload.wikimedia.org/wikipedia/commons/b/b7/Tzfat_sunset_%282063020598%29.jpg)"
            }}
          />
          <div className="contactGrid">
            <h1 className="contactHeader">CONTACT</h1>
            <p className="contactBlurb">
              Interested in working together? Please be in touch with some info
              about your project and I will get back to you as soon as I can.
              Please allow a few days for me to respond.{" "}
            </p>
            <div className="headquarters">
              <h4>
                <Gps /> Headquarters
              </h4>
              <p>Shim'on Bar Yokhai St 51, Tsfat</p>
            </div>
            <div className="emailAddy">
              <h4>Email</h4>
              <p>solomonsouza@someplace.com</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Contact;
