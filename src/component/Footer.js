import Link from 'next/link'

export default function Footer() {
    return (
        <div className='bg-black'>
            <div className="flex  justify-around md:flex-row flex-col ">
                <div className="flex md:gap-40 gap-16 p-5">
                    <div className="mt-10 mb-20">
                        <div className="text-gray-400">WHAT'S NEW</div>
                        <div className=" hover:border-b-2 hover:border-white text-white mt-3 cursor-pointer">
                            <Link href="#" >Met Gala 2024</Link>
                        </div>
                        <div className="hover:border-b-2 hover:border-white text-white mt-3 cursor-pointer">
                            <Link href="#" >The Sari Edit</Link>
                        </div>
                        <div className="hover:border-b-2 hover:border-white text-white mt-3 cursor-pointer">
                            <Link href="#" >Heritage Bridal</Link>
                        </div>
                    </div>
                    <div className="mt-10 mb-20">
                        <div className="text-gray-400">WORLD OF SABYASACHI</div>
                        <div className=" hover:border-b-2 hover:border-white hover:w-16 text-white mt-3 cursor-pointer">
                            <Link href="#" >History</Link>
                        </div>
                        <div className="hover:border-b-2 hover:border-white hover:w-28 text-white mt-3 cursor-pointer">
                            <Link href="#" >Collaborations</Link>
                        </div>
                        <div className="hover:border-b-2 hover:border-white hover:w-24 text-white mt-3 cursor-pointer">
                            <Link href="#" >Art of Retail</Link>
                        </div>
                    </div>
                </div>
                <div className="flex md:gap-40 gap-16 p-5">
                    <div className="mt-10 mb-20">
                        <div className="text-gray-400">CUSTOMER CARE</div>
                        <div className="hover:border-b-2 hover:border-white hover:w-16 text-white mt-3 cursor-pointer">
                            <Link href="#" >Contact</Link>
                        </div>
                        <div className="hover:border-b-2 hover:border-white hover:w-16 text-white mt-3 cursor-pointer">
                            <Link href="#" >Stores</Link>
                        </div>
                    </div>
                    <div className="mt-10 mb-20">
                        <div className="text-gray-400">SOCIAL</div>
                        <div className="hover:border-b-2 hover:border-white text-white mt-3 cursor-pointer">
                            <Link href="#" >Instagram</Link>
                        </div>
                        <div className="hover:border-b-2 hover:border-white text-white mt-3 cursor-pointer">
                            <Link href="#" >YouTube</Link>
                        </div>
                        <div className="hover:border-b-2 hover:border-white text-white mt-3 cursor-pointer">
                            <Link href="#" >Facebook</Link>
                        </div>
                    </div>
                </div>
                <div className="mt-10 mb-20 md:text-left text-center">
                    <div className="text-gray-400">CORPORATE</div>
                    <div className="hover:border-b-2 hover:border-white text-white mt-3">
                        <Link href="#" >Privacy Policy</Link>
                    </div>
                    <div className="hover:border-b-2 hover:border-white text-white mt-3">
                        <Link href="#" >Terms of Use</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}