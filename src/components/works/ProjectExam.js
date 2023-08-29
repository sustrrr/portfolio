import projectexam from "../../img/projectexam.jpg";

import React from "react";
import Modal from "react-modal";

import { IoIosLink } from "react-icons/io";

function ProjectExam() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="button" onClick={openModal}>
        <div className="cardbox">
          <div class="card">
            <img src={projectexam} alt="Holidaze website" />
            <div
              className="card__text"
              alt="Picture of how the website Project Exam 2 looks like while running"
            >
              <a
                target="_blank"
                href="https://chimerical-kashata-0f06f2.netlify.app/"
              >
                <div className="card__button visit"> Visit site</div>
              </a>
              <h2>Holidaze</h2>
              <div className="card__button red">Info</div>
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
            overlay: { background: "rgba(0, 0, 0, 0.726)", zIndex: 1000 },
          }}
        >
          <div className="modalbox">
            <div className="textbox">
              <img src={projectexam} alt="Holidaze website" />
              <div className="modallinks">
                <a
                  target="_blank"
                  href="https://github.com/sustrrr/N_semesterproject-2"
                >
                  <IoIosLink /> Github
                </a>
                <a
                  target="_blank"
                  href="https://chimerical-kashata-0f06f2.netlify.app/"
                >
                  <IoIosLink /> Website
                </a>
              </div>
              <h2>Holidaze</h2>
              <p>Built on React.</p>
              <p>
                This website is made for a local tourism agency in Bergen, here
                users can book hotels, B&Bs and guesthouses in bergen. Users can
                search for different accommodations and make booking enquires.
                This website uses Wordpress API, where all the accommodations is
                stored. Users can send contact messages to Holidaze, this info
                goes to the API and the admin can log into the site to view the
                contact messages. The booking enquires goes to the API as well,
                and it gets displayed on the dashboard for the admin.
              </p>
              <p>
                An admin with the correct login information can log into the
                site. Here the admin can see a list of booking enquiries,
                contact messages and the admin can add a new establishment.
              </p>
              <p>
                The admin can choose the new establishments name, price,
                description, image and tags. Since the site displays hotels,
                guesthouses and B&B, the admin can choose which category the new
                establishment falls under.
              </p>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default ProjectExam;
