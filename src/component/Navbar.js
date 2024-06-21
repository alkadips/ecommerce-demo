import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <div className="flex items-center justify-center gap-5">
                <div className="rounded">
                    <Link href='#' className='item-wrap mt-8 flex gap-2 '>
                        <div div className='image-wrap'></div>
                        <div className="mt-3">
                        <img  src="newtem1nav1.png" alt="logo" />
                    </div>
                    </Link>
                    <Link href='#' className='item-wrap mt-8 flex gap-2 '>
                        <div div className='image-wrap'></div>
                        <div className="mt-3">
                        <img src="g.png" alt="logo" />
                    </div>
                    </Link>
                </div>
                <div className="rounded">
                    <Link href='#' className='item-wrap  mt-8 flex gap-2'>
                        <div div className='image-wrap'></div>
                        <div className="mt-3">
                        <img src="b.png" alt="logo" />
                    </div>
                    </Link>
                    <Link href='#' className='item-wrap mt-8 flex gap-2 '>
                        <div div className='image-wrap'></div>
                        <div className="mt-3">
                        <img src="newtem1nav1.png" alt="logo" />
                    </div>
                    </Link>
                </div>
                <div
                    className="rounded">
                    <div className="flex gap-5">
                        <div className="flex gap-2 justify-between">
                            <div>View All</div>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M13.2109 18.5406C13.0704 18.4 12.9916 18.2094 12.9916 18.0106C12.9916 17.8119 13.0704 17.6213 13.2109 17.4806L18.1809 12.5106L3.74089 12.5106C3.54198 12.5106 3.35122 12.4316 3.21056 12.291C3.06991 12.1503 2.99089 11.9596 2.99089 11.7606C2.99089 11.5617 3.06991 11.371 3.21056 11.2303C3.35122 11.0897 3.54198 11.0106 3.74089 11.0106L18.1809 11.0106L13.2109 6.04064C13.1122 5.94897 13.04 5.83237 13.002 5.70312C12.964 5.57387 12.9615 5.43676 12.9949 5.30623C13.0283 5.17571 13.0962 5.0566 13.1916 4.96146C13.287 4.86633 13.4063 4.79867 13.5369 4.76564C13.6673 4.73222 13.8042 4.73455 13.9334 4.77239C14.0626 4.81022 14.1792 4.88216 14.2709 4.98064L20.5209 11.2306C20.6613 11.3713 20.7402 11.5619 20.7402 11.7606C20.7402 11.9594 20.6613 12.15 20.5209 12.2906L14.2709 18.5406C14.1303 18.6811 13.9396 18.76 13.7409 18.76C13.5421 18.76 13.3515 18.6811 13.2109 18.5406Z"
                                        fill="url(#paint0_linear_2_121430)"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_2_121430"
                                            x1="2.10343"
                                            y1="4.74219"
                                            x2="3.02374"
                                            y2="18.6961"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop offset="0.0542619" stop-color="#6495ED" />
                                            <stop offset="1" stop-color="#DE3163" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <img src="newtem1nav1.png" alt="logo" />
                    </div>
                    <div className="mt-2">Manage Product</div>
                    <div className="mt-3">
                        <img src="brand3.png" alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;