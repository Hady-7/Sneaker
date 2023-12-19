import "./Footer.css";
import { ImGithub } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

export const Footer = () => {
  const copyrightYear = new Date().getFullYear();

  return (
    <div className="footer">
      <small> &copy; {copyrightYear} Hady Hesham</small>
      <div className="social-links">
        
        <Link to="https://github.com/Hady-7" target="_blank">
          <ImGithub />
        </Link>
        <Link to="https://www.linkedin.com/in/hady-hesham-011084159/" target="_blank">
          <SiLinkedin />
        </Link>
      </div>
    </div>

  );
};
