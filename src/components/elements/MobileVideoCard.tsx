"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MobileVideoCardProps {
  product: {
    id: number;
    brand: string;
    model: string;
    image: string;
    hoverImage1: string;
    hoverImage2: string;
  };
  isHovered: boolean;
}

export function MobileVideoCard({ product, isHovered }: MobileVideoCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideoEffect, setShowVideoEffect] = useState(false);

  // Array of images to cycle through for video-like effect
  const imageSequence = [
    product.image,
    product.hoverImage1,
    product.hoverImage2,
  ];

  useEffect(() => {
    if (isHovered) {
      setShowVideoEffect(true);
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % imageSequence.length);
      }, 800); // Change image every 800ms for video-like effect

      return () => clearInterval(interval);
    } else {
      setShowVideoEffect(false);
      setCurrentImageIndex(0);
    }
  }, [isHovered, imageSequence.length]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Main Image with Video-like Effect */}
      <div className="relative w-full h-full">
        <Image
          src={showVideoEffect ? imageSequence[currentImageIndex] : product.image}
          alt={product.model}
          fill
          className={cn(
            "object-cover transition-all duration-500",
            isHovered 
              ? "scale-100 brightness-105 contrast-105" 
              : "scale-100"
          )}
          priority
        />

        {/* Video-like scanning effect */}
        {isHovered && (
          <>
            {/* Scanning line effect */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
            
            {/* Corner indicators like camera recording - Smaller */}
            <div className="absolute top-2 left-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute top-2 left-5 text-red-500 text-xs font-bold animate-pulse">REC</div>
          </>
        )}
      </div>

      {/* Animated overlay on hover */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500",
        isHovered ? "opacity-100" : "opacity-0"
      )} />
      
      {/* Dynamic shimmer effect */}
      {isHovered && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transform -translate-x-full animate-shimmer"></div>
        </div>
      )}
      
      {/* Brand Logo - Smaller */}
      <div className="absolute top-1 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-gray-800 shadow-md z-10">
        {product.brand}
      </div>

      {/* Play Button Effect - Smaller */}
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-black/30 backdrop-blur-sm rounded-full p-3 animate-pulse">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="w-0 h-0 border-l-4 border-l-blue-600 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>
      )}

      {/* Video Timeline Effect - Smaller */}
      {isHovered && (
        <div className="absolute bottom-1 left-2 right-2 z-10">
          <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
            <div className="flex items-center gap-1">
              <div className="flex-1 h-0.5 bg-gray-300 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full animate-pulse" style={{ width: `${(currentImageIndex + 1) * 33.33}%` }}></div>
              </div>
              <span className="text-white text-xs">0:{currentImageIndex + 1}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}