import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Carousel() {
  const images = [
    {
      src: "abide.jpg",
      title: "Major Criminal Case Dismissed",
      desc: "Our client was cleared of all charges after strong legal defense and evidence presentation.",
    },
    {
      src: "abide2.jpg",
      title: "Successful Land Dispute Resolution",
      desc: "A complex family land conflict was peacefully resolved, securing rightful ownership.",
    },
    {
      src: "abide3.jpg",
      title: "Business Lawsuit Settled Favorably",
      desc: "We defended a local business and reached a favorable settlement, saving time and cost.",
    },
    {
      src: "abide4.jpg",
      title: "Wrongful Termination Case Won",
      desc: "Our client received full compensation after being unfairly dismissed from work.",
    },
    {
      src: "abide5.jpg",
      title: "Divorce and Custody Case Resolved",
      desc: "Secured child custody and a fair settlement for our client in a difficult divorce case.",
    },
    {
      src: "abide6.jpg",
      title: "Personal Injury Compensation",
      desc: "We won a major injury compensation case, helping our client recover medical costs.",
    },
    {
      src: "abide7.jpg",
      title: "Tenancy Agreement Dispute Settled",
      desc: "A rental dispute was resolved through negotiation, protecting our client’s rights.",
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
    <div id="cases" className="relative w-full h-[80vh] lg:h-[120vh] pt-20 px-[50px]">
      {/* Title & Arrows */}
      <div className="flex items-center justify-between w-full h-auto mb-10">
        <div>
          <h1 className="font-primary text-2xl">Case Results</h1>
          <p className="font-primary text-[1rem]">
            Real legal victories our team has achieved for clients.
            <br />
            Each case represents hard work, justice, and results.
          </p>
        </div>

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

      {/* Scrollable Image Row */}
      <div
        ref={scrollRef}
        className="overflow-x-auto flex gap-30 scroll-smooth scrollbar-hide  h-[70vh]" // removed overflow-y-hidden
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="min-w-[200px] lg:min-w-[400px] h-60 lg:h-100 rounded-lg shadow-md relative "
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover font-primary "
            />
            {/* Info Overlay */}
            <div className="absolute -bottom-6 -right-20 w-[80%] bg-white bg-opacity-60 text-black p-2 text-sm rounded-lg shadow-xl h-[200px] ">
              <h3 className="font-bold text-[0.9rem] lg:text-[1.5rem] font-primary mt-6">
                {img.title}
              </h3>
              <p className="text-[0.5rem] lg:text-[0.9rem] font-primary mt-1">
                {img.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
