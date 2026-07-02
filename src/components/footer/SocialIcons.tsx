import "../landing/footer.css"
import { FaLinkedin, FaTwitter} from "react-icons/fa"; // or any icons you prefer
import { IoMdMail } from "react-icons/io";
const SocialIcons = () => {
  return (
    <div className="social-icons">
    
      <a
        href="https://instagram.com/deepeigen"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <IoMdMail />
      </a>
      <a
        href="https://twitter.com/deepeigen"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.linkedin.com/company/deepeigen"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialIcons;
