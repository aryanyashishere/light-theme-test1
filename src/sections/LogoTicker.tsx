'use client';
import acmeLogo from '@/assets/logo-acme.png'
import quantumLogo from '@/assets/logo-quantum.png'
import celestialLogo from "@/assets/logo-celestial.png"
import pulseLogo from "@/assets/logo-pulse.png"
import echoLogo from "@/assets/logo-echo.png"
import apexLogo from "@/assets/logo-apex.png"
import Image from 'next/image'
import {motion} from "framer-motion"


export const LogoTicker = () => {
  return( 
  
  <div className='py-8 md:py-12 bg-white'>

    <div className='container'>

      <div className="flex overflow-hidden  [mask-image:linear-gradient(to_right,transparent,black,transparent)]">

        <motion.div className='flex gap-14 flex-none pr-14'
         animate={{
          translateX: "-50%",

        }}
        transition={{
          duration:20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        >
          <Image src={acmeLogo} alt='acme logo' className='logo-ticker-image' 
          />
          <Image src={quantumLogo} alt='acme logo' className='logo-ticker-image' />
          <Image src={celestialLogo} alt='acme logo' className='logo-ticker-image' />
          <Image src={pulseLogo} alt='acme logo' className='logo-ticker-image' />
          <Image src={echoLogo} alt='acme logo' className='logo-ticker-image' />
          <Image src={apexLogo} alt='acme logo' className='logo-ticker-image' />


           <Image src={acmeLogo} alt='acme logo' className='logo-ticker-image' 
          />
          <Image src={quantumLogo} alt='acme logo' className='logo-ticker-image' />
          <Image src={celestialLogo} alt='acme logo' className='logo-ticker-image' />
          <Image src={pulseLogo} alt='acme logo' className='logo-ticker-image' />
          <Image src={echoLogo} alt='acme logo' className='logo-ticker-image' />
          <Image src={apexLogo} alt='acme logo' className='logo-ticker-image' />
        </motion.div>
      </div>
    </div>
  </div>

  );
};
