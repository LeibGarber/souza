import React, { Component } from "react";
class Home extends Component {
  render() {
    return (
      <div>
        <section className="hero">
          <div
            className="background-image background-image-home"
            style={{
              backgroundImage:
                "url(https://scontent-sea1-1.cdninstagram.com/vp/ca9a12f3e985600715e15aedb0aa5ebd/5C068FF4/t51.2885-15/e35/31906619_171843940192937_52856204006785024_n.jpg?ig_cache_key=MTc4MjA0MTg5MzcxMjkwNjgwNA%3D%3D.2)"
            }}
          />
          <h1 />
          <h3 />
        </section>

        <section className="our-work">
          <h3 className="title">Some recent work</h3>
          <p>
            "Even if one of these paintings affects just one person, then it’s
            worth it"
          </p>
          <h3>-Solomon Souza</h3>
          <br />

          <ul className="grid">
            <li
              className="small"
              style={{
                backgroundImage:
                  "url(https://c1.staticflickr.com/5/4614/28066044819_65e6bd2d5c_b.jpg)"
              }}
            />
            <li
              className="large"
              style={{
                backgroundImage:
                  "url(https://c1.staticflickr.com/5/4707/39560358834_b16467ac59_b.jpg )"
              }}
            />
            <li
              className="large"
              style={{
                backgroundImage:
                  "url(https://i1.wp.com/www.wide-eyedwanderer.com/wp-content/uploads/2017/07/SAM_1865.jpg?resize=1024%2C576)"
              }}
            />
            <li
              className="small"
              style={{
                backgroundImage:
                  "url(https://havefunflysafe.files.wordpress.com/2018/02/fullsizeoutput_66e3.jpeg?w=592&h=412)"
              }}
            />
          </ul>
        </section>

        <section className="features">
          <h3 className="title">Features and Services</h3>
          <p>
            In need of the services of an established professional artist to
            step your game up a few notches?
          </p>
          <br />

          <ul className="grid">
            <li>
              <i className="fa fa-camera-retro" />
              <h4>Commisions</h4>
              <p>
                For the serious patrons of the arts, commisioned works are
                available. No canvas too large or too small.
              </p>
            </li>
            <li>
              <i className="fa fa-cubes" />
              <h4>Events</h4>
              <p>
                Interested in throwing a party for the ages? Launching your
                startup? Growing your local business? Live painting events pack
                in the crowds and offer serious exposure for your business.
              </p>
            </li>
            <li>
              <i className="fa fa-newspaper-o" />
              <h4>Galleries</h4>
              <p>
                Do you have an established gallery looking to carry works from a
                modern artist with deep roots? Are you an up and coming gallery
                owner looking to expand your catalog to include internationally
                celebrated artists?
              </p>
            </li>
          </ul>
        </section>

        <section className="reviews">
          <h3 className="title">What others say:</h3>

          <p className="quote">
            The work is very meaningful and a symbol of peace
          </p>
          <p className="author">— Hatam</p>

          <p className="quote">
            Solomon Souza captures his subjects accurately and effectively,
            while the splashes of color make his works vibrant.
          </p>
          <p className="author">— Giula Blocal</p>

          <p className="quote">
            Mahane Yehuda comes to life on the Sabbath as colorful murals of
            historical and contemporary figures appear on shops closed shutters
          </p>
          <p className="author">— Times of Israel</p>
        </section>

        <section className="contact">
          <h3 className="title">Keep up with the revolution</h3>
          <p>
            כל הדברים שבגמרא הבבלי חייבין כל ישראל ללכת בהם וכופין כל עיר ועיר
            וכל מדינה ומדינה לנהוג בכל המנהגות שנהגו חכמי הגמרא
          </p>
          <br />

          <form>
            <input type="email" placeholder="Email" />
            <a href="#" className="btn">
              Subscribe now
            </a>
          </form>
        </section>
      </div>
    );
  }
}
export default Home;
