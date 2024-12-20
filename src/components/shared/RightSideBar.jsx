import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
const RightSideBar = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold">Login With</h2>
            <div>
            <div>
            <button className="btn bg-transparent px-4 py-2  rounded-lg text-cyan-400 border border-cyan-500 my-3 w-full">
                <FaGoogle  className='text-cyan-400'></FaGoogle>
                Google
            </button>
            </div>
            <div>
            <button className="btn bg-transparent px-4 py-2  rounded-lg text-cyan-400 border border-cyan-500 my-3 w-full">
                <FaGithub  className='text-cyan-400'></FaGithub>
                Github
            </button>
            </div>
            </div>
        </div>
    );
};

export default RightSideBar;