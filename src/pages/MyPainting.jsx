import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyPainting = () => {
  const { user } = useContext(AuthContext);
  const [userPainting, setUserPainting] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/painting/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserPainting(data);
      });
  }, [user]);

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/painting/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Painting deleted successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
          const remainingPaint = userPainting.filter((paint) => paint._id !== _id);
          setUserPainting(remainingPaint);
        }
      });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <Helmet>
        <title>Paint+ | My Paintings</title>
      </Helmet>
      {userPainting.map((paint) => (
        <div
          key={paint._id}
          className="mt-1 md:mt-4 bg-gradient-to-r from-pink-500 to-orange-500 p-5 rounded-xl"
          data-aos="slide-up"
        >
          <img src={paint.photoURL} data-aos="zoom-in" />
          <h1 className="font-bold text-xl my-2">{paint.paintName}</h1>

          <div className="flex justify-between">
            <p className="font-medium">Price: ${paint.price}</p>
            <p>Rating: {paint.rating}</p>
          </div>
          <div className="flex justify-between">
            <p>Added by: {paint.userName}</p>
            <p>Process: {paint.process} minutes</p>
          </div>
          <div className="grid gap-2">
            <Link to={`/painting/update/${paint._id}`}>
              <button className="btn w-full border-none bg-green-700 text-white hover:bg-green-600">
                Update
              </button>
            </Link>

            <button
              onClick={() => handleDelete(paint._id)}
              className="btn w-full border-none bg-red-700 text-white hover:bg-red-600"
            >
              Detele
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPainting;
