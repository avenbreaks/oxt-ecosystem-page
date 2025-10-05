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
    <div id="ecosystem" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {sections.map((s, idx) => (
        <Card key={s.id} className={`group relative overflow-hidden transition-transform hover:-translate-y-0.5`}>

          <CardHeader className="min-h-40">
            <div className="flex items-start justify-between gap-4">
              <div>
                <CardTitle className="text-xl md:text-2xl">{s.title}</CardTitle>
                <CardDescription className="mt-2 max-w-[45ch]">{s.description}</CardDescription>
              </div>
              <button
                aria-label={`Go to ${s.title}`}
                className="mt-1 inline-flex size-9 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:translate-x-0.5"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}
