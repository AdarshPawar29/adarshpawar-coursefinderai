"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Building2, User } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  period: string; // AM/PM
  location: string;
  organizer: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Event Name Goes here",
    date: "7 Jan 2023",
    time: "4:30",
    period: "PM",
    location: "University of New York",
    organizer: "Kishori Gupta",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Design Workshop 2023",
    date: "12 Feb 2023",
    time: "10:00",
    period: "AM",
    location: "Design Institute, London",
    organizer: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Tech Summit Global",
    date: "15 Mar 2023",
    time: "09:00",
    period: "AM",
    location: "Convention Center, SF",
    organizer: "Michael Chen",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2670&auto=format&fit=crop",
  },
];

export function UpcomingEvents() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 3000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  const handlePrev = () => {
    stopTimer();
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
    startTimer();
  };

  const handleNext = () => {
    stopTimer();
    setCurrentIndex((prev) => (prev + 1) % events.length);
    startTimer();
  };

  const currentEvent = events[currentIndex];

  return (
    <div
      className="w-full bg-white rounded-[8px] p-5 shadow-[0px_1px_20px_rgba(0,0,0,0.06)]"
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[18px] font-bold text-[#1A1A1A]">Upcoming Events</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center w-[24px] h-[24px] rounded-full border border-[#EBEBEB] hover:bg-gray-50 transition-colors group"
          >
            <ChevronLeft
              className="w-3 h-3 text-[#939393] group-hover:text-[#3B3B3B]"
              strokeWidth={2.5}
            />
          </button>
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-[24px] h-[24px] rounded-full border border-[#EBEBEB] hover:bg-gray-50 transition-colors group"
          >
            <ChevronRight
              className="w-3 h-3 text-[#263238] group-hover:text-[#3B3B3B]"
              strokeWidth={2.5}
            />
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="w-full h-[158px] mb-[18px] overflow-hidden rounded-[8px]">
        <img
          src={currentEvent.image}
          alt={currentEvent.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title, Date & Time */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="text-[16px] font-bold text-[#3B3B3B] mb-1 leading-tight">
            {currentEvent.title}
          </h4>
          <p className="text-[13px] font-medium text-[#939393]">
            {currentEvent.date}
          </p>
        </div>

        {/* Time Badge */}
        <div className="flex flex-col items-center justify-center bg-[#EFF2F5] rounded-[6px] min-w-[53px] h-[43px]">
          <span className="text-[14px] font-bold text-[#3B3B3B] leading-none mb-0.5">
            {currentEvent.time}
          </span>
          <span className="text-[10px] font-medium text-[#939393] uppercase leading-none">
            {currentEvent.period}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-3 mb-6">
        <div className="flex items-center gap-3">
          <Building2 className="w-4 h-4 text-[#939393]" strokeWidth={2} />
          <span className="text-[13px] font-medium text-[#3B3B3B]">
            {currentEvent.location}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <User className="w-4 h-4 text-[#939393]" strokeWidth={2} />
          <span className="text-[13px] font-medium text-[#3B3B3B]">
            By <span className="text-[#3B3B3B]">{currentEvent.organizer}</span>
          </span>
        </div>
      </div>

      {/* Button */}
      <button className="w-full h-[40px] bg-[#226CF5] hover:bg-[#1B5AD4] text-white text-[14px] font-semibold rounded-[3px] transition-colors">
        Register Now
      </button>
    </div>
  );
}
