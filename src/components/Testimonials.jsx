import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      {/* <div className="text-center">
        <span className="bg-neutral-900 text-green-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase animate-bounce">
          Highlights
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          What People {" "}
          <span className="bg-gradient-to-r from-green-500 to-pink-800 text-transparent bg-clip-text animate-pulse">
            Are Saying
          </span>
        </h2>
      </div> */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People {"  "}
        <span className="bg-gradient-to-r from-green-500 to-pink-800 text-transparent bg-clip-text animate-pulse">
          Are Saying
        </span>

      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 animate-zoom-in hover:animate-zoom-out"
          >
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;






// // Example usage in React component

// import { testimonials } from "../constants";

// const Testimonials = () => {
//   return (
//     <div className="mt-20 tracking-wide">
//       <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
//         What People are saying
//       </h2>
//       <div className="flex flex-wrap justify-center">
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 animate-fade-in">
//             <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
//               <p>{testimonial.text}</p>
//               <div className="flex mt-8 items-start">
//                 <img
//                   className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
//                   src={testimonial.image}
//                   alt=""
//                 />
//                 <div>
//                   <h6>{testimonial.user}</h6>
//                   <span className="text-sm font-normal italic text-neutral-600">
//                     {testimonial.company}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;





// import { testimonials } from "../constants";

// const Testimonials = () => {
//   return (
//     <div className="mt-20 tracking-wide">
//       <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
//         What People are saying
//       </h2>
//       <div className="flex flex-wrap justify-center">
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
//             <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
//               <p>{testimonial.text}</p>
//               <div className="flex mt-8 items-start">
//                 <img
//                   className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
//                   src={testimonial.image}
//                   alt=""
//                 />
//                 <div>
//                   <h6>{testimonial.user}</h6>
//                   <span className="text-sm font-normal italic text-neutral-600">
//                     {testimonial.company}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
