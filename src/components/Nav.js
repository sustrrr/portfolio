import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";

import Works from "../components/works/Works";
import Home from "../components/home/Home";
import ContactFooter from "../components/contact/ContactFooter";

import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";

function Nav() {
  return (
    <>
      <nav className="NavBar">
        <div>
          <Link class="element" activeClass="active" smooth spy to="works">
            Works
          </Link>
        </div>
        <div>
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
        <Home />
        <Link class="element" smooth spy to="works">
          <div className="button__work">
            <span>Works</span>
          </div>
        </Link>
      </section>
      <section id="works" className="Section">
        <Works />
      </section>

      <section id="contactfooter" className="Section section__contact">
        <ContactFooter />
        <div className="copyright">
          <p>(C) 2022 Susanne Strøm</p>
        </div>
      </section>
    </>
  );
}

export default Nav;
