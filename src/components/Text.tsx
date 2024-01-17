import React from 'react'

interface Props {
    variant: "base" | "h1" | "h2" | "h3" | "code" | "lead" | "large" | "small" | "muted" | "italic" | undefined,
    children: string | undefined
}

export default function Text({ variant, children }: Props) {

    if (variant === "base") {
        return <p className='text-base leading-6 font-medium font-inter'>{children}</p>
    }

    if (variant === "h1") {
        return <h1 className='text-4xl leading-10 font-bold font-inter'>{children}</h1>
    }

    if (variant === "h2") {
        return <h2 className='text-2xl leading-8 font-semibold font-inter'>{children}</h2>
    }

    if (variant === "h3") {
        return <h3 className='text-xl leading-7 font-semibold font-inter'>{children}</h3>
    }

    if (variant === "code") {
        return <code className='text-sm leading-5 font-inter'>@react-query</code>
    }

    if (variant === "lead") {
        return <p className='text-xl leading-7 font-medium text-[#6B6B6B] font-inter'>{children}</p>
    }

    if (variant === "large") {
        return <p className='text-lg leading-7 font-bold font-inter'>{children}</p>
    }

    if (variant === "muted") {
        return <p className='text-sm leading-5 font-medium font-inter text-[#6B6B6B]'>{children}</p>
    }

    if (variant === "small") {
        return <p className='text-sm leading-5 font-medium font-inter'>{children}</p>
    }

    if (variant === "italic") {
        return <p className='italic leading-5 font-inter'>{children}</p>
    }

    return (
        <p className='text-base leading-6 font-medium font-inter'>{children}</p>
    )
}
