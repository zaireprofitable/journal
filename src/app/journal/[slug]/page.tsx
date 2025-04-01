import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/components/ui/back-button";

export default function JournalPage() {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1>Journal</h1>

            <Link href="/dashboard">
                <BackButton href="/dashboard" />    
            </Link>
        </div>
    )
}