import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const MyPainting = () => {
  const { user } = useContext(AuthContext);
  const [userPainting, setUserPainting] = useState([]);
  console.log(userPainting);

  useEffect(() => {
    fetch(`http://localhost:5000/painting/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserPainting(data);
      });
  }, [user]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {userPainting.map((paint) => (
        <div
          key={paint._id}
          className="my-5 bg-gradient-to-r from-pink-500 to-orange-500 p-5 rounded-xl"
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
          <Link to={`/painting/${paint._id}`}>
            <button className="btn w-full bg-black text-white hover:bg-black">View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MyPainting;
