"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge" 
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Check, ExternalLink } from "lucide-react"

interface CodeBlockProps {
  children: string
  language?: string
  title?: string
}

export function CodeBlock({ children, language = "bash", title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      {title && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">{title}</span>
          <Badge variant="outline" className="text-xs">{language}</Badge>
        </div>
      )}
      <div className="relative bg-secondary rounded-lg p-4">
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 p-2 rounded-md bg-background/50 hover:bg-background transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
        <pre className="text-sm overflow-x-auto">
          <code className="font-mono">{children}</code>
        </pre>
      </div>
    </div>
  )
}

export function InteractiveGuide() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: "Environment Setup",
      description: "Install the required tools and dependencies",
      code: `# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Oorth CLI
npm install -g @oorth/cli

# Verify installation
oorth --version`
    },
    {
      title: "Project Initialization", 
      description: "Create a new Oorth Nexus project",
      code: `# Create new project
oorth init my-dapp --template=react

# Navigate to project directory
cd my-dapp

# Install dependencies
npm install`
    },
    {
      title: "Smart Contract Development",
      description: "Write and compile your smart contracts",
      code: `# Create a new contract
oorth create contract MyContract

# Compile contracts
oorth compile

# Run tests
npm test`
    },
    {
      title: "Deploy to Testnet",
      description: "Deploy your contracts to Oorth Nexus testnet",
      code: `# Configure network
oorth config set network testnet

# Deploy contracts
oorth deploy --verify

# Verify deployment
oorth verify <contract-address>`
    }
  ]

  return (
    <Card className="p-6">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Interactive Setup Guide</CardTitle>
        <CardDescription>
          Follow these steps to get started with Oorth Nexus development
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-2">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left p-4 rounded-lg transition-colors ${
                  activeStep === index
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    activeStep === index ? 'bg-background text-foreground' : 'bg-primary text-primary-foreground'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium">{step.title}</h4>
                    <p className={`text-sm ${
                      activeStep === index ? 'text-primary-foreground/80' : 'text-muted-foreground'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div>
            <CodeBlock 
              title={steps[activeStep].title}
              language="bash"
            >
              {steps[activeStep].code}
            </CodeBlock>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}