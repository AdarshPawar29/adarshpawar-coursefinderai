"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Landmark } from "lucide-react";

interface FilterBarProps {
  onApplyFilters?: () => void;
}

export function FilterBar({ onApplyFilters }: FilterBarProps) {
  return (
    <div className="flex flex-col gap-4 md:gap-[17px] p-4 md:p-5 bg-white rounded-[8px] shadow-[0px_1px_20px_0px_rgba(0,0,0,0.06)]">
      {/* Top Row: Filters */}
      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-[17px]">
        {/* Year Filter */}
        <Select>
          <SelectTrigger className="w-full md:w-[140px] h-[39px] text-[13px] font-medium border-[#EBEBEB] shadow-none rounded-[3.5px] text-[#939393]">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <SelectValue placeholder="Year" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
          </SelectContent>
        </Select>

        {/* Date Created Filter */}
        <Select>
          <SelectTrigger className="w-full md:w-[200px] h-[39px] text-[13px] font-medium border-[#EBEBEB] shadow-none rounded-[3.5px] text-[#939393]">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <SelectValue placeholder="Date Created" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
            <SelectItem value="custom">Custom Range</SelectItem>
          </SelectContent>
        </Select>

        {/* Intake Filter */}
        <Select>
          <SelectTrigger className="w-full md:w-[305px] h-[39px] text-[13px] font-medium border-[#EBEBEB] shadow-none rounded-[3.5px] text-[#939393]">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <SelectValue placeholder="Select intake" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="jan">January 2024</SelectItem>
            <SelectItem value="may">May 2024</SelectItem>
            <SelectItem value="sep">September 2024</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Bottom Row: Countries & Apply */}
      <div className="flex flex-col md:flex-row md:flex-wrap items-center gap-4 md:gap-[13px]">
        {/* Countries Filter */}
        <Select>
          <SelectTrigger className="w-full md:w-[331px] h-[39px] text-[13px] font-medium border-[#EBEBEB] shadow-none rounded-[3.5px] text-[#939393]">
             <div className="flex items-center gap-2">
              <Landmark className="h-4 w-4" />
              <SelectValue placeholder="Countries" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Countries</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="usa">United States</SelectItem>
            <SelectItem value="canada">Canada</SelectItem>
            <SelectItem value="australia">Australia</SelectItem>
          </SelectContent>
        </Select>

        {/* Apply Filters Button */}
        <Button 
          onClick={onApplyFilters} 
          variant="outline"
          className="w-full md:w-[125px] h-[39px] px-0 text-[#226CF5] border-[#226CF5] hover:bg-blue-50 font-medium text-[13px] shadow-none rounded-[3.5px]"
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
}
