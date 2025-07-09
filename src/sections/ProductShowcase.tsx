"use client";
import productImage from "@/assets/product-image.png"
import Image from "next/image";
import tubeImage from "@/assets/tube.png"
import pyramidImage from "@/assets/pyramid.png"
import {motion, useScroll, useTransform} from "framer-motion"
import {useRef} from "react"

export const ProductShowcase = () => {




    const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0,1], [150,-150]); 

  // useMotionValueEvent(translateY, "change", (latestValue)=> 
  // console.log(latestValue)



  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to -[#D2DCFF] py-24 overflow-x-clip">

      <div className="container">

        <div className="section-heading-width">

          <div className="flex justify-center">
            <div className="tag">
              Boost your Productivity

            </div>
          </div>
          <h2 className="section-title mt-5 "> A more effective way to track progress </h2>

          <p className="section-description mt-5
       ">
            Effortlessly turn your ideas into a fully functional, responsive, website in just minutes with this template.
          </p>
        </div>

        <div className="relative">
        <Image
          src={productImage}
          alt="prudct image "
          className="mt-10"
        />

        <motion.img src={pyramidImage.src} alt="pyramid image "
        height={262}
        width={262}
        className="hidden md:block absolute -right-36 -top-32"
        style={{translateY,}}
        />


        <motion.img src={tubeImage.src} 
        alt="tube iamge "
        height={248}
        width={248}
        className="hidden md:block absolute bottom-24 -left-36"
        style={{
          translateY,
        }}
        />
        {/* <Image src={tubeImage} 
        alt="tube iamge "
        height={248}
        width={248}
        className="hidden md:block absolute bottom-24 -left-36"
        
        /> */}
        </div>
      </div>
    </section>


  );
};
