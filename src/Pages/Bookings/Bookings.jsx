import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const url = `https://car-doctor-server-mu-five.vercel.app/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("car-access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setBookings(data);
        } else {
          // logout and then navigate
          navigate("/");
        }
      });
  }, [url, navigate]);

  const handleDelete = (id) => {
    const proceed = confirm("Are You Sure you wan to delete");
    if (proceed) {
      fetch(`https://car-doctor-server-mu-five.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted SuccessFull");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleBookingPending = (id) => {
    fetch(`https://car-doctor-server-mu-five.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify({ status: "pending" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "pending";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };
  return (
    <div>
      <h2 className="text-5xl">Your bookings: {bookings.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Delete</th>
              <th>Profile</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                handleDelete={handleDelete}
                booking={booking}
                handleBookingPending={handleBookingPending}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
