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
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-6 w-6 rounded-full bg-primary" aria-hidden />
          <span className="tracking-tight">Tech Eco</span>
        </Link>

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
                <Link href="#projects">Projects</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#insights">Insights</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#events">Events</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#programs">Programs</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/project" className="text-sm font-medium hover:text-foreground/80">
            Projects
          </Link>
          <Link href="#opportunities" className="text-sm font-medium hover:text-foreground/80">
            Opportunities
          </Link>
          <Link href="#develop" className="text-sm font-medium hover:text-foreground/80">
            Develop
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="default"
            className="rounded-full bg-accent text-accent-foreground hover:opacity-90"
            aria-label="Submit a new project"
          >
            <Link href="/project/new">Submit Project</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
