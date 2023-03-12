import React from "react";

const AboutMe = () => {
	return (
		<div id="aboutMe" >
			<img src='/matrix-2354492.jpg' 
				alt="bg" 
				className="w-full h-screen object-cover object-left opacity-20"/>

			<div className="absolute  mt-10 lg:left-1/4 top-3/4 lg:mt-2 lg:-ml-72 lg:p-64 ">
				<h1 className="text-4xl mt-52 lg:mt-20 font-bold text-center text-[#fff]">
					Acerca de mí
				</h1>

				<div className=" text-white text-center m-5 mt-14 sm:pt-16 md:text-[20px] ">
					Hola! Mucho gusto, soy desarrollador de aplicaciones web con React.JS.
					Soy una persona con mas 7 años de experiencia en servicio al cliente,
					cuento con las herramientas necesarias para ayudarte a crear lo que tu
					necesites con los mas altos estándares de usabilidad y durabilidad
					para una aplicación o pagina web. Siéntete libre de expresarme tus
					ideas para lograr algo asombroso!
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
