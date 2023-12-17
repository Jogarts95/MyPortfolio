import React from 'react';
import ProjectItem from './ProjectItem';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';  // Importa los iconos de GitHub y Demo
import EcommerceImg from '../assets/portfolio-images/ecommerce-app.png';
import CitasImg from '../assets/portfolio-images/image2.png';
import RickAndMortyImg from '../assets/portfolio-images/image3.png';
import PokedexImg from '../assets/portfolio-images/pokedex-app.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: EcommerceImg,
      title: 'Ecommerce App',
      description: 'Creación de un sitio web ecommerce con React, Vite, Redux, Axios y CSS',
      git: 'https://github.com/Jogarts95/final__proyect-ecommerce',
      demo: 'https://gorgeous-genie-30d435.netlify.app/',
    },
    {
      id: 2,
      image: CitasImg,
      title: 'Citas App',
      description: 'Aplicación de citas médicas veterinarias creada con React.JS, Vite y estilizada con Tailwind.CSS',
      git: 'https://github.com/Jogarts95/citas-react-vite',
      demo: 'https://udemy-citas-react-app.netlify.app/',
    },
    {
      id: 3,
      image: RickAndMortyImg,
      title: "Rick and Morty App",
      description: 'Aplicación creada con React.JS consumiendo la API de Rick and Morty y estilizada con la metodología BEM de CSS',
      git: 'https://github.com/Jogarts95/entregable3',
      demo: 'https://lucent-mandazi-3c0328.netlify.app/',
    },
    {
      id: 4,
      image: PokedexImg,
      title: 'Pokedex',
      description: 'Aplicación de Pokémon consumiendo la PokeAPI con Axios, creada con React, Vite y Redux',
      git: 'https://github.com/Jogarts95/entregable_5',
      demo: 'https://papaya-praline-c7621e.netlify.app/',
    },
  ];

  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20'>
      <h1 className='text-6xl lg:mt-20 font-bold text-center text-[#FFF] border-b-2 mt-2 p-6 md:p-12'>Proyectos</h1>
      <div className='grid sm:grid-cols-2 gap-7 pt-16'>
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            img={project.image}
            title={project.title}
            description={project.description}
            git={project.git}
            demo={project.demo}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
