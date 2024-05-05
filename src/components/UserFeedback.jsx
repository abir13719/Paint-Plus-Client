import { useEffect, useState } from "react";

const UserFeedback = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/feedback")
      .then((res) => res.json())
      .then((data) => setFeedback(data));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-3 p-3">
      <h1 className="col-span-3 text-center font-bold text-2xl text-yellow-400">Users Feedback</h1>
      {feedback.map((singleFeed) => (
        <div
          key={singleFeed._id}
          className="bg-white/30 rounded-2xl p-4 flex flex-col gap-2 backdrop-blur-2xl shadow-xl col-span-3 md:col-span-1"
        >
          <p className="text-justify">{singleFeed.feedback}</p>
          <div className="flex gap-2 items-center">
            <img className="w-14 h-14 rounded-full" src={singleFeed.profileImgURL} />
            <p className="font-medium">{singleFeed.userName}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserFeedback;
