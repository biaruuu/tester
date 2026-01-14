"use client";

import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Menu and Logo */}
          <div className="flex items-center gap-4">
            <button
              className="p-2 hover:bg-secondary rounded-md transition-colors"
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <div className="w-8 h-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-yellow-600 rounded-md transform rotate-12"></div>
                    <div className="absolute inset-1 bg-background rounded-sm"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">A</span>
                    </div>
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-sm font-bold text-primary">ani</span>
                    <span className="text-sm font-bold text-foreground">watch</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Right side - Search and Login */}
          <div className="flex items-center gap-3">
            <button
              className="p-2 hover:bg-secondary rounded-md transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 rounded-md"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
