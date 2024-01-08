"use client";

import gsap from "gsap";
import React, { useEffect } from "react";

function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const links = document.querySelectorAll("a");
    const cursorText: HTMLElement = document.querySelector(".cursor-text")!;

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.set(cursor, { x: clientX, y: clientY });
    };

    const onMouseEnterLink = (event: any) => {
      const link = event.target;
      if (link!.classList.contains("view")) {
        gsap.set(cursor, { scale: 4 });
        cursorText.style.display = "block";
      } else {
        gsap.set(cursor, { scale: 4 });
      }
    };

    const onMouseLeaveLink = (event: MouseEvent) => {
      gsap.to(cursor, { scale: 1 });
      cursorText.style.display = "none";
    };

    document.addEventListener("mousemove", onMouseMove);
    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });
  }, []);
  return (
    <div id="custom-cursor" className="custom-cursor hidden md:flex">
      <span className="cursor-text">View</span>
    </div>
  );
}

export default Cursor;
