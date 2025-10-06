"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ChevronDown, Menu } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-6 w-6 rounded-full bg-primary" aria-hidden />
          <span className="tracking-tight">No :stem</span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <button
                className="inline-flex items-center gap-1 text-sm font-medium hover:text-foreground/80 transition-colors"
                aria-haspopup="menu"
                aria-expanded={open}
              >
                Ecosystem <ChevronDown className="size-4" aria-hidden />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>Explore</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/project">Projects</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/insights">Insights</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/events">Events</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/programs">Programs</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/project" className="text-sm font-medium hover:text-foreground/80">
            Projects
          </Link>
          <Link href="#opportunities" className="text-sm font-medium hover:text-foreground/80">
            Opportunities
          </Link>
          <Link href="/develop" className="text-sm font-medium hover:text-foreground/80">
            Develop
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {/* Submit Project Button - Hidden on small mobile */}
          <Button
            asChild
            variant="default"
            className="hidden sm:inline-flex rounded-full bg-accent text-accent-foreground hover:opacity-90"
            aria-label="Submit a new project"
          >
            <Link href="/project/new">Submit Project</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Ecosystem
                  </p>
                  <Link
                    href="/project"
                    className="text-base font-medium py-2 px-3 hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Projects
                  </Link>
                  <Link
                    href="/insights"
                    className="text-base font-medium py-2 px-3 hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Insights
                  </Link>
                  <Link
                    href="/events"
                    className="text-base font-medium py-2 px-3 hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Events
                  </Link>
                  <Link
                    href="/programs"
                    className="text-base font-medium py-2 px-3 hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Programs
                  </Link>
                </div>

                <div className="h-px bg-border my-2" />

                <Link
                  href="#opportunities"
                  className="text-base font-medium py-2 px-3 hover:bg-secondary rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Opportunities
                </Link>
                <Link
                  href="/develop"
                  className="text-base font-medium py-2 px-3 hover:bg-secondary rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Develop
                </Link>

                <div className="h-px bg-border my-2" />

                <Button
                  asChild
                  className="rounded-full bg-accent text-accent-foreground hover:opacity-90 w-full"
                >
                  <Link href="/project/new" onClick={() => setMobileMenuOpen(false)}>
                    Submit Project
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
