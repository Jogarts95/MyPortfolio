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
        className='fixed bg-black p-1 text-[#affc4f] rounded-full shadow-md outline-[#affc4f] shadow-[#affc4f]/70 cursor-pointer hover:scale-110 ease-in duration-300 top-4 right-4'
        size={30}
        />
      </div>
      {
        nav ? (
          <div className='fixed w-full h-screen bg-black/95 flex flex-col justify-center items-center z-20'>
            
            <a 
              onClick={handleNav} 
              href="#main" 
              className='w-[75%] flex justify-center items-center rounded-full shadow-md bg-[#000]/80 outline-[#affc4f] shadow-[#affc4f]/70 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineHome 
                className='text-[#affc4f]' 
                size={20}/>
              <span 
                className='pl-4 text-[#affc4f]'>
                  Inicio
              </span>
            </a>

            <a 
              onClick={handleNav} 
              href="#aboutMe" 
              className='w-[75%] flex justify-center items-center rounded-full shadow-md bg-[#000]/80 outline-[#affc4f] shadow-[#affc4f]/70 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
              <FaThLarge 
                className='text-[#affc4f]' 
                size={18}/>
              <span 
                className='pl-4 text-[#affc4f]'>
                  Acerca de mí
              </span>
            </a>

            <a 
              onClick={handleNav} 
              href="#projects" 
              className='w-[75%] flex justify-center items-center rounded-full shadow-md bg-[#000]/80 outline-[#affc4f] shadow-[#1dde1a]/70 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineProject 
                className='text-[#affc4f]' 
                size={20}/>
              <span 
                className='pl-4 text-[#affc4f]'>
                  Proyectos
              </span>
            </a>

            <a 
              onClick={handleNav} 
              href="#main" 
              className='w-[75%] flex justify-center items-center rounded-full shadow-md bg-[#000]/80 outline-[#affc4f] shadow-[#1dde1a]/70 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
              <BsPerson 
                className='text-[#affc4f]' 
                size={20}/>
              <span 
                className='pl-4 text-[#affc4f]'>
                  Resume
              </span>
            </a>

            <a 
              onClick={handleNav} 
              href="#contacto" 
              className='w-[75%] flex justify-center items-center rounded-full shadow-md bg-[#000]/80 outline-[#affc4f] shadow-[#affc4f]/70 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineMail 
                className='text-[#affc4f]' 
                size={20}/>
              <span 
                className='pl-4 text-[#affc4f]'>
                  Contacto
              </span>
            </a>
          </div>
        ) : (
          ''
        )}

          <div className='md:block hidden fixed top-[25%] z-10 bg-[#1e1e1e] '>
            <div className='flex flex-col shadow-lg shadow-[#affc4f] rounded-r-[15px]'>
              <a href="#main" className=''>
                <AiOutlineHome className='text-[#fff] hover:text-[#000] hover:bg-[#affc4f] rounded-tr-[12px] m-1 p-2 cursor-pointer hover:scale-110 ease-in duration-300' size={40}/>
              </a>

              <a href="#aboutMe" className=''>
                <FaThLarge className='text-[#fff] hover:text-[#000] hover:bg-[#affc4f] m-1 p-2 cursor-pointer hover:scale-110 ease-in duration-300' size={40}/>
              </a>

              <a href="#projects" className=''>
                <AiOutlineProject className='text-[#fff] hover:text-[#000] hover:bg-[#affc4f] m-1 p-2 cursor-pointer hover:scale-110 ease-in duration-300' size={40}/>
              </a>

              <a href="#main" className=''>
                <BsPerson className='text-[#fff] hover:text-[#000] hover:bg-[#affc4f] m-1 p-2 cursor-pointer hover:scale-110 ease-in duration-300' size={40}/>
              </a>

              <a href="#contacto" className=''>
                <AiOutlineMail className='text-[#fff] hover:text-[#000] hover:bg-[#affc4f] rounded-br-[12px] m-1 p-2 cursor-pointer hover:scale-110 ease-in duration-300' size={40}/>
              </a>
            </div>
          </div>



    </div>
  )
}

export default Sidenav;