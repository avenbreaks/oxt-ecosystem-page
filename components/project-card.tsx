"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Github, Twitter } from "lucide-react"
import type { Project } from "@/lib/projects"
import Image from "next/image"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/project/${project.slug}`} className="block group">
      <Card className="h-full transition-colors hover:bg-accent/30">
        <CardHeader className="grid grid-cols-[48px_1fr_auto] items-start gap-4">
          {/* Logo placeholder */}
          <div className="size-12 rounded-lg bg-secondary border flex items-center justify-center overflow-hidden">
            <Image src="/project-logo-placeholder.jpg" alt="" width={48} height={48} className="object-cover" />
          </div>
          <div>
            <CardTitle className="text-base">{project.name}</CardTitle>
            <div className="mt-1">
              <Badge className="text-xs">{project.category}</Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent className="-mt-4">
          <CardDescription className="line-clamp-2">{project.description}</CardDescription>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.chains.map((c) => (
              <span key={c} className="text-xs rounded-full border px-2 py-0.5 bg-secondary">
                {c}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="justify-between">
          <div className="flex items-center gap-2 text-muted-foreground">
            {project.links.website && <Globe className="size-4" aria-hidden />}
            {project.links.x && <Twitter className="size-4" aria-hidden />}
            {project.links.github && <Github className="size-4" aria-hidden />}
          </div>
          <span className="text-xs text-muted-foreground group-hover:underline">View details</span>
        </CardFooter>
      </Card>
    </Link>
  )
}
