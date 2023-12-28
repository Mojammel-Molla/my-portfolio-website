import BannerImg from '../../assets/images/Removal-349.png';
const Banner = e => {
  e.preventDefault;
  // const downloadPdf = () => {
  //   const pdfUrl = '/resume.pdf';

  //   const link = document.createElement('a');
  //   link.href = pdfUrl;
  //   link.download = 'DemoResume.pdf';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  return (
    <div className="hero w-full mx-auto min-h-[80%] bg-base-300">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={BannerImg} className="w-[800px] rounded-lg " />
        <div className="space-y-3 lg:w-1/2">
          <h1 className="text-5xl font-bold">Hi! I'm Molla</h1>
          <p className="py-6 text-lg font-normal">
            I am Mojammel Molla a highly skilled MERN stack developer with a
            passion for crafting robust and scalable web applications.
            Leveraging my expertise in MongoDB, Express.js, React, and Node.js,
            I bring innovative solutions to the table.
          </p>

          <a
            href="/Mojammel_Molla's_resume.pdf"
            download
            className="btn btn-primary"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
