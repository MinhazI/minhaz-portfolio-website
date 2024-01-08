"use client";

// Import necessary modules and types from React and Next.js
import type { NextPage } from "next";
import Image from "next/image";

// Define the CompaniesWorkedAt component as a NextPage
const CompaniesWorkedAt: NextPage = () => {
  return (
    <div className="grid grid-cols-1 min-h-[25vh] text-center align-middle bg-gray-900 text-white py-20 px-10 rounded-t-2xl">
      <h1 className="text-2xl text-center">
        I have helped the following companies innovate in the tech space
      </h1>
      <div className="flex flex-row flex-1 justify-center pt-10 align-middle text-center">
        <Image
          src={
            "https://1nmzfzttiydo8mgt.public.blob.vercel-storage.com/Surge%20-%20Resized-SyPflQuuTQfyv1F7lkHW7sNwnmVUQ4.png"
          }
          alt="Surge Global"
          width={0}
          height={9}
          sizes="100vw"
          className="px-2 w-[30%] h-[85%] md:h-[90%] md:w-[10%]"
        />

        <Image
          src={
            "https://1nmzfzttiydo8mgt.public.blob.vercel-storage.com/Win%20Authority%20-%20Resized-uPF2pYYiOaLwVeO5gTjJAGMxqFLRBC.png"
          }
          alt="Win Authority LLC"
          width={0}
          height={9}
          sizes="100vw"
          className="px-2 w-[30%] h-[85%] md:h-[90%] md:w-[10%]"
        />

        <Image
          src={
            "https://1nmzfzttiydo8mgt.public.blob.vercel-storage.com/Motion%20Miracles%20-%20Resized-f6vI2LHcepIUHyglmsnM6Gvs0unlDn.png"
          }
          alt="Motion Miracles"
          width={0}
          height={9}
          sizes="100vw"
          className="px-2 w-[30%] h-[85%] md:h-[90%] md:w-[10%]"
        />
      </div>
    </div>
  );
};

// Export the component as the default export
export default CompaniesWorkedAt;
