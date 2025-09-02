"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface FieldInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    icon?: React.ReactNode
    error?: string
}

export const FieldInput = React.forwardRef<HTMLInputElement, FieldInputProps>(
    ({ label, icon, error, className, ...props }, ref) => {
        return (
            <div className="relative">
                <label className="absolute -top-[10px] left-3 bg-[#F9F4F5] px-0 text-sm font-semibold text-foreground z-10">
                    {label}
                </label>
                <div className="relative">
                    {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{icon}</div>}
                    <input
                        ref={ref}
                        className={cn(
                            "w-full h-[51px] rounded-lg border-[1.36px] border-black bg-transparent px-3 py-3 text-sm",
                            "placeholder:text-muted-foreground",
                            "focus:outline-none focus:ring-2 focus:ring-ring focus:border-[1.36px] focus:border-black",
                            "disabled:cursor-not-allowed disabled:opacity-50",
                            icon && "pl-10",
                            error && "border-destructive focus:ring-destructive",
                            className,
                        )}
                        {...props}
                    />
                </div>
                {error && (
                    <p className="mt-1 text-xs text-destructive">{error}</p>
                )}
            </div>
        )
    }
)

FieldInput.displayName = "FieldInput"


