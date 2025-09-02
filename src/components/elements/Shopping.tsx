"use client";

import React from "react";
import Image from "next/image";

export function Shopping() {
  const images = [
    "/shopping1.avif",
    "/shopping2.jpg", 
    "/shopping3.png",
    "/shopping4.avif",
    "/shopping5.avif",
    "/shopping6.jpg"
  ];

  return (
    <div className="w-full h-full flex items-center justify-center p-4 md:p-6 lg:p-8">
      <div className="w-full h-full max-w-4xl">
        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6 h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-110`}
            >
              <Image
                src={image}
                alt={`Flipkart Shopping ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
