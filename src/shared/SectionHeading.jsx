const SectionHeading = ({ heading }) => {
  return (
    <div>
      <h1 className="text-2xl  font-bold text-start">
        --<span className="text-blue-600">{heading}</span>
      </h1>
    </div>
  );
};

export default SectionHeading;
