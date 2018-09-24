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

const ShukRabbis = require("./imgs/shukRabbis.jpg");

class Shuk extends Component {
  render() {
    return (
      <div>
        <LazyHero
          className="ContentHeaderParralax Shuk"
          imageSrc={ShukRabbis}
          color="#515577"
          opacity={0.5}
          parallaxOffset={100}
          minHeight="135vh"
          transitionDuration={850}
        />

        <section className="our-work">
          <p className="quote">
            "If there is a slice of hip in fusty Jewish Jerusalem, this is it."
          </p>
          <p className="author">-Washington Post</p>
          <p>
            {" "}
            In a labor of love, Solomon Souza transformed hundreds of shutters
            in the heartplace of Jerusalem's hustle and bustle into an explosion
            of colors and history. Instead of creating works of art and packing
            them away to be sold and seen only by those who can afford entry, he
            has created a gallery to be seen by one and all, breathing color and
            life into bleak stained shutters - transforming the very symbol of
            an empty marketplace into the catalyst for a centuries-waited
            renaissance in the ancient and eternal capital city.
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
export default Shuk;
