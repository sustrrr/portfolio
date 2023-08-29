import { Link } from "react-scroll";

import Works from "../components/works/Works";
import Home from "../components/home/Home";
import ContactFooter from "../components/contact/ContactFooter";

function Nav() {
  return (
    <>
      <nav className="NavBar">
        <div className="nav-link">
          <Link class="element" activeClass="active" smooth spy to="works">
            Works
          </Link>
        </div>
        <div className="nav-link">
          <Link
            class="element"
            activeClass="active"
            smooth
            spy
            to="contactfooter"
          >
            Contact
          </Link>
        </div>
      </nav>

      <section id="home" className="Section">
        <div className="front">
          <Home />
          <Link class="element" smooth spy to="works">
            <div className="button__work">
              <span>Works</span>
            </div>
          </Link>
        </div>
        <div className="animate-box-home">
          <div className="animate-two">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="animate-three">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="animate-four">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="animate-five">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="animate-six">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="animate-seven">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>

      <section id="works" className="Section">
        <Works />
      </section>

      <section id="contactfooter" className="Section section__contact">
        <ContactFooter />

        <div className="animate-box">
          <div className="animate-one">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="animate-two">
            <div></div>
            <div></div>
          </div>
          <div className="animate-three">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="animate-four">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="animate-five">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="animate-six">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="animate-seven">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nav;
