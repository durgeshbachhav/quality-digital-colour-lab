import React from 'react';
import { Card, Carousel } from "./ui/apple-cards-carousel";



// Wedding Photo Images
import w1 from '../assets/services/weddingphoto/w1.jpg';
import w2 from '../assets/services/weddingphoto/w2.jpg';
import w3 from '../assets/services/weddingphoto/w3.jpg';
import w4 from '../assets/services/weddingphoto/w4.jpg';
import w5 from '../assets/services/weddingphoto/w5.jpg';

// Event Photo Image
import e1 from '../assets/services/event-services/e1.jpg';

// product photography
import pp1 from '../assets/services/product-photography/pp1.jpg'
import pp2 from '../assets/services/product-photography/pp2.jpg'
import pp3 from '../assets/services/product-photography/pp3.jpg'
import pp4 from '../assets/services/product-photography/pp4.jpg'
import pp5 from '../assets/services/product-photography/pp5.jpg'
import pp6 from '../assets/services/product-photography/1.jpg'
import pp7 from '../assets/services/product-photography/2.jpg'

//pre wedding 
import a1 from '../assets/services/pre-wedding/1.jpg'
import a2 from '../assets/services/pre-wedding/2.jpg'
import a3 from '../assets/services/pre-wedding/3.jpg'
import a4 from '../assets/services/pre-wedding/4.jpg'
import a5 from '../assets/services/pre-wedding/5.jpg'

// sport action
import s1 from '../assets/services/sportaction.jpg'

// photo print
import photo_print from '../assets/services/adv.jpeg'

// pre-maturnity
import photo_premat from '../assets/services/pre-maternity/2.jpg'
import album1 from '../assets/services/1.jpg'
import album2 from '../assets/services/2.jpg'


// photo printing
import print1 from '../assets/services/printing/1.webp'
import print2 from '../assets/services/printing/2.webp'
import print3 from '../assets/services/printing/3.webp'

// model shoot
import m1 from '../assets/services/model-shoot/1.webp'
import m2 from '../assets/services/model-shoot/2.webp'
import m3 from '../assets/services/model-shoot/3.webp'
import m4 from '../assets/services/model-shoot/4.webp'
import m5 from '../assets/services/model-shoot/5.webp'

const Services = () => (
     <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-400 via-black to-black">
          <div className="w-full mx-auto">
               <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                    Our Services
               </h2>
               <Carousel items={data.map((card, index) => (
                    <Card key={card.title} card={card} index={index} />
               ))} />
          </div>
     </section>
);

const ServiceContent = ({ title, description, images }) => {
     return (
          <div
               key={"dummy-content" + title}
               className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 w-full h-full z-[5000]"
          >
               <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                    <span className="font-bold text-neutral-700 dark:text-neutral-200">
                         {title}
                    </span>{" "}
                    {description}
               </p>

               {images && (
                    <div className="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                         {images?.map((img, index) => (
                              <img key={index} src={img} className="rounded-lg " alt="" />
                         ))}
                    </div>
               )}
          </div>
     );
};
const data = [
     {
          category: "Photography & Videography",
          title: "Comprehensive Photo & Video Coverage",
          src: w1,
          content: (
               <ServiceContent
                    title="Complete Photography and Videography Services"
                    description="We offer a full range of photography and videography services to capture your special moments. Our expert team specializes in cinematic storytelling, wedding coverage, pre-wedding shoots, pre-maternity sessions, and event documentation. We use state-of-the-art equipment to ensure high-quality results that you'll cherish for years to come."
                    images={[a3, w2, a5, photo_premat,]}
               />
          ),
     }, {
          category: "Album & Frame Services",
          title: "Album Design, Printing, and Framing",
          src: a1,
          content: (
               <ServiceContent
                    title="Custom Albums and Framing Solutions"
                    description="Preserve your memories with our custom photo albums and framing services. We offer album designing and printing, creating beautiful keepsakes of your special moments. Our picture framing service includes a variety of options for enlargement, lamination, and framing to display your photos in style."
                    images={[photo_print, album1, album2]}
               />
          ),
     },

     {
          category: "Photo Printing & Enhancement",
          title: "Printing, Retouching, and Enlargement",
          src: print1,
          content: (
               <ServiceContent
                    title="Professional Photo Printing and Enhancement"
                    description="We offer high-quality photo printing services in various sizes and finishes. Our photo retouching services can restore old photos or enhance new ones. We also specialize in photo enlargement, ensuring your images look stunning at any size. Our state-of-the-art equipment guarantees vibrant colors and sharp details in every print."
                    images={[photo_print, print3]}
               />
          ),
     },
     {
          category: "Specialized Photography",
          title: "Product, Sport, and Food Photography",
          src: pp6,
          content: (
               <ServiceContent
                    title="Specialized Photography Services"
                    description="Our specialized photography services cater to various needs. We excel in product photography, showcasing your items in the best light for e-commerce and marketing. Our sport action photography captures the intensity and excitement of athletic events. For food photography, we create mouthwatering images that make your culinary creations shine."
                    images={[pp2, s1, pp1, pp7]}
               />
          ),
     },
     {
          category: "Model & Fashion Photography",
          title: "Professional Model Shoots",
          src: m1,
          content: (
               <ServiceContent
                    title="Model and Fashion Photography"
                    description="Elevate your portfolio with our professional model shoot services. Whether you're an aspiring model, a fashion designer showcasing your latest collection, or a brand looking for lifestyle images, our experienced photographers know how to capture your best angles and bring your vision to life. We offer studio and on-location shoots, complete with professional lighting and art direction."
                    images={[m2, m3, m4, m5]}
               />
          ),
     },

     // {
     //      category: "Event Photography",
     //      title: "Corporate and Social Event Coverage",
     //      src: e1,
     //      content: (
     //           <ServiceContent
     //                title="Professional Event Photography"
     //                description="Our event photography services cover a wide range of occasions, from corporate functions to social gatherings. We capture the essence of your event, whether it's a business conference, birthday party, anniversary celebration, or any other special occasion. Our photographers are skilled at documenting both candid moments and posed shots."
     //                images={[e1, 'placeholder_event1.jpg', 'placeholder_event2.jpg', 'placeholder_event3.jpg']}
     //           />
     //      ),
     // }
];


export default Services;