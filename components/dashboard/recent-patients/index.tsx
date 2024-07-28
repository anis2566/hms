import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { PatientCard } from "./patient-card"

export const RecentPatients = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Patients</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <PatientCard />
                <PatientCard />
                <PatientCard />
                <PatientCard />
                <PatientCard />
            </CardContent>
        </Card>
    )
}