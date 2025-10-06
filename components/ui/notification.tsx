"use client"

import { CircleCheckIcon, XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NotificationProps {
  title: string
  description: string
  onClose: () => void
  actionLabel?: string
  onAction?: () => void
}

export function Notification({
  title,
  description,
  onClose,
  actionLabel,
  onAction,
}: NotificationProps) {
  return (
    <div className="bg-background fixed bottom-4 right-4 z-50 max-w-[400px] rounded-md border p-4 shadow-lg animate-in slide-in-from-bottom-5">
      <div className="flex gap-2">
        <div className="flex grow gap-3">
          <CircleCheckIcon
            className="mt-0.5 shrink-0 text-emerald-500"
            size={16}
            aria-hidden="true"
          />
          <div className="flex grow flex-col gap-3">
            <div className="space-y-1">
              <p className="text-sm font-medium">{title}</p>
              <p className="text-muted-foreground text-sm">
                {description}
              </p>
            </div>
            {actionLabel && onAction && (
              <div className="flex gap-2">
                <Button size="sm" onClick={onAction}>
                  {actionLabel}
                </Button>
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
            aria-label="Close notification"
            onClick={onClose}
          >
            <XIcon
              size={16}
              className="opacity-60 transition-opacity group-hover:opacity-100"
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>
    </div>
  )
}
