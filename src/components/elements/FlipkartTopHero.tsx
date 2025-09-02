"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";

export function FlipkartTopHero() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Best Online Store<br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-yellow-400">
                Flipkart
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`/flipkart-page.png`}
          alt="flipkart"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-contain h-full"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
