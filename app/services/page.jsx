import React from 'react'
import { GanttChartSquare,Blocks,Gem,Cloud, ShoppingBag, Megaphone,Code,Server,Smartphone, Lightbulb,Globe,BarChart} from 'lucide-react';
import    {Card, CardContent, CardDescription, CardHeader,CardTitle} from '@/components/ui/card'



const  servicesData = [
  {
    icon : <Cloud size={72} strokeWidth={0.8}/>,
    title: 'Cloud Solutions',
    description :"Helping businesses leverage the power of cloud platforms for scalability, agility, and cost-efficiency.",
  },
  {
    icon : <BarChart size={72} strokeWidth={0.8}/>,
    title: 'Data Analysis',
    description :"IT asset procurement involves acquiring and managing technology resources for a company's operations. It includes purchasing hardware and software, as well as maintaining and upgrading existing assets.",
  },
  {
    icon : <Code size={72} strokeWidth={0.8}/>,
    title: 'Software Development',
    description :"Designing and developing tailored software solutions to streamline processes and enhance performance.",
  },
  {
    icon : <Smartphone size={72} strokeWidth={0.8}/>,
    title: 'Mobile application development (Android and IOS)',
    description :" Mobile app development for Android and iOS involves creating and launching apps using tools like Android Studio and Xcode. Developers design these apps to meet each platform's guidelines and provide a good user experience",
  },

  {
    icon : <Lightbulb size={72} strokeWidth={0.8}/>,
    title: 'IT Consulting',
    description :"Providing expert guidance to align technology investments with business objectives.",
  },
  {
    icon : <Globe size={72} strokeWidth={0.8}/>,
    title: 'Web Services',
    description :"Professional web development, design, and maintenance to enhance your online presence and user experience.",
  },
  {
    icon : <Megaphone size={72} strokeWidth={0.8}/>,
    title: 'Digital Marketing',
    description :" Digital marketing uses the internet to promote products and connect with customers. It includes social media, search engines, email, and content creation. Analyzing data helps improve marketing strategies. Staying current with trends is essential for success.",
  },
  {
    icon : <ShoppingBag size={72} strokeWidth={0.8}/>,
    title: 'IT asset procurement',
    description :"IT asset procurement involves acquiring and managing technology resources for a company's operations. It includes purchasing hardware and software, as well as maintaining and upgrading existing assets.",
  },
  
]

const page = () => {
  return (
      <>
      <section className='mb-12 xl:mb-36 '>
        <div className='container mx-auto'>
            <h1 className="cotainer  text-6xl text-center font-semibold xl:mb-24  tracking-widest xl:text-black dark:text-white">Our Services</h1>
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
