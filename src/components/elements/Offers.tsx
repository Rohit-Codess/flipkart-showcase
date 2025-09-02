import React from "react";
import { Compare } from "@/components/ui/compare";

export function Offers() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full max-w-full max-h-full">
        <Compare
          firstImage="/offer1.jpg"
          secondImage="/offer2.png"
          firstImageClassName="object-cover object-center"
          secondImageClassname="object-cover object-center"
          className="w-full h-full rounded-xl md:rounded-2xl lg:rounded-3xl"
          slideMode="hover"
        />
      </div>
    </div>
  );
}
