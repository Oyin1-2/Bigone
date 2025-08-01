import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Review() {
  const images = [
    {
      src: "client1.jpg",
      name: "John Doe",
      title: "Excellent Legal Support",
      desc: "The team was professional, responsive, and truly cared about my case. I felt supported every step of the way.",
    },
    {
      src: "client2.jpg",
      name: "Jane Smith",
      title: "Highly Recommended",
      desc: "They resolved my business dispute quickly and efficiently. I couldn't have asked for better representation.",
    },
    {
      src: "client3.jpg",
      name: "Michael Johnson",
      title: "Compassionate and Skilled",
      desc: "During a difficult family matter, their guidance and expertise made all the difference. Thank you!",
    },
    {
      src: "client4.jpg",
      name: "Emily Davis",
      title: "Great Results",
      desc: "I was facing serious charges, but the attorneys fought hard and got my case dismissed. Forever grateful!",
    },
    {
      src: "client5.jpg",
      name: "William Brown",
      title: "Trustworthy and Honest",
      desc: "They explained everything clearly and kept me informed. I always felt like I was in good hands.",
    },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-[100vh] lg:h-[100vh] pt-20 px-8 lg:px-[100px] ">
      <div className="flex items-center justify-between w-full h-auto mb-10">
        <h1 className="font-primary text-1xl lg:text-3xl">
          <div className="w-[70px] border-t-4 border-[#DA954B] my-4"></div>
          Let's hear out what our
          <br />
          <span className="text-[#DA954B]">clients</span> have to say
        </h1>
        <div className="w-[100px] h-full flex items-center justify-between">
          <button
            onClick={scrollLeft}
            className="hover:bg-[#DA954B] hover:text-white p-2 shadow text-black cursor-pointer h-[40px] w-[40px] text-center"
          >
            <FaArrowLeft className="text-[1.2rem] font-light" />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 shadow hover:bg-[#DA954B] hover:text-white text-black cursor-pointer h-[40px] w-[40px] text-center"
          >
            <FaArrowRight className="text-[1.2rem] font-light" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="overflow-x-auto flex gap-10 scroll-smooth scrollbar-hide h-[70vh]"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="min-w-[250px] lg:min-w-[400px] h-[320px] bg-white rounded-lg shadow-md flex flex-col justify-between items-center p-6 relative"
          >
            <p className="text-gray-700 text-base lg:text-lg font-primary text-center mb-6">
              "{img.desc}"
            </p>

            <div className="flex flex-col items-center">
              <img
                src={img.src}
                alt={img.title}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#DA954B] mb-2 shadow"
              />
              <h4 className="font-semibold text-[0.9rem] lg:text-[1rem] font-primary text-black text-center mb-1">
                {img.name}
              </h4>
              <h3 className="font-bold text-[1rem] lg:text-[1.2rem] font-primary text-black text-center">
                {img.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
