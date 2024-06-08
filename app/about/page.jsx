"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useRef as UseRef } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import { motion, useScroll as UseScroll, useTransform as UseTransform } from "framer-motion";
import { titleVariants, desVariants, tagVariants } from "../../utils/animate";

const page = () => {
  const ref = UseRef(null);
  const { scrollYProgress } = UseScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scale = UseTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <div>
      <div className="bg-[url('https://www.designsociety.org/multimedia/183da8af15aa750dd678cfa481eac34c1556811489.jpg')] bg-center bg-cover text-white ">
        <h1 className="container py-32 text-6xl font-semibold tracking-widest text-center lg:py-64 ">
          Who are we?
        </h1>
      </div>

      <div className="container ">
        <div className="pt-4 ">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="text-3xl font-semibold text-center lg:p-10 lg:text-5xl "
          >
            {/* We have great skill development technologies{" "} */}
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="text-2xl text-center font-medium pb-10 mt-5 "
          >
            Scynaero Innovations is a leading provider of comprehensive IT solutions tailored to meet the unique needs of businesses across diverse industries. With a strong commitment to innovation and customer satisfaction, we specialize in delivering cutting-edge technology services that empower organizations to thrive in the digital age.
          </motion.p>
        </div>
      </div>

      <div className="items-center lg:flex gap-x-8 lg:p-10 p-10  ">
        {/* Leftimage */}
        <motion.div
          initial="offscreen"
          style={{ scale }}
          ref={ref}
          className="w-full"
        >
          <Image
            src="https://t4.ftcdn.net/jpg/01/31/96/99/360_F_131969925_4npM7jqii8Dlo76mRROdD0r285Oojc8d.jpg"
            width={700}
            height={700}
          />
        </motion.div>
        {/* Right image */}
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
        >
          <p className="pb-8 tracking-wide mt-6">
            We expertise in areas such as cloud computing, webapps development and hosting, software development, IT infrastructure management, and strategic IT consulting. We are high on understanding our client's challenges and craft customized solutions that drive efficiency, productivity, and growth. <br /> <br />
          </p>

          <p>
          At Scynaero, we prioritize quality and reliability in everything we do. Whether you're a small startup looking to establish a robust IT framework or a large enterprise seeking to optimize your IT operations, we have the capabilities and experience to support your journey.
            <br /> <br />
          </p>
          {/* <Button
            className="inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hob
        ring-2 hover:ring-gray-950 ring-offset-2"
          >
            Read More <TbArrowUpRight className="w-5 h-5 ml-2 " />
          </Button> */}
        </motion.div>
      </div>

      {/* Team section */}
      {/* <div className="lg:py-20 p-10">
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="pt-8 pb-4 "
        >
          <h1 className="text-4xl font-bold tracking-wider text-center uppercase">
            Team
          </h1>
        </motion.div>
        <div className="grid py-8 gap-20 lg:grid-cols-3 lg:p-20 ">
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="border-2 border-primary "
          >
            <div className="p-4  text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5  transition hover:-translate-y-3 hover:-translate-x-3 ">
              <Image
                src="https://st3.depositphotos.com/1017228/37624/i/450/depositphotos_376242772-stock-photo-image-multiethnic-young-female-male.jpg"
                width={200}
                height={200}
                alt=""
                className="mx-auto rounded-[100%] "
              />
              <h2 className="py-4 text-2xl  font-semibold uppercase">Data Analysis</h2>
              <p className="text-sm ">
              We offer techniques like exploratory data analysis, statistical analysis, and machine learning. Services typically offer customized solutions, visualization, consultation, and ongoing support.{" "}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="border-2 border-primary "
          >
            <div className="p-4  text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5  transition hover:-translate-y-3 hover:-translate-x-3 ">
              <Image
                src="https://st2.depositphotos.com/1570716/8494/i/450/depositphotos_84945966-stock-photo-business-woman-in-front-of.jpg"
                width={200}
                height={200}
                alt=""
                className="mx-auto rounded-[100%] "
              />
              <h2 className="py-4 text-2xl  font-semibold uppercase">Dev</h2>
              <p className="text-sm ">
              Designing and developing tailored software solutions to streamline processes and enhance performance.{" "}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="border-2 border-primary "
          >
            <div className="p-4  text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5  transition hover:-translate-y-3 hover:-translate-x-3 ">
              <Image
                src="https://st.depositphotos.com/1017986/3666/i/450/depositphotos_36661831-stock-photo-students-with-computer-monitor-at.jpg"
                width={200}
                height={200}
                alt=""
                className="mx-auto rounded-[100%] "
              />
              <h2 className="py-4 text-2xl  font-semibold uppercase">Cloud Solutions</h2>
              <p className="text-sm ">
              Helping businesses leverage the power of cloud platforms for scalability, agility, and cost-efficiency.{" "}
              </p>
            </div>
          </motion.div>
        </div>
      </div> */}
    </div>
  );
};

export default page;
