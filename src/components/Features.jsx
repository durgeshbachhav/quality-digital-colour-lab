import React from "react";
import image1 from '../assets/about/1.webp'
import three from '../assets/services/3.webp'

const Features = () => {
  return (
    <section className="bg-gradient-to-b from-black via-black to-black">

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 mt-10 ">
        <h2 className="max-w-7xl mb-8 mx-auto text-xl text-center md:text-5xl font-bold  text-neutral-200 font-sans ">
          Who We Are
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid place-content-center  bg-yellow-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 p-6 sm:p-8">
            <div className="mx-auto max-w-md text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-gray-200 sm:text-3xl">Quality Digital Color Lab</h2>

                <p className="mt-4 text-gray-300">
                  Experience vibrant, high-quality digital prints with our state-of-the-art color lab services. From photo enlargements to fine art reproductions, we bring your images to life.
                </p>
              </header>

              <a href="#services">
              <button
                type="button"
                className="bg-white text-center w-60 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group mt-8"
              >
                <div
                  className="bg-yellow-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
                >
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#000000"
                      d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                    ></path>
                    <path
                      fill="#000000"
                      transform="rotate(180 512 512)"
                      d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                    ></path>
                  </svg>
                </div>
                <p className="translate-x-2">Our Services</p>
              </button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <a href="#" className="group block">
                  <img
                    src={image1}
                    alt="High quality photo print"
                    className="aspect-square w-full rounded object-cover"
                  />
                </a>
              </li>

              <li>
                <a href="#" className="group block">
                  <img
                    src={three}
                    alt="Digital and print photography"
                    className="aspect-square w-full rounded object-cover"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Features;