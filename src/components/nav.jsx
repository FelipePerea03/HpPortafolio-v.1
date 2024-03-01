// src/components/nav.jsx
import { CgNametag } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';

 const nav = () => {

const [toggle, setToggle] = useState(false);
function openMenu(){
    setToggle(true);
}
function closeMenu(){
    setToggle(false);
}
    return(
        <>
        <div className="flex items-center justify-between p-10 lg:flex-row text-black-300">
            <div>
                <a href="#" className="text-white font-mono text-3xl tracking-wider flex items-center"> <CgNametag/> Felipe Herrera Perea</a>
            </div>
            <div className="space-x-4">
                <div className='ssm:hidden lg:block space-x-2'>
                <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Skills</a>
                <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Projects</a>
                <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Contact</a>
                </div>
                <div className='ssm:block lg:hidden'>
                    {toggle ? (
                        <AiOutlineClose onClick={closeMenu} size={30} className='text-white cursor-pointer'/>
                    ):(<HiMenuAlt1 onClick={openMenu} size={30} className='text-white'/>)}
                    
                </div>
            </div>
        </div>
        <div className='ssm:block lg:hidden'>
            {toggle ? (
                <div className='flex justify-beetween ml-10'>
                <ul>
                    <li className='text-white text-xl mb-2 cursor-pointer'>Skills</li>
                    <li className='text-white text-xl mb-2 cursor-pointer'>Projects</li>
                    <li className='text-white text-xl mb-2 cursor-pointer'>Contact</li>
                </ul>
            </div>
            ):(
                <div></div>
            )}
                
            
            
        </div>
        </>
    )
}

export default nav;