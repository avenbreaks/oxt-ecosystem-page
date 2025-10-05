"use client"

import { useMemo, useState } from "react"
import { PROJECTS, type Project } from "@/lib/projects"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"

const categories = ["All", "DEX", "Bridge", "Lending", "Identity", "Analytics", "Infra"] as const
const chains = ["All", "Oorth Nexus", "Ethereum"] as const

export default function ProjectsPage() {
  const [q, setQ] = useState("")
  const [category, setCategory] = useState<(typeof categories)[number]>("All")
  const [chain, setChain] = useState<(typeof chains)[number]>("All")

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesQ = [p.name, p.description].some((t) => t.toLowerCase().includes(q.toLowerCase()))
      const matchesCategory = category === "All" || p.category === category
      const matchesChain = chain === "All" || p.chains.includes(chain)
      return matchesQ && matchesCategory && matchesChain
    })
  }, [q, category, chain])

  return (
    <>
      <SiteHeader />

      <main className="container mx-auto px-4 md:px-8">
        {/* Banner */}
        <section className="mt-10 rounded-2xl border bg-secondary/60 px-6 py-10 relative overflow-hidden">
          <h1 className="text-3xl md:text-4xl font-bold text-balance">Projects</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">Discover projects building on the Oorth Nexus.</p>
          <div className="pointer-events-none absolute inset-0 opacity-30">
            {/* subtle pattern reference */}
            <img src="/images/pattern.png" alt="" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Toolbar */}
        <section className="mt-6 flex flex-col md:flex-row gap-3 items-stretch md:items-center">
          <div className="flex-1">
            <Input placeholder="Search" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search projects" />
          </div>
          <Select value={category} onValueChange={(v) => setCategory(v as any)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={chain} onValueChange={(v) => setChain(v as any)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Chain" />
            </SelectTrigger>
            <SelectContent>
              {chains.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            onClick={() => {
              setQ("")
              setCategory("All")
              setChain("All")
            }}
          >
            Clear All
          </Button>
        </section>

        {/* Grid */}
        <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((p: Project) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
