'use server'

interface JournalEntry {
    slug: string;
    title: string;
    content: string;
    date: string;
}
const data: JournalEntry[] = [
    {
        slug: 'my-first-entry',
        title: 'My First Entry',
        content: 'This is my first entry in the journal.',
        date: '2023-01-01'
    }
]