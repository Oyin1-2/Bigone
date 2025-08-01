function Last() {
  return (
    <div className="bg-gray-800 min-h-[70vh] lg:min-h-[60vh] flex flex-col items-center lg:items-start lg:flex-row lg:justify-between px-6 lg:px-20 py-10 gap-10 lg:gap-16">
      {/* About us section */}
      <div className="flex-1 max-w-md w-full flex flex-col justify-center gap-5">
        <a href="#about" className="text-2xl text-white font-primary font-semibold hover:text-gray-300 transition text-center lg:text-left">
          About us
        </a>
        <p className="font-primary text-white text-base leading-relaxed text-center lg:text-left">
          We are a dedicated law firm committed to fighting for justice and achieving real results. Whether it's personal injury, family law, or criminal defense, we stand by your side every step of the way.
        </p>
      </div>

      {/* Useful Links */}
      <div className="flex-1 max-w-full sm:max-w-sm w-full flex flex-col justify-start gap-5">
        <h2 className="text-2xl text-white font-primary font-semibold mb-2 text-center lg:text-left">Useful Links</h2>
        <nav className="flex flex-col gap-3 items-center lg:items-start">
          <a href="#hero" className="text-white font-primary text-lg tracking-wide hover:text-gray-300 transition">Home</a>
          <a href="#about" className="text-white font-primary text-lg tracking-wide hover:text-gray-300 transition">About us</a>
          <a href="#services" className="text-white font-primary text-lg tracking-wide hover:text-gray-300 transition">Services</a>
          <a href="#cases" className="text-white font-primary text-lg tracking-wide hover:text-gray-300 transition">Cases</a>
          <a href="#blog" className="text-white font-primary text-lg tracking-wide hover:text-gray-300 transition">Blog</a>
        </nav>
      </div>

      {/* Contact Info */}
      <div className="flex-1 max-w-full sm:max-w-md w-full flex flex-col justify-start gap-4">
        <h2 className="text-2xl text-white font-primary font-semibold mb-2 text-center lg:text-left">Our Address</h2>
        <p className="text-white font-primary text-base leading-relaxed text-center lg:text-left">
          123 Kingsway Ave, Suite 400<br />Atlanta, GA 30303
        </p>

        <div className="space-y-4 text-center lg:text-left">
          <div className="px-4 py-2 border border-gray-600 rounded-md">
            <span className="text-white font-primary text-lg font-semibold">Email:</span>{" "}
            <a href="mailto:contact@yourwebsite.com" className="text-white font-primary text-base hover:text-gray-300 transition">
              contact@yourwebsite.com
            </a>
          </div>
          <div className="px-4 py-2 border border-gray-600 rounded-md">
            <span className="text-white font-primary text-lg font-semibold">Phone:</span>{" "}
            <a href="tel:+14045550198" className="text-white font-primary text-base hover:text-gray-300 transition">
              (404) 555-0198
            </a>
          </div>
          <div className="px-4 py-2 border border-gray-600 rounded-md">
            <span className="text-white font-primary text-lg font-semibold">Office Time:</span>{" "}
            <span className="text-white font-primary text-base">9am - 5pm</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Last;
