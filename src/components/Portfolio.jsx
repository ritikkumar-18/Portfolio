import React from 'react';
import Code from "../assets/Code.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';
import Travel from "../assets/Travel.png"
import Notebook from "../assets/Notebook.png"
import Recruit from "../assets/Recruit.png"
import Weather from "../assets/Weather.png"

const projects = [
    {
      img: Travel,
      title: "The Tarzan Way",
      description: "Tarzan Way is a unique, adventure-themed website designed to immerse users in the spirit of exploration, nature, and wild experiences. It could be a platform for eco-tourism, adventure activities, or even a storytelling blog about wilderness journeys. The website should blend bold visuals, smooth user interactions, and earthy tones to evoke the raw beauty of nature."

,
      links: {
        site: "https://ritik-tarzan.vercel.app/",
        github: "https://github.com/ritikkumar-18/Ritik-repo.git",
      },
    },
    {
      img: Notebook,
      title: "Admin Dashboard",
      description: "An admin dashboard is a centralized platform that provides administrators with real-time insights, management tools, and analytics for effective control over a system or application. Designed to prioritize usability and efficiency, the dashboard should offer clear visuals, seamless navigation, and robust functionality tailored to the specific needs of the system it supports.",
      links: {
        site: "https://new-repo-admin--blue.vercel.app/",
        github: "https://github.com/ritikkumar-18/New-Repo-Admin.git",
      },
    },
    {
      img: Recruit,
      title: "Recruiter Dashboard",
      description: "A recruiter dashboard is a powerful tool designed to simplify and streamline the recruitment process. It provides recruiters with a centralized platform to manage all aspects of hiring, from sourcing and screening candidates to tracking their progress and making informed decisions. With real-time insights, customizable features, and seamless integration with other systems, recruiter dashboards enhance productivity, improve collaboration, and ensure a more efficient and organized recruitment workflow.",
      links: {
        site: "https://new-repo-admin--blue.vercel.app/",
        github: "https://github.com/ritikkumar-18/New-Repo-Admin.git",
      },
    },
    {
      img: Weather,
      title: "Weather Forcasting App",
      description: "A weather forecasting app is a tool designed to provide real-time and predictive weather information to users. It utilizes various data sources, including meteorological data, satellite imagery, and machine learning algorithms, to offer accurate forecasts. These apps are widely used for personal, professional, and travel purposes, helping users make informed decisions based on weather conditions.",
      links: {
        site: "#",
        github: "https://github.com/ritikkumar-18",
      },
    },
    {
      img: Code,
      title: "Multiple 3D Portfolios",
      description: "A portfolio not only highlights an individual's professional journey but also reflects their personal growth, creativity, and problem-solving abilities. It acts as a visual representation of a person’s journey, showcasing their adaptability and innovation in tackling various challenges. Additionally, a well-structured portfolio can serve as a marketing tool, attracting potential clients or employers who value quality and expertise. Beyond just displaying past work, it offers a narrative that communicates how an individual's skills have evolved over time and how they can contribute to future projects or opportunities.",
      links: {
        site: "#",
        github: "#",
      },
    },
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio