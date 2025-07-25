import logo from "@/assets/starkdesk-logo.jpg"
import Image from "next/image";
import SocialX from "@/assets/social-x.svg"
import SocialInsta from "@/assets/social-insta.svg"
import SocialYoutube from "@/assets/social-youtube.svg"
import SocialPin from "@/assets/social-pin.svg"

export const Footer = () => {
  return (

    <footer className=" bg-black text-[#BCBCBC] text-sm py-1 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:h-full before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)]">


          <Image src={logo}
            alt="stark desk logo"
            height={40}
            className="roundel-lg relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center  gap-6 mt-6">
          <a href="">About</a>
          <a href="">Work with us</a>
          <a href="">Pricing</a>
          <a href="">Support</a>
          <a href="">Get a wakeup Call</a>
        </nav>

        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialYoutube/>
            <SocialPin />
        </div>
        <p className="mt-6">&copy; 2025 StarkDesk Marketors. All rights are in our Pocket.</p>
      </div>
    </footer>


  );
};
