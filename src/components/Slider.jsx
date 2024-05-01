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
          <img className="w-full" src={singleImg.img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
