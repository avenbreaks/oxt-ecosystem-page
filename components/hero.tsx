import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background reference image for visual parity */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 relative">
        <div className="max-w-3xl">
          <h1 className="text-balance text-4xl md:text-6xl font-extrabold tracking-tight">The Technology Ecosystem</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            A network of projects, protocols, and builders—each with autonomy yet united by shared standards and
            governance.
          </p>
          <div className="mt-8">
            <Button asChild className="rounded-full">
              <Link href="#ecosystem">Explore Ecosystem</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-end pr-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="opacity-70">Powered by</span>
            <span className="font-semibold">Oorth Nexus</span>
          </div>
        </div>
      </div>
    </section>
  )
}
