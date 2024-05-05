import { Link, useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";
import UserFeedback from "../components/UserFeedback";
import Question from "../components/Question";

const Home = () => {
  const allPainting = useLoaderData();
  const slided = allPainting.slice(0, 6);
  console.log(slided);
  return (
    <div>
      <Slider></Slider>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2 md:mt-4">
        <h1 className="col-span-1 md:col-span-3 text-center font-bold text-2xl text-yellow-400">
          Explore Paintings
        </h1>
        {slided.map((paint) => (
          <div
            key={paint._id}
            className=" bg-gradient-to-r from-pink-500 to-orange-500 p-5 rounded-xl"
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
              <button className="btn w-full bg-black text-white hover:bg-black">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
      <UserFeedback></UserFeedback>
      <Question></Question>
    </div>
  );
};

export default Home;
