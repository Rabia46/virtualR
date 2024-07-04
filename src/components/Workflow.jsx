import { CheckCircle2 } from "lucide-react";
import code1Img from "../assets/code1.jpg";
import { checklistItems } from "../constants"; // Assuming checklistItems contains unique content

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-2 mb-8 tracking-wide">
        Optimize your{" "}
        <span className="bg-gradient-to-r from-green-500 to-pink-800 text-transparent bg-clip-text">
          development process.
        </span>
      </h2>

      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2 mt-4 lg:mt-0 lg:pt-4">
          <img src={code1Img} alt="Workflow" className="rounded-lg shadow-lg" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-start mb-12 lg:ml-8">
              <div className="text-green-400 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div className="ml-4">
                <h5 className="mt-1 mb-2 text-xl font-semibold">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;












// import { CheckCircle2 } from "lucide-react";
// // import workflowImg from "../assets/workflow.jpg"; // Changed image file name
// import code1Img from "../assets/code1.jpg";
// import { checklistItems } from "../constants"; // Assuming checklistItems contains unique content
























// const Workflow = () => {
//   return (
//     <div className="mt-20">
//       <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
//         Optimize your{" "}
//         <span className="bg-gradient-to-r from-blue-500 to-purple-800 text-transparent bg-clip-text">
//           development process.
//         </span>
//       </h2>

//       <div className="flex flex-wrap justify-center">
//         <div className="p-2 w-full lg:w-1/2">
//           <img src={code1Img} alt="Workflow" className="rounded-lg shadow-lg" />
//         </div>
//         <div className="pt-12 w-full lg:w-1/2">
//           {checklistItems.map((item, index) => (
//             <div key={index} className="flex mb-12">
//               <div className="text-purple-400 mx-6 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full">
//                 <CheckCircle2 />
//               </div>
//               <div>
//                 <h5 className="mt-1 mb-2 text-xl font-semibold">{item.title}</h5>
//                 <p className="text-md text-neutral-500">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Workflow;



// import { CheckCircle2 } from "lucide-react";
// import codeImg from "../assets/code.jpg";
// import { checklistItems } from "../constants";


// const Workflow = () => {
//   return (
//     <div className="mt-20">
//       <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
//         Accelerate your{" "}
//         <span className="bg-gradient-to-r from-green-500 to-pink-800 text-transparent bg-clip-text">
//           coding workflow.
//         </span>
//       </h2>

//       <div className="flex flex-wrap justify-center">
//         <div className="p-2 w-full lg:w-1/2">
//           <img src={codeImg} alt="Coding" />
//         </div>
//         <div className="pt-12 w-full lg:w-1/2">
//           {checklistItems.map((item, index) => (
//             <div key={index} className="flex mb-12">
//               <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
//                 <CheckCircle2 />
//               </div>
//               <div>
//                 <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
//                 <p className="text-md text-neutral-500">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Workflow;
