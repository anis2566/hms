import { BarChart, simulateData } from "@/components/charts/area-chart";
import { EarningChart } from "@/components/dashboard/charts/earning-chart";
import { StatChart } from "@/components/dashboard/charts/stat-chart";
import { ContentLayout } from "@/components/dashboard/layout/navbar/content-layout";
import { RecentAppoinments } from "@/components/dashboard/recent-appoinments";
import { RecentPatients } from "@/components/dashboard/recent-patients";
import { RecentTransactions } from "@/components/dashboard/recent-transaction";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, DollarSign, File, Users } from "lucide-react";
import Link from "next/link";

const AdminDashboard = () => {
    const data = [
        {
            date: "Sunday",
            events: 7,
        },
        {
            date: "Sunday",
            events: 5,
        },
        {
            date: "Sunday",
            events: 7,
        },
        {
            date: "Sunday",
            events: 3,
        },
        {
            date: "Sunday",
            events: 5,
        },
    ]
    return (
        <ContentLayout title="Dashboard">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/dashboard">Dashboard</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <section className="space-y-8">
                <div className="grid md:grid-cols-4 gap-6">
                    <Card className="p-4">
                        <CardHeader className="flex flex-row items-center justify-between p-0">
                            <div className="w-8 h-8 ring-2 rounded-md flex items-center justify-center">
                                <Users className="w-5 h-5 text-indigo-500" />
                            </div>
                            <CardTitle className="text-md">Total Patients</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <StatChart items={data} />
                        </CardContent>
                        <CardFooter className="p-0 mt-2 flex items-center justify-between">
                            <p className="text-sm">1500</p>
                            <p className="text-muted-foreground text-sm">34%+</p>
                        </CardFooter>
                    </Card>
                    <Card className="p-4">
                        <CardHeader className="flex flex-row items-center justify-between p-0">
                            <div className="w-8 h-8 ring-2 rounded-md flex items-center justify-center">
                                <Calendar className="w-5 h-5 text-indigo-500" />
                            </div>
                            <CardTitle className="text-md">Appointments</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <StatChart items={data} />
                        </CardContent>
                        <CardFooter className="p-0 mt-2 flex items-center justify-between">
                            <p className="text-sm">1500</p>
                            <p className="text-muted-foreground text-sm">34%+</p>
                        </CardFooter>
                    </Card>
                    <Card className="p-4">
                        <CardHeader className="flex flex-row items-center justify-between p-0">
                            <div className="w-8 h-8 ring-2 rounded-md flex items-center justify-center">
                                <File className="w-5 h-5 text-indigo-500" />
                            </div>
                            <CardTitle className="text-md">Prescriptions</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <StatChart items={data} />
                        </CardContent>
                        <CardFooter className="p-0 mt-2 flex items-center justify-between">
                            <p className="text-sm">1500</p>
                            <p className="text-muted-foreground text-sm">34%+</p>
                        </CardFooter>
                    </Card>
                    <Card className="p-4">
                        <CardHeader className="flex flex-row items-center justify-between p-0">
                            <div className="w-8 h-8 ring-2 rounded-md flex items-center justify-center">
                                <DollarSign className="w-5 h-5 text-indigo-500" />
                            </div>
                            <CardTitle className="text-md">Total Earning</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <StatChart items={data} />
                        </CardContent>
                        <CardFooter className="p-0 mt-2 flex items-center justify-between">
                            <p className="text-sm">1500</p>
                            <p className="text-muted-foreground text-sm">34%+</p>
                        </CardFooter>
                    </Card>
                </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                    <EarningChart />
                </div>
                <RecentPatients />
            </section>

            <section className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                    <RecentTransactions />
                </div>
                <RecentAppoinments />
            </section>
        </ContentLayout>
    )
}

export default AdminDashboard;