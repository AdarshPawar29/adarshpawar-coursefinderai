"use client";

import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
  rightPanel?: React.ReactNode;
}

export function DashboardLayout({ children, rightPanel }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen flex-col bg-[#F8F9FB] overflow-hidden">
      {/* Header - Fixed height at top */}
      <Header />

      {/* Main Content Area - Below Header */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Content Grid */}
        <main className="flex-1 overflow-y-auto p-5 lg:p-6 scroll-smooth">
          {children}
        </main>

        {/* Right Panel - Hidden on smaller screens */}
        {rightPanel && (
          <aside className="hidden xl:block w-[320px] 2xl:w-[360px] bg-[#F8F9FB] overflow-y-auto">
            <div className="p-5">
              {rightPanel}
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
