import React, { Component } from "react";
import "./Content.css";
import Nissim from "./imgs/nissim.jpg";
import Nachlaot from "./imgs/nachlaot.jpg";
class Content1 extends Component {
  render() {
    return (
      <div>
        <div className="headerBg" />

        <div className="GalleryGrid">
          <div className="GalleryPic small">
            <img src={Nissim} />
          </div>

          <div className="GalleryPic large">
            <img src={Nachlaot} />
          </div>

          <div className="GalleryPic small2">
            <img src={Nissim} />
          </div>

          <div className="GalleryPic medium">
            <img src={Nissim} />
          </div>

          <div className="signature">
            <h1>SOUZA</h1>
          </div>
        </div>

        <section className="features">
          <h3 className="title">Some recent work</h3>
          <p>
            כל הדברים שבגמרא הבבלי חייבין כל ישראל ללכת בהם וכופין כל עיר ועיר
            וכל מדינה ומדינה לנהוג בכל המנהגות שנהגו חכמי הגמרא
          </p>
          <br />
          <h1> This is a blank content view component</h1>
          <br />
        </section>
      </div>
    );
  }
}
export default Content1;
