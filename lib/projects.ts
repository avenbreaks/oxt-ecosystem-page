import projectsData from './projects.generated.json'

export type Program = {
  title: string
  status: "Live" | "Ended" | "Upcoming"
  reward?: string
  banner?: string // image path if available
}

export type Project = {
  id: string
  slug: string
  name: string
  category: "Analytics" | "Bridge" | "CEX" | "DEX" | "Derivatives" | "Gaming" | "Lending" | "Liquid Staking" | "NFT Market" | "Onchain Tooling" | "OP Collective" | "RWA" | "SocialFi" | "Wallet" | "Identity" | "Infra" | "Other"
  description: string
  valueProposition: string
  chains: string[]
  website?: string
  twitter?: string
  github?: string
  logoUrl?: string
  approvedAt?: string | null
  links: {
    website?: string
    x?: string
    github?: string
  }
  programs: Program[]
}

// Transform the imported data to match our Project type
const transformProjectData = (rawData: any[]): Project[] => {
  return rawData.map((item) => ({
    id: item.id,
    slug: item.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
    name: item.name,
    category: item.category as Project['category'],
    description: item.description,
    valueProposition: item.valueProposition,
    chains: item.chains || [],
    website: item.website,
    twitter: item.twitter,
    github: item.github,
    logoUrl: item.logoUrl,
    approvedAt: item.approvedAt,
    links: {
      website: item.website,
      x: item.twitter,
      github: item.github,
    },
    programs: [], // No programs data in the JSON, keeping empty array
  }))
}

export const PROJECTS: Project[] = transformProjectData(projectsData)
