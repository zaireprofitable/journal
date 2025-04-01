import { ProfileInfo } from "@/components/ui/profile_info"
import { JournalList } from "@/components/ui/journal_list"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus } from '@geist-ui/icons'

export default function Dashboard() {
  return (
    <div className="min-h-screen mx-auto p-8 flex flex-col">

        <div className="max-w-[640px] mx-auto my-auto flex flex-col gap-24">
          
          <ProfileInfo />
          <JournalList />
        </div>
      
    </div>
  )
}
