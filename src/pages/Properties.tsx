import React from "react";
import { useNavigate } from "react-router-dom";
import ContactInformation from "../component/ContactInformation";
import products from "../data/Products";

const Properties: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="relative min-h-[100vh] md:min-h-[90vh] lg:min-h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/frame.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <div className="text-center text-white px-4 mb-24 md:mb-28">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-archivo font-extrabold mb-4 md:mb-6">
              Explore Our Latest
              <br />
              <span className="italic font-merriweather text-4xl sm:text-5xl md:text-6xl font-medium">
                Properties
              </span>
            </h1>
          </div>

          <div className="absolute bottom-5 md:bottom-10 w-[95%] md:w-11/12 lg:w-3/4 bg-white rounded-3xl md:rounded-full flex flex-col md:flex-row justify-around items-center text-sm space-y-3 md:space-y-0 md:space-x-2 p-4 md:h-20">
            <div className="flex items-center justify-between w-full md:w-auto bg-gray-100 p-2 rounded-full cursor-pointer">
              <span className="text-black text-base md:text-lg font-semibold mx-2">
                Ajah, Lagos
              </span>
              <img
                src="/location.png"
                alt="Location Logo"
                className="w-4 h-4 mx-3"
              />
            </div>
            <div className="flex items-center justify-between w-full md:w-auto bg-gray-100 p-2 rounded-full cursor-pointer">
              <span className="text-black text-base md:text-lg font-semibold mx-2">
                3-bedroom Duplex
              </span>
              <img src="/home.png" alt="Type Logo" className="w-4 h-4 mx-3" />
            </div>
            <div className="flex items-center justify-between w-full md:w-auto bg-gray-100 p-2 rounded-full cursor-pointer">
              <span className="text-black text-base md:text-lg font-semibold mx-2">
                1-2 Million
              </span>
              <img
                src="/dollar.png"
                alt="Price Logo"
                className="w-5 h-5 mx-3"
              />
            </div>
            <button className="flex items-center justify-between w-full md:w-auto text-lg bg-[#292E4B] text-white px-4 py-3 rounded-full cursor-pointer">
              <input
                type="text"
                placeholder="Search Properties"
                className="bg-transparent text-white w-full md:w-28 outline-none font-semibold text-sm placeholder-white"
              />
              <img
                src="/search.png"
                alt="Search Logo"
                className="w-4 h-4 ml-2"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Text on Top of Grid and Aligned */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#292E4B] leading-tight">
          All{" "}
          <span className="italic font-merriweather font-light">
            Properties
          </span>
        </h2>
      </div>

      {/* Property Cards */}
      <section className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg"
          >
            <div className="aspect-w-16 aspect-h-10">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 sm:h-72 object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl text-[#292E4B] font-bold mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 text-sm">{product.description1}</p>
              <p className="text-gray-600 text-sm">{product.description2}</p>
              <p className="text-black font-semibold text-base sm:text-lg mt-3">
                {product.price}
              </p>
              <button
                onClick={() => navigate(`/properties/${product.slug}`)}
                className="mt-4 inline-block bg-[#292E4B] text-white px-4 py-2 rounded-full hover:bg-gray-800 transition w-full sm:w-auto text-center"
              >
                View Property
              </button>
            </div>
          </div>
        ))}
      </section>
      <ContactInformation />
    </>
  );
};

export default Properties;
