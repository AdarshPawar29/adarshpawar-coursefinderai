"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter } from "lucide-react";

interface FilterBarProps {
  onApplyFilters?: () => void;
}

export function FilterBar({ onApplyFilters }: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 p-4 bg-white rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
      {/* Year Filter */}
      <Select defaultValue="2024">
        <SelectTrigger className="w-[100px] h-9 text-[13px] font-medium">
          <SelectValue placeholder="Year" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="2024">2024</SelectItem>
          <SelectItem value="2023">2023</SelectItem>
          <SelectItem value="2022">2022</SelectItem>
        </SelectContent>
      </Select>

      {/* Date Created Filter */}
      <Select>
        <SelectTrigger className="w-[130px] h-9 text-[13px] font-medium">
          <SelectValue placeholder="Date Created" />
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
        <SelectTrigger className="w-[130px] h-9 text-[13px] font-medium">
          <SelectValue placeholder="Select intake" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="jan">January 2024</SelectItem>
          <SelectItem value="may">May 2024</SelectItem>
          <SelectItem value="sep">September 2024</SelectItem>
        </SelectContent>
      </Select>

      {/* Countries Filter */}
      <Select>
        <SelectTrigger className="w-[130px] h-9 text-[13px] font-medium">
          <SelectValue placeholder="Countries" />
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
        className="ml-auto shadow-sm"
      >
        <Filter className="mr-2 h-4 w-4" />
        Apply Filters
      </Button>
    </div>
  );
}
