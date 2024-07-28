import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const RecentTransactions = () => {
    return (
        <Card>
            <CardHeader className="flex flex-row justify-between items-center">
                <CardTitle>Recent Transactions</CardTitle>
                <Badge>$1500</Badge>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableHead>Patient</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Method</TableHead>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="flex gap-x-4 py-2">
                                <Avatar>
                                    <AvatarImage className="w-10 h-10" src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p>Anichur Rahman</p>
                                    <p className="text-sm text-muted-foreground">01319131697</p>
                                </div>
                            </TableCell>
                            <TableCell className="py-2">22 July 2023</TableCell>
                            <TableCell className="py-2">
                                <Badge>Pending</Badge>
                            </TableCell>
                            <TableCell className="py-2">$100</TableCell>
                            <TableCell className="py-2">Cash</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="flex gap-x-4 py-2">
                                <Avatar>
                                    <AvatarImage className="w-10 h-10" src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p>Anichur Rahman</p>
                                    <p className="text-sm text-muted-foreground">01319131697</p>
                                </div>
                            </TableCell>
                            <TableCell className="py-2">22 July 2023</TableCell>
                            <TableCell className="py-2">
                                <Badge>Pending</Badge>
                            </TableCell>
                            <TableCell className="py-2">$100</TableCell>
                            <TableCell className="py-2">Cash</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="flex gap-x-4 py-2">
                                <Avatar>
                                    <AvatarImage className="w-10 h-10" src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p>Anichur Rahman</p>
                                    <p className="text-sm text-muted-foreground">01319131697</p>
                                </div>
                            </TableCell>
                            <TableCell className="py-2">22 July 2023</TableCell>
                            <TableCell className="py-2">
                                <Badge>Pending</Badge>
                            </TableCell>
                            <TableCell className="py-2">$100</TableCell>
                            <TableCell className="py-2">Cash</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="flex gap-x-4 py-2">
                                <Avatar>
                                    <AvatarImage className="w-10 h-10" src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p>Anichur Rahman</p>
                                    <p className="text-sm text-muted-foreground">01319131697</p>
                                </div>
                            </TableCell>
                            <TableCell className="py-2">22 July 2023</TableCell>
                            <TableCell className="py-2">
                                <Badge>Pending</Badge>
                            </TableCell>
                            <TableCell className="py-2">$100</TableCell>
                            <TableCell className="py-2">Cash</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="flex gap-x-4 py-2">
                                <Avatar>
                                    <AvatarImage className="w-10 h-10" src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p>Anichur Rahman</p>
                                    <p className="text-sm text-muted-foreground">01319131697</p>
                                </div>
                            </TableCell>
                            <TableCell className="py-2">22 July 2023</TableCell>
                            <TableCell className="py-2">
                                <Badge>Pending</Badge>
                            </TableCell>
                            <TableCell className="py-2">$100</TableCell>
                            <TableCell className="py-2">Cash</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}