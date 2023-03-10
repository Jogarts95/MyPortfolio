import React from 'react'


const ProjectItem = ({img, title, description, git, netlify}) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#1dde1a]/70 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#1dde1a]'>
            <img src={img} alt="img" className='rounded-xl group-hover:opacity-10'/>
            <div className='hidden group-hover:block absolute top-[15%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-[#000] lg:text-2xl font-bold tracking-wider text-center'>{title}</h3>
            </div>
            <h4 className='hidden w-60 group-hover:block text-center absolute text-[12px] lg:text-[20px] lg:w-4/5 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>{description}</h4>
            <h4 className='hidden group-hover:block text-center absolute top-[85%] left-[40%] translate-x-[-50%] translate-y-[-50%] hover:bg-white hover:text-black p-1 rounded-lg'><a href={git} target={'_blank'}>{'GIT'}</a></h4>
            <h4 className='hidden group-hover:block text-center absolute top-[85%] left-[60%] translate-x-[-50%] translate-y-[-50%] hover:bg-white hover:text-black p-1 rounded-lg'><a href={netlify} target={'_blank'}>{'DEMO'}</a></h4>
        </div>
    )
}

export default ProjectItem