"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Indian student tops Harvard!",
    excerpt: "A remarkable achievement as Priya Menon becomes valedictorian at Harvard Business School.",
    date: "Jan 5, 2024",
  },
  {
    id: 2,
    title: "New UK visa rules for 2024",
    excerpt: "Updated post-study work visa regulations that benefit international students.",
    date: "Jan 3, 2024",
  },
  {
    id: 3,
    title: "Australia opens more scholarship slots",
    excerpt: "Australian universities announce 500 new fully-funded scholarships.",
    date: "Jan 1, 2024",
  },
];

export function NewsBulletin() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const currentNews = newsItems[currentIndex];

  return (
    <div className="bg-white rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-4">
      {/* Header */}
      <h3 className="text-[14px] font-semibold text-[#1A1A1A] mb-3">News Bulletin</h3>
      
      {/* Content */}
      <div className="space-y-2">
        <h4 className="text-[13px] font-semibold text-[#1A1A1A] leading-tight">
          {currentNews.title}
        </h4>
        <p className="text-[12px] text-[#666666] line-clamp-2 leading-relaxed">
          {currentNews.excerpt}
        </p>
        <p className="text-[11px] text-[#999999]">{currentNews.date}</p>
      </div>
      
      {/* Footer */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#EBEBEB]">
        <button className="text-[12px] font-medium text-[#226CF5] hover:underline">
          Read More
        </button>
        
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="h-6 w-6 flex items-center justify-center rounded hover:bg-[#F5F5F5] transition-colors"
            aria-label="Previous news"
          >
            <ChevronLeft className="h-4 w-4 text-[#666666]" />
          </button>
          <div className="flex gap-1.5">
            {newsItems.map((_, index) => (
              <button
                key={index}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#226CF5]" : "bg-[#D9D9D9]"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to news ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="h-6 w-6 flex items-center justify-center rounded hover:bg-[#F5F5F5] transition-colors"
            aria-label="Next news"
          >
            <ChevronRight className="h-4 w-4 text-[#666666]" />
          </button>
        </div>
      </div>
    </div>
  );
}
