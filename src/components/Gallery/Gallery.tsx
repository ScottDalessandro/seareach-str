import Image from "next/image";

const Gallery = () => {
  return (
    <div className="mx-auto container py-14 h-full">
      <div className="flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2 h-48">
            <Image
              alt="gallery"
              className="img"
              src="/images/backyard-firepit.avif"
              width={200}
              height={200}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2 h-48">
            <Image
              alt="gallery"
              className="img"
              src="/images/dining-room-2.avif"
              width={200}
              height={200}
            />
          </div>
          <div className="w-full p-1 md:p-2 h-48">
            <Image
              alt="gallery"
              className="img"
              src="/images/master-bedroom.avif"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2 h-48">
            <Image
              alt="gallery"
              className="img"
              src="/images/living-room.avif"
              width={200}
              height={200}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2 h-48">
            <Image
              alt="gallery"
              className="img"
              src="/images/backyard.avif"
              width={200}
              height={200}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2 h-48">
            <Image
              alt="gallery"
              className="img"
              src="/images/office-main.webp"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
