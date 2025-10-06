import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Highlighter } from "@/components/magicui/highlighter"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background reference image for visual parity */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">

      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24 relative">
        <div className="max-w-3xl">
          <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            The <Highlighter action="highlight" color="#FFD700" duration={0.8}>Technology Ecosystem</Highlighter>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A network of <Highlighter action="underline" color="#FF9800" delay={0.3}>projects, protocols, and builders</Highlighter>—each with autonomy yet united by{" "}
            <Highlighter action="highlight" color="#87CEFA" delay={0.6}>shared standards and governance</Highlighter>.
          </p>
          <div className="mt-6 sm:mt-8">
            <Button asChild className="rounded-full w-full sm:w-auto">
              <Link href="#ecosystem">Explore Ecosystem</Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 flex items-center justify-center sm:justify-end pr-0 sm:pr-2">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <span className="opacity-70">Powered by</span>
            <span className="font-semibold">Oorth Nexus</span>
          </div>
        </div>
      </div>
    </section>
  )
}
