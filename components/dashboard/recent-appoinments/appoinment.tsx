import { Clock3 } from "lucide-react"

export const Appoinment = () => {
    return (
        <div className="flex items-center gap-x-4 h-[80px]">
            <div className="text-sm text-muted-foreground">
                2 hrs <br />
                later
            </div>
            <div className="h-full rounded-sm flex flex-col items-center justify-center">
                <div className="flex-1 bg-primary/60 w-1" />
                <div className="w-5 h-5 rounded-full ring-4 ring-primary/40 flex items-center justify-center">
                    <Clock3 className="w-5 h-5 text-white fill-amber-500" />
                </div>
                <div className="flex-1 bg-primary/60 w-1" />
            </div>
            <div className="flex-1">
                <p>Anichur Rahaman</p>
                <p className="text-sm text-muted-foreground">10.00 PM - 11.00 PM</p>
            </div>
        </div>
    )
}