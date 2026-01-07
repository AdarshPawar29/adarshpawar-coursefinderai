"use client";

import { Button } from "@/components/ui/button";
import { DashboardLayout } from "@/components/layout";
import {
  StatCardsGrid,
  FilterBar,
  ApplicationsTable,
  PromoBanner,
  NewsBulletin,
  UpcomingEvents,
  QuickLinks,
  ContactSection,
} from "@/components/dashboard";
import { RefreshCw, UserPlus } from "lucide-react";

// Mock stats data
const statsData = [
  {
    value: 18,
    label: "Conditional",
    description: "Offer letter",
    variant: "blue" as const,
  },
  {
    value: 22,
    label: "Un-Conditional",
    description: "Offer letter",
    variant: "green" as const,
  },
  {
    value: 30,
    label: "Payment Received",
    description: "All Country",
    variant: "yellow" as const,
  },
  {
    value: 8,
    label: "VISA Received",
    description: "Offer letter",
    variant: "gray" as const,
  },
];

// Right Panel Component
function RightPanel() {
  return (
    <div className="space-y-5">
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          className="flex-1 gap-2 border-primary text-primary hover:bg-primary/5 hover:text-primary px-2"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Refresh</span>
        </Button>
        <Button 
          className="flex-1 gap-2 bg-primary hover:bg-primary/90 px-2"
        >
          <UserPlus className="h-4 w-4" />
          <span>Register</span>
        </Button>
      </div>
      <NewsBulletin />
      <UpcomingEvents />
      <QuickLinks />
      <ContactSection />
    </div>
  );
}

export default function DashboardPage() {
  return (
    <DashboardLayout rightPanel={<RightPanel />}>
      {/* Dashboard Content */}
      <div className="space-y-5">
        {/* Greeting & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-[24px] font-normal text-foreground">
              Hey, Good Morning{" "}
              <span className="text-primary font-medium">Diksha!</span>
            </h1>
          </div>
          <div className="flex items-center gap-3 xl:hidden">
            <Button 
              variant="outline" 
              className="gap-2 border-primary text-primary hover:bg-primary/5 hover:text-primary"
            >
              <RefreshCw className="h-4 w-4" />
              <span className="hidden sm:inline">Refresh Dashboard</span>
              <span className="sm:hidden">Refresh</span>
            </Button>
            <Button 
              className="gap-2 bg-primary hover:bg-primary/90"
            >
              <UserPlus className="h-4 w-4" />
              <span className="hidden sm:inline">Register Student</span>
              <span className="sm:hidden">Register</span>
            </Button>
          </div>
        </div>

        {/* Filter Bar */}
        <FilterBar />

        {/* Stats Cards */}
        <StatCardsGrid stats={statsData} />

        {/* Applications Table */}
        <ApplicationsTable />

        {/* Promo Banner */}
        <PromoBanner />
      </div>
    </DashboardLayout>
  );
}
