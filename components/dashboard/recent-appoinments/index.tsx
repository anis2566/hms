import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Timeline, TimelineConnector, TimelineContent, TimelineDescription, TimelineHeader, TimelineIcon, TimelineItem, TimelineTime, TimelineTitle } from "@/components/ui/timeline"
import { Appoinment } from "./appoinment"

export const RecentAppoinments = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Appoinments</CardTitle>
            </CardHeader>
            <CardContent>
                <Appoinment />
                <Appoinment />
                <Appoinment />
                <Appoinment />
            </CardContent>
        </Card>
    )
}