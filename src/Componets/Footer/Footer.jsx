import React from 'react';
import inImage from "../../assets/instagram.png"
import FbImage from "../../assets/facebook.png"
import twImage from "../../assets/twitter.png"
import pg from "../../assets/company_logo.png"

const Footer = () => {
    return (
        <div className='mt-1'>
            <footer className="bg-[#2d4c3b] text-white py-12 px-6 font-sans">
                <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                    <h1 className="text-5xl font-bold mb-4">KeenKeeper</h1>
                    <p className="text-sm text-gray-300 max-w-2xl mb-8">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                    <div className="mb-12">
                        <h2 className="text-lg font-semibold mb-4">Social Links</h2>
                        <div className="flex gap-4 justify-center">
                            {[inImage, FbImage, twImage].map((imgSrc, idx) => (
                                <a key={idx} href="#" className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center">

                                    <img src={imgSrc} alt="social icon" className="w-8 h-8 text-white" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="w-full pt-8 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
                        <p>© 2026 KeenKeeper. All rights reserved.</p>
                        <h2 className='font-bold text-[20px] text-white'> Thanks Programing hero</h2>
                        <img className='w-12 h-12 -ml-45' src={pg} alt="" />

                        <ul className="flex gap-6">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Cookies</li>
                           
                        </ul>
                    </div>
                </div>
            </footer>

        </div>



    );
};

export default Footer;