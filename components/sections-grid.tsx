import { ArrowRight } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const sections = [
  {
    id: "chains",
    title: "Chains",
    description: "Explore blockchain networks advancing the ecosystem.",
  },
  {
    id: "projects",
    title: "Projects",
    description: "Discover projects building in the ecosystem.",
  },
  {
    id: "contributors",
    title: "Contributors",
    description: "Meet individuals and teams driving progress forward.",
  },
  {
    id: "programs",
    title: "Programs",
    description: "Find builder/user programs and campaigns.",
  },
  {
    id: "events",
    title: "Events",
    description: "See upcoming events across the ecosystem.",
  },
]

export function SectionsGrid() {
  return (
    <div id="ecosystem" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
      {sections.map((s, idx) => (
        <Card key={s.id} className={`group relative overflow-hidden transition-transform hover:-translate-y-0.5`}>

          <CardHeader className="min-h-[140px] sm:min-h-40 p-4 sm:p-6">
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <CardTitle className="text-lg sm:text-xl md:text-2xl">{s.title}</CardTitle>
                <CardDescription className="mt-2 text-sm sm:text-base line-clamp-2">{s.description}</CardDescription>
              </div>
              <button
                aria-label={`Go to ${s.title}`}
                className="mt-1 inline-flex size-8 sm:size-9 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:translate-x-0.5 flex-shrink-0"
              >
                <ArrowRight className="size-3 sm:size-4" />
              </button>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}
