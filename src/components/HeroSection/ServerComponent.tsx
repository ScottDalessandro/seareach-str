import Image from "next/image";
export const heading1 = (
  <>
    <h1 className="font-heading mb-6">Explore our Exquisite Rental</h1>
    <p className="text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg">
      Experience an Exquisite Stay at Point Pleasant Beach!
    </p>
    <button className="btn-primary">Get Started</button>
  </>
);

export const section2 = (
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
);
