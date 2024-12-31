/* eslint-disable react/prop-types */
import { FaGithub, FaGlobe } from 'react-icons/fa6';
import ProjectList from '../../../public/projects.json';
const AllProjects = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto py-5">
        <div className="space-y-2 ml-5 p-4">
          <h2 className="text-3xl font-semibold text-white">All Projects</h2>
          <p className="text-gray-300">
            A curated selection of my web projects.
          </p>
        </div>
        {/* Featured projects */}
        <div className="max-w-7xl mx-auto">
          {/* All Project */}
          {ProjectList?.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between shadow-xl cursor-pointer hover:bg-[#202125] my-5 border-2">
      <img className="h-80 w-full md:w-96 " src={project.image} />
      <div className="w-full p-5 text-white">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{project.title}</h2>
          <div className="flex gap-3">
            <a
              href={project.live}
              className="px-4 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 flex gap-2"
            >
              Live <FaGlobe className="text-xl" />
            </a>
            <a
              href={project.client}
              className="px-4 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 flex gap-2"
            >
              Client <FaGithub className="text-xl" />
            </a>
            <a
              href={project.server}
              className="px-4 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 flex gap-2"
            >
              Server <FaGithub className="text-xl" />
            </a>
          </div>
        </div>
        <p className="mt-3 text-gray-300 max-w-md">{project.description}</p>
        <div className="card-actions justify-start my-4">
          {project.techstacks?.map((tech, idx) => (
            <button
              key={idx + 1}
              className="px-4 rounded-full py-1 text-white bg-gray-800"
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AllProjects;
