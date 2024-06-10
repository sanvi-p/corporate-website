import React from "react";
import { TbArrowNarrowRight } from "react-icons/tb";
import Image from "next/image";
import { GanttChartSquare,Blocks,CircleDollarSign,Gem,Cloud,TabletSmartphone, ShieldCheck, Code,Server, Lightbulb,Globe, Bug} from 'lucide-react';
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
      icon: <TabletSmartphone size={30} strokeWidth={0.8} />,
      title: "Mobile Application ",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA7ZsWkjINFhhWUAiZW89b2Szahx2E-F1mQeboieAX9utSdvjuobq3RXNq6lbVAoVYMKc&usqp=CAU",
      description: "Mobile Views.",
    },
    {
      id: "03",
      category: "Digital Marketing" ,
      title: "Digital Marketing",
      icon: <CircleDollarSign size={30} strokeWidth={0.8} />,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Hy5Fazc31pHxjxB3e8RN1z5VhecgIJTE-7qRqJNAai7ayW3t974rfd8oGnP5JEfxVp4&usqp=CAU",
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
            <p className="tracking-wider ">{item.category}</p>
            {/* <span>{item.id}</span> */}
          </div>
        </div>
      ))}
    </div>
  );
}
