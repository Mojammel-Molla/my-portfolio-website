import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { TbMailbox } from 'react-icons/tb';

const Contact = () => {
  const form = useRef();
  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_q94iikh',
        'template_uu3q73a',
        form.current,
        'M8kMUdxUSwqGN3T7G'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="h-[80vh] bg-[#202125]">
      <div className="lg:flex justify-between h-[600px] mx-5">
        <div className="w-1/3 h-[60%] flex-none  my-auto border-x-2  shadow-2xl ">
          <h3 className="text-center text-2xl font-semibold my-5">
            Contact Info
          </h3>
          <div className="flex-col justify-center items-center  space-y-4">
            <div className="flex gap-3 justify-center">
              <FaPhone />
              <p>(+880)1967675977</p>
            </div>
            <div className="flex gap-3 justify-center">
              <TbMailbox className="text-2xl" />
              <p>Mojammelmolla897@gmail.com</p>
            </div>
            <div className="flex gap-3 justify-center">
              <FaLocationDot />
              <p>Munshiganj, Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        <div className="w-full ">
          <div className=" text-center ">
            <h1 className="lg:text-4xl font-semibold mt-5">Lets Talk</h1>
            <p className="lg:text-xl font-medium mt-2">
              Got a project in mind? Fill in the form or send me.
            </p>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="card-body lg:w-1/2 mx-auto text-white   p-8 space-y-6"
          >
            <div className="form-control">
              <label className="label mb-2">
                <span className="label-text text-white font-semibold">
                  Name
                </span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="input input-bordered
                bg-[#2d2e32]  focus:ring-2 focus:ring-gray-500 focus:outline-none px-4 py-2"
                required
              />
            </div>

            <div className="form-control">
              <label className="label mb-2">
                <span className="label-text text-white font-semibold">
                  Email
                </span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="input input-bordered bg-[#2d2e32]  focus:ring-2 focus:ring-gray-500 focus:outline-none px-4 py-2"
                required
              />
            </div>

            <div className="form-control">
              <label className="label mb-2">
                <span className="label-text text-white font-semibold">
                  Your Message
                </span>
              </label>
              <textarea
                name="massage"
                className=" textarea-info    bg-[#2d2e32] focus:ring-2 focus:ring-gray-500 rounded-lg focus:outline-none px-4 py-2"
                placeholder="Write your message here"
              ></textarea>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className=" bg-primary text-white font-semibold px-3 py-2 rounded-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
