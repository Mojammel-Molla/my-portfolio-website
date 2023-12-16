import ProgressBar from '@ramonak/react-progress-bar';
import SectionTitle from './../../shared/SectionTitle';

const MySkills = () => {
  return (
    <>
      <SectionTitle title="Why Choose Me"></SectionTitle>
      <div className="flex justify-between gap-10">
        <div className="w-1/2">
          <div>
            <p className="font-medium">React</p>
            <ProgressBar
              className=" text-white"
              completed={90}
              labelClassName="label"
              bgColor="#575ead"
            />
          </div>
          <div>
            <p className="font-medium">Javascript</p>
            <ProgressBar
              className=" text-white"
              completed={80}
              labelClassName="label"
              bgColor="#575ead"
            />
          </div>
          <div>
            <p className="font-medium">Tailwind</p>
            <ProgressBar
              className=" text-white"
              completed={90}
              labelClassName="label"
              bgColor="#575ead"
            />
          </div>
          <div>
            <p className="font-medium">Node Js</p>
            <ProgressBar
              className=" text-white"
              completed={80}
              labelClassName="label"
              bgColor="#575ead"
            />
          </div>
        </div>
        <div className="w-1/2">
          <div>
            <p className="font-medium">Mongodb</p>
            <ProgressBar
              className=" text-white"
              completed={90}
              labelClassName="label"
              bgColor="#575ead"
            />
          </div>
          <div>
            <p className="font-medium">Express Js</p>
            <ProgressBar
              className=" text-white"
              completed={80}
              labelClassName="label"
              bgColor="#575ead"
            />
          </div>
          <div>
            <p className="font-medium">Firebase</p>
            <ProgressBar
              className=" text-white"
              completed={90}
              labelClassName="label"
              bgColor="#575ead"
            />
          </div>
          <div>
            <p className="font-medium">Bootstrap</p>
            <ProgressBar
              className=" text-white"
              completed={80}
              labelClassName="label"
              bgColor="#575ead"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;
