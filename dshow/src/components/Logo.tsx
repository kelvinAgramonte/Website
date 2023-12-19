import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import HeaderLogo from '@/assets/img/Logo/Logo.png';

const Logo = () => {
  return (
    <Link href={"/"}>
        <Image src={HeaderLogo} alt="Your Logo" width={250} height={40} />
    </Link>
  );
};

export default Logo
