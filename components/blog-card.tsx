import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface BlogCardProps {
  title: string
  excerpt?: string
  slug: string
  category?: string
  publishedAt: string
  backgroundColor?: string
  isSpotlight?: boolean
  weekNumber?: number
}

export function BlogCard({
  title,
  excerpt,
  slug,
  category = "Blog",
  publishedAt,
  backgroundColor = "bg-green-500",
  isSpotlight = false,
  weekNumber,
}: BlogCardProps) {
  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  })

  if (isSpotlight) {
    return (
      <Link href={`/insights/${slug}`} className="block group">
        <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          {/* Colorful header section */}
          <div className={cn(
            "relative p-8 md:p-12 text-white min-h-[280px] flex flex-col justify-between",
            backgroundColor
          )}>
            {/* Decorative pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute right-8 top-8 w-48 h-48 border-4 border-dashed border-white/30 rounded-3xl" />
              <svg className="absolute left-4 top-4 w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="4" cy="4" r="2" />
                <circle cx="12" cy="4" r="2" />
                <circle cx="20" cy="4" r="2" />
                <circle cx="4" cy="12" r="2" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="4" y="4" width="4" height="4" />
                  <rect x="10" y="4" width="4" height="4" />
                  <rect x="4" y="10" width="4" height="4" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Superchain<br />Sunday</h2>
              <p className="text-sm opacity-90">• Insights & Updates</p>
            </div>

            {weekNumber && (
              <div className="absolute right-8 bottom-8 text-[120px] md:text-[180px] font-black opacity-20 leading-none">
                {weekNumber}
              </div>
            )}
          </div>

          {/* Content section */}
          <div className="p-6 md:p-8 bg-white dark:bg-card">
            <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
              {title}
            </h3>
            {excerpt && (
              <p className="text-muted-foreground mb-4 line-clamp-2">{excerpt}</p>
            )}
            <div className="flex items-center justify-between">
              <Badge variant="secondary">{category}</Badge>
              <span className="text-sm text-muted-foreground">{formattedDate}</span>
            </div>
          </div>
        </Card>
      </Link>
    )
  }

  return (
    <Link href={`/insights/${slug}`} className="block group">
      <Card className="overflow-hidden border hover:shadow-lg transition-all duration-300 h-full">
        {/* Colorful header section - smaller version */}
        <div className={cn(
          "relative p-6 text-white min-h-[180px] flex flex-col justify-between",
          backgroundColor
        )}>
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute right-4 top-4 w-32 h-32 border-4 border-dashed border-white/30 rounded-2xl" />
            <svg className="absolute left-3 top-3 w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="4" cy="4" r="2" />
              <circle cx="12" cy="4" r="2" />
              <circle cx="4" cy="12" r="2" />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <rect x="4" y="4" width="4" height="4" />
                <rect x="10" y="4" width="4" height="4" />
                <rect x="4" y="10" width="4" height="4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-1">Superchain<br />Sunday</h3>
            <p className="text-xs opacity-90">• Insights & Updates</p>
          </div>

          {weekNumber && (
            <div className="absolute right-4 bottom-4 text-[80px] font-black opacity-20 leading-none">
              {weekNumber}
            </div>
          )}
        </div>

        {/* Content section */}
        <div className="p-6 bg-white dark:bg-card">
          <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h4>
          {excerpt && (
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{excerpt}</p>
          )}
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-xs">{category}</Badge>
            <span className="text-xs text-muted-foreground">{formattedDate}</span>
          </div>
        </div>
      </Card>
    </Link>
  )
}
