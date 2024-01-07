"use client";

// Import necessary modules and types from React and Next.js
import type { NextPage } from "next";
import Image from "next/image";

// Define the CompaniesWorkedAt component as a NextPage
const CompaniesWorkedAt: NextPage = () => {
  return (
    <div className="grid grid-cols-1 min-h-[25vh] text-center align-middle bg-gray-900 py-10 text-white">
      <p className="text-2xl font-extrabold underline text-center">
        I have helped the following companies innovate in the tech space
      </p>
      <div className="grid grid-cols-1">
        <div className="grid grid-cols-4">
          <Image
            src={
              "https://1nmzfzttiydo8mgt.public.blob.vercel-storage.com/surge-global-logo-in-white-PHUtu0kC9X2SIWevFCudUpDRUM8pP0.svg"
            }
            alt="Surge Global"
            width={100}
            height={100}
            sizes="10vw"
            // style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="grid grid-cols-4">
          <Image
            src={
              "https://1nmzfzttiydo8mgt.public.blob.vercel-storage.com/Motion-Miracles-1-rDMDcUddSkDQPK9yDhNuHBKk47WVfv.png"
            }
            alt="Motion Miracles"
            width={100}
            height={100}
            sizes="100vw"
            // style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

// Export the component as the default export
export default CompaniesWorkedAt;
