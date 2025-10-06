import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { SectionsGrid } from "@/components/sections-grid"
import { ResourceCards } from "@/components/resource-cards"
import { SiteFooter } from "@/components/site-footer"
import { PoweredByOptimism } from "@/components/powered-by-optimism"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <section className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
          <SectionsGrid />
        </section>

        <PoweredByOptimism />

        <section className="container mx-auto px-4 sm:px-6 md:px-8 mt-12 sm:mt-16 md:mt-20 lg:mt-28">
          <header className="mb-6 sm:mb-8 md:mb-10">
            <p className="text-xs sm:text-sm text-muted-foreground">All Insights</p>
            <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mt-1">Resources and Updates</h2>
          </header>
          <ResourceCards />
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
