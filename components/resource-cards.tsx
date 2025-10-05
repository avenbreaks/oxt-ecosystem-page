import { Card } from "@/components/ui/card"

const resources = [
  { title: "Ecosystem Weekly 39", color: "bg-primary text-primary-foreground" },
  { title: "Ecosystem Weekly 38", color: "bg-blue-500 text-white" },
  { title: "Ecosystem Weekly 37", color: "bg-accent text-accent-foreground" },
  { title: "Ecosystem Weekly 36", color: "bg-neutral-900 text-white" },
]

export function ResourceCards() {
  return (
    <div id="insights" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {resources.map((r) => (
        <Card key={r.title} className={`${r.color} p-6 md:p-8 rounded-2xl`}>
          <div className="flex flex-col gap-2">
            <span className="text-xs opacity-80">Insight</span>
            <h3 className="text-pretty text-2xl font-semibold leading-7">{r.title}</h3>
          </div>
        </Card>
      ))}
    </div>
  )
}
