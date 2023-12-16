import SectionTitle from '../../shared/SectionTitle';
import AboutImg from '../../assets/images/372497211534559 (1) (1).png';
const AboutMe = () => {
  return (
    <div>
      <SectionTitle title="About Me"></SectionTitle>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={AboutImg} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">
              I am a front-end React developer
            </h1>
            <p className="py-6">
              As a MERN stack developer, I specialize in crafting dynamic and
              scalable web applications. Proficient in MongoDB, Express.js,
              React, and Node.js, I bring a blend of creativity and technical
              expertise to deliver seamless user experiences. My portfolio
              showcases projects ranging from e-commerce platforms to
              interactive dashboards, highlighting my commitment to clean code
              and innovative solutions. Let's collaborate to transform your
              ideas into powerful, responsive web solutions!
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 mx-auto mb-5">
        <SectionTitle title="Education"></SectionTitle>
        <h1>
          Currently pursuing a Bachelor's in Business Administration with a
          focus on Accounting at [National University], I find great fulfillment
          in developing my skills in technology and programming. Despite being a
          non-computer science student, my passion for technology has driven me
          to independently learn and advance my proficiency in development.
          Eager to transition my career into the tech industry beyond my
          academic pursuits, I am committed to continuous learning, gaining
          knowledge each day to contribute effectively in the dynamic field of
          technology.
        </h1>
        <div className="divider"></div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Exam Name</th>
                <th></th>
                <th>Passing years</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Bachelor's in Business Administration</td>
                <td></td>
                <td>2020 - Present</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>Higher Secondary Certificate</td>
                <td></td>
                <td>2018 - 2020</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td>Senior Secondary Certificate</td>
                <td></td>
                <td>2016 - 2018</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
