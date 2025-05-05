import React from "react";
import Video from "../component/Video";
import KeyFeatures from "../component/KeyFeatures";
import ReviewsFromClients from "../component/ReviewsFromClients";
import ContactInformation from "../component/ContactInformation";

const About: React.FC = () => {
  return (
    <>
      <div
        className="relative h-[135vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/frontyard.jpg')" }}
      >
        <div className="flex flex-col justify-center h-full text-white bg-black bg-opacity-50">
          {/* Main Text */}
          <h1 className="text-4xl md:text-7xl font-archivo mt-48 p-24 font-extrabold">
            Transforming
            <span className="italic font-merriweather text-7xl font-medium">
              {" "}
              Real Estate
            </span>
            <br />
            <span className="text-4xl md:text-7xl font-archivo font-extrabold mb-6">
              Management Through <br />
              <span className="italic font-merriweather text-7xl font-medium">
                Expertise, Innovation, and
              </span>
              <br />
              <span className="italic font-merriweather text-7xl font-medium">
                Trust
              </span>
            </span>
          </h1>
        </div>
      </div>

      <section className="flex flex-col md:flex-row items-start justify-between px-6 md:px-20 py-12 gap-10">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold font-archivo text-gray-800">
            Creating Lasting <br /> Value for{" "}
            <span className="italic font-merriweather font-light">
              every client
            </span>
          </h2>

          <img
            src="Frame 37 (1).png"
            alt="Team or value illustration"
            className="w-full max-w-md"
          />
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 space-y-6 text-gray-700 text-base font-roboto">
          <p>
            Founded in 2012, <b> FocalBrick Limited </b> has established itself
            as a premier name in comprehensive real estate and property
            management services. What began as a vision to transform traditional
            property management has evolved into a full-service real estate
            solution trusted by hundreds of property owners, investors, and
            tenants across the region.
          </p>
          <p>
            The FocalBrick story began when co-founders Sarah Thompson and
            Michael Rodriguez, both seasoned real estate professionals,
            recognized a critical gap in the market. They envisioned a property
            management company that would combine innovative technology with
            personalized service—where clients would receive both cutting-edge
            efficiency and the human touch that real estate inherently demands.
          </p>
          <p>
            Starting with a small portfolio of just 15 properties, we've grown
            to manage over 500 residential and commercial properties valued at
            more than $750 million. This growth reflects our unwavering
            commitment to excellence and the trust our clients place in us.
          </p>
        </div>
      </section>

      {/* New Section for Our Values, Our Vision, Our Approach */}
      <section className="px-6 md:px-20 py-12 space-y-10 md:space-y-0 flex flex-col md:flex-row justify-between gap-12">
        <div className="flex-1">
          <h3 className="text-3xl md:text-4xl font-bold font-archivo text-gray-800">
            Our{" "}
            <span className="italic font-merriweather font-light">Values</span>
          </h3>
          <p className="text-gray-700 text-base font-roboto">
            Discover a new era of property management with FocalBrick Limited.
            We don't just manage properties; we create thriving living and
            investment ecosystems. With over a decade of expertise, we turn real
            estate challenges into opportunities for growth, comfort, and
            financial success.
          </p>
        </div>

        <div className="flex-1">
          <h3 className="text-3xl md:text-4xl font-bold font-archivo text-gray-800">
            Our{" "}
            <span className="italic font-merriweather font-light">Vision</span>
          </h3>
          <p className="text-gray-700 text-base font-roboto">
            We aim to redefine the standards of property management by creating
            thriving real estate ecosystems where owners, investors, tenants,
            and communities all benefit. By combining human expertise with
            technological innovation, we're building a future where property
            management is synonymous with property enhancement.
          </p>
        </div>

        <div className="flex-1">
          <h3 className="text-3xl md:text-4xl font-bold font-archivo text-gray-800">
            Our{" "}
            <span className="italic font-merriweather font-light">
              Approach
            </span>
          </h3>
          <p className="text-gray-700 text-base font-roboto">
            At FocalBrick, we believe property management isn't just about
            maintaining buildings—it's about building relationships and
            maximizing value. Our approach combines: Data Driven Decision
            Making, Proactive Management, Transparent Communication
          </p>
        </div>
      </section>

      <section className="px-6 md:px-20 py-12 mt-0 mb-0">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="flex-1 text-center">
            <h1 className="text-5xl font-bold italic font-merriweather">93+</h1>
            <p className="text-gray-700 text-lg font-roboto">
              Client Satisfaction
            </p>
          </div>

          <div className="flex-1 text-center">
            <h1 className="text-5xl font-bold italic font-merriweather">81%</h1>
            <p className="text-gray-700 text-lg font-roboto">
              Tenant Retention
            </p>
          </div>

          <div className="flex-1 text-center">
            <h1 className="text-5xl font-bold italic font-merriweather">10+</h1>
            <p className="text-gray-700 text-lg font-roboto">
              Years of Market Leadership
            </p>
          </div>

          <div className="flex-1 text-center">
            <h1 className="text-5xl font-bold italic font-merriweather">
              $750+
            </h1>
            <p className="text-gray-700 text-lg font-roboto">
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
