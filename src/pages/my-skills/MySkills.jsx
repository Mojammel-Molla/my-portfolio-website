import ProgressBar from '@ramonak/react-progress-bar';
import SectionTitle from './../../shared/SectionTitle';
import Skills from '../../../public/skills.json';
const MySkills = () => {
  return (
    <>
      <SectionTitle title="Why Choose Me"></SectionTitle>
      <div className="flex justify-between gap-10">
        <div>
          {Skills.map(skill => (
            <div key={skill.id}>
              <p className="font-medium">{skill.title}</p>
              <ProgressBar
                className="w-[100%]"
                completed={skill.progress}
                bgColor="#4CAF50"
                completedColor="#4CAF50"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MySkills;
