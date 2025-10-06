import { Ripple } from "@/components/ui/ripple"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function PoweredByOptimism() {
  return (
    <section className="container mx-auto px-4 md:px-8 mt-20 md:mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Left Card - Content */}
        <Card className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Powered by Community
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Oorth Nexus is a Collective of companies, communities, and citizens working together to create an internet that benefits all, and is owned by all.
              </p>

              <p>
                Oorth Nexus started as a single L2 chain, OXT Mainnet, with a goal to scale Ethereum's technology and values. Over time, it has evolved to become home of the Superchain, building a unified network of blockchains to support internet-level activity, powered by the open source OP Stack.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="https://www.optimism.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground text-background px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Explore OXT Mainnet
              </Link>
              <Link
                href="https://www.optimism.io/about"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border px-6 py-3 rounded-full font-medium hover:bg-secondary transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </Card>

        {/* Right Card - Ripple Effect */}
        <Card className="relative overflow-hidden flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
          <Ripple
            mainCircleSize={200}
            mainCircleOpacity={0.2}
            numCircles={8}
          />
          <div className="relative z-10 text-center">
          </div>
        </Card>
      </div>
    </section>
  )
}
