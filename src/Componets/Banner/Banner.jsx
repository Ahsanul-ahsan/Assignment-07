import React from 'react';
import { LuPlus } from 'react-icons/lu';

const Banner = () => {
    return (
        <div className='text-center space-y-4 mt-10'>
            <div>
                <h1 className='text-[35px] font-bold'>Friends to keep close in your life</h1>
            </div>
            <div>
                <p className='text-[#64748B] text-[14px] '>Your personal shelf of meaningful connections. Browse tend and nurture the <br />
                relationships that matter most.</p>
            </div>
            <div>
                <button className="btn bg-[#244D3F] text-white"><LuPlus /> Add a Friend</button>
            </div>

        </div>
    );
};

export default Banner;