import { Card } from "@/components/ui/card"
import { Marquee } from "@/components/ui/marquee"

const resources = [
  { title: "Ecosystem Weekly 39", color: "bg-primary text-primary-foreground" },
  { title: "Ecosystem Weekly 38", color: "bg-blue-500 text-white" },
  { title: "Ecosystem Weekly 37", color: "bg-accent text-accent-foreground" },
  { title: "Ecosystem Weekly 36", color: "bg-neutral-900 text-white" },
  { title: "Developer Spotlight: Building on OP Stack", color: "bg-purple-600 text-white" },
  { title: "Q4 2025 Roadmap Update", color: "bg-green-600 text-white" },
  { title: "Security Best Practices Guide", color: "bg-orange-600 text-white" },
  { title: "Community Governance Vote Results", color: "bg-indigo-600 text-white" },
]

export function ResourceCards() {
  return (
    <div id="insights" className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:40s]">
        {resources.map((r, idx) => (
          <Card key={`${r.title}-${idx}`} className={`${r.color} p-6 md:p-8 rounded-2xl w-[280px] md:w-[320px] shrink-0`}>
            <div className="flex flex-col gap-2">
              <span className="text-xs opacity-80">Insight</span>
              <h3 className="text-pretty text-2xl font-semibold leading-7">{r.title}</h3>
            </div>
          </Card>
        ))}
      </Marquee>
    </div>
  )
}
