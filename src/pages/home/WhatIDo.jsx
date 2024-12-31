import UXIcon from '../../assets/images/UX logo.png';
import ResponsiveIcon from '../../assets/images/responsive-design_2535547.png';
import ErrorFixIcon from '../../assets/images/Errorfixlogo.png';
import FeatureIcon from '../../assets/images/feature.png';
import SectionTitle from '../../shared/SectionTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';
const WhatIDo = () => {
  return (
    <div data-aos="fade-in" className="h-[600px] ">
      <SectionTitle title="What Do I Help"></SectionTitle>
      <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-4 w-full mx-auto">
        <div className="card w-96 h-[450px] pb-5 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold">UX Implementation</h2>
            <p className="font-mono">
              Ensure that the user interface is intuitive and aligns with user
              experience principles.
            </p>
          </div>
          <figure>
            <img className="" src={UXIcon} alt="" />
          </figure>
        </div>

        <div className="card w-96 h-[450px] pb-5 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold">Responsive Design</h2>
            <p className="font-mono">
              Design and develop layouts that adapt to different screen sizes
              and devices.
            </p>
          </div>
          <figure>
            <img className="" src={ResponsiveIcon} alt="" />
          </figure>
        </div>
        <div className="card w-96 h-[450px] pb-5 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold">Feature Implementation</h2>
            <p className="font-mono">
              Implement new features and functionalities according to project
              requirements.
            </p>
          </div>
          <figure>
            <img className="" src={FeatureIcon} alt="" />
          </figure>
        </div>
        <div className="card w-96 h-[450px] pb-5 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold">Error Fixing</h2>
            <p className="font-mono">
              Identify and resolve bugs or issues in the frontend code.
            </p>
          </div>
          <figure>
            <img className="" src={ErrorFixIcon} alt="" />
          </figure>
        </div>
      </div>
      <script>AOS.init();</script>
    </div>
  );
};

export default WhatIDo;
