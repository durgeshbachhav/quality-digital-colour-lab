import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import p1 from '../assets/services/offerscard/photoframe.jpg'
import photobook from '../assets/services/offerscard/photobook.jpg'
import wedding from '../assets/services/weddingphoto/w2.jpg'
import ledwall from '../assets/services/offerscard/ledwall.jpg'
import livesetup from '../assets/services/offerscard/livesetup.jpg'
import editorsetup from '../assets/services/offerscard/editersetup.jpg'
import printer from '../assets/services/offerscard/printer.jpg'
import velvet from '../assets/services/offerscard/velvet.jpg'
import canvas from '../assets/services/offerscard/canvas.jpg'
import rituals from '../assets/services/offerscard/rituals.jpg'
import videoshooting from '../assets/services/offerscard/videoshooting.jpg'
import Industrial from '../assets/services/offerscard/industry.jpg'

const Offers = () => {
  return (
    <div className=" rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden py-28">
      <h2 className="max-w-7xl mb-4 mx-auto text-xl md:text-5xl font-bold  text-neutral-200 font-sans text-start">
        What We Offers
      </h2>
      <InfiniteMovingCards
        items={servicesData}
        direction="right"
        speed="slow"
      />
    </div>
  )
};

export default Offers;

const servicesData = [
  {
    img: p1,
    name: "Picture Frames and Photo Lamination",
  },
  {
    img: photobook,
    name: "Photo Book Gallery",
  },
  {
    img: wedding,
    name: "Wedding Photo and Video Coverage",
  },
  {
    img: printer,
    name: "Printing Solutions",
  },
  {
    img: canvas,
    name: "Canvas Print",
  },
  // {
  //   img: videoshooting,
  //   name: "Video Shooting",
  // },
];