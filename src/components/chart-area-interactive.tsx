"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const description = "An interactive area chart";

const chartData = [
  { date: "2024-04-01", items: 222, total: 150 },
  { date: "2024-04-02", items: 97, total: 180 },
  { date: "2024-04-03", items: 167, total: 120 },
  { date: "2024-04-04", items: 242, total: 260 },
  { date: "2024-04-05", items: 373, total: 290 },
  { date: "2024-04-06", items: 301, total: 340 },
  { date: "2024-04-07", items: 245, total: 180 },
  { date: "2024-04-08", items: 409, total: 320 },
  { date: "2024-04-09", items: 59, total: 110 },
  { date: "2024-04-10", items: 261, total: 190 },
  { date: "2024-04-11", items: 327, total: 350 },
  { date: "2024-04-12", items: 292, total: 210 },
  { date: "2024-04-13", items: 342, total: 380 },
  { date: "2024-04-14", items: 137, total: 220 },
  { date: "2024-04-15", items: 120, total: 170 },
  { date: "2024-04-16", items: 138, total: 190 },
  { date: "2024-04-17", items: 446, total: 360 },
  { date: "2024-04-18", items: 364, total: 410 },
  { date: "2024-04-19", items: 243, total: 180 },
  { date: "2024-04-20", items: 89, total: 150 },
  { date: "2024-04-21", items: 137, total: 200 },
  { date: "2024-04-22", items: 224, total: 170 },
  { date: "2024-04-23", items: 138, total: 230 },
  { date: "2024-04-24", items: 387, total: 290 },
  { date: "2024-04-25", items: 215, total: 250 },
  { date: "2024-04-26", items: 75, total: 130 },
  { date: "2024-04-27", items: 383, total: 420 },
  { date: "2024-04-28", items: 122, total: 180 },
  { date: "2024-04-29", items: 315, total: 240 },
  { date: "2024-04-30", items: 454, total: 380 },
  { date: "2024-05-01", items: 165, total: 220 },
  { date: "2024-05-02", items: 293, total: 310 },
  { date: "2024-05-03", items: 247, total: 190 },
  { date: "2024-05-04", items: 385, total: 420 },
  { date: "2024-05-05", items: 481, total: 390 },
  { date: "2024-05-06", items: 498, total: 520 },
  { date: "2024-05-07", items: 388, total: 300 },
  { date: "2024-05-08", items: 149, total: 210 },
  { date: "2024-05-09", items: 227, total: 180 },
  { date: "2024-05-10", items: 293, total: 330 },
  { date: "2024-05-11", items: 335, total: 270 },
  { date: "2024-05-12", items: 197, total: 240 },
  { date: "2024-05-13", items: 197, total: 160 },
  { date: "2024-05-14", items: 448, total: 490 },
  { date: "2024-05-15", items: 473, total: 380 },
  { date: "2024-05-16", items: 338, total: 400 },
  { date: "2024-05-17", items: 499, total: 420 },
  { date: "2024-05-18", items: 315, total: 350 },
  { date: "2024-05-19", items: 235, total: 180 },
  { date: "2024-05-20", items: 177, total: 230 },
  { date: "2024-05-21", items: 82, total: 140 },
  { date: "2024-05-22", items: 81, total: 120 },
  { date: "2024-05-23", items: 252, total: 290 },
  { date: "2024-05-24", items: 294, total: 220 },
  { date: "2024-05-25", items: 201, total: 250 },
  { date: "2024-05-26", items: 213, total: 170 },
  { date: "2024-05-27", items: 420, total: 460 },
  { date: "2024-05-28", items: 233, total: 190 },
  { date: "2024-05-29", items: 78, total: 130 },
  { date: "2024-05-30", items: 340, total: 280 },
  { date: "2024-05-31", items: 178, total: 230 },
  { date: "2024-06-01", items: 178, total: 200 },
  { date: "2024-06-02", items: 470, total: 410 },
  { date: "2024-06-03", items: 103, total: 160 },
  { date: "2024-06-04", items: 439, total: 380 },
  { date: "2024-06-05", items: 88, total: 140 },
  { date: "2024-06-06", items: 294, total: 250 },
  { date: "2024-06-07", items: 323, total: 370 },
  { date: "2024-06-08", items: 385, total: 320 },
  { date: "2024-06-09", items: 438, total: 480 },
  { date: "2024-06-10", items: 155, total: 200 },
  { date: "2024-06-11", items: 92, total: 150 },
  { date: "2024-06-12", items: 492, total: 420 },
  { date: "2024-06-13", items: 81, total: 130 },
  { date: "2024-06-14", items: 426, total: 380 },
  { date: "2024-06-15", items: 307, total: 350 },
  { date: "2024-06-16", items: 371, total: 310 },
  { date: "2024-06-17", items: 475, total: 520 },
  { date: "2024-06-18", items: 107, total: 170 },
  { date: "2024-06-19", items: 341, total: 290 },
  { date: "2024-06-20", items: 408, total: 450 },
  { date: "2024-06-21", items: 169, total: 210 },
  { date: "2024-06-22", items: 317, total: 270 },
  { date: "2024-06-23", items: 480, total: 530 },
  { date: "2024-06-24", items: 132, total: 180 },
  { date: "2024-06-25", items: 141, total: 190 },
  { date: "2024-06-26", items: 434, total: 380 },
  { date: "2024-06-27", items: 448, total: 490 },
  { date: "2024-06-28", items: 149, total: 200 },
  { date: "2024-06-29", items: 103, total: 160 },
  { date: "2024-06-30", items: 446, total: 400 },
];

const chartConfig = {
  sales: {
    label: "Sales",
  },
  items: {
    label: "Items",
    color: "var(--chart-2)",
  },
  total: {
    label: "Total",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React.useState("90d");

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d");
    }
  }, [isMobile]);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Total de Ventas</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Total de Ventas en los últimos 3 meses
          </span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">3 meses</ToggleGroupItem>
            <ToggleGroupItem value="30d">30 dias</ToggleGroupItem>
            <ToggleGroupItem value="7d">7 dias</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillItems" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-items)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-items)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillTotal" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-total)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-total)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              defaultIndex={isMobile ? -1 : 10}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="items"
              type="natural"
              fill="url(#fillItems)"
              stroke="var(--color-items)"
              stackId="a"
            />
            <Area
              dataKey="total"
              type="natural"
              fill="url(#fillTotal)"
              stroke="var(--color-total)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
