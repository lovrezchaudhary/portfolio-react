/* eslint-disable no-unused-vars */
import React from 'react'
import {IoArrowForward} from 'react-icons/io5'
import myPhoto from '../Home/About.png'

const About = () => {
  return (
    <div className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <h2 className="text-2xl md:text-4xl font-bold">About</h2>
      <div className="md:flex flex-wrap flex-col md:flex-row items-center">
       <img className="md:h-80" src={myPhoto} alt="About Image" />
       <ul>
        <div className="flex gap-3 py-4"></div>
        <IoArrowForward size={30} className="mt-1" />
        <span className="w-96">
            <h1 className="text-xl md:text-2xl font-semibold leading-normal">Frontend Developer</h1>
            <p className="text-sm md:text-md leading-tight">Lorem ipsum dolor sit adicta impedit sint officia nihil iure fuga,unt.
                 iure cumque eveniet, dolorum adipisci sit debitis consectetur voluptas!</p>
        </span>
        <div className="flex gap-3 py-4"></div>
        <IoArrowForward size={30} className="mt-1" />
        <span className="w-96">
            <h1 className="text-xl md:text-2xl font-semibold leading-normal">Backend Developer</h1>
            <p className="text-sm md:text-md leading-tight">Lorem ipsum dolor sit adicta impedit sint officia nihil iure fuga,unt.
                 iure cumque eveniet, dolorum adipisci sit debitis consectetur voluptas!</p>
        </span>
        <div className="flex gap-3 py-4"></div>
        <IoArrowForward size={30} className="mt-1" />
        <span className="w-96">
            <h1 className="text-xl md:text-2xl font-semibold leading-normal">FullStack Developer</h1>
            <p className="text-sm md:text-md leading-tight">Lorem ipsum dolor sit adicta impedit sint officia nihil iure fuga,unt.
                 iure cumque eveniet, dolorum adipisci sit debitis consectetur voluptas!</p>
        </span>
       </ul>
      </div>
    </div>
  )
}

export default About
