"use client";

import { FC } from "react";
import Image from "next/image";
import CountUpNumber from "@/components/CountUpNumber/CountUpNumber";

type Props = {
  heading1: React.ReactNode;
  section2: React.ReactNode;
};

const ClientComponent: FC<Props> = (props) => {
  const { heading1, section2 } = props;
  return (
    <section className="flex px-4 items-center gap-12 container mx-auto">
      <div className="py-10 h-full">
        {heading1}
        <div className="flex justify-between mt-12">
          <div className="flex gap3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">Room 1</p>
            <CountUpNumber duration={1000} endValue={300} />
          </div>
          <div className="flex gap3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">Room 2</p>
            <CountUpNumber duration={1000} endValue={300} />
          </div>
          <div className="flex gap3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">Room 3</p>
            <CountUpNumber duration={1000} endValue={300} />
          </div>
          <div className="flex gap3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">Room 4</p>
            <CountUpNumber duration={1000} endValue={300} />
          </div>
        </div>
      </div>
      {section2}
    </section>
  );
};

export default ClientComponent;
