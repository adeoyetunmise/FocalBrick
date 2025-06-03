import React from "react";

const ContactInformation: React.FC = () => {
  return (
    <div className="p-8 flex flex-col items-start justify-center">
      {/* Header */}
      <div className="text-left ml-24 mb-8">
        <h2 className="text-5xl  font-bold text-[#292E4B]">
          Contact <br />
          <span className="italic font-merriweather font-light">
            Information
          </span>
        </h2>
      </div>

      {/* Paragraphs Row */}
      <div className="flex flex-wrap ml-5 justify-around w-full gap-8 mb-8">
        {/* Paragraph 1 */}
        <div className="w-80 text-left">
          <h3 className="text-lg text-[#292E4B] font-semibold mb-2">
            FocalBrick Limited
          </h3>
          <p className="text-gray-600 text-lg mb-1 font-roboto">
            123 Metropolitan Avenue, Suite 500{" "}
          </p>
          <p className="text-gray-600 text-lg font-roboto">
            Business District, Urban Center.
          </p>
        </div>

        {/* Paragraph 2 */}
        <div className="w-80 text-left">
          <h3 className="text-xl font-semibold text-[#292E4B] mb-2">Contact</h3>
          <p className="text-gray-600 text-lg mb-1 font-roboto">
            Phone: +1 (555) 123-4567
          </p>
          <p className="text-gray-600 text-lg font-roboto">
            Email: connect@focalbrick.com
          </p>
        </div>

        {/* Paragraph 3 */}
        <div className="w-80 text-left">
          <h3 className="text-xl font-semibold text-[#292E4B] mb-2">
            Office Hours
          </h3>
          <p className="text-gray-600 text-lg mb-1 font-roboto">
            Monday - Friday: 9:00 AM - 6:00 PM{" "}
          </p>
          <p className="text-gray-600 text-lg font-roboto">
            Saturday: 10:00 AM - 2:00 PM{" "}
          </p>
        </div>
      </div>

      {/* Images Row */}
      <div className="w-full hidden md:flex justify-center">
        <div className="flex items-center mt-12 gap-0">
          <img
            src="/Frame 19.png"
            alt="Office"
            className="w-auto h-auto object-cover rounded-md relative z-10"
          />
          <img
            src="/Frame 36 (1).png"
            alt="Support Team"
            className="w-auto h-auto object-cover rounded-md -ml-16 relative z-20"
          />
          <img
            src="/Frame 17 (3).png"
            alt="Business Hours"
            className="w-auto h-auto object-cover rounded-md -ml-16 relative z-30"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
