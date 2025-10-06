"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { CHAIN_INFO, ALL_CHAINS } from "@/lib/chains"
import Image from "next/image"

interface ChainSelectorProps {
  selectedChains: string[]
  onChainsChange: (chains: string[]) => void
  className?: string
}

function ChainLogo({ chainInfo, size = 20 }: { chainInfo: any, size?: number }) {
  const [imageError, setImageError] = useState(false)

  if (chainInfo.logo.startsWith('http') && !imageError) {
    return (
      <Image 
        src={chainInfo.logo} 
        alt={`${chainInfo.name} logo`}
        width={size}
        height={size}
        className="rounded-full"
        onError={() => setImageError(true)}
      />
    )
  }

  // Fallback: either emoji or first letter
  return (
    <span className="text-base">
      {chainInfo.logo.startsWith('http') ? chainInfo.name.charAt(0) : chainInfo.logo}
    </span>
  )
}

export function ChainSelector({ selectedChains, onChainsChange, className = "" }: ChainSelectorProps) {
  const toggleChain = (chainName: string) => {
    const isSelected = selectedChains.includes(chainName)
    if (isSelected) {
      onChainsChange(selectedChains.filter(c => c !== chainName))
    } else {
      onChainsChange([...selectedChains, chainName])
    }
  }

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {ALL_CHAINS.map((chainName) => {
        const chainInfo = CHAIN_INFO[chainName]
        const isSelected = selectedChains.includes(chainName)
        
        return (
          <button
            key={chainName}
            type="button"
            onClick={() => toggleChain(chainName)}
            aria-pressed={isSelected}
            className="focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
          >
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 border rounded-full text-sm font-medium transition-colors ${
                isSelected
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-secondary hover:bg-secondary/80 border-border'
              }`}
            >
              <ChainLogo chainInfo={chainInfo} />
              <span>{chainInfo.name}</span>
            </div>
          </button>
        )
      })}
    </div>
  )
}