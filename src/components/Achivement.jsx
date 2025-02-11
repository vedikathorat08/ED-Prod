import React from "react";

const Achievement = ({ image, description, title }) => {
    return (
        <div className="bg-[#D3D4D7] shadow-md rounded-lg p-6">
            <p className="text-black text-center text-lg font-bold mb-4">{title}</p>
            <img className="object-fit  w-screen h-fit  mb-4" src={image} alt="Achievement" />
            <p className="text-gray-700 text-justify">{description}</p>
        </div>
    );
};

export default Achievement;
