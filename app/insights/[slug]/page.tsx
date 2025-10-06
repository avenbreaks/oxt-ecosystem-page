import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { getPost, getPosts } from "@/lib/sanity"
import { PortableText } from "@portabletext/react"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: typeof post.slug === 'string' ? post.slug : post.slug?.current || '',
  }))
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-background">
        {/* Back Button */}
        <div className="container mx-auto px-4 md:px-8 py-8">
          <Link href="/insights">
            <Button variant="ghost" size="sm">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
        </div>

        {/* Header Section - Centered */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              {/* Category and Date */}
              <div className="flex items-center justify-center gap-3 mb-6">
                {post.category && (
                  <Badge variant="secondary" className="text-xs font-medium">
                    {post.category}
                  </Badge>
                )}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarIcon className="h-3.5 w-3.5" />
                  <time dateTime={post.publishedAt}>{formattedDate}</time>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <hr className="border-t border-border" />
          </div>
        </div>

        {/* Content Section - Centered, Clean Typography */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-8">
            <article className="max-w-3xl mx-auto">
              {post.body && (
                <PortableText
                  value={post.body}
                  components={{
                    block: {
                      h1: ({children}) => (
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 mt-12 first:mt-0">
                          {children}
                        </h1>
                      ),
                      h2: ({children}) => (
                        <h2 className="text-2xl md:text-3xl font-bold mb-5 mt-10">
                          {children}
                        </h2>
                      ),
                      h3: ({children}) => (
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 mt-8">
                          {children}
                        </h3>
                      ),
                      h4: ({children}) => (
                        <h4 className="text-lg md:text-xl font-semibold mb-3 mt-6">
                          {children}
                        </h4>
                      ),
                      normal: ({children}) => (
                        <p className="text-base md:text-lg leading-relaxed mb-6 text-foreground/90">
                          {children}
                        </p>
                      ),
                      blockquote: ({children}) => (
                        <blockquote className="border-l-4 border-primary pl-6 py-2 italic my-8 text-lg text-muted-foreground">
                          {children}
                        </blockquote>
                      ),
                    },
                    marks: {
                      link: ({children, value}) => (
                        <a
                          href={value?.href}
                          className="text-primary hover:underline font-medium underline-offset-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {children}
                        </a>
                      ),
                      strong: ({children}) => (
                        <strong className="font-semibold text-foreground">
                          {children}
                        </strong>
                      ),
                      em: ({children}) => <em className="italic">{children}</em>,
                    },
                    list: {
                      bullet: ({children}) => (
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-base md:text-lg">
                          {children}
                        </ul>
                      ),
                      number: ({children}) => (
                        <ol className="list-decimal pl-6 mb-6 space-y-3 text-base md:text-lg">
                          {children}
                        </ol>
                      ),
                    },
                    listItem: {
                      bullet: ({children}) => (
                        <li className="leading-relaxed text-foreground/90">
                          {children}
                        </li>
                      ),
                      number: ({children}) => (
                        <li className="leading-relaxed text-foreground/90">
                          {children}
                        </li>
                      ),
                    },
                  }}
                />
              )}
            </article>
          </div>
        </section>

        {/* Back to Insights CTA - Clean and Simple */}
        <section className="py-16 md:py-20 border-t bg-secondary/30">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Explore More Insights
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Discover more articles and updates from the Oorth Nexus ecosystem
            </p>
            <Link href="/insights">
              <Button size="lg" className="rounded-full">
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                Back to All Insights
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
