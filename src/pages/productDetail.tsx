import { useParams } from "react-router-dom";
import React from "react";
import products from "../data/Products"; // Move the products array to its own file
import Navbar from "../component/NavBar";
import { getFeatures } from "../utils/getFeatures"; // Import the getFeatures function

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
        className="relative h-[110vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        <div className="bg-black bg-opacity-40 h-full flex items-center justify-center">
          {/* <h1 className="text-white text-5xl md:text-7xl font-bold">
            {product.name}
          </h1> */}
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 gap-10">
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">
              {product.name}
            </h1>
            <p className="text-xl text-gray-700 mb-2">{product.description1}</p>
          </div>
          <p className="text-4xl font-bold text-black mt-1 ml-auto">
            {product.price}
          </p>
        </div>
      </div>

      <div className="bg-black text-white p-10 grid grid-cols-2 md:grid-cols-5 ">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center ml-24 gap-4">
            {feature.icon}
            <span className="text-sm">{feature.text}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductDetail;
