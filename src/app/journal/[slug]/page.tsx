import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function JournalPage() {
    return (
        <div>
            <h1>Journal</h1>

            <Link href="/dashboard">
                <button>Back</button>
            </Link>
        </div>
    )
}