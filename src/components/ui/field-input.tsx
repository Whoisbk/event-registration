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
                <label className={cn(
                    "absolute -top-[10px] left-3 bg-[#F9F4F5] px-0 text-[14.5px] font-semibold z-50",
                    "text-foreground"
                )}>
                    {label}
                </label>
                <div className="relative group">
                    {/* Error state gradient border */}
                   

                    {/* Normal state gradient border */}
                    {!error && (
                        <div className="absolute inset-0 bg-gradient-to-r from-[#409BAF] via-[#C471ED] to-[#F64F59] rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 p-[1.5px]">
                            <div className="w-full h-full bg-[#F9F4F5] rounded-lg"></div>
                        </div>
                    )}

                    {icon && (
                        <div className={cn(
                            "absolute left-3 top-1/2 -translate-y-1/2 font-semibold z-20",
                            "text-muted-foreground"
                        )}>
                            {icon}
                        </div>
                    )}
                    <input
                        ref={ref}
                        aria-autocomplete="none"
                        className={cn(
                            "relative z-10 w-full h-[51px] rounded-lg border-[1.36px] font-semibold bg-transparent px-3 py-3 text-sm",
                            "placeholder:text-muted-foreground placeholder:font-normal",
                            "focus:outline-none focus:border-[2px] focus:border-gradient-to-r focus:from-[#409BAF] focus:via-[#C471ED] focus:to-[#F64F59] focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
                            icon && "pl-10",
                            error
                                ? "border-red-500 border-[2px] focus:border-red-500 text-red-900"
                                : "border-black focus:border-transparent group-focus-within:border-transparent",
                            className,
                        )}
                        {...props}
                    />
                </div>

            </div>
        )
    }
)

FieldInput.displayName = "FieldInput"


