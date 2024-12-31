/* eslint-disable react/prop-types */
import SectionTitle from '../../shared/SectionTitle';
import Skills from '../../../public/skills.json';
const MySkills = () => {
  return (
    <div className=" md:min-h-[90vh] overflow-y-visible bg-black py-5">
      <SectionTitle title="My Skills"></SectionTitle>
      <div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 justify-between md:gap-10 mx-auto max-w-7xl">
          {Skills.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ skill }) => {
  return (
    <div className="bg-[#2d2e32] flex justify-around w-72 h-[100px] pb-5 border-x-white shadow-xl mx-auto ">
      <div className="w-1/3 m-auto px-3">
        <figure>
          <img
            className="h-16 w-16 rounded-md"
            src={skill.image}
            alt={skill.title}
          ></img>
        </figure>
      </div>
      <div className="w-2/3 text-center h-20 my-auto">
        <h2 className=" text-xl font-semibold pt-5">{skill.title}</h2>
        <p className="text-">{skill.type}</p>
      </div>
    </div>
  );
};

export default MySkills;
