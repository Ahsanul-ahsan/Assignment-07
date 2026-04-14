import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaComments, FaExclamationCircle, FaUserFriends } from 'react-icons/fa';
import AllCard from '../AllCard/AllCard';

const CardSummary = () => {

    const [card, setCard] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => {
                setCard(data);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return (
            <div className="text-center mt-10 text-green-600 text-3xl font-bold">
                ⏳ Loading data...
            </div>
        );
    }

    return (
        <div className='max-w-11/12 mx-auto '>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mb-5">
                <div className="bg-white shadow rounded-xl p-6 text-center ">
                    <div className="text-2xl text-[#244D3F] flex justify-center mb-2">
                        <FaUserFriends />
                    </div>
                    <h2 className="text-3xl font-bold text-[#244D3F]">{card.length}</h2>
                    <p className="text-gray-500 mt-1">Total Friends</p>
                </div>

                <div className="bg-white shadow rounded-xl p-6 text-center ">
                    <div className="text-2xl text-[#244D3F] flex justify-center mb-2">
                        <FaCheckCircle />
                    </div>
                    <h2 className="text-3xl font-bold text-[#244D3F]">3</h2>
                    <p className="text-gray-500 mt-1">On Track</p>
                </div>

                <div className="bg-white shadow rounded-xl p-6 text-center ">
                    <div className="text-2xl text-[#244D3F] flex justify-center mb-2">
                        <FaExclamationCircle />
                    </div>
                    <h2 className="text-3xl font-bold text-[#244D3F]">6</h2>
                    <p className="text-gray-500 mt-1">Need Attention</p>
                </div>

                <div className="bg-white shadow rounded-xl p-6 text-center ">
                    <div className="text-2xl text-[#244D3F] flex justify-center mb-2">
                        <FaComments />
                    </div>
                    <h2 className="text-3xl font-bold text-[#244D3F]">12</h2>
                    <p className="text-gray-500 mt-1">Interactions This Month</p>
                </div>
            </div>
            <div>
                <p className='font-bold text-[20px]'>Your Friends</p>
                <div className='grid md:grid-cols-4 gap-4 mb-5 mt-10'>
                    {
                        card.map(cards => <AllCard key={cards.id} cards={cards}></AllCard>)
                    }
                </div>
            </div>
        </div>


    );
};

export default CardSummary;