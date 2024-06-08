"use client";
import { TbArrowUpRight } from "react-icons/tb";
import { Button } from "../ui/button";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { titleVariants, desVariants, tagVariants } from "../../utils/animate";

export default function CatalogueSwiperSection() {
  return (
    <div className="py-8 lg:py-28 ">
      <div className="container grid pb-8 lg:grid-cols-1">
        <div className="text-left">
          <motion.h1
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="py-4  text-4xl font-medium lg:text-6xl lg:py-0"
          >
            
          </motion.h1>
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="pb-6 text-xl font-bold tracking-wider mt-5 "
          >
            {/* friendly platform for seamless integration to all employees.... {" "} */}
          </motion.h2>
        </div>
        <div className="grid grid-cols-2 text-gray-500 gap-x-8 ">
          <p>
            At Scynaero, we're redefining the boundaries of software innovation. With a relentless commitment to cutting-edge technology, we pave the way for transformative solutions that empower businesses to thrive in the digital age. Our team of dedicated developers and engineers harness the latest advancements in artificial intelligence, machine learning, and data analytics to craft bespoke software solutions tailored to meet the unique needs of our clients. From streamlining operations to enhancing customer experiences, our innovative software offerings unlock new possibilities, driving efficiency, scalability, and sustainable growth for businesses across industries.


          </p>

          <p>
            In the dynamic landscape of modern technology, adaptability is paramount. At Scynaero, we understand the importance of staying ahead of the curve. That's why we're constantly pushing the boundaries of what's possible, embracing emerging technologies and best practices to deliver software solutions that not only meet the needs of today but also anticipate the challenges of tomorrow. With a focus on agility and innovation, we empower businesses to stay competitive in an ever-evolving marketplace, providing them with the tools and expertise they need to thrive in the digital era. Join us on the forefront of software innovation and unlock the potential of tomorrow, today.
          </p>
        </div>

        <Link href="/about">
          <Button className="inline-flex items-center px-8  py-3 mt-4 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 ">
            View more<TbArrowUpRight className="w-5  h-5 ml-2 " />
          </Button>
        </Link>
      </div>

      {/* Swiper Section */}
      {/* <Swiper
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaByHtPjkEXpIRvNCCe2lb9moowqRrnjERCA&s"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://st2.depositphotos.com/1000423/7940/i/450/depositphotos_79401982-stock-photo-business-growth.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="https://watermark.lovepik.com/photo/40242/7943.jpg_wh1200.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="https://media.foundit.in/career-advice/wp-content/uploads/2023/05/What-is-Professional-Development.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
}
