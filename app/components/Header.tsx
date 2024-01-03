import React from "react";

function Header() {
  return (
    <div className="grid grid-cols-1 min-h-[100vh] text-center align-middle bg-gray-900">
      <div className="flex flex-col justify-center text-white">
        <p className="text-4xl">Minhaz I. Mohamed</p>
        <p className="text-2xl pt-4">
          My website is still under construction. Please visit this website
          later.
        </p>
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
