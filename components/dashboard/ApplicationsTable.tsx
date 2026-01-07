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
import { useState, useMemo } from "react";

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
    ackNo: "117111/22-23",
    studentName: "Viren Shah",
    studentEmail: "virensha24@gmail.com",
    university: "University of H...",
    program: "Bsc",
    programDetail: "Computer Sc...",
    pendingTime: "2 Days",
    pendingDate: "11 Dec 2022",
  },
  {
    id: "3",
    ackNo: "117112/22-23",
    studentName: "Tushar Joshi",
    studentEmail: "tusharjoshi@gmail.com",
    university: "Coventry Univ...",
    program: "MBA",
    programDetail: "Global Busi...",
    pendingTime: "3 Days",
    pendingDate: "10 Dec 2022",
  },
  {
    id: "4",
    ackNo: "117113/22-23",
    studentName: "Priya Patel",
    studentEmail: "priyap@gmail.com",
    university: "Sheffield Hallam...",
    program: "Msc",
    programDetail: "Data Scien...",
    pendingTime: "5 Days",
    pendingDate: "08 Dec 2022",
  },
  {
    id: "5",
    ackNo: "117114/22-23",
    studentName: "Rahul Sharma",
    studentEmail: "rahul.sharma@gmail.com",
    university: "Leeds Beckett...",
    program: "MA",
    programDetail: "Art & Design",
    pendingTime: "1 Week",
    pendingDate: "05 Dec 2022",
  },
  {
    id: "6",
    ackNo: "117115/22-23",
    studentName: "Anjali Gupta",
    studentEmail: "anjali.g@gmail.com",
    university: "Manchester Met...",
    program: "Msc",
    programDetail: "Psychology",
    pendingTime: "1 Day",
    pendingDate: "12 Dec 2022",
  },
  {
    id: "7",
    ackNo: "117116/22-23",
    studentName: "Karan Mehta",
    studentEmail: "karan.m@gmail.com",
    university: "University of H...",
    program: "BEng",
    programDetail: "Mechanical...",
    pendingTime: "4 Days",
    pendingDate: "09 Dec 2022",
  },
  {
    id: "8",
    ackNo: "117117/22-23",
    studentName: "Sneha Reddy",
    studentEmail: "sneha.r@gmail.com",
    university: "Sheffield Hallam...",
    program: "Msc",
    programDetail: "Biotech...",
    pendingTime: "2 Days",
    pendingDate: "11 Dec 2022",
  },
  {
    id: "9",
    ackNo: "117118/22-23",
    studentName: "Vikram Singh",
    studentEmail: "vikram.s@gmail.com",
    university: "Coventry Univ...",
    program: "MBA",
    programDetail: "Finance",
    pendingTime: "6 Days",
    pendingDate: "07 Dec 2022",
  },
  {
    id: "10",
    ackNo: "117119/22-23",
    studentName: "Neha Verma",
    studentEmail: "neha.v@gmail.com",
    university: "Leeds Beckett...",
    program: "Bsc",
    programDetail: "Nursing",
    pendingTime: "1 Week",
    pendingDate: "05 Dec 2022",
  },
  {
    id: "11",
    ackNo: "117120/22-23",
    studentName: "Amit Kumar",
    studentEmail: "amit.k@gmail.com",
    university: "Sheffield Hallam...",
    program: "Msc",
    programDetail: "IT Mgmt...",
    pendingTime: "1 Day",
    pendingDate: "12 Dec 2022",
  },
  {
    id: "12",
    ackNo: "117121/22-23",
    studentName: "Pooja Rani",
    studentEmail: "pooja.r@gmail.com",
    university: "Manchester Met...",
    program: "MA",
    programDetail: "Fashion...",
    pendingTime: "3 Days",
    pendingDate: "10 Dec 2022",
  },
  {
    id: "13",
    ackNo: "117122/22-23",
    studentName: "Raj Malhotra",
    studentEmail: "raj.m@gmail.com",
    university: "University of H...",
    program: "Bsc",
    programDetail: "Physics",
    pendingTime: "2 Days",
    pendingDate: "11 Dec 2022",
  },
  {
    id: "14",
    ackNo: "117123/22-23",
    studentName: "Simran Kaur",
    studentEmail: "simran.k@gmail.com",
    university: "Coventry Univ...",
    program: "Msc",
    programDetail: "Cyber Sec...",
    pendingTime: "5 Days",
    pendingDate: "08 Dec 2022",
  },
  {
    id: "15",
    ackNo: "117124/22-23",
    studentName: "Arjun Das",
    studentEmail: "arjun.d@gmail.com",
    university: "Leeds Beckett...",
    program: "BA",
    programDetail: "History",
    pendingTime: "1 Day",
    pendingDate: "12 Dec 2022",
  },
];

export function ApplicationsTable() {
  const [activeTab, setActiveTab] = useState("pending");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{ key: keyof Application | null; direction: 'asc' | 'desc' }>({
    key: null,
    direction: 'asc',
  });

  const itemsPerPage = 5;

  const handleSort = (key: keyof Application) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const processedData = useMemo(() => {
    // 1. Filter (if appropriate in future, for now just use all mock data for "pending")
    // Note: To make tabs look "real", we could slice data differently, but let's stick to the 15 items for the main tab.
    let data = [...mockApplications];

    // 2. Sort
    if (sortConfig.key) {
      data.sort((a, b) => {
        if (a[sortConfig.key!] < b[sortConfig.key!]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key!] > b[sortConfig.key!]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return data;
  }, [sortConfig]);

  const totalPages = Math.ceil(processedData.length / itemsPerPage);
  
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return processedData.slice(startIndex, startIndex + itemsPerPage);
  }, [processedData, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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
                <button 
                  className="flex w-full h-full items-center justify-center gap-1 cursor-pointer hover:text-[#3B3B3B]" 
                  aria-label="Sort by acknowledgement number"
                  onClick={() => handleSort('ackNo')}
                >
                  Ack. no. <ArrowUpDown className="h-3 w-3" />
                </button>
              </TableHead>
              <TableHead className="text-[#717171] font-medium text-[13px] h-[36px] p-0">
                <button 
                  className="flex w-full h-full items-center gap-1 cursor-pointer hover:text-[#3B3B3B] px-4" 
                  aria-label="Sort by student name"
                  onClick={() => handleSort('studentName')}
                >
                  Student name <ArrowUpDown className="h-3 w-3" />
                </button>
              </TableHead>
              <TableHead className="text-[#717171] font-medium text-[13px] h-[36px] p-0">
                <button 
                  className="flex w-full h-full items-center gap-1 cursor-pointer hover:text-[#3B3B3B] px-4" 
                  aria-label="Sort by university"
                  onClick={() => handleSort('university')}
                >
                  University <ArrowUpDown className="h-3 w-3" />
                </button>
              </TableHead>
              <TableHead className="text-[#717171] font-medium text-[13px] h-[36px] p-0">
                <button 
                  className="flex w-full h-full items-center gap-1 cursor-pointer hover:text-[#3B3B3B] px-4" 
                  aria-label="Sort by program"
                  onClick={() => handleSort('program')}
                >
                  Program <ArrowUpDown className="h-3 w-3" />
                </button>
              </TableHead>
              <TableHead className="text-[#717171] font-medium text-[13px] h-[36px] text-center p-0">
                <button 
                  className="flex w-full h-full items-center justify-center gap-1 cursor-pointer hover:text-[#3B3B3B]" 
                  aria-label="Sort by pending time"
                  onClick={() => handleSort('pendingTime')}
                >
                  Pending Since <ArrowUpDown className="h-3 w-3" />
                </button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((app) => (
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
          className={cn(
            "h-8 w-8 flex items-center justify-center transition-colors",
            currentPage === 1 ? "text-[#D1D1D1] cursor-not-allowed" : "text-[#939393] hover:text-[#3B3B3B]"
          )}
          aria-label="Previous page"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button 
            key={page}
            className={cn(
              "h-8 w-8 rounded-full text-[14px] flex items-center justify-center transition-colors",
              currentPage === page
                ? "bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-[#3B3B3B] font-bold border border-[#EBEBEB]"
                : "text-[#939393] hover:text-[#3B3B3B] hover:bg-gray-50 font-medium"
            )}
            aria-label={`Page ${page}`}
            aria-current={currentPage === page ? "page" : undefined}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}

        <button 
          className={cn(
            "h-8 w-8 flex items-center justify-center transition-colors",
            currentPage === totalPages ? "text-[#D1D1D1] cursor-not-allowed" : "text-[#226CF5] hover:text-[#1952C1]"
          )}
          aria-label="Next page"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
