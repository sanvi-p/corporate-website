import React from "react";
import { TbArrowNarrowRight } from "react-icons/tb";
import Image from "next/image";
import { GanttChartSquare,Blocks,Gem,Cloud, ShieldCheck, Code,Server, Lightbulb,Globe, Bug} from 'lucide-react';
import Link from "next/link";

export default function CatalogueSection() {
  const items = [
    {
      id: "01",
      category: "IT Consulting" ,
      title: "IT Consulting",
      icon: <Code size={30} strokeWidth={0.8} />,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDfjzIm7sc4y_p5s7kgjrTwGLxDQkekXLWJQ&s",
      description: "Code Innovators.",
    },
    {
      id: "02",
      category: "Mobile Applications",
      icon: <Bug size={30} strokeWidth={0.8} />,
      title: "Mobile Application Development (Android and IOS)",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6C2M28Yf0H6uE7f-FcYfpWmkVM5C8i0UQxw&s",
      description: "Quality Guardians.",
    },
    {
      id: "03",
      category: "Digital Marketing" ,
      title: "Digital Marketing",
      icon: <Cloud size={30} strokeWidth={0.8} />,
      image:
        "https://media.licdn.com/dms/image/D5612AQFoXaTkwaWA3Q/article-cover_image-shrink_720_1280/0/1691502711048?e=2147483647&v=beta&t=_BA-Hv4_J_5C-JbZY_EdUAvzED41Wf6W5QARDXBYesg",
      description: "marketing strategies.",
    },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-1 p-5 lg:gap-0 divide-gray-300 lg:divide-x ">
      {items?.map((item) => (
        <div key={item.id} className="relative overflow-hidden group">
          <div>
            <Image
              src={item.image}
              width={380}
              height={100}
              alt=""
              className="w-full"
            />
          </div>



          <div className="absolute  top-0 p-8 bg-white text-black  bg-opacity-60 backdrop-blur m-12 ">
            <div className=" flex justify-between pb-4 ">
              
              <p className="text-sm">{item.category}</p>
              <span className="text-sm">{item.id}</span>
            </div>
            <a href="" className="block text-xl font-semibold">
              {item.title}
            </a>
            <p className="py-4">{item.description}</p>
            <Link href="/services" className="inline-flex items-center font-medium hover:bg-slate-800 hover:text-white hover:rounded-lg hover:p-3">
              {" "}
              See Details <TbArrowNarrowRight className="ml-2" />
            </Link>
          </div>
          <div className="inset-0 bg-tertiary flex-col items-center justify-end md:flex  md:absolute gap-32 pb-10 text-xl transition duration-300 ease-in-out border-b-2 group-hover:translate-y-full md:border-b-0 ">
          <p className="text-sm mt-24">{item.icon}</p>
            <p className="tracking-wider -rotate-90">{item.category}</p>
            <span>{item.id}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
