import ArrowRight from '@/assets/arrow-right.svg'
import Logo from '@/assets/starkdesk-logo.jpg'
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg'


export const Header = () => {
  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className="flex justify-center items-center py-3 bg-black text-white text-small">
      
        <div className='inline-flex gap-1 items-center'>
          <p>You Own It , We Manage it </p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />

        </div>
      </div>

      {/* LOGO IS HERE */}
      <div className='py-5 '>
        <div className='container'>
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="starkdesk Logo" height={40} width={40} className=' rounded-3xl'/>
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className='hidden md:flex gap-6 text-black/60 items-center'>
              <a href="#">Business Home</a>
              <a href="#">Services</a>
              <a href="#">Portfolio</a>
              <a href="#">Support</a>
              <a href="#">Pricing</a>
            <button className='bg-black text-white px-4 py-2 rounded-lg items-center font-medium inline-flex justify-center tracking-tight'>Wake Up Call</button>
              
            </nav>
          </div>
        </div>
      </div>
    </header>


  )
};
