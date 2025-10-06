import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { PROJECTS } from "@/lib/projects"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Globe, Github, Twitter } from "lucide-react"
import { ChainBadges } from "@/components/chain-badges"

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) return notFound()

  return (
    <>
      <SiteHeader />

      <main className="container mx-auto px-4 md:px-8">
        <div className="mt-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/project">Projects</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{project.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-6">
          {/* Summary */}
          <Card>
            <CardHeader className="grid grid-cols-[56px_1fr_auto] gap-4 items-start">
              <div className="size-14 rounded-xl bg-secondary border flex items-center justify-center overflow-hidden">
                {project.logoUrl ? (
                  <Image
                    src={project.logoUrl}
                    alt={`${project.name} logo`}
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                ) : (
                  <span className="text-2xl font-bold text-muted-foreground">
                    {project.name.charAt(0)}
                  </span>
                )}
              </div>
              <div>
                <CardTitle className="text-xl">{project.name}</CardTitle>
                <div className="mt-1">
                  <Badge>{project.category}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="-mt-2 space-y-4">
              <div>
                <h3 className="text-sm font-semibold">Chains:</h3>
                <div className="mt-2">
                  <ChainBadges chains={project.chains} maxVisible={5} />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Socials & Links:</h3>
                <div className="mt-2 flex items-center gap-3 text-muted-foreground">
                  {project.links.website && (
                    <a href={project.links.website} aria-label="Website" className="hover:text-foreground">
                      <Globe className="size-4" />
                    </a>
                  )}
                  {project.links.x && (
                    <a href={project.links.x} aria-label="X/Twitter" className="hover:text-foreground">
                      <Twitter className="size-4" />
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} aria-label="GitHub" className="hover:text-foreground">
                      <Github className="size-4" />
                    </a>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Description / Value Proposition */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground/80">{project.description}</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Value Proposition</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground/80">{project.valueProposition}</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Programs */}
        <section className="mt-8">
          <h2 className="text-lg font-semibold mb-3">Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {project.programs.map((pg) => (
              <Card key={pg.title} className="overflow-hidden">
                <div className="h-40 bg-muted" aria-hidden />
                <CardHeader className="flex-row items-center justify-between">
                  <CardTitle className="text-base">{pg.title}</CardTitle>
                  <Badge variant={pg.status === "Live" ? "default" : pg.status === "Ended" ? "secondary" : "outline"}>
                    {pg.status}
                  </Badge>
                </CardHeader>
                <CardContent>
                  {pg.reward ? (
                    <p className="text-sm text-muted-foreground">Rewards: {pg.reward}</p>
                  ) : (
                    <p className="text-sm text-muted-foreground">Program details coming soon.</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
