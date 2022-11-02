import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

function ContactFooter() {
  return (
    <>
      <div className="footer">
        <div className="footerbox">
          <h2>Contact me by mail or linkedin</h2>
          <a
            target="_blank"
            href="https://poetic-florentine-24b25b.netlify.app/"
          >
            <IoLogoLinkedin /> <span>Linkedin</span>
          </a>
          <a
            target="_blank"
            href="https://poetic-florentine-24b25b.netlify.app/"
          >
            <IoLogoGithub /> <span>Github</span>
          </a>
          <p>susannestrom@outlook.com</p>
        </div>
      </div>
    </>
  );
}

export default ContactFooter;
