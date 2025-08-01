function Last() {
  return (
    <div className="bg-gray-800 h-[150vh] lg:h-[60vh] flex flex-col lg:flex-row lg:items-center lg:justify-between pl-20 pr-20 gap-7">
      <div className="flex-1 w-full lg:w-[100px] lg:h-full flex flex-col justify-center gap-5">
        <a href="#about" className="text-2xl text-white font-primary">
          About us
        </a>
        <p className="font-primary text-white">
          {" "}
          We are a dedicated law firm committed to fighting for justice and
          achieving real results. Whether it's personal injury, family law, or
          criminal defense, we stand by your side every step of the way.
        </p>
      </div>

      <div className="flex-1 w-full lg:w-[100px] lg:h-full flex flex-col justify-center gap-3 pt-11 ml-20 mr-20">
        <h1 className="text-2xl text-white font-primary">Useful Links</h1>
        <div className="gap-3 text-white font-primary flex flex-col text-1xl tracking-widest">
          <a href="#hero">Home</a>
          <a href="#about">About us</a>
          <a href="#services">Services</a>
          <a href="#cases">Cases</a>
          <a href="#blog">Blog</a>
        </div>
      </div>
      <div className="flex-1 w-full lg:w-[100px] lg:h-full flex flex-col justify-center gap-3 ">
        <h1 className="text-2xl text-white font-primary">Our Adress</h1>
        <div className="gap-3 text-white font-primary flex flex-col text-1xl">
          <p className="text-white">
            123 Kingsway Ave, Suite 400 Atlanta, GA 30303
          </p>
        </div>
        <h1>
          <span className="text-[1.2rem] text-white font-primary">Email:</span>{" "}
          <span className="text-[1rem] text-white font-primary">
            {" "}
            contact@yourwebsite.com
          </span>
        </h1>
        <h1>
          <span className="text-[1.2rem] text-white font-primary">Phone:</span>{" "}
          <span className="text-[1rem] text-white font-primary">
            {" "}
            (404) 555-0198
          </span>
        </h1>
        <h1>
          <span className="text-[1.2rem] text-white font-primary">
            Office Time:
          </span>{" "}
          <span className="text-[1rem] text-white font-primary">
            {" "}
            9am - 5pm
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Last;
