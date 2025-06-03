import { useParams } from "react-router-dom";
import React from "react";
import products from "../data/Products"; // Move the products array to its own file
import Navbar from "../component/NavBar";
import { getFeatures } from "../utils/getFeatures"; // Import the getFeatures function
import { FaPhoneAlt, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import Video from "../component/Video";
import PropertyCards from "../component/PropertyCards";
import ContactInformation from "../component/ContactInformation";

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return <div className="text-center mt-10 text-xl">Product not found.</div>;
  }
  const features = getFeatures(product);

  return (
    <>
      <Navbar />
      <div
        className="relative h-[50vh] sm:h-[70vh] md:h-[90vh] lg:h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        <div className="bg-black bg-opacity-40 h-full flex items-center justify-center">
          {/* <h1 className="text-white text-5xl md:text-7xl font-bold">
            {product.name}
          </h1> */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 sm:p-6 gap-5 sm:gap-10">
        <div className="flex flex-col sm:flex-row justify-between items-start flex-wrap gap-3 sm:gap-4">
          <div className="w-full sm:w-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#292E4B] mb-2">
              {product.name}
            </h1>
            <p className="text-base sm:text-xl text-gray-700 mb-2">
              {product.description1}
            </p>
          </div>
          <p className="text-2xl sm:text-4xl font-bold text-[#292E4B] mt-1 sm:ml-auto">
            {product.price}
          </p>
        </div>
      </div>

      <div className="bg-[#292E4B] text-white p-4 sm:p-6 md:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start"
          >
            <span className="text-xl sm:text-base">{feature.icon}</span>
            <span className="text-xs sm:text-sm">{feature.text}</span>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-20 xl:gap-32">
        {/* Left: Description and Property Info */}
        <div className="lg:col-span-2">
          <h2 className="text-xl text-[#292E4B] sm:text-2xl font-semibold mb-3 sm:mb-4">
            Description
          </h2>
          <p className="text-gray-700 mb-6 text-sm sm:text-base">
            {product.detailedDescription}
          </p>

          {/* Property Details Images & Labels */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="flex flex-col items-center">
              <img
                src={product.image1}
                alt="Property Type"
                className="rounded-lg w-full h-auto object-cover aspect-square"
              />
              <p className="text-center mt-2 font-medium text-sm sm:text-base">
                Property Type
              </p>
              <p className="text-center text-xs sm:text-sm text-gray-600">
                {product.type || "House"}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={product.image2}
                alt="Offer Type"
                className="rounded-lg w-full h-auto object-cover aspect-square"
              />
              <p className="text-center mt-2 font-medium text-sm sm:text-base">
                Offer Type
              </p>
              <p className="text-center text-xs sm:text-sm text-gray-600">
                {product.offer || "Sale/Rent"}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={product.image3}
                alt="Status"
                className="rounded-lg w-full h-auto object-cover aspect-square"
              />
              <p className="text-center mt-2 font-medium text-sm sm:text-base">
                Property Status
              </p>
              <p className="text-center text-xs sm:text-sm text-gray-600">
                {product.status || "Still Available"}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={product.image4}
                alt="Inspection"
                className="rounded-lg w-full h-auto object-cover aspect-square"
              />
              <p className="text-center mt-2 font-medium text-sm sm:text-base">
                Inspection
              </p>
              <p className="text-center text-xs sm:text-sm text-gray-600">
                {product.inspection || "Every Thursday"}
              </p>
            </div>
          </div>
        </div>

        {/* Right: Agent Details */}
        <div className="p-4 sm:p-6 bg-gray-50 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Agent Details</h3>
          <div className="flex flex-col items-center sm:items-start">
            <img
              src={product.agentImage || "/agent.jpg"}
              alt="Agent"
              className="w-20 h-20 rounded-full object-cover mb-3"
            />
            <p className="font-semibold text-center sm:text-left">
              {product.agentName || "Adekunle Oladosu"}
            </p>
            <p className="text-sm text-gray-600 mb-4 text-center sm:text-left">
              Property Agent
            </p>

            <button className="flex items-center gap-2 w-full bg-[#292E4B] text-white px-3 sm:px-4 py-2 rounded-full mb-3 justify-center hover:bg-gray-800 text-sm sm:text-base">
              <FaPhoneAlt /> Call Agent
            </button>
            <button className="flex items-center gap-2 w-full bg-gray-300 px-3 sm:px-4 py-2 rounded-full mb-3 justify-center hover:bg-gray-400 text-sm sm:text-base">
              <FaEnvelope /> Send an Email
            </button>
            <button className="flex items-center gap-2 w-full bg-gray-400 px-3 sm:px-4 py-2 rounded-full justify-center hover:bg-gray-500 text-sm sm:text-base">
              <FaCalendarAlt /> Book an Appointment
            </button>
          </div>
        </div>
      </div>
      <Video />
      <div className="max-w-7xl mx-auto p-4 sm:p-6 mt-10 sm:mt-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#292E4B] leading-tight">
          Similar{" "}
          <span className="italic font-merriweather font-light">
            Properties
          </span>
        </h2>
      </div>
      <PropertyCards />
      <ContactInformation />
    </>
  );
};

export default ProductDetail;
