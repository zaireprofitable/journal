'use server'

export interface JournalEntry {
    slug: string;
    title: string;
    content: string;
    date: string;
}

// This is like our filing cabinet with some example "folders"
export async function getJournalEntries() {
    const journalEntries: { [key: string]: JournalEntry } = {
        "minimum-standards": {
            slug: "minimum-standards",
            title: "Minimum Standards",
            content: "This is my journal entry about standards...",
            date: "19 June 2024"
        },
        "perfectionism-is-stupid": {
            slug: "perfectionism-is-stupid",
            title: "Perfectionism is Stupid",
            content: "This is why being perfect is overrated...",
            date: "14 June 2024"
        }
    }
    return journalEntries;
}

// Helper functions we might need later
export function getJournalBySlug(slug: string): JournalEntry | undefined {
    return journalEntries[slug];
}

export function getAllJournals(): JournalEntry[] {
    return Object.values(journalEntries);
}