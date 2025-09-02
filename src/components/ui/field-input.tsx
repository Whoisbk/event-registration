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
                <label className="absolute  -top-[10px] left-3 bg-[#F9F4F5] px-0 text-[14.5px] font-semibold text-foreground z-99">
                    {label}
                </label>
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#409BAF] via-[#C471ED] to-[#F64F59] rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 p-[1.36px]">
                        <div className="w-full h-full bg-[#F9F4F5] rounded-lg"></div>
                    </div>
                
                    {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 font-semibold text-muted-foreground z-20">{icon}</div>}
                    <input
                        ref={ref}
                        aria-autocomplete="none"
                        
                        className={cn(
                            "relative z-10 w-full h-[51px] rounded-lg border-[1.36px] font-semibold border-black bg-transparent px-3 py-3 text-sm",
                            "placeholder:text-muted-foreground placeholder:font-normal",
                            "focus:outline-none focus:ring-0 focus:border-transparent group-focus-within:border-transparent ",
                            "disabled:cursor-not-allowed disabled:opacity-50",
                            icon && "pl-10",
                            error && "border-red-500 focus:ring-red-500",
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


