import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectItem = ({ img, title, description, git, demo }) => {
    return (
        <div className='relative'>
            {/* Card */}
            <div className={'relative w-full h-[250px] flex flex-col justify-between'}>
                {/* Image */}
                <div
                    className='relative w-full h-[240px] rounded-2xl before:absolute before:bottom-0 before:left-1/2 before:w-[25px] before:h-[25px] before:bg-transparent before:rounded-full before:shadow-before after:absolute after:bottom-[70px] after:left-0 after:w-[25px] after:h-[25px] after:bg-transparent after:rounded-full after:shadow-after bg-cover'
                    style={{ backgroundImage: `url(${img})` }}
                ></div>
            </div>
            {/* Container */}
            <div className={'relative w-full h-[150px] bg-primary rounded-2xl rounded-tl-none'}>
                {/* Content */}
                <span className='absolute left-0 w-1/2 h-[80px] -top-[80px] bg-primary border-t-[10px] border-r-[10px] border-[#f2e7e7]
                rounded-tr-[25px] before:absolute before:w-[25px] before:h-[25px] before:bg-transparent before:rounded-full before:shadow-before_2 after:absolute after:bottom-0 after:-right-[25px] after:w-[25px] after:h-[25px] after:bg-transparent after:rounded-full after:shadow-after_2'>
                    <p className="text-white">{title}</p>
                </span>
                <ul>
                    <li>{description}</li>
                </ul>
                {/* Icons */}
                <div className="flex space-x-4 mt-2">
                    {git && (
                        <a href={git} target="_blank" rel="noopener noreferrer">
                            <FaGithub size={20} color="#fff" />
                        </a>
                    )}
                    {demo && (
                        <a href={demo} target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt size={20} color="#fff" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
