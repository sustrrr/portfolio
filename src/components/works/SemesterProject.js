import foodformood from "../../img/foodformood.jpg";

import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { useEffect } from "react";

import { IoIosLink } from "react-icons/io";

function SemesterProject() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#FF0000";
    /*document.body.style.filter = "blur(90px)";*/
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="button" onClick={openModal}>
        <div className="cardbox">
          <div class="card">
            <img src={foodformood} />
            <div className="card__text">
              <h2>Food for mood</h2>
              <div className="card__button">View</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="modal"
          style={{
            overlay: { background: "rgba(0, 0, 0, 0.726)" },
          }}
        >
          <div className="modalbox">
            <div className="textbox">
              <img
                src={foodformood}
                alt="Picture of how the website Food for mood looks like while running"
              />
              <div className="modallinks">
                <a
                  target="_blank"
                  href="https://github.com/sustrrr/project-exam-food-for-mood"
                >
                  <IoIosLink /> Github
                </a>
                <a
                  target="_blank"
                  href="https://poetic-florentine-24b25b.netlify.app/"
                >
                  <IoIosLink /> Website
                </a>
              </div>
              <h2>Food for mood</h2>
              <p>
                This website displays different food recipies, where the user
                can input ingredients and get back a list of food recipies that
                matches the ingridents.
              </p>
              <p>
                The user can also search for an ingridient they want more
                information on.
              </p>
              <p>
                The website lets the user filter the food recipies by
                ingredient, intolerance (such as gluten and diary), meal types
                and by newest, popularity etc.
              </p>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default SemesterProject;
