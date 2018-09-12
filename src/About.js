import React, { Component } from "react";
import Sunny from "./imgs/Sunny.jpg";
import Nissim from "./imgs/nissim.jpg";
import Shuk from "./imgs/shukblack.jpg";
import Kadosh from "./imgs/kadosh.jpg";
import Nachlaot from "./imgs/nachlaotFix.jpg";
import Selfie from "./imgs/selfie.jpg";
import LazyHero from "react-lazy-hero";

const SunnyPic = require("./imgs/Sunny.jpg");

class About extends Component {
  render() {
    return (
      <div>
        <LazyHero
          className="LazySunny"
          imageSrc={SunnyPic}
          color="#515577"
          opacity={0.5}
          parallaxOffset={100}
          minHeight="135vh"
          transitionDuration={850}
        >
          <br />
          <br />
          <br />
          <br />
          <h1>Who is Solomon?</h1>

          <h3>It’s meant to be mysterious...</h3>
        </LazyHero>

        <section className="our-work">
          <h2>Student. Teacher. Friend. Artist. Creator. Creation.</h2>
          <p>
            These are a few words which more or less entirely fail to explain
            who is Solomon Souza. And he like's it that way. Uncompromising,
            unflinching, and entirely sure of humanity's need for peace and
            freedom of expression. He may be busy at work in a city far away,
            sitting in a cafe discussing philosophy, or he could be at the pub
            next door with a sketch pad, some pens and a cold one.{" "}
          </p>

          <p>
            {" "}
            One thing we can tell you for sure is where Solomon is not. He is
            not profiting from any art tours, graffiti walk throughs or mystical
            sermons delivered about the esoteric meanings of his works. <br />
            If you see him feel free to say hello. No egos here. No nonsense.
            Just art.
          </p>
          <ul className="grid">
            <li
              className="small"
              style={{
                backgroundImage: `url(${Nissim})`
              }}
            />
            <li
              className="large"
              style={{
                backgroundImage: `url(${Nachlaot})`
              }}
            />
            <li
              className="large"
              style={{
                backgroundImage: `url(${Shuk})`
              }}
            />
            <li
              className="small"
              style={{
                backgroundImage: `url(${Selfie})`
              }}
            />
          </ul>
        </section>
        <br />
      </div>
    );
  }
}
export default About;
