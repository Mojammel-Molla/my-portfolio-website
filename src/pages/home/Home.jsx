import Banner from './Banner';
import Contact from './Contact';
import Featured from './Featured';
import Skills from './Skills';
import WhatIDo from './WhatIDo';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <WhatIDo></WhatIDo>
      <Skills></Skills>
      <Featured></Featured>
      <Contact></Contact>
    </div>
  );
};

export default Home;
