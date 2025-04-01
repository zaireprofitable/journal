"use client"

import Editor from "@/components/ui/editor"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BackButton } from "@/components/ui/back-button"


export default function JournalPage() {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <div className="mb-4">
                <BackButton href="/dashboard" />
            </div>
            
            
            <div className="flex flex-col gap-4">
                <Input type="text" placeholder="Title" />

                <div className="prose-container border rounded-lg p-4">
                    <Editor />
                </div>
            </div>
        </div>
    )
}