"use client";

// Import necessary modules and types from React and Next.js
import type { NextPage } from "next";
import Image from "next/image";

// Define the CompaniesWorkedAt component as a NextPage
const CompaniesWorkedAt: NextPage = () => {
  return (
    <div className="grid grid-cols-1 min-h-[25vh] text-center align-middle bg-gray-900 py-10 text-white">
      <h1 className="text-2xl text-center">
        I have helped the following companies innovate in the tech space
      </h1>
      <div className="flex flex-row flex-1 justify-center pt-10">
        {/* <div className="grid grid-cols-4"> */}
        <Image
          src={
            "https://1nmzfzttiydo8mgt.public.blob.vercel-storage.com/surge-global-logo-in-white-PHUtu0kC9X2SIWevFCudUpDRUM8pP0.svg"
          }
          alt="Surge Global"
          width={0}
          height={0}
          sizes="10vw"
          style={{ width: "50%", height: "50%" }}
          className=""
        />
        <Image
          src={
            "https://1nmzfzttiydo8mgt.public.blob.vercel-storage.com/Motion%20Miracles-fDZNdR9yAkDrL0A0Pi8dnQti1T491l.png"
          }
          alt="Motion Miracles"
          width={0}
          height={9}
          sizes="10vw"
          style={{ width: "30%", height: "50%" }}
        />
      </div>
    </div>
  );
};

// Export the component as the default export
export default CompaniesWorkedAt;
