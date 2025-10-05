"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useToast } from "@/hooks/use-toast"

type FormState = {
  name: string
  category: string
  description: string
  valueProposition: string
  website?: string
  twitter?: string
  github?: string
  chains: string[]
  logoUrl?: string
}

const ALL_CHAINS = ["Oorth Nexus", "OP Mainnet", "World Chain", "Zora", "Base"]

export default function NewProjectPage() {
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState<FormState>({
    name: "",
    category: "",
    description: "",
    valueProposition: "",
    website: "",
    twitter: "",
    github: "",
    chains: ["Oorth Nexus"],
    logoUrl: "",
  })
  const { toast } = useToast()
  const router = useRouter()

  const onChange = (key: keyof FormState, value: any) => {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.category || !form.description) {
      toast({ title: "Missing fields", description: "Name, Category, and Description are required." })
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch("/api/submit-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || "Submission failed")
      toast({
        title: "Submitted!",
        description: "Your project was recorded. Our team will review and list it via GitHub Action.",
      })
      router.push("/project")
    } catch (err: any) {
      toast({ title: "Error", description: err.message || "Unable to submit project" })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="container mx-auto max-w-5xl px-4 py-8">
      <Breadcrumb className="mb-6">
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
            <BreadcrumbPage>Submit Project</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-balance">Submit your project</h1>
        <p className="text-muted-foreground mt-2">
          Add your Oorth Nexus ecosystem project. Submissions are stored in Airtable and published after manual review
          via GitHub Action.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Project details</CardTitle>
          <CardDescription>Fields marked with an asterisk are required.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name *</label>
              <Input
                placeholder="e.g., NexusSwap"
                value={form.name}
                onChange={(e) => onChange("name", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Category *</label>
              <Input
                placeholder="e.g., DEX, Lending, Bridge"
                value={form.category}
                onChange={(e) => onChange("category", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Description *</label>
              <Textarea
                placeholder="Short description of what your project does"
                value={form.description}
                onChange={(e) => onChange("description", e.target.value)}
                rows={5}
                required
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Value Proposition</label>
              <Textarea
                placeholder="What unique value does your project provide?"
                value={form.valueProposition}
                onChange={(e) => onChange("valueProposition", e.target.value)}
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Website</label>
              <Input
                type="url"
                placeholder="https://example.com"
                value={form.website}
                onChange={(e) => onChange("website", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Twitter/X</label>
              <Input
                type="url"
                placeholder="https://x.com/yourhandle"
                value={form.twitter}
                onChange={(e) => onChange("twitter", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">GitHub</label>
              <Input
                type="url"
                placeholder="https://github.com/org/repo"
                value={form.github}
                onChange={(e) => onChange("github", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Logo URL</label>
              <Input
                type="url"
                placeholder="https://cdn.example.com/logo.png"
                value={form.logoUrl}
                onChange={(e) => onChange("logoUrl", e.target.value)}
              />
            </div>

            <div className="space-y-3 md:col-span-2">
              <label className="text-sm font-medium">Chains</label>
              <div className="flex flex-wrap gap-3">
                {ALL_CHAINS.map((c) => {
                  const checked = form.chains.includes(c)
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => {
                        onChange("chains", checked ? form.chains.filter((x) => x !== c) : [...form.chains, c])
                      }}
                      aria-pressed={checked}
                    >
                      <Badge variant={checked ? "default" : "outline"}>{c}</Badge>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="md:col-span-2 flex items-center gap-3">
              <Button type="submit" disabled={submitting}>
                {submitting ? "Submitting…" : "Submit Project"}
              </Button>
              <Link href="/project" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
                Cancel
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}
