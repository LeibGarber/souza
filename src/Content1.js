import React, { Component } from "react";
import "./Content.css";
import Nissim from "./imgs/nissim.jpg";
import Nachlaot from "./imgs/nachlaot.jpg";
import Battle from "./imgs/battle.jpg";
import Faces from "./imgs/faces.jpg";
import Prayer from "./imgs/prayer.jpg";
import kohenGadol from "./imgs/kohenGadolFix.jpg";
import Adam from "./imgs/adam.jpg";
import Fish from "./imgs/fish.jpg";
import Lines from "./imgs/linesFix.jpg";
import Paper from "./imgs/paperFix.jpg";
import LazyHero from "react-lazy-hero";

const Chicago = require("./imgs/chicagoWarehouse.jpg");

class Content1 extends Component {
  render() {
    return (
      <div>
        <LazyHero
          className="ContentHeaderParralax"
          imageSrc={Chicago}
          color="#515577"
          opacity={0.5}
          parallaxOffset={100}
          minHeight="135vh"
          transitionDuration={850}
        />

        <section className="our-work">
          <h2>Works on Canvas</h2>
          <p>
            Following in the tradition of India's single most celebrated artist
            of all time - FM Souza - Solomon Souza is also keen on painting
            canvases. And like his granfather before him, Solomon is rapidly
            taking the art world by storm. The similarities end there. Solomon
            has created his own style, fusing his love for classical composition
            with his edgy vibrant street art. These works captivate their viewer
            and elevate the environment they are displayed in with their
            inspired touch, drawing down the divine and enclothing it in a
            vessel at once graspable by the soaring heights of intellect and the
            emotional faculties of the human soul.{" "}
          </p>
          <div className="signature">
            <h1>SOUZA</h1>
          </div>
        </section>

        <div className="GalleryGrid">
          <div className="GalleryPic small">
            <img src={Battle} />
          </div>

          <div className="GalleryPic small1">
            <img src={Faces} />
          </div>

          <div className="GalleryPic small2">
            <img src={kohenGadol} />
          </div>

          <div className="GalleryPic small3">
            <img src={Adam} />
          </div>

          <div className="GalleryPic small4">
            <img src={Fish} />
          </div>

          <div className="GalleryPic small5">
            <img src={Lines} />
          </div>

          <div className="GalleryPic small6">
            <img src={Paper} />
          </div>

          <div className="GalleryPic small7">
            <img src={Prayer} />
          </div>
        </div>

        <section className="features">
          <br />

          <br />
        </section>
      </div>
    );
  }
}
export default Content1;
