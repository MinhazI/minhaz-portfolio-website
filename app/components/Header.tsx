import React from "react";

function Header() {
  return (
    <div className="grid grid-cols-1 min-h-[100vh] text-center align-middle bg-gray-900">
      <div className="flex flex-col justify-center text-white text-center">
        <p className="text-4xl text-center">Hi there 👋!</p>
        <p className="text-2xl pt-3">
          My website is still under construction. Please visit this website
          again later.
        </p>
        {/* <p className="text-2xl pt-4">
          My website is still under construction. Please visit this website
          later.
        </p> */}
        <div className="pt-10">
          <p>
            Contact me:{" "}
            <a href="mailto:hello@minhazimohamed.com" className="underline">
              hello@minhazimohamed.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
