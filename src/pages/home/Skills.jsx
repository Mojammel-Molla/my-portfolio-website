import SectionTitle from '../../shared/SectionTitle';
import ReactIcon from '../../assets/images/React-icon.png';
import gitIcon from '../../assets/images/Git-logo.svg.png';
import firebaseIcon from '../../assets/images/Firebase_Logo.svg.png';
import htmlIcon from '../../assets/images/HTML5_logo.png';
import cssIcon from '../../assets/images/123_css3.jpg';
import bootstrapIcon from '../../assets/images/bootstrap-logo.png';
import mongoDbIcon from '../../assets/images/MongoDB-Logo.jpg';
import jsIcon from '../../assets/images/jslogo.png';
import tailwindIcon from '../../assets/images/tailwind.png';
import nodejsIcon from '../../assets/images/nodejs.png';
import expressJsIcon from '../../assets/images/expressjs.png';
const Skills = () => {
  return (
    <div className="h-[600px]">
      <SectionTitle title="My Skills"></SectionTitle>
      <div className="flex flex-wrap  lg:max-w-[800px] mx-auto gap-5">
        <img className="w-32 h-32" src={ReactIcon} alt="" />
        <img className="w-32 h-32" src={jsIcon} alt="" />
        <img className="w-32 h-32" src={tailwindIcon} alt="" />
        <img className="w-36 h-32" src={nodejsIcon} alt="" />
        <img className="lg:w-40 h-32" src={expressJsIcon} alt="" />
        <img className="w-40 h-32" src={gitIcon} alt="" />
        <img className="w-40 h-32" src={mongoDbIcon} alt="" />
        <img className="w-36 h-32" src={firebaseIcon} alt="" />
        <img className="w-32 h-32" src={bootstrapIcon} alt="" />
        <img className="w-32 h-32" src={htmlIcon} alt="" />
        <img className="w-32 h-32" src={cssIcon} alt="" />
      </div>
    </div>
  );
};

export default Skills;
