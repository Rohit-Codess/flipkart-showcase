"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState, useCallback } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 py-4 md:px-8 md:py-8">
      <div className="relative flex flex-col items-center justify-center h-full w-full max-w-lg">
        <div className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotateY(),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index)
                    ? 40
                    : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -20, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: randomRotateY(),
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom"
              >
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-2xl md:rounded-3xl object-cover object-center shadow-xl"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex gap-4 mt-6 md:mt-8">
          <button
            onClick={handlePrev}
            className="group/button flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <IconArrowLeft className="h-5 w-5 md:h-6 md:w-6 text-black transition-transform duration-300 group-hover/button:-translate-x-1" />
          </button>
          <button
            onClick={handleNext}
            className="group/button flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <IconArrowRight className="h-5 w-5 md:h-6 md:w-6 text-black transition-transform duration-300 group-hover/button:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
