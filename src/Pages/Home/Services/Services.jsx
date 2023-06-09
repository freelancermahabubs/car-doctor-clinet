import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [asc, setAsc] = useState(true);
  useEffect(() => {
    fetch(
      `https://car-doctor-server-mu-five.vercel.app/services?sort=${
        asc ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [asc]);
  return (
    <div className="mt-4">
      <div className="text-center space-y-3">
        <h3 className="text-2xl font-bold text-orange-600">Service</h3>
        <h2 className="text-5xl">Our Service Area</h2>
        <p className="text-gray-400">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which dont look even slightly
          believable.
        </p>
        <button onClick={() => setAsc(!asc)} className="btn btn-primary">
          {asc ? "Price High to Low" : "Price Low To high"}
        </button>
      </div>
      <div className="grid my-4 lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
