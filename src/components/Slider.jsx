import { useEffect, useState } from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Slider = () => {
  const [image, setImage] = useState([]);
  console.log(image);

  useEffect(() => {
    fetch("http://localhost:5000/slider")
      .then((res) => res.json())
      .then((data) => setImage(data));
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    >
      {image.map((singleImg) => (
        <SwiperSlide key={singleImg._id}>
          <div className="h-72 md:h-96">
            <div className="absolute top-0 bottom-0 left-0 right-0">
              <img className="w-full h-full object-cover" src={singleImg.img} />
            </div>
            <div className="absolute top-1/2 translate-y-[-50%] z-10 left-[10%] w-[60%] md:w-[40%] bg-white/30 p-5 rounded-3xl backdrop-blur-xl shadow-xl">
              <h1 className="text-orange-700 text-2xl font-bold">{singleImg.title}</h1>
              <p className="text-justify">{singleImg.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
