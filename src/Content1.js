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
class Content1 extends Component {
  render() {
    return (
      <div>
        <div className="headerBg" />

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

          <div className="signature">
            <h1>SOUZA</h1>
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
