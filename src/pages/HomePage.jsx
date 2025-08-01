// HomePage.jsx
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import { FaArrowRightLong } from "react-icons/fa6";
import Questions from "../components/Questions";
import Review from "../components/review";
import Contact from "../components/Contact";
import Last from "../components/Last";

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div
        id="hero"
        className="w-full min-h-screen px-4 sm:px-[100px] relative z-0 font-primary"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url('/courtroom.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />

        <div className="pt-32 lg:pt-40">
          <h1 className="text-white flex items-center gap-2 text-[1.2rem]">
            Experience Lawyer Team
            <span className="text-amber-500">
              <FaArrowRightLong />
            </span>
          </h1>

          <div className="mt-5">
            <h1 className="text-white text-3xl lg:text-5xl font-primary">
              We Always
              <span className="inline-block h-[50px] w-auto px-3 bg-amber-600 items-center justify-center ml-2 ">
                Stand for
              </span>
              <br />
              Right justice
            </h1>
          </div>

          <p className="text-white mt-5">
            Any began the first entrance to for hopes few their the bit to
            arrives
            <br />
            intention discipline location rendering findings
          </p>

          <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 mt-9">
            Get Started
          </button>
        </div>
      </div>

      {/* Card Section - Overlapping */}

      <div
        id="service"
        className="w-full flex justify-center relative z-10 -mt-[80px] font-primary"
      >
        <div className="w-[90%] bg-white shadow-lg rounded-lg flex flex-col lg:flex-row text-center overflow-hidden min-h-[250px]">
          {/* Card 1 */}
          <div className="flex-1 p-6 border-b lg:border-b-0 lg:border-r border-gray-300 flex flex-col items-center">
            <svg
              className="mb-4"
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 -960 960 960"
              width="40"
              fill="#DA954B"
            >
              <path d="M160-120v-80h480v80H160Zm226-194L160-540l84-86 228 226-86 86Zm254-254L414-796l86-84 226 226-86 86Zm184 408L302-682l56-56 522 522-56 56Z" />
            </svg>
            <h3 className="text-xl font-semibold text-black">
              Qualified Attorneys
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              The dedicated it when right the to
              <br />
              is hardly the or that we've was
              <br />
              screen them.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex-1 p-6 border-b lg:border-b-0 lg:border-r border-gray-300 flex flex-col items-center">
            <svg
              className="mb-4"
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 -960 960 960"
              width="40"
              fill="#DA954B"
            >
              <path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z" />
            </svg>
            <h3 className="text-xl font-semibold text-black">
              All Time Support
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              The dedicated it when right the to
              <br />
              is hardly the or that we've was
              <br />
              screen them.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex-1 p-6 border-b lg:border-b-0 lg:border-r border-gray-300 flex flex-col items-center">
            <svg
              className="mb-4"
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 -960 960 960"
              width="40"
              fill="#DA954B"
            >
              <path d="M80-120v-80h360v-447q-26-9-45-28t-28-45H240l120 280q0 50-41 85t-99 35q-58 0-99-35t-41-85l120-280h-80v-80h247q12-35 43-57.5t70-22.5q39 0 70 22.5t43 57.5h247v80h-80l120 280q0 50-41 85t-99 35q-58 0-99-35t-41-85l120-280H593q-9 26-28 45t-45 28v447h360v80H80Zm585-320h150l-75-174-75 174Zm-520 0h150l-75-174-75 174Zm335-280q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Z" />
            </svg>
            <h3 className="text-xl font-semibold text-black">
              Reasonable Pricing
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              The dedicated it when right the to
              <br />
              is hardly the or that we've was
              <br />
              screen them.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex-1 p-6 flex flex-col items-center">
            <svg
              className="mb-4"
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 -960 960 960"
              width="40"
              fill="#DA954B"
            >
              <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm240-600h160v-80H400v80Zm400 360H600v80H360v-80H160v160h640v-160Zm-360 0h80v-80h-80v80Zm-280-80h200v-80h240v80h200v-200H160v200Zm320 40Z" />
            </svg>
            <h3 className="text-xl font-semibold text-black">
              Highest Success Rate
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              The dedicated it when right the to
              <br />
              is hardly the or that we've was
              <br />
              screen them.
            </p>
          </div>
        </div>
      </div>
      {/* Third section */}
      <div
        id="about"
        className="bg-white w-full h-[190vh] lg:h-[150vh] flex flex-col lg:flex-row items-center justify-between lg:px-[100px] mt-7 lg:mt-0 font-primary"
      >
        <div className="w-[330px] h-[700px] lg:w-[500px] lg:h-[640px] ">
          <h1 className="text-2xl lg:text-3xl">
            We are the leading firm
            <br />
            Worldwide
          </h1>
          <h2 className="text-[1.2rem] lg:text-1xl mt-3">
            Loyality is very important to client
          </h2>
          <p className="mt-3">
            He process comcept of and answering on brown the and to to of about
            mad smaller trial. Up to well check people, in I the that sign leave
            were in walls the from focuses
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
            <div className="flex-1 p-6 flex flex-col items-center hover:bg-gray-300 lg:h-[150px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#DA954B"
              >
                <path d="M160-120v-80h480v80H160Zm226-194L160-540l84-86 228 226-86 86Zm254-254L414-796l86-84 226 226-86 86Zm184 408L302-682l56-56 522 522-56 56Z" />
              </svg>
              <h1 className="text-2xl font-bold">
                450+ <span className="text-base font-normal">case solved</span>
              </h1>
            </div>
            <div className="flex-1 p-6 flex flex-col items-center hover:bg-gray-300 lg:h-[150px]">
              <img src="cert2.svg" alt="" className="w-[40px] h-[40px]" />
              <h1 className="text-2xl font-bold">
                20+{" "}
                <span className="text-base font-normal">Experience Years</span>
              </h1>
            </div>
            <div className="flex-1 p-6 flex flex-col items-center hover:bg-gray-300 lg:h-[150px]">
              <img
                src="person.svg"
                alt=""
                srcset=""
                className="w-[40px] h-[40px]"
              />
              <h1 className="text-2xl font-bold">
                3k+ <span className="text-base font-normal">Happy Client</span>
              </h1>
            </div>
            <div className="flex-1 p-6 flex flex-col items-center hover:bg-gray-300 lg:h-[150px]">
              <img src="star.svg" alt="" className="w-[40px] h-[40px]" />
              <h1 className="text-2xl font-bold">
                20+{" "}
                <span className="text-base font-normal">Firm Worldwide</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="relative w-[330px] h-[600px] lg:w-[500px] lg:h-[640px] overflow-hidden ">
          <img
            src="law.jpg"
            alt="Law Statue"
            className="w-full h-auto object-cover rounded-md"
          />

          <img
            src="abide2.jpg"
            alt="Gavel"
            className="absolute left-6 bottom-30 lg:bottom-9 w-[220px] border-4 border-white shadow-lg rounded-md"
          />
        </div>
      </div>
      {/* Forth Section */}
      <div className="w-full h-auto bg-gray-100">
        <div
          id="services"
          className="h-[70px] w-full flex flex-col items-center justify-center font-primary  text-black text-3xl "
        >
          <div className="w-[70px]  border-t-4 border-[#DA954B] my-4"></div>
          <h1>Our Practice Area</h1>
        </div>
        <div className="grid grid-cols-1 grid-row-8 lg:grid-cols-4 grid-row-2 gap-4 lg:px-[100px] px-4">
          <div className=" flex flex-col items-center justify-center text-center gap-4 bg-black hover:bg-gray-600 ">
            <img
              src="dio.svg"
              alt=""
              className="h-[40px] w-[40px] text-white mt-5 "
            />
            <h1 className="text-white font-primary">Civil Litigation</h1>
            <p className="text-white font-primary text-[0.8rem]">
              Expert representation in civil disputes.
              <br />
              Protecting your rights in court.
            </p>
            <img
              src="arrow3.svg"
              alt=""
              className="h-[40px] w-[40px] bg-none text-white"
            />
          </div>
          <div className=" flex flex-col items-center justify-center text-center gap-4 hover:bg-gray-200 ">
            <img
              src="bank.svg"
              alt=""
              className="h-[40px] w-[40px] text-white mt-5 "
            />
            <h1 className="text-black font-primary">Corporate Finance</h1>
            <p className="text-black font-primary text-[0.8rem]">
              Guidance for business transactions.
              <br />
              Secure and grow your investments.
            </p>
            <img
              src="arrow4.svg"
              alt=""
              className="h-[40px] w-[40px] bg-none text-black"
            />
          </div>
          <div className=" flex flex-col items-center justify-center text-center gap-4 hover:bg-gray-200 ">
            <img
              src="book.svg"
              alt=""
              className="h-[50px] w-[50px] text-white mt-5 "
            />
            <h1 className="text-black font-primary">Family Law</h1>
            <p className="text-black font-primary text-[0.8rem]">
              Support for divorce, custody, and family matters.
              <br />
              Compassionate legal solutions.
            </p>
            <img
              src="arrow4.svg"
              alt=""
              className="h-[40px] w-[40px] bg-none text-white"
            />
          </div>
          <div className=" flex flex-col items-center justify-center text-center gap-4 hover:bg-gray-200 ">
            <img
              src="bus.svg"
              alt=""
              className="h-[40px] w-[40px] text-white mt-5 "
            />
            <h1 className="text-black font-primary">Business Litigation</h1>
            <p className="text-black font-primary text-[0.8rem]">
              Resolving commercial disputes efficiently.
              <br />
              Protecting your business interests.
            </p>
            <img
              src="arrow4.svg"
              alt=""
              className="h-[40px] w-[40px] bg-none text-white"
            />
          </div>
          <div className=" flex flex-col items-center justify-center text-center gap-4 hover:bg-gray-200 ">
            <img
              src="type.svg"
              alt=""
              className="h-[50px] w-[50px] text-white mt-5 "
            />
            <h1 className="text-black font-primary">Workers Law</h1>
            <p className="text-black font-primary text-[0.8rem]">
              Advocating for employee rights.
              <br />
              Fair treatment in the workplace.
            </p>
            <img
              src="arrow4.svg"
              alt=""
              className="h-[40px] w-[40px] bg-none text-white"
            />
          </div>
          <div className=" flex flex-col items-center justify-center text-center gap-4 hover:bg-gray-200 ">
            <img
              src="ins.svg"
              alt=""
              className="h-[50px] w-[50px] text-white mt-5 "
            />
            <h1 className="text-black font-primary">Insurance Law</h1>
            <p className="text-black font-primary text-[0.8rem]">
              Assistance with insurance claims and disputes.
              <br />
              Ensuring you get what you deserve.
            </p>
            <img
              src="arrow4.svg"
              alt=""
              className="h-[40px] w-[40px] bg-none text-white"
            />
          </div>
          <div className=" flex flex-col items-center justify-center text-center gap-4 hover:bg-gray-200 ">
            <img
              src="iii.svg"
              alt=""
              className="h-[40px] w-[40px] text-white mt-5 "
            />
            <h1 className="text-black font-primary">Business Law</h1>
            <p className="text-black font-primary text-[0.8rem]">
              Legal support for companies and entrepreneurs.
              <br />
              Helping your business thrive.
            </p>
            <img
              src="arrow4.svg"
              alt=""
              className="h-[40px] w-[40px] bg-none text-white"
            />
          </div>
          <div className=" flex flex-col items-center justify-center text-center gap-4 hover:bg-gray-200 ">
            <img
              src="biiik.svg"
              alt=""
              className="h-[40px] w-[40px] text-white mt-5 "
            />
            <h1 className="text-black font-primary">Real Estate Law</h1>
            <p className="text-black font-primary text-[0.8rem]">
              Guidance for property transactions and disputes.
              <br />
              Secure your real estate investments.
            </p>
            <img
              src="arrow4.svg"
              alt=""
              className="h-[40px] w-[40px] bg-none text-white"
            />
          </div>
        </div>
      </div>
      <Carousel />
      <Questions />
      <Review />
      <Contact />
      <Last />
    </>
  );
}

export default HomePage;
