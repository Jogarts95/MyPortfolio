import React, { useState } from 'react'
import {
  AiOutlineMenu, 
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';
import {FaThLarge} from 'react-icons/fa';


const Sidenav = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div >
      <div className='absolute z-[99] md:hidden'>
      <AiOutlineMenu 
        onClick={handleNav}
        className='fixed bg-black p-1 text-[#1dde1a] rounded-full shadow-md outline-[#1dde1a] shadow-[#1dde1a]/70 cursor-pointer hover:scale-110 ease-in duration-300 top-4 right-4'
        size={30}
        />
      </div>
      {
        nav ? (
          <div className='fixed w-full h-screen bg-black/95 flex flex-col justify-center items-center z-20'>
            
            <a 
              onClick={handleNav} 
              href="#main" 
              className='w-[75%] flex justify-center items-center rounded-full shadow-md bg-[#000]/80 outline-[#1dde1a] shadow-[#1dde1a]/70 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineHome 
                className='text-[#1dde1a]' 
                size={20}/>
              <span 
                className='pl-4 text-[#1dde1a]'>
                  Inicio
              </span>
            </a>

            <a 
              onClick={handleNav} 
              href="#aboutMe" 
              className='w-[75%] flex justify-center items-center rounded-full shadow-md bg-[#000]/80 outline-[#1dde1a] shadow-[#1dde1a]/70 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
              <FaThLarge 
                className='text-[#1dde1a]' 
                size={18}/>
              <span 
                className='pl-4 text-[#1dde1a]'>
                  Acerca de mí
              </span>
            </a>

            <a 
              onClick={handleNav} 
              href="#projects" 
              className='w-[75%] flex justify-center items-center rounded-full shadow-md bg-[#000]/80 outline-[#1dde1a] shadow-[#1dde1a]/70 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineProject 
                className='text-[#1dde1a]' 
                size={20}/>
              <span 
                className='pl-4 text-[#1dde1a]'>
                  Proyectos
              </span>
            </a>

            <a 
              onClick={handleNav} 
              href="#main" 
              className='w-[75%] flex justify-center items-center rounded-full shadow-md bg-[#000]/80 outline-[#1dde1a] shadow-[#1dde1a]/70 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
              <BsPerson 
                className='text-[#1dde1a]' 
                size={20}/>
              <span 
                className='pl-4 text-[#1dde1a]'>
                  Resume
              </span>
            </a>

            <a 
              onClick={handleNav} 
              href="#contacto" 
              className='w-[75%] flex justify-center items-center rounded-full shadow-md bg-[#000]/80 outline-[#1dde1a] shadow-[#1dde1a]/70 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineMail 
                className='text-[#1dde1a]' 
                size={20}/>
              <span 
                className='pl-4 text-[#1dde1a]'>
                  Contacto
              </span>
            </a>
          </div>
        ) : (
          ''
        )}

          <div className='md:block hidden fixed top-[25%] z-10 bg-white rounded-r-[15px] shadow-md'>
            <div className='flex flex-col'>
              <a href="#main" className='m-1 p-2 cursor-pointer hover:scale-110 hover:bg-[#1dde1a] rounded-tr-[12px] ease-in duration-300'>
                <AiOutlineHome className='text-[#000]' size={20}/>
              </a>

              <a href="#aboutMe" className='m-1 p-2 cursor-pointer hover:scale-110 hover:bg-[#1dde1a] ease-in duration-300'>
                <FaThLarge className='text-[#000]' size={20}/>
              </a>

              <a href="#projects" className='m-1 p-2 cursor-pointer hover:scale-110 hover:bg-[#1dde1a] ease-in duration-300'>
                <AiOutlineProject className='text-[#000]' size={20}/>
              </a>

              <a href="#main" className='m-1 p-2 cursor-pointer hover:scale-110 hover:bg-[#1dde1a] ease-in duration-300'>
                <BsPerson className='text-[#000]' size={20}/>
              </a>

              <a href="#contacto" className='m-1 p-2 cursor-pointer hover:scale-110 hover:bg-[#1dde1a] rounded-br-[12px] ease-in duration-300'>
                <AiOutlineMail className='text-[#000]' size={20}/>
              </a>
            </div>
          </div>



    </div>
  )
}

export default Sidenav;