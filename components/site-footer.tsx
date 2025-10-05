import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t bg-background/60">
      <div className="container mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded-full bg-primary" aria-hidden />
            <span className="font-semibold">Tech Eco</span>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <Link href="#terms" className="hover:underline">
              Terms of Use
            </Link>
            <Link href="#privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="https://x.com" target="_blank" rel="noreferrer" className="hover:underline">
              X/Twitter
            </Link>
            <Link href="https://github.com" target="_blank" rel="noreferrer" className="hover:underline">
              GitHub
            </Link>
          </nav>

          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Tech Eco. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
