"use client"

import { AreaChart, simulateData } from "@/components/charts/area-chart"

export const EarningChart = () => {
    const data = simulateData()
    return (
        <AreaChart data={data} />
    )
}