import Image from "next/image";

const projects = [
  {
    id: 1,
    name: 'agf',
    description:' Lorem ipsum dolor sit amet consectetur adipi ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRUsrPFsnL-fZkZIcqsaEuA3mCI3LUhp-kspVIyJhIakIR_VdNORnTtGXNqw&s'
  },
  {
    id: 2,
    name: 'bcd',
    description: 'necessitatibus at perspiciatis incidunt commodi',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRUsrPFsnL-fZkZIcqsaEuA3mCI3LUhp-kspVIyJhIakIR_VdNORnTtGXNqw&s'
  },
  {
    id: 3,
    name: 'xyz',
    description: 'necessitatibus at perspiciatis incidunt commodi, ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRUsrPFsnL-fZkZIcqsaEuA3mCI3LUhp-kspVIyJhIakIR_VdNORnTtGXNqw&s'
  },
  // {
  //   id: 4,
  //   name: 'mno',
  //   description: 'A brief description of project mno.',
  //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRUsrPFsnL-fZkZIcqsaEuA3mCI3LUhp-kspVIyJhIakIR_VdNORnTtGXNqw&s'
  // },
  // {
  //   id: 5,
  //   name: 'pqr',
  //   description: 'Project pqr has a unique set of features described here.',
  //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRUsrPFsnL-fZkZIcqsaEuA3mCI3LUhp-kspVIyJhIakIR_VdNORnTtGXNqw&s'
  // }
];


const page = () => {
  return (
    <div>
    <div className="bg-[url('https://cdn.pixabay.com/photo/2024/05/02/09/16/web-development-8734249_640.png')] bg-center bg-cover ">
      <h1 className="cotainer py-64 text-6xl font-semibold  tracking-widest text-white"> Our Projects</h1>

    </div>

    <div className="container grid lg:grid-cols-2 gap-8 py-8">
   {
    projects.map((project) =>(
      <div key={project.id} className="relative overflow-hidden rounded-xl group ">
        <div>
          <Image src={project.image}  width={350} height={250} alt="" className="w-full "/>
        </div>
        <div className="absolute  bottom-0  right-0 bg-white/90 dark:bg-black/40 flex-col  items-center justify-end gap-32 p-12 text-xl  transition duration-300  ease-in-out translate-y-full from-transparent to-black group-hover:translate-y-0 ">
          <h1 className="text-2xl font-semibold">{project.name}</h1>
          <p className="py-4 "> {project.description}</p>
        </div>
        </div>
    ))
   }

    </div>
    </div>
  )
}

export default page
