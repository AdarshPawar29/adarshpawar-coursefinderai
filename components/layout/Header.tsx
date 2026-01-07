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
import { Search, Bell, Megaphone, ChevronDown, LogOut, Settings, User } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="relative z-50 h-[76px] bg-primary shadow-[0px_0px_16px_rgba(34,108,245,0.08)] border-b border-white/10">
      <div className="flex h-full items-center justify-between px-4 lg:px-6">
        {/* Left Section: Logo & Search */}
        <div className="flex items-center flex-1 gap-8 lg:gap-12">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* Mobile menu spacer */}
            <div className="w-10 lg:hidden" />
            
            {/* Desktop Logo */}
            <Link href="/" className="hidden lg:flex items-center">
              <span className="text-white font-bold text-[18px]">
                coursefinder<span className="font-normal">.ai</span>
              </span>
            </Link>
            
            {/* Mobile Logo */}
            <Link href="/" className="lg:hidden flex items-center">
              <span className="text-white font-bold text-[16px]">
                coursefinder<span className="font-normal">.ai</span>
              </span>
            </Link>
          </div>

          {/* Search Bar - Fixed width, left aligned */}
          <div className="hidden md:block w-[356px]">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#999999]" />
              <Input
                type="search"
                placeholder="Search by student name, ack no."
                className="w-full h-10 pl-11 pr-4 bg-white border-0 text-foreground placeholder:text-[#7E7E7E] rounded-[4px] focus-visible:ring-2 focus-visible:ring-white/30 shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* What's New */}
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:flex items-center gap-2 text-white hover:bg-white/15 hover:text-white h-9 px-3"
          >
            <Megaphone className="h-4 w-4" />
            <span className="hidden lg:inline text-[14px]">What&apos;s New?</span>
          </Button>

          {/* Notifications - Rounded Square Box */}
          <Button
            variant="ghost"
            size="icon"
            className="relative h-11 w-11 rounded-lg border border-white/20 bg-primary hover:bg-white/10 text-white"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            {/* Notification Badge */}
            <span className="absolute top-2.5 right-2.5 h-2.5 w-2.5 rounded-full bg-[#FF1A2F] ring-2 ring-[#226CF5]" />
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-3 text-white hover:bg-white/10 hover:text-white px-2 pr-4 h-14 rounded-xl"
              >
                {/* Profile Frame / Avatar - Rounded Square */}
                <Avatar className="h-11 w-11 rounded-lg border border-white/20">
                  <AvatarImage src="/avatar-placeholder.png" alt="User avatar" className="object-cover" />
                  <AvatarFallback className="bg-white/25 text-white text-sm font-medium rounded-lg">
                    DG
                  </AvatarFallback>
                </Avatar>
                
                <div className="hidden lg:flex flex-col items-start gap-0.5">
                  <span className="text-[14px] font-medium leading-none">Diksha Goel</span>
                </div>
                
                <ChevronDown className="h-4 w-4 opacity-70 ml-1" />
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
