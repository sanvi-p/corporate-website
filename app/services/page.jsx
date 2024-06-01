import React from 'react'
import { GanttChartSquare,Blocks,Gem,Cloud, ShieldCheck, Code,Server, Lightbulb,Globe} from 'lucide-react';
import    {Card, CardContent, CardDescription, CardHeader,CardTitle} from '@/components/ui/card'



const  servicesData = [
  {
    icon : <Cloud size={72} strokeWidth={0.8}/>,
    title: 'Cloud Solutions',
    description :"Helping businesses leverage the power of cloud platforms for scalability, agility, and cost-efficiency.",
  },
  {
    icon : <ShieldCheck size={72} strokeWidth={0.8}/>,
    title: 'Cybersecurity',
    description :"Implementing robust security measures to safeguard digital assets and mitigate cyber threats.",
  },
  {
    icon : <Code size={72} strokeWidth={0.8}/>,
    title: 'Software Development',
    description :"Designing and developing tailored software solutions to streamline processes and enhance performance.",
  },
  {
    icon : <Server size={72} strokeWidth={0.8}/>,
    title: 'IT Infrastructure Management',
    description :"Ensuring smooth operation and maintenance of IT systems for uninterrupted business continuity.",
  },

  {
    icon : <Lightbulb size={72} strokeWidth={0.8}/>,
    title: 'Strategic IT Consulting',
    description :"Providing expert guidance to align technology investments with business objectives.",
  },
  {
    icon : <Globe size={72} strokeWidth={0.8}/>,
    title: 'Web Services',
    description :"Professional web development, design, and maintenance to enhance your online presence and user experience.",
  },
  
]

const page = () => {
  return (
      <>
      <section className='mb-12 xl:mb-36 '>
        <div className='container mx-auto'>
            <h1 className="cotainer  text-6xl text-center font-semibold xl:mb-24  tracking-widest xl:text-black dark:text-white">My Services</h1>
        </div>
         {/* grid iteam */}
         <div className=' grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-20 xl:gap-x-8 xl:p-20  p-10'>
          {
            servicesData.map((item, index) =>{
              return <Card  className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 items-center relative  " key={index}>
                <CardHeader className="text-primary  absolute -top-[60px] ">
                    <div className='w-[140px] h-[88px] bg-white dark:bg-background flex justify-center items-center'>{item.icon}</div>
                </CardHeader>

                <CardContent className="text-center">
                  <CardTitle className="mb-4 ">{item.title}</CardTitle>
                  <CardDescription className="text-lg">{item.description}</CardDescription>
                </CardContent>
              </Card>
            })
          }
         </div>

      </section>

      </>
  )
}

export default page
