import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const BookService = () => {
  const BookServiceLoaded = useLoaderData();
  const { title, _id, price, img } = BookServiceLoaded;
  const { user } = useContext(AuthContext);
  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      email,
      date,
      img,
      service: title,
      service_id: _id,
      price: price,
    };
    console.log(booking);
    fetch("https://car-doctor-server-mu-five.vercel.app/bookings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Service Book Successfully");
        }
      });
  };
  return (
    <div>
      <h2 className="text-center text-3xl">book Service</h2>
      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={"$" + price}
              className="input input-bordered"
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <input
            className="btn btn-primary"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default BookService;
