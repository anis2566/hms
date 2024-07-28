'use client'
import { useState, useEffect, useMemo, useRef } from "react"
import { Area, ComposedChart, ReferenceArea, ResponsiveContainer } from "recharts"
import {
    ChartConfig,
    ChartContainer,
} from "@/components/ui/chart"

type DataPoint = {
    date: string;
    events: number;
};

const chartConfig = {
    events: {
        label: "Events",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

interface Props {
    items: DataPoint[]
}

export function StatChart({ items}: Props) {
    const [data, setData] = useState<DataPoint[]>(items || []);
    const [refAreaLeft, setRefAreaLeft] = useState<string | null>(null);
    const [refAreaRight, setRefAreaRight] = useState<string | null>(null);
    const [startTime, setStartTime] = useState<string | null>(null);
    const [endTime, setEndTime] = useState<string | null>(null);
    const [originalData, setOriginalData] = useState<DataPoint[]>(items || []);
    const [isSelecting, setIsSelecting] = useState(false);
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (items?.length) {
            setData(items);
            setOriginalData(items);
            setStartTime(items[0].date);
            setEndTime(items[items.length - 1].date);
        }
    }, [items]);

    const zoomedData = useMemo(() => {
        if (!startTime || !endTime) {
            return data;
        }

        const dataPointsInRange = originalData.filter(
            (dataPoint) => dataPoint.date >= startTime && dataPoint.date <= endTime
        );

        // Ensure we have at least two data points for the chart to prevent rendering a single dot
        return dataPointsInRange.length > 1 ? dataPointsInRange : originalData.slice(0, 2);
    }, [startTime, endTime, originalData, data]);

    const handleMouseDown = (e: any) => {
        if (e.activeLabel) {
            setRefAreaLeft(e.activeLabel);
            setIsSelecting(true);
        }
    };

    const handleMouseMove = (e: any) => {
        if (isSelecting && e.activeLabel) {
            setRefAreaRight(e.activeLabel);
        }
    };

    const handleMouseUp = () => {
        if (refAreaLeft && refAreaRight) {
            const [left, right] = [refAreaLeft, refAreaRight].sort();
            setStartTime(left);
            setEndTime(right);
        }
        setRefAreaLeft(null);
        setRefAreaRight(null);
        setIsSelecting(false);
    };

    return (
        <ChartContainer
            config={chartConfig}
            className="w-full h-[69px]"
        >
            <div className="h-full" ref={chartRef} style={{ touchAction: 'none' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        data={zoomedData}
                        margin={{
                            top: 10,
                            right: 10,
                            left: 0,
                            bottom: 0,
                        }}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                    >
                        <defs>
                            <linearGradient id="colorEvents" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={chartConfig.events.color} stopOpacity={0.8} />
                                <stop offset="95%" stopColor={chartConfig.events.color} stopOpacity={0.1} />
                            </linearGradient>
                        </defs>
                        <Area
                            type="monotone"
                            dataKey="events"
                            stroke={chartConfig.events.color}
                            fillOpacity={1}
                            fill="url(#colorEvents)"
                            isAnimationActive={false}
                        />
                        {refAreaLeft && refAreaRight && (
                            <ReferenceArea
                                x1={refAreaLeft}
                                x2={refAreaRight}
                                strokeOpacity={0.3}
                                fill="hsl(var(--foreground))"
                                fillOpacity={0.05}
                            />
                        )}
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </ChartContainer>
    )
}