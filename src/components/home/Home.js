import { IoIosArrowRoundDown } from "react-icons/io";

function Home() {
  return (
    <>
      <div className="flex">
        <div className="flex__box text">
          <h1>
            Susanne Strøm, <span>frontend developer</span>
          </h1>
        </div>
        <div className="flex__box paragraph">
          <p>
            I make websites using HTML, CSS (SASS, CSS modules) and JavaScript
            (React, Typescript). Strong focus on design and good UX experience.
            Long experience with design tools such as Adobe programs and Figma,
            Contact me:
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
