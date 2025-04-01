"use client"

import Editor from "@/components/ui/editor"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BackButton } from "@/components/ui/back-button"



export default function JournalPage() {
    return (
        <div className="max-w-4xl mx-auto min-h-screen p-8">
            <div className="max-w-[640px] mx-auto flex flex-col gap-6">
                <div className="flex justify-start items-start gap-3 mb-4">
                    <BackButton href="/dashboard" />
                    <Button 
                        className="min-w-20 px-3 py-2 bg-blue-500 rounded-md border-b-[2.40px] border-blue-700 flex justify-center items-center gap-1 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={true}
                    >
                        <span className="text-white text-sm font-medium font-['Helvetica_Neue'] leading-normal">Publish</span>
                    </Button>
                    <Button 
                        className="min-w-20 px-3 py-2 bg-zinc-600 rounded-md border-b-[2.40px] border-zinc-400 flex justify-center items-center gap-1 overflow-hidden"
                    >
                        <span className="text-white text-sm font-medium font-['Helvetica_Neue'] leading-normal">Save as draft</span>
                    </Button>
                </div>            
            
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    {/* <Input 
                        type="text" 
                        placeholder="Title" 
                        className="self-stretch px-3 py-2.5 bg-background rounded-md outline outline-1 outline-offset-[-1px] outline-zinc-400 inline-flex justify-start items-center overflow-hidden focus:outline-ring/50 focus:outline-2 text-neutral-900 text-sm font-normal font-['Helvetica_Neue'] leading-tight"
                    /> */}

                    <div className="self-stretch inline-flex justify-start items-center gap-2">
                        <div className="flex-1 px-3 py-2.5 bg-background rounded-md outline outline-1 outline-offset-[-1px] outline-zinc-400 flex justify-start items-center overflow-hidden">
                            <input 
                                type="text" 
                                placeholder="Title" 
                                className="flex-1 justify-start text-neutral-900 text-sm font-normal font-['Helvetica_Neue'] leading-tight focus:outline-none focus:ring-0 focus:ring-offset-0" />
                        </div>
                    </div>

                    <div className="self-stretch flex-1 px-3 py-2.5 bg-background rounded-md outline outline-1 outline-offset-[-1px] outline-zinc-400">
                        <Editor />
                    </div>
                </div>
            </div>  
        </div>
    )
}