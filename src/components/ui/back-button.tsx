"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from '@geist-ui/icons'


interface BackButtonProps {
    href: string
    label?: string
}

const BackButton = ({ href, label = "Home" }: BackButtonProps) => {
    return (
        <Link href={href}>
            <Button 
                variant="ghost" 
                className="min-w-20 px-3 py-2 bg-stone-500 rounded-md border-b-[2.40px] border-zinc-400 inline-flex justify-center items-center overflow-hidden gap-2"
            >
                <div className="relative overflow-hidden">
                    {/* <div className="w-1 h-2 left-[6px] top-[4px] absolute outline outline-2 outline-offset-[-1px] outline-white" /> */}
                    <ChevronLeft className="w-8 h-8 color-white" />
                </div>
                <span className="text-white text-sm font-medium font-['Helvetica_Neue'] leading-normal">
                    {label}
                </span>
            </Button>
        </Link>
    )
}

export { BackButton } 