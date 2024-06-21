import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
   return (
      <div className="">
         <header class="fixed top-0 w-full bg-white shadow-lg z-50 hidden md:block">
            <nav class="container mx-auto p-4 flex justify-between items-center">
               <div className="md:text-4xl text-center font-bold cursor-pointer">SABYASACHI</div>
               <div className='my-menu-list lg:flex justify-center gap-5 mt-5'>
                  <ul className='flex items-center p-0 m-0' >
                     <li><Link className='flex items-center gap-2' href='#'>WHAT'S NEW<img className="drop" src="drop.png" alt="logo" /></Link>
                        <div className='nav-submenu'>
                           <Navbar />
                        </div>
                     </li>
                     <li><Link className='flex items-center gap-2' href='#'>HIGH JEWELLERY<img className="drop" src="drop.png" alt="logo" /></Link>
                        <div className='nav-submenu'>
                           <Navbar />
                        </div>
                     </li>
                     <li><Link className='flex items-center gap-2' href='#'>FINE JEWELLERY<img className="drop" src="drop.png" alt="logo" /></Link>
                        <div className='nav-submenu'>
                           <Navbar />
                        </div>
                     </li>
                     <li><Link href='#'>WOMENSWEAR</Link> </li>
                     <li><Link href='#'>MENSWEAR</Link> </li>
                     <li><Link href='#'>WEDDINGS</Link> </li>
                     <li><Link href='#'>ACCESSORIES</Link> </li>
                     <li><Link href='#'>WORLD OF SABYASACHI</Link> </li>
                  </ul>
               </div>
            </nav>
         </header>
      </div>
   )
}