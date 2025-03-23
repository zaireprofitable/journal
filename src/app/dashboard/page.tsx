import { ProfileInfo } from "@/components/ui/profile_info"
import { JournalList } from "@/components/ui/journal_list"

export default function Dashboard() {
  return (
    <div className="min-h-screen max-w-screen-lg mx-auto p-8 flex flex-col">

      <div className="max-w-screen-640px mx-auto flex flex-row gap-4">
        <ProfileInfo />

        <JournalList />
      </div>

      
    </div>
  )
}
