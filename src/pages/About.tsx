import React from "react";
import Video from "../component/Video";
import KeyFeatures from "../component/KeyFeatures";
import ReviewsFromClients from "../component/ReviewsFromClients";
import ContactInformation from "../component/ContactInformation";

const About: React.FC = () => {
  return (
    <>
      <div
        className="relative min-h-[100vh] lg:min-h-[120vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/frontyard.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col justify-center h-full text-white p-4">
          {/* Main Text */}
          <h1 className="text-center mt-60 md:text-left text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-archivo mx-auto md:mx-0 md:ml-12 lg:ml-12 lg:mt-52 sm:mt-20 md:mt-30 p-4 sm:p-8 md:p-12 lg:p-16 font-extrabold max-w-3xl md:max-w-2xl lg:max-w-3xl">
            Building
            <span className="italic font-merriweather text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium">
              {" "}
              Trust,
            </span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-archivo font-extrabold mb-3 sm:mb-6">
              Managing Growth, <br />
              <span className="italic font-merriweather text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium">
                Shaping Communities.
              </span>
            </span>
          </h1>
        </div>
      </div>

      <section className="flex flex-col md:flex-row items-start justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-12 gap-6 md:gap-10">
        {/* Left Side */}
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-archivo text-gray-800">
            Creating Lasting <br className="hidden sm:block" /> Value for{" "}
            <span className="italic font-merriweather font-light">
              every client
            </span>
          </h2>

          <img
            src="Frame 37 (1).png"
            alt="Team or value illustration"
            className="w-full max-w-md mx-auto md:mx-0"
          />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-gray-700 mt-6 sm:mt-20 md:mt-40 text-base sm:text-lg font-roboto">
          <p>
            FOCALBRICK Limited is a full-service real estate management company
            committed to delivering excellence in property development, property
            management, advisory services, and equipment leasing. With a passion
            for real estate and a focus on long-term value, we serve
            individuals, businesses, and institutional clients across Nigeria.
          </p>
        </div>
      </section>

      {/* New Section for Our Values, Our Vision, Our Approach */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-12 space-y-8 md:space-y-0 flex flex-col md:flex-row justify-between gap-8 md:gap-12">
        <div className="flex-1">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-archivo text-gray-800">
            Our{" "}
            <span className="italic font-merriweather font-light">Mission</span>
          </h3>
          <p className="text-gray-700 text-sm sm:text-base font-roboto mt-2">
            To provide world-class real estate and property solutions that
            deliver sustainable value to our clients and communities.
          </p>
        </div>

        <div className="flex-1">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-archivo text-gray-800">
            Our{" "}
            <span className="italic font-merriweather font-light">Vision</span>
          </h3>
          <p className="text-gray-700 text-sm sm:text-base font-roboto mt-2">
            To be a leading force in property development and
            management—recognized for integrity, innovation, and service
            excellence
          </p>
        </div>

        <div className="flex-1">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-archivo text-gray-800">
            Our{" "}
            <span className="italic font-merriweather font-light">
              Approach
            </span>
          </h3>
          <p className="text-gray-700 text-sm sm:text-base font-roboto mt-2">
            We adopt modern tools and solutions for efficient and
            forward-thinking operations
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-12 mt-0 mb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold italic font-merriweather">
              93+
            </h1>
            <p className="text-gray-700 text-base sm:text-lg font-roboto">
              Client Satisfaction
            </p>
          </div>

          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold italic font-merriweather">
              81%
            </h1>
            <p className="text-gray-700 text-base sm:text-lg font-roboto">
              Tenant Retention
            </p>
          </div>

          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold italic font-merriweather">
              10+
            </h1>
            <p className="text-gray-700 text-base sm:text-lg font-roboto">
              Years of Market Leadership
            </p>
          </div>

          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold italic font-merriweather">
              $750+
            </h1>
            <p className="text-gray-700 text-base sm:text-lg font-roboto">
              Million in managed properties
            </p>
          </div>
        </div>
      </section>
      <Video />
      <KeyFeatures />
      <ReviewsFromClients />
      <ContactInformation />
    </>
  );
};

export default About;
