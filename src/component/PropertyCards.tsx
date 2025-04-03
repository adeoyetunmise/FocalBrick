import React from 'react';

const PropertyCards: React.FC = () => {
  const properties = [
    {
      image: '/Frame 17.png',
      title: 'Oceanview Luxury Apartment',
      description1: 'Coastal Estates, Marina District.',
      description2: '3 Bedrooms | 2,500 sq ft | Panoramic Ocean views.',
      price: '$1,250,000'
    },
    {
      image: '/Frame 17 (1).png',
      title: 'Urban Professional Loft',
      description1: 'Downtown Business Hub',
      description2: '2 Bedrooms | 1,800 sq ft | High-end finishes',
      price: '$875,000'
    },
    {
      image: '/Frame 17 (2).png',
      title: 'Suburban Family Home',
      description1: 'Greenwood Estates',
      description2: '4 Bedrooms | 3,200 sq ft | Spacious backyard',
      price: '$690,000'
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 p-8">
      {properties.map((property, index) => (
        <div key={index} className="w-80 bg-white overflow-hidden">
          <img src={property.image} alt={property.title} className="w-full h-80 object-cover" />
          <div className="">
            <h3 className="text-xl font-bold mb-2">{property.title}</h3>
            <p className="text-gray-600 text-sm font-roboto mb-1">{property.description1}</p>
            <p className="text-gray-600 font-roboto text-sm mb-3">{property.description2}</p>
            <p className="text-sm font-semibold mb-4">Price:{property.price}</p>
            <button className="bg-black text-sm text-white px-4 py-2 rounded-full hover:bg-gray-800">View Property</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyCards;
