import React from 'react'
import Text from "./Text"

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    variant: "primary" | "error" | "success" | "muted" | "secondary",
    children: string | undefined,
    required: boolean | undefined
}

const Asterisk = () => {
    return (
        <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1402_56)">
                <path d="M3 0C3.09945 0 3.19484 0.0395088 3.26516 0.109835C3.33549 0.180161 3.375 0.275544 3.375 0.375V2.3505L5.08575 1.36275C5.12841 1.33774 5.1756 1.32141 5.2246 1.31471C5.2736 1.30801 5.32344 1.31107 5.37125 1.32371C5.41906 1.33635 5.4639 1.35833 5.50319 1.38837C5.54248 1.41841 5.57543 1.45592 5.60016 1.49875C5.62489 1.54158 5.6409 1.58888 5.64727 1.63792C5.65365 1.68696 5.65026 1.73678 5.6373 1.78451C5.62434 1.83224 5.60207 1.87693 5.57177 1.91602C5.54147 1.9551 5.50374 1.98781 5.46075 2.01225L3.75 3L5.46075 3.98775C5.50374 4.01219 5.54147 4.0449 5.57177 4.08398C5.60207 4.12307 5.62434 4.16776 5.6373 4.21549C5.65026 4.26322 5.65365 4.31304 5.64727 4.36208C5.6409 4.41112 5.62489 4.45842 5.60016 4.50125C5.57543 4.54408 5.54248 4.58159 5.50319 4.61163C5.4639 4.64167 5.41906 4.66365 5.37125 4.67629C5.32344 4.68893 5.2736 4.69199 5.2246 4.68529C5.1756 4.67859 5.12841 4.66226 5.08575 4.63725L3.375 3.6495V5.625C3.375 5.72446 3.33549 5.81984 3.26516 5.89016C3.19484 5.96049 3.09945 6 3 6C2.90054 6 2.80516 5.96049 2.73483 5.89016C2.66451 5.81984 2.625 5.72446 2.625 5.625V3.6495L0.914248 4.63725C0.871584 4.66226 0.824394 4.67859 0.775395 4.68529C0.726396 4.69199 0.676556 4.68893 0.628743 4.67629C0.580931 4.66365 0.536092 4.64167 0.496806 4.61163C0.457521 4.58159 0.424565 4.54408 0.399837 4.50125C0.375109 4.45842 0.359097 4.41112 0.352722 4.36208C0.346348 4.31304 0.349737 4.26322 0.362695 4.21549C0.375652 4.16776 0.397922 4.12307 0.428223 4.08398C0.458524 4.0449 0.496256 4.01219 0.539248 3.98775L2.25 3L0.539248 2.01225C0.453821 1.96217 0.39167 1.88033 0.366359 1.78459C0.341048 1.68886 0.354632 1.587 0.404145 1.50124C0.453659 1.41548 0.535083 1.35279 0.630649 1.32684C0.726215 1.3009 0.828164 1.31381 0.914248 1.36275L2.625 2.3505V0.375C2.625 0.275544 2.66451 0.180161 2.73483 0.109835C2.80516 0.0395088 2.90054 0 3 0Z" fill="#FF0000" />
            </g>
            <defs>
                <clipPath id="clip0_1402_56">
                    <rect width="6" height="6" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default function Label({ variant, children, required, ...props }: LabelProps) {

    if (variant === "error") {
        if (required) {
            return (
                <div className='flex flex-row items-start gap-x-1'>
                    <label {...props} className=' text-red-600 font-inter'>
                        <Text variant='base'>{children}</Text>
                    </label>
                    <Asterisk />
                </div>
            )
        }
        return <label {...props} className=' text-red-600 font-inter'>
            <Text variant='base'>{children}</Text>
        </label>
    }

    if (variant === "muted") {
        if (required) {
            return (
                <div className='flex flex-row items-start gap-x-1'>
                    <label {...props} className=' text-gray-700 font-inter'>
                        <Text variant='base'>{children}</Text>
                    </label>
                    <Asterisk />
                </div>
            )
        }
        return <label {...props} className=' text-gray-700 font-inter'>
            <Text variant='base'>{children}</Text>
        </label>
    }

    if (variant === "primary") {
        if (required) {
            return (
                <div className='flex flex-row items-start gap-x-1'>
                    <label {...props} className=' text-black font-inter'>
                        <Text variant='base'>{children}</Text>
                    </label>
                    <Asterisk />
                </div>
            )
        }
        return <label {...props} className=' text-black font-inter'>
            <Text variant='base'>{children}</Text>
        </label>
    }

    if (variant === "success") {
        if (required) {
            return (
                <div className='flex flex-row items-start gap-x-1'>
                    <label {...props} className=' text-green-700 font-inter'>
                        <Text variant='base'>{children}</Text>
                    </label>
                    <Asterisk />
                </div>
            )
        }
        return <label {...props} className=' text-green-700 font-inter'>
            <Text variant='base'>{children}</Text>
        </label>
    }

    if (variant === "secondary") {
        if (required) {
            return (
                <div className='flex flex-row items-start gap-x-1'>
                    <label {...props} className=' text-white font-inter'>
                        <Text variant='base'>{children}</Text>
                    </label>
                    <Asterisk />
                </div>
            )
        }
        return (
            <label {...props} className=' text-white font-inter'>
                <Text variant='base'>{children}</Text>
            </label>
        )
    }

    return (
        <label {...props} className=' text-black font-inter'>
            <Text variant='base'>{children}</Text>
        </label>
    )
}
