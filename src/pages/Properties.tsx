import React from "react";
import { useNavigate } from "react-router-dom";
import ContactInformation from "../component/ContactInformation";

const products = [
  {
    id: 1,
    slug: "oceanview-luxury-apartment",
    name: "Oceanview Luxury Apartment",
    image: "/Frame 17.png",
    description1: "Coastal Estates, Marina District",
    description2: "3 Bedrooms | 2,500 sq ft | Panoramic Ocean views",
    price: "Price: $1,250,000",
  },
  {
    id: 2,
    slug: "urban-professional-loft",
    name: "Urban Professional Loft",
    image: "/Frame 17 (1).png",
    description1: "Downtown Business Hub",
    description2: "2 Bedrooms | 1,800 sq ft | High-end finishes",
    price: "Price: $875,000",
  },
  {
    id: 3,
    slug: "suburban-family-home",
    name: "Suburban Family Home",
    image: "/Frame 17 (4).png",
    description1: "Greenwood Estates",
    description2: "4 Bedrooms | 3,200 sq ft | Spacious backyard",
    price: "Price: $690,000",
  },
  {
    id: 4,
    slug: "oakwood-manor-estate",
    name: "Oakwood Manor Estate",
    image: "/Frame 17 (5).png",
    description1: "Coastal Estates, Marina District",
    description2: "7 Bedrooms | 6,500 sq ft | Panoramic Ocean views",
    price: "Price: $5,250,000",
  },
  {
    id: 5,
    slug: "seaside-villa-retreat",
    name: "Seaside Villa Retreat",
    image: "/frame (2).jpg",
    description1: "Downtown Business Hub",
    description2: "7 Bedrooms | 6,500 sq ft | Panoramic Ocean views",
    price: "Price: $5,250,000",
  },
  {
    id: 6,
    slug: "the-monarch-penthouse",
    name: "The Monarch Penthouse",
    image: "/frame (3).jpg",
    description1: "Greenwood Estates",
    description2: "3 Bedrooms | 2,200 sq ft | Spacious backyard",
    price: "Price: $2,750,000",
  },
  {
    id: 7,
    slug: "the-wellington-residence",
    name: "The Wellington Residence",
    image: "/frame (4).jpg",
    description1: "Coastal Estates, Marina District",
    description2: "3 Bedrooms | 2,500 sq ft | Panoramic Ocean views",
    price: "Price: $1,250,000",
  },
  {
    id: 8,
    slug: "skyline-contemporary-loft",
    name: "SkyLine Contemporary Loft",
    image: "/frame (5).jpg",
    description1: "Downtown Business Hub",
    description2: "2 Bedrooms | 2,100 sq ft | High-end finishes",
    price: "Price: $1,150,000",
  },
  {
    id: 9,
    slug: "suburban-family-home",
    name: "Suburban Family Home",
    image: "/frame (6).jpg",
    description1: "Greenwood Estates",
    description2: "4 Bedrooms | 3,200 sq ft | Spacious backyard",
    price: "Price: $690,000",
  },
  {
    id: 10,
    slug: "commerce-center-office-building",
    name: "Commerce Center Office Building",
    image: "/frame (7).jpg",
    description1: "Coastal Estates, Marina District",
    description2: "3 Bedrooms | 2,500 sq ft | Panoramic Ocean views",
    price: "Price: $7,200,000",
  },
  {
    id: 11,
    slug: "parkview-apartment-complex",
    name: "Parkview Apartment Complex",
    image: "/frame (8).jpg",
    description1: "Downtown Business Hub",
    description2: "2 Bedrooms | 1,800 sq ft | High-end finishes",
    price: "Price: $4,850,000",
  },
  {
    id: 12,
    slug: "suburban-family-home",
    name: "Suburban Family Home",
    image: "/frame (9).jpg",
    description1: "Greenwood Estates",
    description2: "4 Bedrooms | 3,200 sq ft | Spacious backyard",
    price: "Price: $690,000",
  },
];

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
