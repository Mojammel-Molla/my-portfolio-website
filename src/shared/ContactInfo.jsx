import { FaEnvelope, FaLocationPin, FaPhone } from 'react-icons/fa6';
const ContactInfo = () => {
  return (
    <div className="mx-auto font-medium my-5">
      <div className="flex gap-2 justify-center">
        <FaPhone />
        <h3 className="">Phone:(+880)1967675977</h3>
      </div>
      <div className="flex gap-2 justify-center">
        <FaEnvelope />
        <h4>Email:Mojammelmolla897@gmail.com</h4>
      </div>
      <div className="flex gap-2 justify-center">
        <FaLocationPin />
        <h4>Munshiganj, Dhaka, Bangladesh</h4>
      </div>
    </div>
  );
};

export default ContactInfo;
