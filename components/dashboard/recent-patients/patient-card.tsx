import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const PatientCard = () => {
    return (
        <div className="flex justify-between gap-x-2 shadow-sm shadow-primary/60 p-2">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="truncate">Anichur Rahaman</p>
            <div className="text-muted-foreground text-sm">
                <p>2.00</p>
                <p>PM</p>
            </div>
        </div>
    )
}