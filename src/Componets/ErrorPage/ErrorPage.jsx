import React from 'react';
import notimage from "../../assets/image.png"
import { Link } from 'react-router';

const ErrorPage = () => {


    return (
        <div>
            <div className="flex justify-center items-center">
                <img className="w-100" src={notimage} alt="" />
            </div>
            <div className='flex justify-center items-center'>
                <Link c to={"/"}>
                    <button className="btn bg-green-800 text-white font-bold">
                        Go To Home
                    </button>
                </Link>
            </div>
        </div>


    );
};

export default ErrorPage;

