import React from 'react'


const Contact = () => {
    return (
        <div id='contacto' className='max-w-[1040px] m-auto md:pl-20 '>
            <h1 className='text-6xl lg:mt-20 font-bold text-center text-[#FFF] border-b-2 mt-2 p-6 md:p-8'>
                Contacto
            </h1>
            <form className='mb-10 w-[65%] m-auto' action="https://getform.io/f/dd0d9a8b-8290-4b9e-97ff-030cbc5bdd35" method='POST' encType='multipart/form-data'>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2 text-[#1dde1a]/90'>Nombre</label>
                        <input className='border-2 rounded-lg p-2 flex' type="text" name='nombre' />
                    </div>

                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2 text-[#1dde1a]/90'>Numero de Teléfono</label>
                        <input className='border-2 rounded-lg p-2 flex' type="text" name='telefono' />
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2 text-[#1dde1a]/90'>Correo Electrónico</label>
                    <input className='border-2 rounded-lg p-2 flex' type="email" name='correo' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2  text-[#1dde1a]/90'>Asunto</label>
                    <input className='border-2 rounded-lg p-2 flex' type="text" name='asunto' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2 text-[#1dde1a]/90'>Mensaje</label>
                    <textarea className='border-2 rounded-lg p-2 flex' rows='7' name='mensaje' />
                </div>
                <button className='bg-[#1dde1a] text-[#000] mt-4 w-full p-2 rounded-lg'>
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default Contact