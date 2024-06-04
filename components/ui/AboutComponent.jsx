// "use client";
// import Image from "next/image";
// import React from "react";
// import { motion } from "framer-motion";
// import { titleVariants, desVariants, tagVariants } from "../../utils/animate";

// const AboutComponent = () => {
//   return (
//     <div className="container py-12 xl:py-24 h-[auto]">
//       <div className="grid lg:grid-cols-2 place-items-center">
//         <motion.div
//           initial="offscreen"
//           whileInView={"onscreen"}
//           variants={desVariants}
//         >
//           <Image
//             src="https://i.pinimg.com/originals/50/78/a0/5078a05eb1b6847d93383eaa4c0ed500.gif"
//             width={900}
//             height={500}
//             alt="About image"
//             className="max-md:hidden"
//           />
//         </motion.div>
//         <div className="items-center">
//           <motion.h2 
//           initial='offscreen'
//           whileInView={"onscreen"}
//           variants={desVariants}
//           className="px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl ">
//             We are awards Winning Company
//           </motion.h2>
//           <motion.p
//             initial='offscreen'
//             whileInView={"onscreen"}
//             variants={tagVariants}
//            className="px-12 tracking-wide uppercase text-gray-400 mt-3 ">
//             Acheivements
//           </motion.p>
//           <motion.p
//             initial='offscreen'
//             whileInView={"onscreen"}
//             variants={tagVariants}
          
//           className="px-12 pb-4 mt-4 ">
//            Scynaero Innovations is a top provider of IT solutions designed to meet the unique needs of various businesses. As an award-winning company, we focus on innovation and customer satisfaction, offering services in cloud computing, web app development, software development, IT infrastructure management, and IT consulting. We understand our clients' challenges and create custom solutions to boost efficiency, productivity, and growth.
//           </motion.p>
//           <motion.p
//             initial='offscreen'
//             whileInView={"onscreen"}
//             variants={tagVariants}
//           className="px-12 pb-4 ">
//             At Scynaero, we prioritize quality and reliability in everything we do. Whether you're a small startup or a large enterprise, we have the expertise to support your IT needs. Our services include cloud solutions, cybersecurity, software development, IT infrastructure management, IT consulting, and web services. We are dedicated to building lasting partnerships with our clients through transparent communication, proactive support, and continuous innovation. Let’s use technology to drive your business forward.
//           </motion.p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutComponent;
