import Link from "next/link";
import React from "react";

const PriceCard = ({ title, price, features, isHighlighted }) => {
  return (
    <div className="max-w-lg mx-auto mt-8">
      <div
        className={`group bg-[#060918] h-72 p-6 rounded-lg shadow-md transition duration-300 transform ${
          isHighlighted
            ? "md:scale-125 scale-125 md:hover:scale-150"
            : "md:hover:scale-125 scale-125 md:scale-110"
        } border border-slate-500`}
      >
        <h2 className="text-2xl font-bold text-gray-300">{title}</h2>
        <p className="mt-2 text-2xl font-semibold text-indigo-600">${price}</p>
        <ul className="mt-4 text-gray-600">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
              </span>
              {feature}
            </li>
          ))}
        </ul>
        <button className=" border border-blue-700 text-blue-300 bg-[#100b30]  text-center rounded-xl w-32 mt-10">
          <Link href={"#contact"}>Get Started</Link>
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
