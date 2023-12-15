import React from "react";

const AboutMe = () => {
	return (
		<div className="bg-[#2e2d2d] max-w-[1040px] m-auto md:pl-20 p-4 py-16 flex justify-center" id="aboutMe" >

			<div className="bg-[#048C8C] rounded-[30px] w-[100%] h-[25%] mt-6">
				<h1 className="text-4xl lg:mt-20 font-bold text-center text-[#fff]">
					Acerca de mí
				</h1>

				<div className="text-center py-8 text-[#fff] bg-[#fd874c] p-6 m-6 rounded-b-[30px] ">
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
