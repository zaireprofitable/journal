import * as React from "react"

const ProfileInfo = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return (

    <div className="flex flex-col">
        <h2 className="text-2xl font-medium">Zaire Allen</h2>        
        
        <div className="flex flex-col py-4">
            <div className="text-lg font-medium text-secondary leading-tight">Growth Design Engineer</div>
            <div className="text-lg font-medium text-secondary leading-tight">New York City</div>
  
            <div className="flex flex-row gap-2">
                <div className="text-lg font-medium text-accent">
                    <a href="mailto:zaire@hedvig.com">X (Twitter)</a>
                </div>

                <h3>&#x2022;</h3>

                <div className="text-lg font-medium text-accent">
                    <a href="mailto:zaire@hedvig.com">LinkedIn</a>
                </div>
            </div> 
        </div>       
    </div>
    )
})

ProfileInfo.displayName = "ProfileInfo"

export { ProfileInfo }