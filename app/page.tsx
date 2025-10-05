import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { SectionsGrid } from "@/components/sections-grid"
import { ResourceCards } from "@/components/resource-cards"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <section className="container mx-auto px-4 md:px-8">
          <SectionsGrid />
        </section>

        <section className="container mx-auto px-4 md:px-8 mt-20 md:mt-28">
          <header className="mb-6 md:mb-8">
            <p className="text-sm text-muted-foreground">All Insights</p>
            <h2 className="text-balance text-3xl md:text-5xl font-semibold tracking-tight">Resources and Updates</h2>
          </header>
          <ResourceCards />
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
