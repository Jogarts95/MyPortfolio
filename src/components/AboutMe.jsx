import React from "react";

const AboutMe = () => {
	return (
		<div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 flex justify-center " id="aboutMe" >

			<div className="w-[100%] mt-10">
				<h1 className="text-6xl lg:mt-20 font-bold text-center text-[#FFF] border-b-2 mt-2 p-6 md:p-12">
					Acerca de mí
				</h1>

				<div className="lg:flex lg:flex-row md:flex md:flex-col">
					<div className="text-center text-[#fff] p-2 justify-items-center align-middle mt-14 lg:mt-40 md:mt-14">
						Hola! Soy un apasionado desarrollador con experiencia en Frontend y Unity 3D. Mi objetivo es crear experiencias digitales excepcionales, combinando mi habilidad para diseñar interfaces atractivas y funcionales con la capacidad de desarrollar sólidas arquitecturas de software. Siempre estoy buscando desafíos emocionantes y oportunidades para crecer en el mundo de la tecnología. ¡Conéctate conmigo y exploremos juntos el mundo del desarrollo!
					</div>

					<img src="/public/ilustration.png" alt="" className=" w-[100%] lg:w-[65%]"/>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
