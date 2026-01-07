"use client";

import { ArrowRight, BookOpen, Search, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    tag: "Allied Services",
    title: "Overseas Education Loans",
    description: "Provide end to end overseas education loan assistance to your students to help them achieve their goal",
    image: "/assets/images/person-with-circle.svg",
    cta: "Get Started",
    theme: "blue"
  },
  {
    id: 2,
    tag: "Allied Services",
    title: "Student Accommodation",
    description: "Help your students find the perfect home away from home with our trusted accommodation partners.",
    image: "/assets/images/person-with-circle.svg",
    cta: "Explore Now",
    theme: "blue"
  },
  {
    id: 3,
    tag: "Allied Services",
    title: "Forex Assistance",
    description: "Secure and hassle-free forex solutions for tuition fees and living expenses abroad.",
    image: "/assets/images/person-with-circle.svg",
    cta: "Learn More",
    theme: "blue"
  }
];

export function PromoBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#00173F] via-[#0A2A66] to-[#226CF5] min-h-[300px] lg:h-[300px] h-auto">
        


        <div 
          className="h-full flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full h-full flex flex-col lg:flex-row items-center justify-between px-6 py-10 lg:py-0 lg:px-12 relative">
              {/* Left Content */}
              <div className="w-full lg:max-w-[50%] z-10 space-y-4 text-center lg:text-left">
                <div className="inline-block">
                  <span className="text-white text-sm font-medium tracking-wide">
                    {slide.tag}
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {slide.title}
                </h2>
                <p className="text-white/80 text-sm lg:text-base leading-relaxed max-w-md">
                  {slide.description}
                </p>
                <div className="pt-2">
                  <button className="bg-white text-[#0B46A8] hover:bg-gray-50 px-6 py-2.5 rounded-[4px] font-semibold text-sm transition-colors duration-200">
                    {slide.cta}
                  </button>
                </div>
              </div>

              {/* Right Image Composition */}
              <div className="relative w-full lg:w-[45%] h-[280px] lg:h-full flex items-center justify-center mt-6 lg:mt-0">
                
                {/* Main Blue Circle Container */}
                <div className="relative w-64 h-64 lg:w-[18rem] lg:h-[18rem] bg-[#226CF5] rounded-full flex items-end justify-center overflow-visible mt-8 lg:mt-12">
                  
                  {/* The Person Image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                     <Image 
                        src={slide.image} 
                        alt="Promo Illustration" 
                        fill
                        className="object-contain scale-110" 
                        priority={slide.id === 1}
                     />
                  </div>

                  {/* Decorative Floating Elements */}
                  
                  {/* Search Icon - Top Right */}
                  <div className="absolute -right-2 top-10 bg-white p-3 rounded-full shadow-lg z-20">
                    <Search className="w-6 h-6 text-[#00173F]" strokeWidth={2.5} />
                  </div>

                  {/* Book Icon - Bottom Left */}
                  <div className="absolute -left-4 bottom-16 bg-[#FFF8E7] p-3 rounded-full shadow-lg z-20 border-2 border-white">
                    <BookOpen className="w-6 h-6 text-[#00173F]" strokeWidth={2.5} />
                  </div>

                  {/* Sparkles/Stars */}
                  <Sparkles className="absolute top-6 left-6 text-white w-6 h-6 fill-white/80 animate-pulse" />
                  <Sparkles className="absolute bottom-10 right-4 text-white w-5 h-5 fill-white/80" />
                  <div className="absolute top-4 right-16 text-white w-2.5 h-2.5 bg-white rounded-full opacity-60" />

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              currentSlide === index 
                ? "bg-[#263238]" 
                : "bg-[#D8DBDD]"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
