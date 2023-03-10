import React from 'react'
import ProjectItem from './ProjectItem'
import EcommerceImg from '../assets/portfolio-images/ecommerce-app.png'
import CitasImg from '../assets/portfolio-images/image2.png'
import RickAndMortyImg from '../assets/portfolio-images/image3.png'
import PokedexImg from '../assets/portfolio-images/pokedex-app.png'


const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text text-4xl font-bold text-center text-[#fff]'>
                Proyectos
            </h1>
            <p className='text-center py-8 text-[#fff]'>
                Trabajos web que he desarrollado a lo largo de mis estudios y practicas.
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>

                <ProjectItem img={EcommerceImg} title={'Ecommerce App'} description={'Creacion de un sitio web ecommerce con React, Vite, Redux, Axios y CSS'} git={"https://github.com/Jogarts95/final__proyect-ecommerce"} netlify={'https://gorgeous-genie-30d435.netlify.app/'}/>

                <ProjectItem img={CitasImg} title={'Citas App'} description={'Aplicación de citas medicas veterinarias creada con React.JS, Vite y estilizada con Tailwind.CSS'} git={'https://github.com/Jogarts95/citas-react-vite'} netlify={'https://udemy-citas-react-app.netlify.app/'}/>

                <ProjectItem img={RickAndMortyImg} title={"Rick and Morty App"} description={'Aplicación creada con React.JS consumiendo la API de Rick and Morty y estilizada con la metodología BEM de CSS'} git={'https://github.com/Jogarts95/entregable3'} netlify={'https://lucent-mandazi-3c0328.netlify.app/'}/>

                <ProjectItem img={PokedexImg} title={'Pokedex'} description={'Aplicación de Pokemon consuminedo la PokeAPI con Axios, creada con Ract, Vite y Redux'} git={'https://github.com/Jogarts95/entregable_5'} netlify={'https://papaya-praline-c7621e.netlify.app/'}/>
            </div>
            
        </div>
    )
}

export default Projects