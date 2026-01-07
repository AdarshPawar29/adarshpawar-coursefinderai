"use client";

import { useState, useEffect } from "react";
import { Newspaper } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Indian student tops Harvard!",
    excerpt: "Indian student tops harward university and makes history. Its the first time for an Indian student to do this.",
  },
  {
    id: 2,
    title: "New UK visa rules for 2024",
    excerpt: "Updated post-study work visa regulations that benefit international students significantly.",
  },
  {
    id: 3,
    title: "Australia opens more slots",
    excerpt: "Australian universities announce 500 new fully-funded scholarships for international applicants.",
  },
];

export function NewsBulletin() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentNews = newsItems[currentIndex];

  return (
    <div 
      className="bg-white rounded-[8px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-6 h-full flex flex-col relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header */}
      <h3 className="text-[16px] font-bold text-[#3B3B3B] mb-6">News Bulletin</h3>
      
      {/* Content */}
      <div className="flex-1 flex gap-4">
        {/* Icon Circle */}
        <div className="shrink-0">
          <div className="w-12 h-12 rounded-full border border-[#EBEBEB] flex items-center justify-center">
            <Newspaper className="w-5 h-5 text-[#226CF5]" />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col pt-0.5">
          <h4 className="text-[14px] font-bold text-[#3B3B3B] mb-1.5 leading-tight">
            {currentNews.title}
          </h4>
          <p className="text-[13px] text-[#939393] leading-relaxed">
            {currentNews.excerpt}{" "}
            <button className="text-[#226CF5] hover:underline font-medium inline-block ml-1">
              Read More
            </button>
          </p>
        </div>
      </div>
      
      {/* Footer - Pagination */}
      <div className="flex justify-center items-center gap-2 mt-auto pt-6">
        {newsItems.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#263238]" : "bg-[#D8DBDD]"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to news ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
