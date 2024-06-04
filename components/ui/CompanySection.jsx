// 'use client';
// import React from 'react'
// import Badge from './Badge'
// import { motion } from 'framer-motion'
// import {titleVariants, desVariants, tagVariants} from '../../utils/animate'

// const CompanySection = () => {
//   return (
//      <div className='bg-primary dark:bg-tertiary py-24 sm:py-32 '>
//         <div className='mx-auto max-w-7xl px-6 lg:px-8 '> 
//             <dl className='grid grid-col-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
//                 {/* Badge */}
//                 <motion.div
//                  initial='offscreen'
//                  whileInView={"onscreen"}
//                  variants={titleVariants}
                
//                 className='mx-auto flex max-w-xs flex-col gap-y-4 '>
//                   <dt className='text-white loading-7 '>
//                   LinkedIn followers 
//                   </dt>
//                   <dd className='order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl '>
//                     <Badge
//                     endCountNum={4}
//                     endCountText='million'
//                     />
//                   </dd>
//                 </motion.div>

//                   {/* Badge2 */}
//                   <motion.div
//                    initial='offscreen'
//                    whileInView={"onscreen"}
//                    variants={tagVariants}
                  
//                   className='mx-auto flex max-w-xs flex-col gap-y-4 '>
//                   <dt className='text-white loading-7 '>
//                   Projects under Running
//                   </dt>
//                   <dd className='order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl '>
//                     <Badge
//                     endCountNum={119}
//                     endCountText='+'
//                     />
//                   </dd>
//                 </motion.div>


//                   {/* Badge3 */}
//                   <motion.div
//                    initial='offscreen'
//                    whileInView={"onscreen"}
//                    variants={tagVariants}
//                    className='mx-auto flex max-w-xs flex-col gap-y-4 '>
//                   <dt className='text-white loading-7 '>
//                   New Employees joining  Anually 
//                   </dt>
//                   <dd className='order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl '>
//                     <Badge
//                     endCountNum={450}
//                     endCountText='+'
//                     />
//                   </dd>
//                 </motion.div>
//             </dl>
//         </div>
//      </div>
//   )
// }

// export default CompanySection
