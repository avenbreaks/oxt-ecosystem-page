export type Program = {
  title: string
  status: "Live" | "Ended" | "Upcoming"
  reward?: string
  banner?: string // image path if available
}

export type Project = {
  slug: string
  name: string
  category: "DEX" | "Bridge" | "Lending" | "Identity" | "Analytics" | "Infra"
  description: string
  valueProposition: string
  chains: string[]
  links: {
    website?: string
    x?: string
    github?: string
  }
  programs: Program[]
}

export const PROJECTS: Project[] = [
  {
    slug: "oorthswap",
    name: "OorthSwap",
    category: "DEX",
    description:
      "An AMM DEX purpose‑built for the Oorth Nexus with concentrated liquidity and low fees optimized for OORTH assets.",
    valueProposition:
      "Efficient liquidity with capital concentration, deep pools for native OORTH pairs, and seamless routing across pools.",
    chains: ["Oorth Nexus"],
    links: {
      website: "#",
      x: "https://x.com",
      github: "https://github.com",
    },
    programs: [
      { title: "Liquidity Campaign S1", status: "Live", reward: "$250K in OORTH" },
      { title: "Gov Fund Incentives S1", status: "Upcoming" },
    ],
  },
  {
    slug: "nexusbridge",
    name: "NexusBridge",
    category: "Bridge",
    description:
      "Omnichain bridge for moving assets to and from the Oorth Nexus with fast finality and proof‑based security.",
    valueProposition: "Trust‑minimized proofs with compact messages and native gas abstraction for end users.",
    chains: ["Oorth Nexus", "Ethereum"],
    links: {
      website: "#",
      x: "https://x.com",
    },
    programs: [{ title: "Bridge Rewards", status: "Live", reward: "$50K OORTH" }],
  },
  {
    slug: "orbitlend",
    name: "OrbitLend",
    category: "Lending",
    description: "Non‑custodial money market on Oorth Nexus offering variable and fixed‑rate lending for core assets.",
    valueProposition: "Risk‑aware interest rate model with isolated pools and circuit‑breaker guardians.",
    chains: ["Oorth Nexus"],
    links: {
      website: "#",
      github: "https://github.com",
    },
    programs: [{ title: "Safety Module Bootstrapping", status: "Upcoming" }],
  },
  {
    slug: "astroid",
    name: "AstroID",
    category: "Identity",
    description:
      "Composable identity and reputation for Oorth apps with verifiable credentials and privacy‑preserving proofs.",
    valueProposition: "Portable credentials, zk attestations, and spam‑resistant onboarding flows.",
    chains: ["Oorth Nexus"],
    links: { website: "#", x: "https://x.com" },
    programs: [{ title: "Dev Grants Q4", status: "Live" }],
  },
  {
    slug: "sphere-analytics",
    name: "Sphere Analytics",
    category: "Analytics",
    description: "Chain and dApp analytics focused on Oorth Nexus with real‑time dashboards and growth metrics.",
    valueProposition: "Streaming data pipeline with sub‑minute freshness and friendly workspace sharing.",
    chains: ["Oorth Nexus"],
    links: { website: "#", github: "https://github.com" },
    programs: [{ title: "Insight Bounties", status: "Ended" }],
  },
]
