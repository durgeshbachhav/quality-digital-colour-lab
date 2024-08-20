"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import hero1 from '../assets/hero/hero1.jpg'
import hero4 from '../assets/hero/hero4.jpg'
import hero5 from '../assets/hero/hero5.jpg'
import hero6 from '../assets/hero/hero6.jpg'
import hero8 from '../assets/hero/hero8.jpeg'
import hero10 from '../assets/hero/hero10.jpg'
import hero11 from "../assets/hero/hero11.jpg"
import hero12 from '../assets/hero/hero12.jpg'


const Hero = () => {
     const images = [
          hero1, hero4, hero5, hero6, hero8, hero10, hero11, hero12
     ];

     return (
          <ImagesSlider className="h-[40rem]" images={images}>
               <motion.div
                    initial={{
                         opacity: 0,
                         y: -80,
                    }}
                    animate={{
                         opacity: 1,
                         y: 0,
                    }}
                    transition={{
                         duration: 0.6,
                    }}
                    className="z-50 flex flex-col justify-center items-center"
               >
                    <motion.p className="font-bold text-4xl md:text-6xl text-center bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent py-4">
                         Quality Digital Colour Lab
                    </motion.p>
                    <button id="#contact" className="px-4 py-2 backdrop-blur-sm border bg-yellow-300/10 border-yellow-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                        <a href="#contact"> <span >Contact now →</span></a>
                         <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                    </button>
               </motion.div>
          </ImagesSlider>
     )
};

export default Hero;
