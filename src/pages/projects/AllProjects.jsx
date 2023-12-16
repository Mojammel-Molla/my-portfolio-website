import { FaGithub } from 'react-icons/fa6';
import { TbWorld } from 'react-icons/tb';
import SectionTitle from '../../shared/SectionTitle';
import ProjectDemo1 from '../../assets/projects/projectdemo1.jpg';
import ProjectDemo2 from '../../assets/projects/projectdemo2.jpg';
import ProjectDemo3 from '../../assets/projects/projectdemo3.png';
const AllProjects = () => {
  return (
    <div>
      <SectionTitle title="My Projects"></SectionTitle>
      <div className="grid lg:grid-cols-3  gap-3 mx-auto my-10">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="lg:h-full w-96" src={ProjectDemo1} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-semibold">Facility Minder</h2>
            <div>
              <p className="font-medium flex gap-2">
                <FaGithub></FaGithub>
                Git hub:
                <a
                  className="text-blue-900 font-bold"
                  href="https://github.com/Mojammel-Molla/facility-minder-client"
                >
                  Code
                </a>
              </p>
              <p className="font-medium flex gap-2">
                <TbWorld />
                Live Demo:
                <a
                  className="text-blue-900 font-bold"
                  href="https://facility-minder-ba828.web.app"
                >
                  Live
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="h-full w-96" src={ProjectDemo2} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-semibold">Car Hut</h2>
            <div>
              <p className="font-medium flex gap-2">
                <FaGithub></FaGithub>
                Git hub:
                <a
                  className="text-blue-900 font-bold"
                  href="https://github.com/Mojammel-Molla/car-hut-client"
                >
                  Code
                </a>
              </p>
              <p className="font-medium flex gap-2">
                <TbWorld />
                Live Demo:
                <a
                  className="text-blue-900 font-bold"
                  href="https://car-hut-d5331.web.app"
                >
                  Live
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="h-full w-80" src={ProjectDemo3} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-semibold">Grade Miner</h2>
            <div>
              <p className="font-medium flex gap-2">
                <FaGithub></FaGithub>
                Git hub:
                <a
                  className="text-blue-900 font-bold"
                  href="https://github.com/Mojammel-Molla/grade-miners-client"
                >
                  Code
                </a>
              </p>
              <p className="font-medium flex gap-2">
                <TbWorld />
                Live Demo:
                <a
                  className="text-blue-900 font-bold"
                  href="https://grade-miners.web.app"
                >
                  Live
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
