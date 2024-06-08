import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import Logo from './Logo';
import Nav from './Nav';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open) => {
    setIsOpen(open);
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-20'>
            <Logo />
            <Nav
              containerStyles='flex flex-col items-center gap-y-6'
              linkStyles='text-1xl font-semibold'
              underlineStyles='underline-class' // Ensure this is defined
              onLinkClick={handleNavClick}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
