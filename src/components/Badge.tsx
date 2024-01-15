import React from 'react'

interface Props {
    children: String,
    variant: "primary" | "secondary" | "tertiary" | "error" | "dark",
    size: "sm" | "md" | "lg" | "xl" | undefined
}

const obj = {
    "primary": "bg-gray-100 border border-black",
    "secondary": "bg-gray-700 border border-black",
    "tertiary": "bg-[#64748B] border border-black",
    "error": "bg-red-600 border border-black",
    "dark": "bg-black border border-white"
}

export default function Badge({ children, variant, size }: Props) {

    if (size === "sm") {
        return (
            <div className={`${obj[variant]} px-3 py-1 rounded-md text-center text-xs leading-4 min-w-fit`} style={{
                color: variant === "primary" ? "black" : "white",
                width: "fit-content"
            }}>
                {children}
            </div>
        )
    }

    if (size === "md") {
        return (
            <div className={`${obj[variant]} px-4 py-1.5 rounded-lg text-center text-sm leading-5 min-w-fit`} style={{
                color: variant === "primary" ? "black" : "white",
                width: "fit-content"
            }}>
                {children}
            </div>
        )
    }

    if (size === "lg") {
        return (
            <div className={`${obj[variant]} px-5 py-2 rounded-lg text-center text-base leading-6 min-w-fit`} style={{
                color: variant === "primary" ? "black" : "white",
                width: "fit-content"
            }}>
                {children}
            </div>
        )
    }

    if (size === "xl") {
        return (
            <div className={`${obj[variant]} px-6 py-2 rounded-lg text-center text-lg leading-8 min-w-fit`} style={{
                color: variant === "primary" ? "black" : "white",
                width: "fit-content"
            }}>
                {children}
            </div>
        )
    }

    return (
        <div className={`${obj[variant]} px-3 py-1 rounded-md text-center text-xs leading-4 min-w-fit`} style={{
            color: variant === "primary" ? "black" : "white",
            width: "fit-content"
        }}>
            {children}
        </div>
    )
}
