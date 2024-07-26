import React from "react";

const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {Array(20).fill("").map((_, index) => (
        <div key={index} className="bg-gray-200 p-4 rounded-lg shadow animate-pulse">
          <div className="bg-gray-300 h-24 w-full mb-4 rounded-md"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
