import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import swimming from "../../../assets/swimming.png"
import classRoom from "../../../assets/class.png"
import playGround from "../../../assets/playground.png"

const RightSideBar = () => {
    return (
        <div className='px-3'>
            <div>
            <h2 className="text-2xl font-semibold mb-4">Login With</h2>
            <div>
                    <button className="btn bg-transparent  hover:bg-black px-4 py-2  rounded-lg hover:text-cyan-400 border hover:border-cyan-500 my-3 w-full shadow-xl">
                         <FaGoogle  className='hover:text-cyan-400'></FaGoogle>
                          Google
                    </button>
            </div>
            <div>
                <button className="btn bg-transparent
                    hover:bg-black px-4 py-2  rounded-lg hover:text-cyan-400 border hover:border-cyan-500 my-3 w-full shadow-xl">
                <FaGithub  className='hover:text-cyan-400'></FaGithub>
                Github
                 </button>
            </div>
            </div>
            <div>
            <h2 className="text-2xl font-semibold my-4">Find Us On</h2>
           <div className='my-2'>

            <a className='flex items-center gap-3 text-2xl px-4 py-2 border rounded-t-lg' href=""><FaFacebook></FaFacebook> Facebook</a>
            <a className='flex items-center gap-3 text-2xl px-4 py-2 border-x' href=""><FaTwitter></FaTwitter> Twitter</a>
            <a className='flex items-center gap-3 text-2xl px-4 py-2 border rounded-b-lg' href=""><FaInstagram></FaInstagram> Instagram</a>

           </div>
            <div>
              
            </div>
            </div>
            <div>
            <h2 className="text-2xl font-semibold my-4">Q Zone</h2>
            <div className='my-3'>
                 <img className='my-3 hover:scale-105' src={swimming} alt="" />  
                 <img className='my-3 hover:scale-105' src={classRoom} alt="" />  
                 <img className='my-3 hover:scale-105' src={playGround} alt="" />  
            </div>
           
            </div>
        </div>
    );
};

export default RightSideBar;