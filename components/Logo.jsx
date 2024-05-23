import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoimage from '../images/logo.png'

const Logo = () => {
  return (
  <Link href={'/'}>
    <Image src={logoimage} width={100} height={30} alt='logo image'/>
  </Link>
  )
}                                                                                                                                                                                                  

export default Logo
