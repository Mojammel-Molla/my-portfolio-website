import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { TbMailBolt } from 'react-icons/tb';
const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-black">
      <div className="flex gap-6">
        <a href="">
          <TbMailBolt className="text-4xl" />
        </a>
        <a href="https://github.com/Mojammel-Molla">
          <FaGithub className="text-4xl" />
        </a>
        <a href="https://www.linkedin.com/in/mojammel-molla">
          <FaLinkedin className="text-4xl" />
        </a>
      </div>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Mojammel Molla
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
