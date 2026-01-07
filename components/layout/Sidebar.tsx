"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  LayoutDashboard,
  Users,
  FileText,
  Search,
  Wallet,
  CreditCard,
  Briefcase,
  Link2,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  MessageSquarePlus,
} from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
}

interface NavGroup {
  title: string;
  icon: React.ElementType;
  items?: NavItem[];
  expandable?: boolean;
}

const mainNavItems: NavItem[] = [
  { title: "Dashboard", href: "/", icon: LayoutDashboard },
  { title: "Students", href: "/students", icon: Users },
  { title: "Applications", href: "/applications", icon: FileText },
  { title: "Search Courses", href: "/search", icon: Search },
  { title: "Wallet", href: "/wallet", icon: Wallet },
  { title: "Commission Payments", href: "/commission", icon: CreditCard },
];

const navGroups: NavGroup[] = [
  { title: "Allied Services", icon: Briefcase, expandable: true },
  { title: "Quick Links", icon: Link2, expandable: true },
  { title: "Learning Resources", icon: BookOpen, expandable: true },
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
                    <item.icon className={cn("h-5 w-5", active ? "text-white" : "text-[#666666]")} />
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
                        <group.icon className="h-5 w-5 text-[#666666]" />
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
              <MessageSquarePlus className="h-5 w-5 text-[#666666]" />
              Submit feedback
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
