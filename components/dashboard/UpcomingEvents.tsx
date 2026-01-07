import { Calendar, Clock, MapPin } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  imageUrl?: string;
}

const upcomingEvent: Event = {
  id: 1,
  title: "Study Abroad Fair 2024",
  date: "January 15, 2024",
  time: "10:00 AM - 4:00 PM",
  location: "New Delhi Convention Center",
  imageUrl: "/event-placeholder.jpg",
};

export function UpcomingEvents() {
  return (
    <div className="bg-white rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.06)] overflow-hidden">
      {/* Header */}
      <div className="px-4 pt-4 pb-3">
        <h3 className="text-[14px] font-semibold text-[#1A1A1A]">Upcoming Events</h3>
      </div>
      
      {/* Event Image - Gradient placeholder */}
      <div className="relative h-28 mx-4 rounded-lg overflow-hidden bg-gradient-to-br from-[#226CF5] to-[#1B5AD4]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white/80">
            <svg
              className="mx-auto h-10 w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Event Details */}
      <div className="p-4 space-y-3">
        <h4 className="text-[14px] font-semibold text-[#1A1A1A]">{upcomingEvent.title}</h4>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 text-[#226CF5]" />
            <span className="text-[12px] text-[#666666]">{upcomingEvent.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-[#226CF5]" />
            <span className="text-[12px] text-[#666666]">{upcomingEvent.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-[#226CF5]" />
            <span className="text-[12px] text-[#666666]">{upcomingEvent.location}</span>
          </div>
        </div>
        
        <button className="w-full h-9 bg-[#226CF5] hover:bg-[#1B5AD4] text-white text-[13px] font-medium rounded-lg transition-colors">
          Register Now
        </button>
      </div>
    </div>
  );
}
