import React from "react";
import { useNavigate } from "react-router-dom";
import ContactInformation from "../component/ContactInformation";
import products from "../data/Products"


const Properties: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="relative h-[135vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/frame.jpg')" }}
      >
        <div className="flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-8xl font-archivo font-extrabold mb-6 text-center">
            Explore Our Latest
            <br />
            <span className="italic font-merriweather text-6xl font-medium">
              Properties
            </span>
          </h1>

          <div className="absolute bottom-10 w-11/12 md:w-3/4 lg:w-2/3 bg-white rounded-full flex justify-around items-center text-sm space-x-2 h-20">
            <div className="flex items-center space-x-24 bg-gray-100 p-2 rounded-full cursor-pointer">
              <span className="text-black text-lg font-semibold">
                Ajah, Lagos
              </span>
              <img
                src="/location.png"
                alt="Location Logo"
                className="w-4 h-4"
              />
            </div>
            <div className="flex items-center space-x-24 bg-gray-100 p-2 rounded-full cursor-pointer">
              <span className="text-black text-lg font-semibold">
                3-bedroom Duplex
              </span>
              <img src="/home.png" alt="Type Logo" className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-24 bg-gray-100 p-2 rounded-full cursor-pointer">
              <span className="text-black text-lg font-semibold">
                1-2 Million
              </span>
              <img src="/dollar.png" alt="Price Logo" className="w-5 h-5" />
            </div>
            <button className="flex items-center text-lg bg-black text-white px-2 py-3 rounded-full cursor-pointer">
              <input
                type="text"
                placeholder="Search Properties"
                className="bg-transparent text-white w-28 ml-3 outline-none font-semibold text-sm placeholder-white"
              />
              <img src="/search.png" alt="Search Logo" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Text on Top of Grid and Aligned */}
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
          All{" "}
          <span className="italic font-merriweather font-light">
            Properties
          </span>
        </h2>
      </div>

      {/* Property Cards */}
      <section className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white  overflow-hidden ">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 text-sm">{product.description1}</p>
              <p className="text-gray-600 text-sm">{product.description2}</p>
              <p className="text-black font-semibold text-lg mt-3">
                {product.price}
              </p>
              <button
                onClick={() => navigate(`/properties/${product.slug}`)}
                className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
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
