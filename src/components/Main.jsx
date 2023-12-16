import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Main = () => {
	return (
		<div id="main">
			
			<div className="w-full h-screen top-0 left-0">
				<div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
					<h1 className="text-[#fff] sm:text-6xl text-5xl font-bold">Hola!</h1>
					<h2 className="text-[#fff] sm:text-5xl text-4xl font-semibold">
						Soy Josue Gallardo
					</h2>
					<h2 className="text-[#fd874c] flex sm:text-3xl text-2xl pt-4">
						Soy
						<TypeAnimation
							sequence={[
								"Frontend Developer",
								2000,
								"Backend Developer",
								2000,
								"Unity 3D Developer",
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
							<FaTwitter className="cursor-pointer text-[#affc4f]" size={20} />
						</a>
						<a href="https://www.instagram.com/jogart_s/" target={"_blank"}>
							<FaInstagram className="cursor-pointer text-[#affc4f]" size={20} />
						</a>
						<a href="https://github.com/Jogarts95" target={"_blank"}>
							<FaGithub className="cursor-pointer text-[#affc4f]" size={20} />
						</a>
						<a href="https://www.linkedin.com/in/jogarts/" target={"_blank"}>
							<FaLinkedinIn className="cursor-pointer text-[#affc4f]" size={20} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
