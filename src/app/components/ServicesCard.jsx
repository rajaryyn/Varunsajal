"use client";

import Image from "next/image";


const ServicesCard = ({service}) => {
  

  return (
    <div className=" flex flex-col p-6 justify-center items-start text-black-100 bg-blue-100 hover:bg-white hover:shadow-md rounded-3xl group">
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="text-[22px] leading-[26px] font-bold capitalize">
          {service.name}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">
          ₹
        </span>
        {service.price}
        <span className="self-end text-[14px] leading-[17px] font-medium">
          /day
        </span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={service.img}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className=""></div>
    </div>
  );
};

export default ServicesCard;
