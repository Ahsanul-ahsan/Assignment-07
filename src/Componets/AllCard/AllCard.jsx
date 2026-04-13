import React from 'react';

const AllCard = ({ cards }) => {

    const { name, days_since_contact, tags, status, picture } = cards;

    return (
        <div className="bg-white shadow-md rounded-xl p-6 text-center ">
            <img
                src={picture}
                alt="David Kim"
                className="w-20 h-20 rounded-full mx-auto object-cover"
            />

            <h2 className="text-xl font-bold text-slate-800 mt-4">{name}</h2>

            <p className="text-sm text-gray-500 mt-1">
                <span className="font-bold mr-1 ">{days_since_contact}</span>ago
            </p>

            <div className="mt-3 gap-2 mb-4">
                {tags.map((tag, i) => {
                    return (
                        <span
                            key={i}
                            className="bg-green-100 text-green-700 px-2 py-1 mr-2 rounded-full text-xs"
                        >
                            {tag}
                        </span>
                    );
                })}
            </div>
            <div>
                <span
                    className={` px-2 py-1 rounded-full text-xs ${status === "overdue" ? "bg-[#EF4444] text-white font-bold" : ""} ${status === "almost due" ? "bg-[#EFAD44]  font-bold text-white" : ""} ${status === "on-track" ? "bg-[#244D3F] text-white font-bold" : ""}`}
                >
                    {status}
                </span>
            </div>
        </div>


    );
};

export default AllCard;