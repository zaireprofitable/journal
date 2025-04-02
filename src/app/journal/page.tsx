"use client"

import Editor from "@/components/ui/editor"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BackButton } from "@/components/ui/back-button"
import { useState } from "react"


export default function JournalPage() {
    // Add state to track our inputs
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    // This function checks if we can enable the publish button
    const canPublish = () => {
        console.log('Title length:', title.length)
        console.log('Content length:', content.length)
        return title.length > 0 && content.length >= 4
    }

    // This function will handle when the editor content changes
    const handleEditorChange = (newContent: string) => {
        console.log('Editor content changed:', newContent)
        setContent(newContent)
    }

    return (
        <div className="max-w-4xl mx-auto min-h-screen p-8">
            <div className="max-w-[640px] mx-auto flex flex-col gap-6">
                <div className="flex justify-start items-start gap-3 mb-4">
                    <BackButton href="/dashboard" />
                    <Button 
                        className={`publish-button min-w-20 px-3 py-2 ${canPublish() ? 'bg-accent cursor-pointer' : 'bg-blue-500'} rounded-md border-b-[2.40px] border-blue-700 flex justify-center items-center gap-1 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed`}
                        disabled={!canPublish()}
                        onClick={() => {
                            console.log("Publishing...");
                            // Change state after function is called
                            if (canPublish()) {
                                // You could add additional state changes here
                                // For example, setting a "published" state to true
                                console.log("Published successfully!");
                            }
                        }}
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
                    <div className="self-stretch inline-flex justify-start items-center gap-2">
                        <div className="flex-1 px-3 py-2.5 bg-background rounded-md outline outline-1 outline-offset-[-1px] outline-zinc-400 flex justify-start items-center overflow-hidden">
                            <input 
                                type="text" 
                                placeholder="Title" 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="flex-1 justify-start text-neutral-900 text-sm font-normal font-['Helvetica_Neue'] leading-tight focus:outline-none focus:ring-0 focus:ring-offset-0" />
                        </div>
                    </div>

                    <div className="self-stretch flex-1 px-3 py-2.5 bg-background rounded-md outline outline-1 outline-offset-[-1px] outline-zinc-400">
                        <Editor onChange={handleEditorChange} />
                    </div>
                </div>
            </div>  
        </div>
    )
}