"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CHAIN_INFO } from "@/lib/chains"
import Image from "next/image"

interface ChainBadgesProps {
  chains: string[]
  maxVisible?: number
  className?: string
}

function ChainLogo({ chainInfo }: { chainInfo: any }) {
  const [imageError, setImageError] = useState(false)

  if (chainInfo.logo.startsWith('http') && !imageError) {
    return (
      <Image 
        src={chainInfo.logo} 
        alt={`${chainInfo.name} logo`}
        width={16}
        height={16}
        className="rounded-full"
        onError={() => setImageError(true)}
      />
    )
  }

  // Fallback: either emoji or first letter
  return (
    <span className="text-sm">
      {chainInfo.logo.startsWith('http') ? chainInfo.name.charAt(0) : chainInfo.logo}
    </span>
  )
}

export function ChainBadges({ chains, maxVisible = 3, className = "" }: ChainBadgesProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  if (!chains || chains.length === 0) {
    return null
  }

  const visibleChains = isExpanded ? chains : chains.slice(0, maxVisible)
  const remainingCount = chains.length - maxVisible

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {visibleChains.map((chainName) => {
        const chainInfo = CHAIN_INFO[chainName]
        if (!chainInfo) {
          // Fallback for unknown chains
          return (
            <Badge key={chainName} variant="outline" className="text-xs">
              {chainName}
            </Badge>
          )
        }

        return (
          <div
            key={chainName}
            className="inline-flex items-center gap-1.5 px-2 py-1 bg-secondary border rounded-full text-xs font-medium"
          >
            <ChainLogo chainInfo={chainInfo} />
            <span>{chainInfo.name}</span>
          </div>
        )
      })}
      
      {!isExpanded && remainingCount > 0 && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsExpanded(true)}
          className="text-xs px-2 py-1 h-7 rounded-full border-dashed"
        >
          +{remainingCount} More
        </Button>
      )}
      
      {isExpanded && chains.length > maxVisible && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsExpanded(false)}
          className="text-xs px-2 py-1 h-7 rounded-full border-dashed"
        >
          Show Less
        </Button>
      )}
    </div>
  )
}