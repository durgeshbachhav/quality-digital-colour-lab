"use client";

import { cn } from "../../lib/utils.js";
import React, { useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "./card";

export const InfiniteMovingCards = ({
     items,
     direction = "left",
     speed = "fast",
     pauseOnHover = true,
     className,
}) => {
     const containerRef = React.useRef(null);
     const scrollerRef = React.useRef(null);

     useEffect(() => {
          addAnimation();
     }, []);
     const [start, setStart] = useState(false);
     function addAnimation() {
          if (containerRef.current && scrollerRef.current) {
               const scrollerContent = Array.from(scrollerRef.current.children);

               scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    if (scrollerRef.current) {
                         scrollerRef.current.appendChild(duplicatedItem);
                    }
               });

               getDirection();
               getSpeed();
               setStart(true);
          }
     }
     const getDirection = () => {
          if (containerRef.current) {
               if (direction === "left") {
                    containerRef.current.style.setProperty(
                         "--animation-direction",
                         "forwards"
                    );
               } else {
                    containerRef.current.style.setProperty(
                         "--animation-direction",
                         "reverse"
                    );
               }
          }
     };
     const getSpeed = () => {
          if (containerRef.current) {
               if (speed === "fast") {
                    containerRef.current.style.setProperty("--animation-duration", "20s");
               } else if (speed === "normal") {
                    containerRef.current.style.setProperty("--animation-duration", "40s");
               } else {
                    containerRef.current.style.setProperty("--animation-duration", "80s");
               }
          }
     };
     return (
          <div
               ref={containerRef}
               className={cn(
                    "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
                    className
               )}
          >
               <ul
                    ref={scrollerRef}
                    className={cn(
                         " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                         start && "animate-scroll ",
                         pauseOnHover && "hover:[animation-play-state:paused]"
                    )}
               >
                    {items?.map((item, idx) => (
                         <div className="flex flex-col text-white" key={idx}>
                              <div>
                                   <img src={item.img} className="w-64 rounded-t-lg" alt="" />
                              </div>
                              <h2 className="text-xl font-medium truncate max-w-64 text-white mt-4">{item.name}</h2>
                         </div>
                    ))}
               </ul>
          </div>
     );
};
