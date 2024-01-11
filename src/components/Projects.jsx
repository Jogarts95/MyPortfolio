import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import ProjectItem from './ProjectItem';
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

  useEffect(() => {
    ScrollReveal().reveal('.projects-title', {
      distance: '20px',
      origin: 'top',
      duration: 1000,
      delay: 100,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });

    projects.forEach((project) => {
      const origin = project.id % 2 === 0 ? 'right' : 'left'; // Alterna entre izquierda y derecha según el id
      ScrollReveal().reveal(`.project-item-${project.id}`, {
        distance: `${20 + project.id * 10}px`, // Ajusta la distancia según el id
        origin: origin,
        duration: 500 + project.id * 150, // Ajusta la duración según el id
        delay: 100 + project.id * 50, // Ajusta el retraso según el id
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
      });
    });
  }, [projects]);

  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20'>
      <h1 className='text-4xl md:text-6xl lg:mt-20 font-bold text-center text-[#FFF] border-b-2 mt-2 p-6 md:p-12 projects-title'>Proyectos</h1>
      <div className='grid sm:grid-cols-2 gap-7 pt-16 projects-cards'>
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            img={project.image}
            title={project.title}
            description={project.description}
            git={project.git}
            demo={project.demo}
            revealClass={`project-item-${project.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
