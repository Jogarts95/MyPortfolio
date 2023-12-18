import React, { useState } from 'react'
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { FaThLarge } from 'react-icons/fa';


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
          className='fixed  bg-[#000]/5 backdrop-blur-sm p-1 text-[#fff] rounded-full shadow-md shadow-slate-800 cursor-pointer hover:scale-110 ease-in duration-300 top-4 right-4'
          size={30}
        />
      </div>
      {
        nav ? (
          <div className='fixed w-full h-screen flex flex-col justify-center items-center z-20 backdrop-blur-2xl'>

            <a
              onClick={handleNav}
              href="#main"
              className='w-[75%] flex justify-center items-center rounded-full shadow-md shadow-slate-800 bg-[#000]/5 backdrop-blur-sm m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineHome
                className='text-[#fff]'
                size={20} />
              <span
                className='pl-4 text-[#fff]'>
                Inicio
              </span>
            </a>

            <a
              onClick={handleNav}
              href="#aboutMe"
              className='w-[75%] flex justify-center items-center rounded-full shadow-md shadow-slate-800 bg-[#000]/5 backdrop-blur-sm m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
              <FaThLarge
                className='text-[#fff]'
                size={18} />
              <span
                className='pl-4 text-[#fff]'>
                Acerca de mí
              </span>
            </a>

            <a
              onClick={handleNav}
              href="#projects"
              className='w-[75%] flex justify-center items-center rounded-full shadow-md shadow-slate-800 bg-[#000]/5 backdrop-blur-sm m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineProject
                className='text-[#fff]'
                size={20} />
              <span
                className='pl-4 text-[#fff]'>
                Proyectos
              </span>
            </a>

            <a
              onClick={handleNav}
              href="#main"
              className='w-[75%] flex justify-center items-center rounded-full shadow-md shadow-slate-800 bg-[#000]/5 backdrop-blur-sm m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
              <BsPerson
                className='text-[#fff]'
                size={20} />
              <span
                className='pl-4 text-[#fff]'>
                Resume
              </span>
            </a>

            <a
              onClick={handleNav}
              href="#contacto"
              className='w-[75%] flex justify-center items-center rounded-full shadow-md shadow-slate-800 bg-[#000]/5 backdrop-blur-sm m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineMail
                className='text-[#fff]'
                size={20} />
              <span
                className='pl-4 text-[#fff]'>
                Contacto
              </span>
            </a>
          </div>
        ) : (
          ''
        )}

      <div className='md:block hidden fixed top-[25%] z-10 rounded-r-[15px] backdrop-blur-3xl shadow-lg shadow-slate-800'>
        <div className='flex flex-col'>
          <a href="#main" className=''>
            <AiOutlineHome className='text-[#fff] hover:text-[#000] hover:bg-[#affc4f] rounded-tr-[12px] m-1 p-2 cursor-pointer hover:scale-110 ease-in duration-300' size={40} />
          </a>

          <a href="#aboutMe" className=''>
            <FaThLarge className='text-[#fff] hover:text-[#000] hover:bg-[#affc4f] m-1 p-2 cursor-pointer hover:scale-110 ease-in duration-300' size={40} />
          </a>

          <a href="#projects" className=''>
            <AiOutlineProject className='text-[#fff] hover:text-[#000] hover:bg-[#affc4f] m-1 p-2 cursor-pointer hover:scale-110 ease-in duration-300' size={40} />
          </a>

          <a href="#main" className=''>
            <BsPerson className='text-[#fff] hover:text-[#000] hover:bg-[#affc4f] m-1 p-2 cursor-pointer hover:scale-110 ease-in duration-300' size={40} />
          </a>

          <a href="#contacto" className=''>
            <AiOutlineMail className='text-[#fff] hover:text-[#000] hover:bg-[#affc4f] rounded-br-[12px] m-1 p-2 cursor-pointer hover:scale-110 ease-in duration-300' size={40} />
          </a>
        </div>
      </div>



    </div>
  )
}

export default Sidenav;