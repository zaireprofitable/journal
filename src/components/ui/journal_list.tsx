import * as React from "react"


const JournalList = () => {
    return (
        <div className="w-96 inline-flex flex-col justify-start items-start gap-4">
    <div className="inline-flex justify-start items-center gap-11">
        <div className="w-28 inline-flex flex-col justify-start items-start gap-1">
            <div className="self-stretch justify-start text-zinc-600 text-lg font-medium font-['Helvetica_Neue'] leading-snug">19 June 2024</div>
        </div>
        <div className="inline-flex flex-col justify-start items-start gap-1">
            <div className="self-stretch justify-start text-neutral-900 text-lg font-medium font-['Helvetica_Neue'] leading-snug">Minimum standards</div>
        </div>
    </div>
    <div className="self-stretch inline-flex justify-start items-center gap-11">
        <div className="w-28 inline-flex flex-col justify-start items-start gap-1">
            <div className="self-stretch justify-start text-zinc-600 text-lg font-medium font-['Helvetica_Neue'] leading-snug">18 June 2024</div>
        </div>
        <div className="inline-flex flex-col justify-start items-start gap-1">
            <div className="self-stretch justify-start text-neutral-900 text-lg font-medium font-['Helvetica_Neue'] leading-snug">Is being average okay with you?</div>
        </div>
    </div>
    <div className="inline-flex justify-start items-center gap-11">
        <div className="w-28 inline-flex flex-col justify-start items-start gap-1">
            <div className="self-stretch justify-start text-zinc-600 text-lg font-medium font-['Helvetica_Neue'] leading-snug">14 June 2024</div>
        </div>
        <div className="inline-flex flex-col justify-start items-start gap-1">
            <div className="self-stretch justify-start text-neutral-900 text-lg font-medium font-['Helvetica_Neue'] leading-snug">Perfectionism is stupid</div>
        </div>
    </div>
</div>
    )
}

export { JournalList }