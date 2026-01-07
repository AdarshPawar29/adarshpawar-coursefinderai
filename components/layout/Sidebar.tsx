"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

interface NavItem {
  title: string;
  href: string;
  icon: string;
}

interface NavGroup {
  title: string;
  icon: string;
  items?: NavItem[];
  expandable?: boolean;
}

const mainNavItems: NavItem[] = [
  { title: "Dashboard", href: "/", icon: "/assets/icons/Dashboard.svg" },
  { title: "Students", href: "/students", icon: "/assets/icons/Students.svg" },
  { title: "Applications", href: "/applications", icon: "/assets/icons/Applications.svg" },
  { title: "Search Courses", href: "/search", icon: "/assets/icons/Search Courses.svg" },
  { title: "Wallet", href: "/wallet", icon: "/assets/icons/Wallet.svg" },
  { title: "Commission Payments", href: "/commission", icon: "/assets/icons/Commission Payments.svg" },
];

const navGroups: NavGroup[] = [
  { title: "Allied Services", icon: "/assets/icons/Allied Services.svg", expandable: true },
  { title: "Quick Links", icon: "/assets/icons/Quick Links.svg", expandable: true },
  { title: "Learning Resources", icon: "/assets/icons/Learning Resources.svg", expandable: true },
];

export function Sidebar() {
  const pathname = usePathname();
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleGroup = (title: string) => {
    setExpandedGroups((prev) =>
      prev.includes(title)
        ? prev.filter((g) => g !== title)
        : [...prev, title]
    );
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-5 left-4 z-50 lg:hidden text-white hover:bg-white/20"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-[76px] z-40 h-[calc(100vh-76px)] w-[264px] transform bg-white border-r border-[#EBEBEB] transition-transform duration-300 ease-in-out lg:static lg:h-full lg:translate-x-0",
          "shadow-[0_0_16px_rgba(147,147,147,0.04)]",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Navigation */}
          <ScrollArea className="flex-1 py-4">
            <nav className="px-3 space-y-1">
              {mainNavItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg text-[14px] font-normal transition-all duration-200",
                      active
                        ? "bg-[#226CF5] text-white shadow-sm"
                        : "text-[#666666] hover:bg-[#F5F5F5] hover:text-[#1A1A1A]"
                    )}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={20}
                      height={20}
                      className={cn("h-5 w-5", active ? "" : "")}
                    />
                    {item.title}
                  </Link>
                );
              })}
            </nav>

            {/* Expandable Groups */}
            <div className="px-3 mt-2 space-y-1">
              {navGroups.map((group) => {
                const isExpanded = expandedGroups.includes(group.title);
                return (
                  <div key={group.title}>
                    <button
                      onClick={() => toggleGroup(group.title)}
                      className="flex w-full items-center justify-between px-4 py-3 rounded-lg text-[14px] font-normal text-[#666666] hover:bg-[#F5F5F5] hover:text-[#1A1A1A] transition-all duration-200"
                    >
                      <span className="flex items-center gap-3">
                        <Image
                          src={group.icon}
                          alt={group.title}
                          width={20}
                          height={20}
                          className="h-5 w-5"
                        />
                        {group.title}
                      </span>
                      {isExpanded ? (
                        <ChevronDown className="h-4 w-4 text-[#666666]" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-[#666666]" />
                      )}
                    </button>
                    {isExpanded && group.items && (
                      <div className="ml-8 space-y-1 py-1">
                        {group.items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2 text-[14px] text-[#666666] hover:text-[#1A1A1A] transition-colors"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </ScrollArea>

          <div className="p-3">
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-[14px] font-normal text-[#666666] hover:bg-[#F5F5F5] hover:text-[#1A1A1A] transition-all duration-200"
            >
              <Image
                src="/assets/icons/Submit feedback.svg"
                alt="Submit feedback"
                width={20}
                height={20}
                className="h-5 w-5"
              />
              Submit feedback
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
