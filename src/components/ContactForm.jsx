import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.id]: null }));
    setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitStatus(null);
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setSubmitStatus({ success: true, message: data.message });
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        setSubmitStatus({ success: false, message: data.error || 'Submission failed' });
      }
    } catch {
      setSubmitStatus({ success: false, message: 'Network error' });
    }
  };

  return (
    <div
      id="contact"
      className="w-full min-h-[170vh] lg:min-h-[130vh] flex flex-col p-7"
      style={{
        backgroundImage: "url('/cat.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-[70px] w-full flex flex-col items-center justify-center font-primary text-white text-2xl lg:text-4xl text-center">
        <div className="w-[70px] border-t-4 border-[#DA954B] my-4"></div>
        <h1 className="text-[1.3rem] lg:text-2xl">
          Request a free case result
          <br />
          review today.
        </h1>
      </div>

      <div className="flex items-center justify-center flex-1">
        <div className="w-[90%] h-[130vh] lg:h-screen bg-gray-300 px-8 lg:px-[50px] py-10 rounded-lg shadow-lg flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
          <div className="w-full lg:w-[500px] h-auto bg-amber-400 rounded-md p-4">
            <div className="w-full h-[70vh] lg:h-[90vh] px-9 lg:px-[100px] pt-7 lg:pt-0">
              <div className="w-full px-7 h-full bg-[#231F20]">
                <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto p-8 rounded-2xl shadow-lg space-y-6" noValidate>
                  <div>
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#231F20] text-white ${
                        errors.name ? 'border-red-600 bg-red-100 text-red-900' : 'border-gray-300 bg-[#231F20]'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-600 mt-1 text-sm">{errors.name}</p>}
                  </div>

                  <div>
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#231F20] text-white ${
                        errors.email ? 'border-red-600 bg-red-100 text-red-900' : 'border-gray-300 bg-[#231F20]'
                      }`}
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="text-red-600 mt-1 text-sm">{errors.email}</p>}
                  </div>

                  <div>
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#231F20] text-white ${
                        errors.message ? 'border-red-600 bg-red-100 text-red-900' : 'border-gray-300 bg-[#231F20]'
                      }`}
                      placeholder="Tell me about your project..."
                    ></textarea>
                    {errors.message && <p className="text-red-600 mt-1 text-sm">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="bg-[#231F20] text-white px-6 py-2 rounded-md hover:bg-black transition-all"
                  >
                    Send Message
                  </button>
                  {submitStatus && (
                    <p
                      className={`mt-4 text-center ${
                        submitStatus.success ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {submitStatus.message}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[500px] h-[500px] bg-green-400 rounded-md">
            {/* Optional: add a map, contact info, or image here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
