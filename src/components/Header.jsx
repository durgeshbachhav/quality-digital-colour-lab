import React from "react";

import { Menu, X } from 'lucide-react'
import logo from '../assets/logos/logo.png'
const menuItems = [
     {
          name: 'Home',
          href: '#',
     },
     {
          name: 'Services',
          href: '#services',
     },
     {
          name: 'About',
          href: '#about',
     },
     // {
     //      name: 'Portfolio',
     //      href: '#services',
     // },


]

const Header = () => {
     const [isMenuOpen, setIsMenuOpen] = React.useState(false)

     const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen)
     }
     return (
          <header className="relative w-full border-b bg-black ">
               <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
                    <div className="inline-flex items-center space-x-2">
                         <img src={logo} className="w-40" alt="" />
                    </div>
                    <div className="hidden lg:block">
                         <ul className="inline-flex space-x-8">
                              {menuItems.map((item) => (
                                   <li key={item.name}>
                                        <a
                                             href={item.href}
                                             className="text-sm font-semibold text-gray-200 hover:text-yellow-300"
                                        >
                                             {item.name}
                                        </a>
                                   </li>
                              ))}
                         </ul>
                    </div>
                    <div className="hidden lg:block">
                         {/* <button
                              type="button"
                              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                         >
                              Contact Us
                         </button> */}

                         <a href="#contact">
                              <button
                                   type="button"

                                   className="bg-white text-center w-48 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group"
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
                                   <p className="translate-x-2">Contact us</p>
                              </button>
                         </a>

                    </div>
                    <div className="lg:hidden">
                         <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer text-white" />
                    </div>
                    {isMenuOpen && (
                         <div className="absolute h-full w-full bg-red-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                   <div className="px-5 pb-6 pt-5">
                                        <div className="flex items-center justify-between">
                                             <div className="inline-flex items-center space-x-2">
                                                  <img src={logo} className="w-40" alt="" />
                                             </div>
                                             <div className="-mr-2">
                                                  <button
                                                       type="button"
                                                       onClick={toggleMenu}
                                                       className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                                  >
                                                       <span className="sr-only">Close menu</span>
                                                       <X className="h-6 w-6" aria-hidden="true" />
                                                  </button>
                                             </div>
                                        </div>
                                        <div className="mt-6">
                                             <nav className="grid gap-y-4">
                                                  {menuItems.map((item) => (
                                                       <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                                                       >
                                                            <span className="ml-3 text-base font-medium text-gray-900">
                                                                 {item.name}
                                                            </span>
                                                       </a>
                                                  ))}
                                             </nav>
                                        </div>
                                        <a href="#contact">
                                             <button
                                                  type="button"

                                                  className="bg-white text-center w-48 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group mt-5"
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
                                                  <p className="translate-x-2">Contact us</p>
                                             </button>
                                        </a>

                                   </div>
                              </div>
                         </div>
                    )}
               </div>
          </header>
     )
};

export default Header;

