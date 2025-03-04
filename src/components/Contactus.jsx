import React from "react";
import contact from '../assets/services/contact.jpg'

const ContactUs = () => {
     return (
          <div className="px-4">
               <div className="mx-auto max-w-7xl py-12 md:py-24">
                    <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
                         {/* contact from */}
                         <div className="flex items-center justify-center">
                              <div className="px-2 md:px-12">
                                   <p className="text-2xl font-bold text-white md:text-4xl">Get in touch</p>
                                   <p className="mt-4 text-lg text-gray-300">
                                        Our friendly team would love to hear from you.
                                   </p>
                                   <form action="" className="mt-8 space-y-4">
                                        <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                                             <div className="grid w-full  items-center gap-1.5">
                                                  <label
                                                       className="text-sm font-medium leading-none text-gray-200 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                       htmlFor="first_name"
                                                  >
                                                       First Name
                                                  </label>
                                                  <input
                                                       className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-200 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                       type="text"
                                                       id="first_name"
                                                       placeholder="First Name"
                                                  />
                                             </div>
                                             <div className="grid w-full  items-center gap-1.5">
                                                  <label
                                                       className="text-sm font-medium leading-none text-gray-200 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                       htmlFor="last_name"
                                                  >
                                                       Last Name
                                                  </label>
                                                  <input
                                                       className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-200 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                       type="text"
                                                       id="last_name"
                                                       placeholder="Last Name"
                                                  />
                                             </div>
                                        </div>
                                        <div className="grid w-full  items-center gap-1.5">
                                             <label
                                                  className="text-sm font-medium leading-none text-gray-200 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                  htmlFor="email"
                                             >
                                                  Email
                                             </label>
                                             <input
                                                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-200 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                  type="text"
                                                  id="email"
                                                  placeholder="Email"
                                             />
                                        </div>
                                        <div className="grid w-full  items-center gap-1.5">
                                             <label
                                                  className="text-sm font-medium leading-none text-gray-200 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                  htmlFor="phone_number"
                                             >
                                                  Phone number
                                             </label>
                                             <input
                                                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-200 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                  type="tel"
                                                  id="phone_number"
                                                  placeholder="Phone number"
                                             />
                                        </div>
                                        <div className="grid w-full  items-center gap-1.5">
                                             <label
                                                  className="text-sm font-medium leading-none text-gray-200 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                  htmlFor="message"
                                             >
                                                  Message
                                             </label>
                                             <textarea
                                                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-200 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                  id="message"
                                                  placeholder="Leave us a message"
                                                  cols={3}
                                             />
                                        </div>
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
                                             <p className="translate-x-2">Send </p>
                                        </button>
                                   </form>
                              </div>
                         </div>
                         <img
                              alt="Contact us"
                              className="hidden max-h-full w-full rounded-lg object-cover lg:block"
                              src={contact}
                         />
                    </div>
               </div>
          </div>
     )
};

export default ContactUs;
