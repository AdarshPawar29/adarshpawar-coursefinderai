"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Maximize2, ChevronLeft, ChevronRight, ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Application {
  id: string;
  ackNo: string;
  studentName: string;
  studentEmail: string;
  university: string;
  program: string;
  programDetail: string;
  pendingTime: string;
  pendingDate: string;
}

const mockApplications: Application[] = [
  {
    id: "1",
    ackNo: "117110/22-23",
    studentName: "Rishi Joshi",
    studentEmail: "rishijoshi@gmail.com",
    university: "Sheffield Hallam...",
    program: "Msc",
    programDetail: "Internatio...",
    pendingTime: "1 Day",
    pendingDate: "12 Dec 2022",
  },
  {
    id: "2",
    ackNo: "117110/22-23",
    studentName: "Viren Shah",
    studentEmail: "virensha24@gmail.com",
    university: "Sheffield Hallam...",
    program: "Msc",
    programDetail: "Internatio...",
    pendingTime: "1 Day",
    pendingDate: "12 Dec 2022",
  },
  {
    id: "3",
    ackNo: "117110/22-23",
    studentName: "Tushar Joshi",
    studentEmail: "rishijoshi@gmail.com",
    university: "Sheffield Hallam...",
    program: "Msc",
    programDetail: "Internatio...",
    pendingTime: "1 Day",
    pendingDate: "12 Dec 2022",
  },
  {
    id: "4",
    ackNo: "117110/22-23",
    studentName: "Rishi Joshi",
    studentEmail: "rishijoshi@gmail.com",
    university: "Sheffield Hallam...",
    program: "Msc",
    programDetail: "Internatio...",
    pendingTime: "1 Day",
    pendingDate: "12 Dec 2022",
  },
  {
    id: "5",
    ackNo: "117110/22-23",
    studentName: "Rishi Joshi",
    studentEmail: "rishijoshi@gmail.com",
    university: "Sheffield Hallam...",
    program: "Msc",
    programDetail: "Internatio...",
    pendingTime: "1 Day",
    pendingDate: "12 Dec 2022",
  },
];

export function ApplicationsTable() {
  const [activeTab, setActiveTab] = useState("pending");

  return (
    <div className="bg-white rounded-[8px] shadow-[0px_2px_15px_rgba(0,0,0,0.1)] h-full flex flex-col">
      {/* Header */}
      <div className="px-5 pt-6 pb-4 flex justify-between items-center">
        <h2 className="text-[18px] font-bold text-[#3B3B3B]">Applications</h2>
        <button 
          className="text-[#717171] hover:text-[#3B3B3B] transition-colors"
          aria-label="Maximize table"
        >
          <Maximize2 className="h-4 w-4" />
        </button>
      </div>

      {/* Custom Tabs */}
      <div className="px-5 flex gap-4 mb-4" role="tablist">
        <button
          role="tab"
          aria-selected={activeTab === "pending"}
          onClick={() => setActiveTab("pending")}
          className={cn(
            "px-3 py-1.5 rounded-[4px] text-[14px] font-semibold transition-colors flex items-center gap-2",
            activeTab === "pending"
              ? "bg-[#EBF2FF] text-[#226CF5]"
              : "bg-transparent text-[#3B3B3B] hover:bg-gray-50"
          )}
        >
          Pending On Me <span className={cn("text-[14px]", activeTab === "pending" ? "text-[#226CF5]" : "text-[#3B3B3B]")}>(15)</span>
        </button>
        <button
          role="tab"
          aria-selected={activeTab === "lorem1"}
          onClick={() => setActiveTab("lorem1")}
          className={cn(
            "px-3 py-1.5 rounded-[4px] text-[14px] font-medium transition-colors flex items-center gap-2",
            activeTab === "lorem1"
              ? "bg-[#EBF2FF] text-[#226CF5]"
              : "bg-transparent text-[#3B3B3B] hover:bg-gray-50"
          )}
        >
          Lorem Ipsum (12)
        </button>
        <button
          role="tab"
          aria-selected={activeTab === "lorem2"}
          onClick={() => setActiveTab("lorem2")}
          className={cn(
            "px-3 py-1.5 rounded-[4px] text-[14px] font-medium transition-colors flex items-center gap-2",
            activeTab === "lorem2"
              ? "bg-[#EBF2FF] text-[#226CF5]"
              : "bg-transparent text-[#3B3B3B] hover:bg-gray-50"
          )}
        >
          Lorem Ipsum (18)
        </button>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <Table className="min-w-[800px]">
          <TableHeader className="bg-[#EBEEF1]">
            <TableRow className="border-none hover:bg-[#EBEEF1]">
              <TableHead className="w-[140px] text-[#717171] font-medium text-[13px] h-[36px] text-center p-0">
                <button className="flex w-full h-full items-center justify-center gap-1 cursor-pointer hover:text-[#3B3B3B]" aria-label="Sort by acknowledgement number">
                  Ack. no. <ArrowUpDown className="h-3 w-3" />
                </button>
              </TableHead>
              <TableHead className="text-[#717171] font-medium text-[13px] h-[36px] p-0">
                <button className="flex w-full h-full items-center gap-1 cursor-pointer hover:text-[#3B3B3B] px-4" aria-label="Sort by student name">
                  Student name <ArrowUpDown className="h-3 w-3" />
                </button>
              </TableHead>
              <TableHead className="text-[#717171] font-medium text-[13px] h-[36px] p-0">
                <button className="flex w-full h-full items-center gap-1 cursor-pointer hover:text-[#3B3B3B] px-4" aria-label="Sort by university">
                  University <ArrowUpDown className="h-3 w-3" />
                </button>
              </TableHead>
              <TableHead className="text-[#717171] font-medium text-[13px] h-[36px] p-0">
                <button className="flex w-full h-full items-center gap-1 cursor-pointer hover:text-[#3B3B3B] px-4" aria-label="Sort by program">
                  Program <ArrowUpDown className="h-3 w-3" />
                </button>
              </TableHead>
              <TableHead className="text-[#717171] font-medium text-[13px] h-[36px] text-center p-0">
                <button className="flex w-full h-full items-center justify-center gap-1 cursor-pointer hover:text-[#3B3B3B]" aria-label="Sort by pending time">
                  Pending Since <ArrowUpDown className="h-3 w-3" />
                </button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockApplications.map((app) => (
              <TableRow
                key={app.id}
                className="cursor-pointer hover:bg-[#F8F9FB] border-b border-[#EBEBEB] last:border-0"
              >
                <TableCell className="py-4 align-top text-center">
                  <span className="text-[#3B3B3B] text-[13px] border-b border-[#3B3B3B] pb-[1px] leading-tight">
                    {app.ackNo}
                  </span>
                </TableCell>
                <TableCell className="py-4 align-top">
                  <div className="flex flex-col">
                    <span className="text-[#3B3B3B] text-[13px] font-medium">
                      {app.studentName}
                    </span>
                    <span className="text-[#717171] text-[13px]">
                      {app.studentEmail}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="py-4 align-top">
                  <span className="text-[#3B3B3B] text-[13px] font-medium">
                    {app.university}
                  </span>
                </TableCell>
                <TableCell className="py-4 align-top">
                  <div className="flex flex-col">
                    <span className="text-[#3B3B3B] text-[13px] font-medium">
                      {app.program}
                    </span>
                    <span className="text-[#3B3B3B] text-[13px]">
                      {app.programDetail}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="py-4 align-top text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-[#3B3B3B] text-[13px] font-medium">
                      {app.pendingTime}
                    </span>
                    <span className="text-[#717171] text-[12px]">
                      {app.pendingDate}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 py-6 mt-auto">
        <button 
          className="h-8 w-8 flex items-center justify-center text-[#939393] hover:text-[#3B3B3B]"
          aria-label="Previous page"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button 
          className="h-8 w-8 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-[#3B3B3B] font-bold text-[14px] flex items-center justify-center border border-[#EBEBEB]"
          aria-label="Page 1"
          aria-current="page"
        >
          1
        </button>
        <button 
          className="h-8 w-8 rounded-full text-[#939393] hover:text-[#3B3B3B] hover:bg-gray-50 text-[14px] font-medium flex items-center justify-center transition-colors"
          aria-label="Page 2"
        >
          2
        </button>
        <button 
          className="h-8 w-8 rounded-full text-[#939393] hover:text-[#3B3B3B] hover:bg-gray-50 text-[14px] font-medium flex items-center justify-center transition-colors"
          aria-label="Page 3"
        >
          3
        </button>
        <button 
          className="h-8 w-8 flex items-center justify-center text-[#226CF5] hover:text-[#1952C1]"
          aria-label="Next page"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
