import React, { useState, useEffect } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showTopMessage, setShowTopMessage] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.id]: null }));
    setSubmitStatus(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitStatus(null);
      return;
    }

    // Simulate successful submission
   
    setFormData({ name: "", email: "", message: "" });
    setErrors({});

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Show top message briefly
    setShowTopMessage(true);
  };

  // Hide the top message after 3 seconds
  useEffect(() => {
    if (showTopMessage) {
      const timer = setTimeout(() => {
        setShowTopMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showTopMessage]);

  return (
    <div
      id="contact"
      className="w-full min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage: "url('/cat.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top brief message */}
      {showTopMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50">
          Message sent successfully!
        </div>
      )}

      <div className="text-white text-center font-primary mb-8">
        <div className="w-[70px] border-t-4 border-[#DA954B] mx-auto my-4"></div>
        <h1 className="text-xl sm:text-2xl lg:text-3xl">
          Request a free case result
          <br />
          review today.
        </h1>
      </div>

      {/* White container box */}
      <div className="bg-white w-full max-w-[1100px] rounded-lg shadow-xl p-6 sm:p-10 flex flex-col lg:flex-row gap-6 lg:h-[600px]">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-6 w-full" noValidate>
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#231F20] text-black ${
                  errors.name
                    ? "border-red-600 bg-red-100 text-red-900"
                    : "border-gray-300 bg-white"
                }`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-600 mt-1 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#231F20] text-black ${
                  errors.email
                    ? "border-red-600 bg-red-100 text-red-900"
                    : "border-gray-300 bg-white"
                }`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-600 mt-1 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#231F20] text-black ${
                  errors.message
                    ? "border-red-600 bg-red-100 text-red-900"
                    : "border-gray-300 bg-white"
                }`}
                placeholder="Tell me about your project..."
              ></textarea>
              {errors.message && (
                <p className="text-red-600 mt-1 text-sm">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-[#231F20] text-white px-6 py-2 rounded-md hover:bg-black transition-all"
            >
            Get Free Consultation
            </button>

            {submitStatus && (
              <p
                className={`mt-4 text-center ${
                  submitStatus.success ? "text-green-600" : "text-red-600"
                }`}
              >
                {submitStatus.message}
              </p>
            )}
          </form>
        </div>

        {/* Blue Side Content */}
        <div className="w-full lg:w-1/2 h-full rounded-md flex flex-col ">
          <div className="flex flex-col  divide-gray-300 h-full">
            <div className="flex items-center gap-4 px-6 py-4">
              <img src="phone.svg" alt="Phone" className="w-12 h-12" />
              <div>
                <h1 className="text-black font-primary text-2xl">Phone</h1>
                <p className="text-black">(404) 555-0198</p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-6 py-4">
              <img src="location.svg" alt="Address" className="w-12 h-12" />
              <div>
                <h1 className="text-black font-primary text-2xl">Address</h1>
                <p className="text-black">
                  123 Kingsway Ave, Suite 400 Atlanta, GA 30303
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-6 py-4">
              <img src="clock.svg" alt="Office Hours" className="w-12 h-12" />
              <div>
                <h1 className="text-black font-primary text-2xl">Office Hours</h1>
                <p className="text-black">9am - 5pm</p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-6 py-4">
              <img src="email.svg" alt="Email" className="w-12 h-12" />
              <div>
                <h1 className="text-black font-primary text-2xl">Email</h1>
                <p className="text-black">contact@yourwebsite.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
