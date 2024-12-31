import AllProjects from '../projects/AllProjects';
import Banner from './Banner';
import Blogs from './Blogs';
import Contact from './Contact';
import Featured from './Featured';
import MySkills from './Skills';
import WhatIDo from './WhatIDo';

const Home = () => {
  return (
    <div>
      {/* <Banner></Banner> */}
      {/* <WhatIDo></WhatIDo> */}
      <MySkills></MySkills>
      {/* <Featured></Featured> */}
      <AllProjects></AllProjects>
      <Blogs></Blogs>
      <Contact></Contact>
    </div>
  );
};

export default Home;
