import React from 'react'


const Contact = () => {
    return (
        <div id='contacto' className='max-w-[1040px] md:m-auto md:pl-20 '>
            <h1 className='text-4xl md:text-6xl lg:mt-20 font-bold text-center text-[#FFF] border-b-2 mt-2 p-6 md:p-8'>
                Contacto
            </h1>
            <form className='mb-10 w-[65%] m-auto' action="https://getform.io/f/dd0d9a8b-8290-4b9e-97ff-030cbc5bdd35" method='POST' encType='multipart/form-data'>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <label className='text-sm py-2 text-white border-b-2 capitalize font-semibold'>Nombre</label>
                        <input className='p-2 backdrop-blur-sm shadow-md shadow-slate-800 bg-white/5 rounded-b-md text-white' type="text" name='nombre' />
                    </div>

                    <div className='flex flex-col'>
                        <label className=' text-sm py-2 text-white capitlize font-semibold border-b-2'>Número de Teléfono</label>
                        <input className='p-2 backdrop-blur-sm shadow-md shadow-slate-800 bg-white/5 rounded-b-md text-white' type="text" name='telefono' />
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label className=' text-sm py-2 text-white capitlize font-semibold border-b-2'>Correo Electrónico</label>
                    <input className='p-2 backdrop-blur-sm shadow-md shadow-slate-800 bg-white/5 rounded-b-md text-white' type="email" name='correo' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='text-sm py-2  text-white capitlize font-semibold border-b-2'>Asunto</label>
                    <input className='p-2 backdrop-blur-sm shadow-md shadow-slate-800 bg-white/5 rounded-b-md text-white' type="text" name='asunto' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className=' text-sm py-2 text-white capitlize font-semibold border-b-2'>Mensaje</label>
                    <textarea className='p-2 backdrop-blur-sm shadow-md shadow-slate-800 bg-white/5 rounded-b-md text-white' rows='5' name='mensaje' />
                </div>
                <div className='flex justify-center'>
                <button className='backdrop-blur-3xl shadow-md shadow-slate-800 bg-white/5 text-[#fff] rounded-[25px] mt-4 w-full md:w-[35%] p-2'>
                    Enviar
                </button>
                </div>
            </form>
        </div>
    )
}

export default Contact