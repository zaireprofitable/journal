import Link from "next/link"
import * as React from "react"

const journals = {
    "minimum-standards": {
        title: "Minimum Standards",
        date: "19 June 2024",
        content: "..."
    },
    // more entries...
}

const JournalList = () => {
    return (
    <div className="w-full">
        <Link href="/journal/minimum-standards">
            <div className="inline-flex flex-col justify-start items-start gap-4">
                <div className="inline-flex justify-start items-center gap-11 journal-list-item">
                    <div className="w-28 inline-flex flex-col justify-start items-start gap-1">
                    <div className="self-stretch justify-start text-zinc-600 text-lg font-medium font-['Helvetica_Neue'] leading-snug">19 June 2024</div>
                </div>
                <div className="inline-flex flex-col justify-start items-start gap-1">
                    <div className="self-stretch justify-start text-neutral-900 text-lg font-medium font-['Helvetica_Neue'] leading-snug">Minimum standards</div>
                </div>
                </div>
            </div>
        </Link>

        <Link href="/journal/is-being-average-okay-with-you">
            <div className="self-stretch inline-flex justify-start items-center gap-11 journal-list-item">
                <div className="w-28 inline-flex flex-col justify-start items-start gap-1">
                <div className="self-stretch justify-start text-zinc-600 text-lg font-medium font-['Helvetica_Neue'] leading-snug">18 June 2024</div>
            </div>
            <div className="inline-flex flex-col justify-start items-start gap-1">
                    <div className="self-stretch justify-start text-neutral-900 text-lg font-medium font-['Helvetica_Neue'] leading-snug">Is being average okay with you?</div>
                </div>
            </div>
        </Link>

        <Link href="/journal/perfectionism-is-stupid">
            <div className="inline-flex justify-start items-center gap-11 journal-list-item">
                <div className="w-28 inline-flex flex-col justify-start items-start gap-1">
                    <div className="self-stretch justify-start text-zinc-600 text-lg font-medium font-['Helvetica_Neue'] leading-snug">14 June 2024</div>
                </div>
                <div className="inline-flex flex-col justify-start items-start gap-1">
                    <div className="self-stretch justify-start text-neutral-900 text-lg font-medium font-['Helvetica_Neue'] leading-snug">Perfectionism is stupid</div>
                </div>
            </div>
        </Link>
    </div>
    )
}

export { JournalList }