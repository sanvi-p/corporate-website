import React from 'react'
import{Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import { AlignJustify } from 'lucide-react'
import Logo from './Logo'
import Nav from './Nav'

const MobileNavigation = () => {
  return (
   <Sheet>
    <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer '/>

    </SheetTrigger>
    <SheetContent>
        <div className='flex  flex-col items-center justify-between h-full py-8 '>
            <div className='flex flex-col items-center gap-y-20  '>
                <Logo/>
                <Nav conatainerStyles='flex flex-col items-center gap-y-6 ' linkStyles='text-1xl font-semibold  '/>
            </div>
        </div>
    </SheetContent>

   </Sheet>
  )
}

export default MobileNavigation
