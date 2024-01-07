import Image from "next/image";
import React from "react";

function AboutSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pt-20 px-10 rounded-t-3xl align-middle">
      <div className="grid-cols-1 align-middle pt-20 md:pt-0">
        <Image
          className="block m-auto rounded-full"
          alt="Minhaz I Mohamed"
          src="https://1nmzfzttiydo8mgt.public.blob.vercel-storage.com/Minhaz%20Irphan%20Mohamed-tQ754YBL1BzOXlto49btBo0WQ64fXh"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "50%", height: "auto" }}
        />
      </div>
      <div className="grid-cols-1 pt-20 md:pt-0">
        <h1 className="text-6xl font-extrabold underline text-center md:text-left">
          About me
        </h1>
        <p className="pt-10 pb-4 text-justify">
          I am an innovative software engineer specializing as a front-end
          developer and in web technologies and server-side management,
          currently venturing into the entrepreneurial realm. With a dynamic
          skill set, I bring over 4 years of experience as a software engineer,
          adept problem solver, and collaborative team player.
        </p>
        <p className="pb-4 text-justify">
          My passion lies in leveraging cutting-edge web technologies to drive
          innovation across companies of all sizes, with a particular focus on
          making a significant impact in the web hosting space. I thrive in
          fast-paced environments, delivering solutions that seamlessly blend
          technical expertise with a keen eye for user experience.
        </p>
        <p className="pb-4 text-justify">
          I am open to exciting opportunities that allow me to contribute my
          skills to forward-thinking projects. Let&apos;s connect and explore
          how my unique blend of technical proficiency and entrepreneurial
          spirit can add value to your team.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
