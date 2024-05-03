import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PaintDetails = () => {
  const [allPainting, setAllPainting] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/painting")
      .then((res) => res.json())
      .then((data) => {
        setAllPainting(data);
      });
  }, []);
  const { id } = useParams();
  const clickedPainting = allPainting.find((p) => p._id === id);
  console.log(clickedPainting);
  return (
    <div className="grid gap-4 grid-cols-2 my-5 p-3 bg-gradient-to-r from-pink-500 to-orange-500">
      <div className="col-span-2 md:col-span-1">
        <img className="w-full" src={clickedPainting?.photoURL} />
      </div>
      <div className="col-span-2 md:col-span-1 grid font-medium">
        <h1 className="text-2xl ">Paint Title: {clickedPainting?.paintName}</h1>
        <h1 className="text-xl">Price: ${clickedPainting?.price}</h1>
        <h1>Stock Status: {clickedPainting?.stockStatus}</h1>
        <h1>Rating: {clickedPainting?.rating}</h1>
        <h1>Category: {clickedPainting?.category}</h1>
        <h1>Customizability: {clickedPainting?.customization}</h1>
        <h1>Process Time: {clickedPainting?.process} minutes</h1>
        <h1>Added by: {clickedPainting?.userName}</h1>
        <h1>{clickedPainting?.email}</h1>
      </div>
      <div className="col-span-2">
        <h1 className="font-medium text-lg">Paint Description: </h1>
        <h1>{clickedPainting?.description}</h1>
      </div>
    </div>
  );
};

export default PaintDetails;
