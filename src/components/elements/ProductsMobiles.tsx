"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { MobileVideoCard } from "./MobileVideoCard";

const mobileProducts = [
  {
    id: 1,
    brand: "Apple",
    model: "iPhone 15 Pro",
    image: "/Products/MobileImages/Apple/apple.avif",
    hoverImage1: "/Products/MobileImages/Apple/apple1.avif",
    hoverImage2: "/Products/MobileImages/Apple/apple2.avif",
  },
  {
    id: 2,
    brand: "Samsung",
    model: "Galaxy S24 Ultra",
    image: "/Products/MobileImages/Samsung/samsung.avif",
    hoverImage1: "/Products/MobileImages/Samsung/samsung1.avif",
    hoverImage2: "/Products/MobileImages/Samsung/samsung2.avif",
  },
  {
    id: 3,
    brand: "OnePlus",
    model: "OnePlus 12",
    image: "/Products/MobileImages/OnePlus/oneplus.avif",
    hoverImage1: "/Products/MobileImages/OnePlus/oneplus1.avif",
    hoverImage2: "/Products/MobileImages/OnePlus/oneplus2.avif",
  },
  {
    id: 4,
    brand: "Xiaomi",
    model: "Xiaomi 14 Ultra",
    image: "/Products/MobileImages/Xiaomi/xiaomi.avif",
    hoverImage1: "/Products/MobileImages/Xiaomi/xiaomi1.avif",
    hoverImage2: "/Products/MobileImages/Xiaomi/xiaomi2.avif",
  },
  {
    id: 5,
    brand: "Vivo",
    model: "Vivo X100 Pro",
    image: "/Products/MobileImages/Vivo/vivo.avif",
    hoverImage1: "/Products/MobileImages/Vivo/vivo1.avif",
    hoverImage2: "/Products/MobileImages/Vivo/vivo2.avif",
  },
  {
    id: 6,
    brand: "Oppo",
    model: "Oppo Find X7 Ultra",
    image: "/Products/MobileImages/Oppo/oppo.avif",
    hoverImage1: "/Products/MobileImages/Oppo/oppo1.avif",
    hoverImage2: "/Products/MobileImages/Oppo/oppo2.avif",
  }
];

export function ProductsMobiles() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* Horizontal Scrolling Container */}
      <div className="relative">
        <div className="horizontal-scroll flex gap-4 pb-4 snap-x px-2 sm:px-4">
          {mobileProducts.map((product) => (
            <div
              key={product.id}
              className={cn(
                "group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-200",
                "transform hover:scale-105 mobile-card snap-center"
              )}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image/Video Container - Reduced Height */}
              <div className="h-48 sm:h-52 md:h-56">
                <MobileVideoCard 
                  product={product} 
                  isHovered={hoveredProduct === product.id} 
                />
              </div>

              {/* Product Details - Compact */}
              <div className="p-4 space-y-3">
                {/* Product Title */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 truncate">
                    {product.model}
                  </h3>
                </div>

                {/* Special Offers - Compact */}
                <div className="bg-blue-50 p-2 rounded-lg border border-blue-200">
                  <p className="text-xs text-blue-800 font-semibold">
                    🎉 Special Offer: No Cost EMI available
                  </p>
                  <p className="text-xs text-blue-600">
                    Free delivery • 7-day replacement
                  </p>
                </div>
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <div className="flex justify-center mt-4">
          <div className="text-xs sm:text-sm text-gray-500 flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full">
            <span>👈</span> Scroll to explore more mobiles <span>👉</span>
          </div>
        </div>
      </div>
    </div>
  );
}
