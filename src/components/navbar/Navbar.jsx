import { FaLinkedin } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'text-blue-700 underline' : ''
        }
        to="/"
      >
        <li className=" lg:mr-10 font-medium">Home</li>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? 'text-blue-700 underline' : ''
        }
        to="/projects"
      >
        <li className="lg:mr-10 font-medium">Projects</li>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? 'text-blue-700 underline' : ''
        }
        to="/my-skills"
      >
        <li className="lg:mr-10 font-medium">Skills</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'text-blue-700 underline' : ''
        }
        to="/about-me"
      >
        <li className="lg:mr-10 font-medium">About Me</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'text-blue-700 underline' : ''
        }
        to="/contact"
      >
        <li className="lg:mr-10 font-medium">Contact </li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 my-3 border-b-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className=" font-semibold text-xl">Developer</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a href="https://www.linkedin.com/in/mojammel-molla">
          <FaLinkedin className="text-4xl mr-3"></FaLinkedin>
        </a>
        <Link className="btn" to="/contact">
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
