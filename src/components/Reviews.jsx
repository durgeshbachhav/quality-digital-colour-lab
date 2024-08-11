import { cn } from "../lib/utils.js";
import Marquee from "./ui/marquee.jsx";


const reviews = [
     {
          name: "Kunal More",
          username: "@kunalmore",
          body: "As implied by their name, their work truly reflects QUALITY. Mr. Manoj Ambekar and his team helped me in recovering my 26-year-old VCR drive, which held my first birthday video. I'm immensely grateful to the Quality Digital Studio team for restoring my cherished memories.",
          img: "https://avatar.vercel.sh/kunalmore",
     },
     {
          name: "Jagdish Sonawane",
          username: "@jagdishsonawane",
          body: "Doing my photo printing jobs in this lab from last 15 years. All time I got good service as well as the quality of prints. Photobook Album Designs and printing is excellent. Me and my clients also happy with the quality.",
          img: "https://avatar.vercel.sh/jagdishsonawane",
     },
     {
          name: "Shubham Kishor Deshmukh",
          username: "@shubhamdeshmukh",
          body: "Working with quality Digital from last 7 years gets Time to time Delivery of my albums as well as kind support of photography knowledge photo printing quality is excellent",
          img: "https://avatar.vercel.sh/shubhamdeshmukh",
     },
     {
          name: "CT PHOTOGRAPHY",
          username: "@ctphotography",
          body: "Best ever album printing and designing service I got here. Many kind of album carry cases, lot of veriety found here.",
          img: "https://avatar.vercel.sh/ctphotography",
     },
     {
          name: "Gayatri Maind",
          username: "@gayatrimaind",
          body: "Creative photography, Nice photo finishing, excellent album design very good service too best photography shop",
          img: "https://avatar.vercel.sh/gayatrimaind",
     },
     {
          name: "Sadananda Wanjale",
          username: "@sadanandawanjale",
          body: "40 year old wedding album restored digitally by Mr. Ambadkar. Excellent work.",
          img: "https://avatar.vercel.sh/sadanandawanjale",
     },
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
     img,
     name,
     username,
     body,
}) => {
     return (
          <figure
               className={cn(
                    "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                    // light styles
                    "border-yellow-950/[.40] bg-yellow-950/[.20] hover:bg-yellow-950/[.60]",
                    // dark styles
                    "dark:border-yellow-950/[.14] dark:bg-yellow-950/[.10] dark:hover:bg-yellow-950/[.15]",
               )}
          >
               <div className="flex flex-row items-center gap-2">
                    {/* <img className="rounded-full" width="32" height="32" alt="" src={img} /> */}
                    <div className="flex flex-col">
                         <figcaption className="text-sm font-medium text-white">
                              {name}
                         </figcaption>
                         <p className="text-xs font-medium text-white/40">{username}</p>
                    </div>
               </div>
               <blockquote className="mt-2 text-sm text-white">{body}</blockquote>
          </figure>
     );
};

export function Reviews() {
     return (
          <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black">
                <h2 className="max-w-3xl py-4 px-8 md:px-0 text-center mx-auto text-xl md:text-5xl font-bold text-neutral-200 dark:text-neutral-200 font-sans mb-12">
                Read trusted reviews from our customers
               </h2>
               <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                         <ReviewCard key={review.username} {...review} />
                    ))}
               </Marquee>
               <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                         <ReviewCard key={review.username} {...review} />
                    ))}
               </Marquee>
               <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-background"></div>
               <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-background"></div>
          </div>
     );
}
