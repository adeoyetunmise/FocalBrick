import { Bed, Ruler, Sun, Bath, Car } from "lucide-react";
import { Product } from "../data/Products";

export const getFeatures = (product: Product) => [
  {
    icon: <Bed className="w-7 h-7 p-1  text-black bg-white rounded-full" />,
    text: `${product.bedrooms ?? "N/A"} Bedroom${
      product.bedrooms !== 1 ? "s" : ""
    }`,
  },
  {
    icon: <Ruler className="w-7 h-7 p-1 text-black bg-white rounded-full" />,
    text: `${product.area ?? "Unknown size"} floor`,
  },
  {
    icon: <Sun className="w-7 h-7 p-1 text-black bg-white rounded-full" />,
    text: "247 Natural Light",
  },
  {
    icon: <Bath className="w-7 h-7 p-1 text-black bg-white rounded-full" />,
    text: `${product.bathrooms ?? "N/A"} Bathroom${
      product.bathrooms !== 1 ? "s" : ""
    }`,
  },
  {
    icon: <Car className="w-7 h-7 p-1 text-black bg-white rounded-full" />,
    text: product.parking ? "Free Parking Space" : "No Parking",
  },
];
