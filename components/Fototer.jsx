'use client';
import { Input } from "../components/ui/input";
import Link from "next/link";
import { motion } from "framer-motion";
import { titleVariants, desVariants, tagVariants } from '../utils/animate';
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Fototer() {
  return (
    <div className='bg-tertiary lg:p-20'>
      <div className='container lg:grid  lg:grid-cols-2 py-14'>
        <div className="grid gap-4  pb-4 text-left lg:pb-0  lg:grid-cols-3">
          <motion.div
            initial='offscreen'
            whileInView={"onscreen"}
            variants={desVariants}
          >
            <h2 className='pb-4 text-xl font-semibold uppercase'>
              Quick Links
            </h2>
            <div className="flex  flex-col">
              <Link href='/about' className="PY-1 hover:underline">About Us</Link>
              {/* <Link href='/' className="PY-1 hover:underline">Press</Link> */}
              {/* <Link href='/' className="PY-1 hover:underline">Careers</Link> */}
              <Link href='/contact' className="PY-1 hover:underline">Contact</Link>
            </div>
          </motion.div>

          <motion.div
            initial='offscreen'
            whileInView={"onscreen"}
            variants={tagVariants}
          >

            <h2 className='pb-4 text-xl font-semibold uppercase'>
              Services
            </h2>
            <div className="flex  flex-col">
              <Link href='/' className="PY-1 hover:underline">Documentation</Link>
              {/* <Link href='/' className="PY-1 hover:underline">Status</Link> */}
              {/* <Link href='/' className="PY-1 hover:underline">Changelog</Link> */}
              <Link href='/services' className="PY-1 hover:underline">Technologies</Link>
            </div>
          </motion.div>

          <motion.div
            initial='offscreen'
            whileInView={"onscreen"}
            variants={desVariants}
          >
            <h2 className='pb-4 text-xl font-semibold uppercase'>
              Get in Touch
            </h2>
            <div className="flex flex-col">
              {/* <div className="flex items-center PY-1 hover:underline">
                <FaInstagram /> <Link href='/' className="pl-1">Instagram</Link>
              </div> */}
              <div className="flex items-center PY-1 hover:underline">
                <FaLinkedin /> <Link href='https://www.linkedin.com/company/scynaero' className="pl-1" target="_blank">LinkedIn</Link>
              </div>
            </div>

          </motion.div>



        </div>

        <motion.div
          initial='offscreen'
          whileInView={"onscreen"}
          variants={desVariants}
        >
          <p className="pb-4  text-xl font-semibold">Stay Updated</p>
          <div className="relative lg:max-w-sm">
            <Input type="name" id="first name" placeholder="Email" />
            <button className="absolute  bg-black text-white rounded-full h-10 px-3 text-sm top-2  right-2  hover:border-2 hover:border-black hover:bg-white hover:text-black  dark:bg-primary">
            <a href="https://www.linkedin.com/company/scynaero" target="_blank">  Subscribe</a>
            </button>
          </div>

          <p className="pt-4 text-gray-500">

            Stay updated with the latest news and special offers by staying connected with us!
          </p>
        </motion.div>
      </div>

      {/* copyright */}
      <motion.div className="py-10 bg-black dark:bg-primary">
        <div className="container text-white text-center lg:justify-between lg:flex  ">
          <div className="pb-4 lg:pb-0">
            <p>Copyright © 2024 - Scynaero, All Rights Reserved.  </p>
          </div>
          <div>
            <Link className="p-4 hover:underline" href='/'> Privacy</Link>
            <Link className="p-4 hover:underline" href='/'> Terms</Link>
          </div>
        </div>
      </motion.div>

    </div>
  )
}
