export default function HomePage() {
  return (
    <section>
      <div className="relative">
        <video muted="muted"
          loop="loop"
          kind="Brand Video"
          controls="controls"
          preload="none"
          playsInline="playsInline"
          autoPlay="autoPlay" >
          <source src="https://cdn.shopify.com/videos/c/o/v/a18102b35b5b464b9c2ba89df46ecfc3.mp4" type="video/mp4" />
        </video>
        <div className="absolute text-sm text-center md:text-3xl md:left-[36%] text-white md:top-[75%] font-bold top-[40%] left-[15%] tracking-widest">ESTÉE LAUDER X SABYASACHI</div>
        <div className="absolute text-center text-3xl md:left-[48%] text-white md:top-[85%] left-[40%] top-[65%] md:text-sm text-xs py-1 pl-2 pr-2 border border-white md:py-3  md:pl-10 md:pr-10 cursor-pointer font-semibold">EXPLORE</div>
      </div>
      <div className="md:mt-16 mt-10 md:mb-16 text-center">“For culture to be relevant, it needs to be dynamic.”
        <div className="md:mt-20 mt-10 relative">
          <video muted="muted"
            loop="loop"
            kind="Brand Video"
            controls="controls"
            preload="none"
            playsInline="playsInline"
            autoPlay="autoPlay" >
            <source src="https://cdn.shopify.com/videos/c/o/v/4c8e1bc59f104d9aba875c94f788bb54.mp4" type="video/mp4" />
          </video>
          <div className="absolute text-sm text-center md:text-3xl md:left-[42%] text-white md:top-[75%] font-bold top-[40%] left-[32%] tracking-widest">MET GALA 2024</div>
          <div className="absolute text-center text-3xl md:left-[46%] text-white md:top-[85%] left-[40%] top-[65%] md:text-sm text-xs py-1 pl-2 pr-2 border border-white md:py-3  md:pl-10 md:pr-10 cursor-pointer font-semibold">EXPLORE</div>
        </div>
        <div className="mt-16 relative">
          <img className="w-full" src="brand55.png" />
          <div className="absolute text-sm text-center md:text-3xl md:left-[31%] text-white md:top-[75%] font-bold top-[40%] left-[12%] tracking-widest">LOVE. WANDERLUST. CURIOSITY</div>
          <div className="absolute text-center text-3xl md:left-[45%] text-white md:top-[85%] left-[40%] top-[65%] md:text-sm text-xs py-1 pl-2 pr-2 border border-white md:py-3  md:pl-10 md:pr-10 cursor-pointer font-semibold">EXPLORE</div>
        </div>
        <div className="mt-16 relative">
          <img className="w-full" src="brand2.jpg" />
          <div className="absolute text-sm text-center md:text-3xl md:left-[42%] text-white md:top-[75%] font-bold top-[40%] left-[28%] tracking-widest">HIGH JEWELLERY</div>
          <div className="absolute text-center text-3xl md:left-[48%] text-white md:top-[85%] left-[40%] top-[65%] md:text-sm text-xs py-1 pl-2 pr-2 border border-white md:py-3  md:pl-10 md:pr-10 cursor-pointer font-semibold">EXPLORE</div>
        </div>
        <div className="mt-16 relative">
          <img className="w-full" src="brand4.png" />
          <div className="absolute text-sm text-center md:text-3xl md:left-[42%] text-white md:top-[75%] font-bold top-[40%] left-[33%] tracking-widest">ACCESSORIES</div>
          <div className="absolute text-center text-3xl md:left-[45%] text-white md:top-[85%] left-[40%] top-[65%] md:text-sm text-xs py-1 pl-2 pr-2 border border-white md:py-3  md:pl-10 md:pr-10 cursor-pointer font-semibold">EXPLORE</div>
        </div>
        <div className="mt-16 relative">
          <img className="w-full" src="brand5.png" />
          <div className="absolute text-sm text-center md:text-3xl md:left-[44%] text-white md:top-[75%] font-semibold top-[40%] left-[36%] tracking-widest">WEDDINGS</div>
          <div className="absolute text-center text-3xl md:left-[45%] text-white md:top-[85%] left-[40%] top-[65%] md:text-sm text-xs py-1 pl-2 pr-2 border border-white md:py-3  md:pl-10 md:pr-10 cursor-pointer font-semibold">EXPLORE</div>
        </div>
        <div className="mt-16 relative">
          <img className="w-full" src="brand6.png" />
          <div className="absolute text-sm text-center md:text-2xl md:left-[43%] text-white md:top-[75%] font-bold top-[40%] left-[33%] tracking-widest">ART OF RETAIL
          </div>
          <div className="absolute text-center text-3xl md:left-[45%] text-white md:top-[85%] left-[40%] top-[65%] md:text-sm text-xs py-1 pl-2 pr-2 border border-white md:py-3  md:pl-10 md:pr-10 cursor-pointer font-semibold">EXPLORE</div>
        </div>
        <div className="mt-16 text-center md:w-[40%] m-auto md:p-0 p-3">“Crowded narrow lanes with balconies jutting out of beautiful old mansions and homes, jostling for space in North Calcutta. So rich in its nonchalance, between the clamour of grandeur and decay. It’s almost spiritual, the neglect of luxury and the casual existence of glamour. It makes Calcutta unforgettable.”</div>
        <div className="text-center flex justify-center mt-16">
          <img className="w-10" src="logo.png" />
        </div>
      </div>
    </section>
  )
}