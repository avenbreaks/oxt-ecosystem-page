"use client"

import { useState, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BlogCard } from "@/components/blog-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getPosts, getCategories, type BlogPost, type Category } from "@/lib/sanity"

const mockPosts = [
  {
    id: "1",
    title: "Superchain Sunday: Week 40 2025",
    excerpt: "Welcome to Superchain Sunday - our weekly newsletter! Every Sunday, we will provide you with the latest news and updates.",
    slug: "superchain-sunday-week-40-2025",
    category: "Blog",
    publishedAt: "2025-10-05",
    backgroundColor: "bg-green-500",
    spotlight: true,
    weekNumber: 40,
  },
  {
    id: "2",
    title: "Superchain Sunday: Week 39 2025",
    excerpt: "Welcome to Superchain Sunday - our weekly newsletter!",
    slug: "superchain-sunday-week-39-2025",
    category: "Blog",
    publishedAt: "2025-09-28",
    backgroundColor: "bg-teal-500",
    featured: true,
    weekNumber: 39,
  },
  {
    id: "3",
    title: "Superchain Sunday: Week 38 2025",
    excerpt: "Welcome to Superchain Sunday - our weekly newsletter!",
    slug: "superchain-sunday-week-38-2025",
    category: "Blog",
    publishedAt: "2025-09-21",
    backgroundColor: "bg-red-500",
    featured: true,
    weekNumber: 38,
  },
  {
    id: "4",
    title: "Superchain Sunday: Week 37 2025",
    excerpt: "Welcome to Superchain Sunday - our weekly newsletter!",
    slug: "superchain-sunday-week-37-2025",
    category: "Blog",
    publishedAt: "2025-09-14",
    backgroundColor: "bg-purple-500",
    featured: true,
    weekNumber: 37,
  },
  {
    id: "5",
    title: "Superchain Sunday: Week 36 2025",
    excerpt: "Welcome to Superchain Sunday - our weekly newsletter!",
    slug: "superchain-sunday-week-36-2025",
    category: "Blog",
    publishedAt: "2025-09-07",
    backgroundColor: "bg-orange-500",
    weekNumber: 36,
  },
  {
    id: "6",
    title: "Acceleration through Super Studio Services",
    excerpt: "This blog describes our learnings from the first batch of 50 Super Studio credits.",
    slug: "acceleration-through-super-studio-services",
    category: "Blog",
    publishedAt: "2025-09-01",
    backgroundColor: "bg-white",
  },
  {
    id: "7",
    title: "Superchain Sunday: Week 35 2025",
    excerpt: "Welcome to Superchain Sunday - our weekly newsletter!",
    slug: "superchain-sunday-week-35-2025",
    category: "Blog",
    publishedAt: "2025-08-31",
    backgroundColor: "bg-blue-500",
    weekNumber: 35,
  },
  {
    id: "8",
    title: "Superchain Sunday: Week 34, 2025",
    excerpt: "Welcome to Superchain Sunday - our weekly newsletter!",
    slug: "superchain-sunday-week-34-2025",
    category: "Blog",
    publishedAt: "2025-08-24",
    backgroundColor: "bg-green-500",
    weekNumber: 34,
  },
]

export default function InsightsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [postsData, categoriesData] = await Promise.all([
          getPosts(),
          getCategories()
        ])
        setPosts(postsData)
        setCategories(categoriesData)
      } catch (error) {
        console.error('Failed to fetch data:', error)
        // Fallback to mock data if Sanity fails
        setPosts(mockPosts as any)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const spotlightPost = posts.find(post => post.spotlight)
  const featuredPosts = posts.filter(post => post.featured && !post.spotlight)
  const allPosts = posts.filter(post => !post.spotlight)

  const filteredPosts = allPosts
    .filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      const dateA = new Date(a.publishedAt).getTime()
      const dateB = new Date(b.publishedAt).getTime()
      return sortOrder === "desc" ? dateB - dateA : dateA - dateB
    })

  if (loading) {
    return (
      <>
        <SiteHeader />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading insights...</p>
          </div>
        </main>
        <SiteFooter />
      </>
    )
  }

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen">
        <section className="bg-gradient-to-br from-background via-secondary/20 to-background py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Insights</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Stay updated with the latest news, updates, and insights from the Oorth Nexus ecosystem.
            </p>
          </div>
        </section>

        {spotlightPost && (
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-8">
              <h2 className="text-3xl font-bold mb-8">Spotlight</h2>
              <div className="max-w-4xl">
                <BlogCard
                  title={spotlightPost.title}
                  excerpt={spotlightPost.excerpt}
                  slug={typeof spotlightPost.slug === 'string' ? spotlightPost.slug : spotlightPost.slug?.current || ''}
                  category={spotlightPost.category || "Blog"}
                  publishedAt={spotlightPost.publishedAt}
                  backgroundColor={spotlightPost.backgroundColor}
                  isSpotlight={true}
                />
              </div>
            </div>
          </section>
        )}

        {featuredPosts.length > 0 && (
          <section className="py-12 md:py-16 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-8">
              <h2 className="text-3xl font-bold mb-8">Featured</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <BlogCard
                    key={post._id}
                    title={post.title}
                    excerpt={post.excerpt}
                    slug={typeof post.slug === 'string' ? post.slug : post.slug?.current || ''}
                    category={post.category || "Blog"}
                    publishedAt={post.publishedAt}
                    backgroundColor={post.backgroundColor}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-8 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex gap-4 items-center">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category._id} value={category.title}>
                        {category.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  onClick={() => setSortOrder(sortOrder === "desc" ? "asc" : "desc")}
                >
                  Date {sortOrder === "desc" ? "↓" : "↑"}
                </Button>

                <Button
                  variant="ghost"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("all")
                  }}
                >
                  Clear All
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredPosts.map((post) => (
                <BlogCard
                  key={post._id}
                  title={post.title}
                  excerpt={post.excerpt}
                  slug={typeof post.slug === 'string' ? post.slug : post.slug?.current || ''}
                  category={post.category || "Blog"}
                  publishedAt={post.publishedAt}
                  backgroundColor={post.backgroundColor}
                />
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No posts found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
