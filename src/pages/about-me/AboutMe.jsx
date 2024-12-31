const AboutMe = () => {
  return (
    <div className="bg-black py-5">
      <h2 className="text-3xl text-center font-semibold md:p-5 text-white">
        About Me
      </h2>
      <div className="lg:w-1/2 mx-auto ">
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
          <table className="table table-zebra bg-black">
            {/* head */}
            <thead className="text-white">
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
              <tr className="bg-black">
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
