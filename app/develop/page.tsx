import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Play, FileText, Terminal, Code, Wrench, Zap, Shield, Globe, Server, Activity, Coins } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { InteractiveGuide } from "@/components/interactive-guide"
import { AnimatedBeamMultipleInputs } from "@/components/ui/animated-beam"

const resources = [
  {
    title: "Build an app on the Oorth Nexus",
    description: "Reimagine your app with Oorth Nexus Interop to deliver the unified UX your users expect. Hack on net-new, bold use cases on Interop devnet.",
    icon: <Play className="h-5 w-5" />,
    category: "Getting Started",
    link: "#",
    hoverBg: "https://cdn.prod.website-files.com/67583ccc9a16ca071fa1e4a8/67938da7b1ca9fdd6315376b_feature-card-bg--projects-hover.svg"
  },
  {
    title: "Oorth Nexus Interop Explainer",
    description: "Oorth Nexus interoperability is a set of protocols and services that lets OP Stack blockchains read each other's state.",
    icon: <FileText className="h-5 w-5" />,
    category: "Documentation",
    link: "#",
    hoverBg: "https://cdn.prod.website-files.com/67583ccc9a16ca071fa1e4a8/67938da71af2782efc30ab48_feature-card-bg--chains-hover.svg"
  },
  {
    title: "Dev Console",
    description: "The Dev Console is your gateway to building on the Oorth Nexus. Deploy contracts, monitor transactions, and manage your development.",
    icon: <Terminal className="h-5 w-5" />,
    category: "Tools",
    link: "#",
    hoverBg: "https://cdn.prod.website-files.com/67583ccc9a16ca071fa1e4a8/67938da793ec770a25ac679b_feature-card-bg--contributors-hover.svg"
  }
]

const tutorials = [
  {
    title: "Scaling your app on the Oorth Nexus",
    description: "Learn how to build scalable applications using Oorth Nexus infrastructure",
    thumbnail: "/images/tutorial-scaling.svg",
    duration: "15 min read",
    difficulty: "Intermediate"
  },
  {
    title: "Unlock Creativity & Experimentation with Oorth Nexus Interop",
    description: "Explore cross-chain functionality and interoperability features",
    thumbnail: "/images/tutorial-interop.svg", 
    duration: "20 min read",
    difficulty: "Advanced"
  }
]

const validatorTools = [
  {
    name: "Oorth Validator CLI",
    description: "Command line interface for setting up and managing validator nodes on Oorth Nexus",
    category: "Node Management",
    link: "#validator-cli"
  },
  {
    name: "Validator Dashboard",
    description: "Web-based monitoring dashboard for tracking validator performance and rewards",
    category: "Monitoring",
    link: "#validator-dashboard"
  },
  {
    name: "Staking Protocol",
    description: "Smart contracts and tools for staking OORTH tokens and delegation management",
    category: "Staking",
    link: "#staking-protocol"
  },
  {
    name: "Node Health Monitor",
    description: "Real-time monitoring tools for validator node health, uptime, and network connectivity",
    category: "Monitoring",
    link: "#health-monitor"
  }
]

const validatorSteps = [
  {
    step: "1",
    title: "Check Hardware Requirements",
    description: "Ensure your server infrastructure meets the minimum specifications for running a secure and performant validator node on Oorth Nexus",
    requirements: [
      "8+ CPU cores (Intel Xeon or AMD EPYC recommended)",
      "32GB+ RAM (64GB recommended for mainnet)",
      "1TB+ NVMe SSD storage (enterprise-grade)",
      "100Mbps+ dedicated internet connection",
      "Static IP address or reliable DNS",
      "Uninterruptible power supply (UPS) recommended"
    ]
  },
  {
    step: "2",
    title: "Install Validator Client",
    description: "Download and install the latest Oorth Nexus validator client software. Verify checksums before installation.",
    code: `# Download latest validator client
wget https://releases.oorthnexus.io/validator/latest/oorth-validator-linux-amd64.tar.gz

# Verify checksum
sha256sum -c oorth-validator-linux-amd64.tar.gz.sha256

# Extract and install
tar -xzf oorth-validator-linux-amd64.tar.gz
sudo mv oorth-validator /usr/local/bin/

# Verify installation
oorth-validator --version`
  },
  {
    step: "3",
    title: "Generate Validator Keys & Configure Node",
    description: "Create secure validator keys using BLS12-381 cryptography. Store keys in a secure location with proper backups.",
    code: `# Generate validator signing keys
oorth-validator keys generate \\
  --keystore-path ./validator-keys \\
  --password-file ./keystore-password.txt

# Generate withdrawal credentials
oorth-validator keys generate-withdrawal \\
  --mnemonic-output ./withdrawal-mnemonic.txt

# Initialize validator configuration
oorth-validator init \\
  --network mainnet \\
  --config-path ./validator-config

# IMPORTANT: Backup your keys securely!
# Store withdrawal-mnemonic.txt offline in a secure location`
  },
  {
    step: "4",
    title: "Stake OORTH Tokens & Register",
    description: "Deposit the minimum stake requirement to the validator staking contract and register your validator on-chain",
    requirements: [
      "Minimum 32,000 OORTH tokens required",
      "Valid BLS validator signing keys",
      "Withdrawal address configured",
      "Running and synced validator node",
      "Gas fees for registration transaction (≈0.1 ETH)"
    ],
    code: `# Connect to Oorth Nexus network
oorth-validator connect --network mainnet

# Submit validator registration
oorth-validator stake deposit \\
  --amount 32000 \\
  --validator-keys ./validator-keys \\
  --withdrawal-address 0xYourWithdrawalAddress

# Start validator
oorth-validator start --daemon`
  }
]

const quickStart = [
  {
    step: "1",
    title: "Setup Development Environment",
    description: "Install Node.js, npm, and the Oorth CLI tools",
    code: "npm install -g @oorth/cli"
  },
  {
    step: "2", 
    title: "Create New Project",
    description: "Initialize a new Oorth Nexus project with templates",
    code: "oorth init my-dapp --template=react"
  },
  {
    step: "3",
    title: "Deploy Smart Contract",
    description: "Deploy your first smart contract to Oorth Nexus testnet",
    code: "oorth deploy --network=testnet"
  },
  {
    step: "4",
    title: "Test Your Application",
    description: "Run local tests and interact with deployed contracts",
    code: "npm run test && npm start"
  }
]

export default function DevelopPage() {
  return (
    <>
      <SiteHeader />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background via-secondary/20 to-background py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <h1 className="text-4xl md:text-5xl font-bold">Develop</h1>
                <Badge variant="destructive" className="bg-red-600">
                  α
                </Badge>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Explore tools, docs, and starter kits to build and innovate on the Oorth Nexus.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Setup Guide */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <InteractiveGuide />
          </div>
        </section>

        {/* Network Information */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Network Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Mainnet</h3>
                <p className="text-muted-foreground text-sm mb-4">Production ready network for live applications</p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Chain ID:</span>
                    <span className="font-mono">42161</span>
                  </div>
                  <div className="flex justify-between">
                    <span>RPC URL:</span>
                    <span className="font-mono">https://rpc.oorthnexus.io</span>
                  </div>
                </div>
              </Card>

              <Card className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Testnet</h3>
                <p className="text-muted-foreground text-sm mb-4">Safe environment for testing and development</p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Chain ID:</span>
                    <span className="font-mono">421614</span>
                  </div>
                  <div className="flex justify-between">
                    <span>RPC URL:</span>
                    <span className="font-mono">https://testnet.oorthnexus.io</span>
                  </div>
                </div>
              </Card>

              <Card className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Local Network</h3>
                <p className="text-muted-foreground text-sm mb-4">Local development environment</p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Chain ID:</span>
                    <span className="font-mono">31337</span>
                  </div>
                  <div className="flex justify-between">
                    <span>RPC URL:</span>
                    <span className="font-mono">http://localhost:8545</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Oorth Nexus Resources */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Oorth Nexus Resources</h2>
              <p className="text-muted-foreground max-w-2xl">
                Speed up your Oorth Nexus development journey with the top tools and resources for Interop App development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${resource.hoverBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-background/90 group-hover:bg-background/70 transition-colors duration-300" />
                  
                  {/* Card content */}
                  <div className="relative z-10">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="p-2 bg-primary/10 group-hover:bg-primary/20 rounded-lg transition-colors duration-300">
                          {resource.icon}
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </div>
                      <Badge variant="outline" className="w-fit group-hover:border-primary group-hover:text-primary transition-colors">{resource.category}</Badge>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">
                        {resource.description}
                      </CardDescription>
                      <Button variant="ghost" className="mt-4 p-0 h-auto font-medium group-hover:text-primary transition-colors" asChild>
                        <Link href={resource.link}>
                          Learn more →
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Validator Tools */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Validator Tools & Resources</h2>
              <p className="text-muted-foreground max-w-2xl">
                Everything you need to become a validator operator on Oorth Nexus and secure the network.
              </p>
            </div>

            {/* Animated Beam Visualization */}
            <div className="mb-12">
              <Card className="p-6">
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-semibold mb-2">Validator Network Architecture</h3>
                  <p className="text-muted-foreground text-sm">
                    An animated beam of light which travels along a path, showing how validators interact with the Oorth Nexus network
                  </p>
                </div>
                <AnimatedBeamMultipleInputs className="border-0 shadow-none" />
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                  <div>
                    <div className="font-semibold text-primary">User/Delegator</div>
                    <p className="text-muted-foreground text-xs">Stake tokens</p>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Validator Node</div>
                    <p className="text-muted-foreground text-xs">Secure network</p>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Network Core</div>
                    <p className="text-muted-foreground text-xs">Consensus layer</p>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Monitoring</div>
                    <p className="text-muted-foreground text-xs">Track performance</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {validatorTools.map((tool, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold mb-2">{tool.name}</h3>
                      <Badge variant="outline" className="text-xs">{tool.category}</Badge>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{tool.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={tool.link}>
                      Get Started
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community and Support */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our developer community for support, discussions, and the latest updates on Oorth Nexus development.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild>
                <Link href="#discord">
                  Join Discord
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#github">
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#docs">
                  Documentation
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}