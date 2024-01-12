import React from 'react';

function Skills() {
    return (
        <div className="max-w-[1040px] m-auto md:pl-20" id="skills">
            <div className="w-[100%]">
                <h1 className="text-4xl md:text-6xl lg:mt-20 font-bold text-center text-[#FFF] border-b-2 mt-2 p-6 md:p-12">
                    Herramientas
                </h1>

                <div className="md:flex md:flex-col">
                    <div className="md:text-center text-[#fff] p-2 justify-items-center align-middle">
                        <h1 className=' text-2xl font-semibold text-center p-3 m-3 justify-center'>Frontend</h1>
                        <div className='flex flex-row p-2 m-2 justify-center md:justify-center flex-wrap'>
                            <div className="md:w-[15%] md:h-[15%]">
                                <img src="/htmlIcon.png" alt="" className="w-[150px] p-2 m-2" />
                            </div>
                            <div className="md:w-[15%] md:h-[15%]">
                                <img src="/cssIcon.png" alt="" className="w-[150px] p-2 m-2" />
                            </div>
                            <div className="md:w-[15%] md:h-[15%]">
                                <img src="/jsIcon.png" alt="" className="w-[150px] p-2 m-2" />
                            </div>
                            <div className="md:w-[15%] md:h-[15%]">
                                <img src="/bootstrapIcon.png" alt="" className="w-[150px] p-2 m-2" />
                            </div>
                            <div className="md:w-[15%] md:h-[15%]">
                                <img src="/tailwindcssIcon.png" alt="" className="w-[150px] p-2 m-2" />
                            </div>
                            <div className="md:w-[15%] md:h-[15%]">
                                <img src="/reactIcon.png" alt="" className="w-[150px] p-2 m-2" />
                            </div>

                        </div>
                    </div>

                    <div className="md:text-center text-[#fff] p-2 justify-items-center align-middle">
                        <h1 className=' text-2xl font-semibold text-center p-3 m-3'>Backend</h1>
                        <div className='flex flex-row p-2 m-2 justify-center md:justify-center flex-wrap'>
                            <div className="md:w-[15%] h-[15%]">
                                <img src="/nodeIcon.png" alt="" className="w-[150px] p-2 m-2" />
                            </div>
                            <div className="md:w-[15%] md:h-[15%]">
                                <img src="/laravelIcon.png" alt="" className="w-[150px] p-2 m-2" />
                            </div>
                            <div className="md:w-[15%] md:h-[15%]">
                                <img src="/phpIcon.png" alt="" className="w-[150px] p-2 m-2" />
                            </div>
                            <div className="md:w-[15%] md:h-[15%]">
                                <img src="/mysqlIcon.png" alt="" className="w-[150px] p-2 m-2" />
                            </div>

                        </div>
                    </div>

                    <div className="md:text-center text-[#fff] p-2 justify-items-center align-middle">
                        <h1 className=' text-2xl font-semibold text-center p-3 m-3'>Videojuegos</h1>
                        <div className='flex flex-row p-2 m-2 justify-center md:justify-center flex-wrap'>
                            <div className="md:w-[15%] md:h-[15%]">
                                <img src="/csharpIcon.png" alt="" className="w-[150px] p-2 m-2" />
                            </div>
                            <div className="md:w-[15%] md:h-[15%]">
                                <img src="/unityIcon.png" alt="" className="w-[150px] p-2 m-2" />
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Skills;
