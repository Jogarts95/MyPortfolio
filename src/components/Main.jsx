import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Main = () => {
	return (
		<div id="main">
			<img
				className="w-full h-screen object-cover object-left opacity-70"
				src="./src/assets/bg-image/joan-gamell-ZS67i1HLllo-unsplash.jpg"
				alt="bg"
			/>
			<div className="w-full h-screen absolute top-0 left-0 bg-black/80">
				<div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
					<h1 className="text-[#fff] sm:text-6xl text-5xl font-bold">Hola!</h1>
					<h2 className="text-[#fff] sm:text-5xl text-4xl font-semibold">
						Soy Josue Gallardo
					</h2>
					<h2 className="text-[#fd874c] flex sm:text-3xl text-2xl pt-4">
						Soy
						<TypeAnimation
							sequence={[
								"Diseñador Web",
								2000,
								"Desarrollador Web",
								2000,
								"Full-Stack",
								2000,
							]}
							wrapper="div"
							cursor={true}
							repeat={Infinity}
							style={{ fontSize: "1em", paddingLeft: "5px" }}
						/>
					</h2>
					<div className="flex justify-between pt-6 max-w-[200px] w-full">
						<a href="https://twitter.com/JogArt_S" target={"_blank"}>
							<FaTwitter className="cursor-pointer text-[#1dde1a]" size={20} />
						</a>
						<a href="https://www.instagram.com/jogart_s/" target={"_blank"}>
							<FaInstagram className="cursor-pointer text-[#1dde1a]" size={20} />
						</a>
						<a href="https://github.com/Jogarts95" target={"_blank"}>
							<FaGithub className="cursor-pointer text-[#1dde1a]" size={20} />
						</a>
						<a href="https://www.linkedin.com/in/jogarts/" target={"_blank"}>
							<FaLinkedinIn className="cursor-pointer text-[#1dde1a]" size={20} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
