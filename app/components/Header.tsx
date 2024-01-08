import React from "react";
import HeaderTechStack from "./HeaderTechStack";

function Header() {
  return (
    <div className="grid grid-cols-1 min-h-[60vh] md:min-h-[80vh] text-justify md:text-center align-middle bg-gray-900 px-10 lg:px-0 py-20 lg:py-0 rounded-b-2xl">
      <div className="flex flex-col justify-center text-white text-center">
        <h2 className="text-3xl text-center">Hi there 👋</h2>
        <h1 className="text-4xl pt-3 pb-3">
          I am <span className="font-bold">Minhaz I. Mohamed</span>,
        </h1>

        {/* <div className="md: max-w-[800px] m-auto my-0">
          <p className="pt-5">
            I am an innovative software engineer specializing as a front-end
            developer with web technologies (React JS, Next JS, and more) and in
            server-side management. With a dynamic skill set, I bring over 4
            years of experience as a software engineer, adept problem solver,
            and collaborative team player.{" "}
          </p>
          <p className="pt-2">
            My passion lies in leveraging cutting-edge web technologies to drive
            innovation across companies of all sizes, with a particular focus on
            making a significant impact in the web hosting space. I thrive in
            fast-paced environments, delivering solutions that seamlessly blend
            technical expertise with a keen eye for user experience.
          </p>
          <p className="pt-5">
            Let&apos;s connect on{" "}
            <a
              href="https://linkedin.com/in/minhazirphan"
              target="_blank"
              className="underline"
            >
              LinkedIn
            </a>{" "}
            and explore how my unique blend of technical proficiency and
            entrepreneurial spirit can add value to your team. You can also
            email me at{" "}
            <a
              href="mailto:hello@minhazimohamed.com"
              target="_blank"
              className="underline"
            >
              hello@minhazimohamed.com
            </a>
            .
          </p>
          <p className="pt-[50px] pb-3">
            <code>
              My website is yet under construction, the final interactive
              website will be launched soon.
            </code>
          </p>
        </div> */}
        <div className="bottom-0">
          <HeaderTechStack
            items={[
              "TypeScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "JavaScript",
              "Team player",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
