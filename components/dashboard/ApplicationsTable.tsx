"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Clock } from "lucide-react";

interface Application {
  id: string;
  ackNo: string;
  studentName: string;
  university: string;
  program: string;
  pendingSince: string;
}

const mockApplications: Application[] = [
  {
    id: "1",
    ackNo: "CRS0245",
    studentName: "John Smith",
    university: "Northern University",
    program: "MBA in Finance",
    pendingSince: "2 days",
  },
  {
    id: "2",
    ackNo: "CRS0246",
    studentName: "Priya Sharma",
    university: "Western College",
    program: "MSc Computer Science",
    pendingSince: "5 days",
  },
  {
    id: "3",
    ackNo: "CRS0247",
    studentName: "Mike Johnson",
    university: "Eastern Institute",
    program: "BBA Marketing",
    pendingSince: "1 day",
  },
  {
    id: "4",
    ackNo: "CRS0248",
    studentName: "Sarah Williams",
    university: "Central University",
    program: "MA Psychology",
    pendingSince: "7 days",
  },
  {
    id: "5",
    ackNo: "CRS0249",
    studentName: "Rahul Verma",
    university: "Pacific College",
    program: "BTech Engineering",
    pendingSince: "3 days",
  },
];

export function ApplicationsTable() {
  return (
    <div className="bg-white rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
      {/* Header */}
      <div className="px-5 py-4 border-b border-[#EBEBEB]">
        <h2 className="text-[16px] font-medium text-[#1A1A1A]">Applications</h2>
      </div>

      {/* Tabs and Content */}
      <Tabs defaultValue="pending" className="w-full">
        <div className="border-b border-[#EBEBEB] px-5">
          <TabsList className="h-auto bg-transparent p-0 gap-6">
            <TabsTrigger
              value="pending"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary px-0 pb-3 pt-3 text-[14px] font-medium text-muted-foreground"
            >
              Pending On Me
              <span className="ml-2 px-2 py-0.5 text-[12px] bg-muted rounded-full text-muted-foreground data-[state=active]:bg-blue-50 data-[state=active]:text-primary">
                15
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="in-progress"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary px-0 pb-3 pt-3 text-[14px] font-medium text-muted-foreground"
            >
              In Progress
              <span className="ml-2 px-2 py-0.5 text-[12px] bg-muted rounded-full text-muted-foreground">
                12
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary px-0 pb-3 pt-3 text-[14px] font-medium text-muted-foreground"
            >
              Completed
              <span className="ml-2 px-2 py-0.5 text-[12px] bg-muted rounded-full text-muted-foreground">
                18
              </span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="pending" className="m-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-b border-[#EBEBEB]">
                  <TableHead className="w-[100px] text-[13px] font-medium text-[#999999] uppercase tracking-wider py-3">
                    Ack. no.
                  </TableHead>
                  <TableHead className="text-[13px] font-medium text-[#999999] uppercase tracking-wider py-3">
                    Student name
                  </TableHead>
                  <TableHead className="hidden md:table-cell text-[13px] font-medium text-[#999999] uppercase tracking-wider py-3">
                    University
                  </TableHead>
                  <TableHead className="hidden lg:table-cell text-[13px] font-medium text-[#999999] uppercase tracking-wider py-3">
                    Program
                  </TableHead>
                  <TableHead className="text-right text-[13px] font-medium text-[#999999] uppercase tracking-wider py-3">
                    Pending Since
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockApplications.map((app) => (
                  <TableRow
                    key={app.id}
                    className="cursor-pointer hover:bg-[#F8F9FB] transition-colors border-b border-[#EBEBEB] last:border-b-0"
                  >
                    <TableCell className="font-medium text-primary text-[14px] py-4">
                      {app.ackNo}
                    </TableCell>
                    <TableCell className="text-[14px] text-[#1A1A1A] py-4">
                      {app.studentName}
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-[14px] text-[#666666] py-4">
                      {app.university}
                    </TableCell>
                    <TableCell className="hidden lg:table-cell text-[14px] text-[#666666] py-4">
                      {app.program}
                    </TableCell>
                    <TableCell className="text-right py-4">
                      <span className="inline-flex items-center gap-1.5 text-[14px] text-[#666666]">
                        <Clock className="h-3.5 w-3.5 text-[#999999]" />
                        {app.pendingSince}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="in-progress" className="m-0 p-8 text-center text-[#666666] text-[14px]">
          No applications in progress.
        </TabsContent>

        <TabsContent value="completed" className="m-0 p-8 text-center text-[#666666] text-[14px]">
          No completed applications.
        </TabsContent>
      </Tabs>
    </div>
  );
}
