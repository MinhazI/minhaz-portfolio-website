import React from "react";
import HeaderTechStack from "./HeaderTechStack";

function Header() {
  return (
    <div className="grid grid-cols-1 min-h-[100vh] text-center align-middle bg-gray-900">
      <div className="flex flex-col justify-center text-white text-center">
        <p className="text-4xl text-center">Hi there 👋</p>
        <p className="text-4xl pt-3">I am Minhaz I. Mohamed</p>
        <div className="bottom-0">
          <HeaderTechStack
            items={[
              "TypeScript",
              "React.js",
              "Next JS",
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
