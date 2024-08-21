/* eslint-disable no-unused-vars */
import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div id="Project" className="p-10 md:p-24 text-white">
        <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
        <div className="py-12 px-8 flex flex-wrap gap-5 ">
            <ProjectCard title="Currency Converter" main="Fully Functional Currency Converter created in ReactJs and used APIs." />
            <ProjectCard title="Amazon Website Clone" main="Fully Functional Currency Converter created in ReactJs and used APIs." />
            <ProjectCard title="Job Listing Portal" main="Fully Functional Currency Converter created in ReactJs and used APIs." />
        </div>
      
    </div>
  )
}

export default Project
