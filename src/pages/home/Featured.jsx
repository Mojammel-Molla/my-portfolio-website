import Marquee from 'react-fast-marquee';
import SectionTitle from '../../shared/SectionTitle';
import CarHut1 from '../../assets/projects/carhut1.png';
import CarHut2 from '../../assets/projects/carhut2.png';
import Facility1 from '../../assets/projects/facility1.png';
import Facility2 from '../../assets/projects/facility2.png';
import Facility3 from '../../assets/projects/facility3.png';
import GradeMiner1 from '../../assets/projects/grade-miners1.png';
import GradeMiner2 from '../../assets/projects/grade-miners2.png';
import GradeMiner3 from '../../assets/projects/grade-miners3.png';
const Featured = () => {
  return (
    <div className="invisible lg:visible  lg:h-[600px]">
      <SectionTitle title="My recent works"></SectionTitle>
      <div>
        <Marquee className=" space-x-3">
          <img className="w-80 max-h-96" src={CarHut1} alt="" />
          <img className="w-80 max-h-96" src={CarHut2} alt="" />

          <img className="w-80 max-h-96" src={Facility1} alt="" />
          <img className="w-80 max-h-96" src={Facility2} alt="" />
          <img className="w-80 max-h-96" src={Facility3} alt="" />

          <img className="w-80 max-h-96" src={GradeMiner1} alt="" />
          <img className="w-80 max-h-96" src={GradeMiner2} alt="" />
          <img className="w-80 max-h-96" src={GradeMiner3} alt="" />
        </Marquee>
      </div>
    </div>
  );
};

export default Featured;
