import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Products() {
  const testimonials = [
    {
      quote: "Experience the future of shopping with our premium smartphones. Latest technology meets unbeatable prices.",
      name: "iPhone 15 Pro",
      designation: "Flagship Smartphone",
      src: "/Products/product1.avif",
    },
    {
      quote: "Powerful laptops designed for work, gaming, and creativity. Get the performance you need at the price you want.",
      name: "Dell XPS 13",
      designation: "Premium Laptop",
      src: "/Products/product2.avif",
    },
    {
      quote: "Immerse yourself in crystal-clear audio with our premium headphones. Music never sounded this good.",
      name: "Sony WH-1000XM5",
      designation: "Noise-Cancelling Headphones",
      src: "/Products/product3.avif",
    },
    {
      quote: "Stay connected and healthy with our smartwatches. Track your fitness goals while staying stylish.",
      name: "Apple Watch Series 9",
      designation: "Smart Watch",
      src: "/Products/product4.avif",
    },
    {
      quote: "Transform your home into a smart haven with our range of electronics and appliances. Innovation at your fingertips.",
      name: "Samsung Smart TV",
      designation: "4K QLED Television",
      src: "/Products/product5.avif",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
}
