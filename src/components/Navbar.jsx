import logo from "/Users/siddharthpanda/Productivity/Coding/react-portfolio/src/assets/logos (1)/Siddharth Panda_transparent-.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6"; // Updated to FaTwitter from fa6

const Navbar = () => {
  return (
    <nav className="flex mb-20 items-center justify-between py-6 px-4">
      <div className="flex flex-shrink-0 items-center pl-4">
        <img src={logo} alt="logo" className="h-20 object-contain" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/siddharth-panda-148905252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Razael007" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/_siddhxrth_07?igsh=MTIxMnRtbm9lOWQ0Ng==" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/siddharth_0704" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;