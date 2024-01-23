"use client";

import Image from "next/image";
import CountUpNumber from "../CountUpNumber/CountUpNumber";

const HeroSection = () => {
  return (
    <section className="flex px-4 items-center gap-12 container mx-auto">
      <div className="py-10 h-full">
        <h1 className="font-heading mb-6">Explore our Exquisite Rental</h1>
        <p className="text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg">
          Experience an Exquisite Stay at Point Pleasant Beach!
        </p>
        <button className="btn-primary">Get Started</button>
        {/* Room Description */}
        <div className="flex justify-between mt-12">
          <div className="flex gap3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">Room 1</p>
            <CountUpNumber duration={5000} endValue={100} />
          </div>
          <div className="flex gap3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">Room 2</p>
            <CountUpNumber duration={5000} endValue={100} />
          </div>
          <div className="flex gap3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">Room 3</p>
            <CountUpNumber duration={5000} endValue={100} />
          </div>
          <div className="flex gap3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">Room 4</p>
            <CountUpNumber duration={5000} endValue={100} />
          </div>
        </div>
      </div>
      {/* IMAGES */}
      <div className="md:grid hidden gap-8 grid-cols-1">
        <div className="rounded-2xl overflow-hidden h-48">
          <Image
            src="/images/dining-room-2.avif"
            alt="backyard-firepit"
            width={300}
            height={300}
            className="img scale-animation"
          />
        </div>
        <div className="grid grid-cols-2 gap-8 h-48">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/images/bedroom-surf.avif"
              alt="bedroom-surf"
              width={300}
              height={300}
              className="img scale-animation"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/images/backyard-firepit.avif"
              alt="bedroom-surf"
              width={300}
              height={300}
              className="img scale-animation"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
