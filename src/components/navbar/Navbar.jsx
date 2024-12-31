import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

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
        to="/blogs"
      >
        <li className="lg:mr-10 font-medium">Blogs</li>
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
    <div className="navbar bg-black  border-b-2">
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
            className="menu menu-sm bg-black dropdown-content mt-3 z-[1] p-2 shadow text-white rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className=" md:ml-4 font-semibold text-lg ">Mojammel Molla</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>

        <a href="https://www.linkedin.com/in/mojammel-molla">
          <FaLinkedin className="text-4xl mr-3" />
        </a>
        <a href="https://github.com/Mojammel-Molla">
          <FaGithub className="text-4xl mr-3" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
