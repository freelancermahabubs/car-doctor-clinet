import Person from "../../../assets/images/about_us/person.jpg";
import Parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen bg-slate-200 rounded-md my-12">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img
            src={Person}
            alt="Person"
            className="w-3/4 min-h-full  rounded-lg shadow-2xl"
          />
          <img
            src={Parts}
            alt="Parts"
            className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl border-8 border-white"
          />
        </div>
        <div className="lg:w-1/2 space-y-5 p-4">
          <h3 className="text-xl text-orange-500 font-bold">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified <br /> & of experience in this field
          </h1>
          <p className="py-2">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.
          </p>
          <button className="btn btn-warning">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
