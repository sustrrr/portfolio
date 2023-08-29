import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineAlternateEmail } from "react-icons/md";

function ContactFooter() {
  return (
    <>
      <div className="footer">
        <div className="footerbox">
          <h2>Contact me here </h2>
          <div className="mail">
            <p>susannestrom@outlook.com</p>
          </div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/susanne-str%C3%B8m-260056256/"
          >
            <IoLogoLinkedin /> <span>Linkedin</span>
          </a>
          <a target="_blank" href="https://github.com/sustrrr">
            <IoLogoGithub /> <span>Github</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default ContactFooter;

/* <a
target="_blank"
href="https://poetic-florentine-24b25b.netlify.app/"
>
<IoLogoLinkedin /> <span>Linkedin</span>
</a> */
