"use client";

// Import necessary modules and types from React and Next.js
import { useEffect, useRef } from "react";
import type { NextPage } from "next";

// Define the interface for CarouselProps
interface CarouselProps {
  items: any[];
}

// Define the HeaderTechStack component as a NextPage
const HeaderTechStack: NextPage<CarouselProps> = ({ items }) => {
  useEffect(() => {
    const initializeCarousel = () => {
      // Add logic for x-data and x-init
      let ul = carouselRef.current!;
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
      if (ul && ul.nextSibling instanceof HTMLElement) {
        ul.nextSibling.setAttribute("aria-hidden", "true");
      }
      // Additional logic for x-init if needed
    };

    // Call the initialization function on the next tick
    const handleNextTick = () => {
      requestAnimationFrame(() => {
        initializeCarousel();
      });
    };

    // Initialize the carousel on component mount
    handleNextTick();

    // Clean up logic for the component unmount
    return () => {
      // Add cleanup logic if needed
    };
  }, []); // Empty dependency array to run the effect only once

  // Create a ref for the carousel element
  const carouselRef = useRef<HTMLUListElement>(null);

  return (
    <div className="bottom-0">
      <p className="my-5">a software engineer that is experienced in</p>
      <div className="w-11/12 inline-flex flex-nowrap my-3 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-5 md:[&_li]:mx-8 animate-infinite-scroll "
          ref={carouselRef}
        >
          {items.map((item, index) => (
            <li key={index} className="bg-emerald-950 p-4 rounded-2xl w-max">
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll"
          aria-hidden
        >
          {items.map((item, index) => (
            <li key={index} className="bg-emerald-950 p-4 rounded-2xl">
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Export the component as the default export
export default HeaderTechStack;
