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
            I am Mojammel Molla, a full-stack developer skilled in building
            scalable web applications. Proficient in front-end technologies like
            Next.js, React, Redux, and Tailwind, and back-end tools including
            Node.js, Express.js, JavaScript, TypeScript, Mongoose, and Prisma.
            Experienced with MongoDB and PostgreSQL for efficient database
            management.
          </p>

          <a
            href="https://drive.google.com/uc?id=1smIC9NujnevCWQ0q16NB2vGhanL-mtKs&export=download"
            download
            className="btn btn-primary text-white"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
