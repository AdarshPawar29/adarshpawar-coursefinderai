"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, Bell, Sparkles, ChevronDown, LogOut, Settings, User } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="relative z-50 h-[76px] bg-primary shadow-md">
      <div className="flex h-full items-center justify-between px-4 lg:px-6">
        {/* Logo - Shows on all screens when sidebar is hidden, desktop shows in header */}
        <div className="flex items-center gap-3">
          {/* Mobile menu spacer */}
          <div className="w-10 lg:hidden" />
          
          {/* Desktop Logo */}
          <Link href="/" className="hidden lg:flex items-center">
            <span className="text-white font-semibold text-[18px]">
              coursefinder<span className="font-normal">.ai</span>
            </span>
          </Link>
          
          {/* Mobile Logo */}
          <Link href="/" className="lg:hidden flex items-center">
            <span className="text-white font-semibold text-[16px]">
              coursefinder<span className="font-normal">.ai</span>
            </span>
          </Link>
        </div>

        {/* Search Bar - Centered */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#999999]" />
            <Input
              type="search"
              placeholder="Search by student name, ack no."
              className="w-full h-10 pl-11 pr-4 bg-white border-0 text-foreground placeholder:text-muted-foreground rounded-lg focus-visible:ring-2 focus-visible:ring-white/30 shadow-sm"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 lg:gap-4">
          {/* What's New */}
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:flex items-center gap-2 text-white hover:bg-white/15 hover:text-white h-9 px-3"
          >
            <Sparkles className="h-4 w-4" />
            <span className="hidden lg:inline text-[14px]">What&apos;s New?</span>
          </Button>

          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="relative text-white hover:bg-white/15 hover:text-white h-9 w-9"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            {/* Red dot indicator */}
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-[#226CF5]" />
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-white hover:bg-white/15 hover:text-white px-2 h-10"
              >
                <Avatar className="h-8 w-8 border-2 border-white/40">
                  <AvatarImage src="/avatar-placeholder.png" alt="User avatar" />
                  <AvatarFallback className="bg-white/25 text-white text-sm font-medium">
                    DG
                  </AvatarFallback>
                </Avatar>
                <span className="hidden lg:inline text-[14px] font-medium">Diksha Goel</span>
                <ChevronDown className="h-4 w-4 opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">Diksha Goel</p>
                  <p className="text-xs text-muted-foreground">diksha@kcpartners.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive focus:text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
