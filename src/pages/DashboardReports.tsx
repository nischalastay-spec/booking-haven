import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Download, FileText, TrendingUp, Users, BedDouble } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line } from "recharts";

const monthlyRevenue = [
  { month: "Oct", revenue: 780000 },
  { month: "Nov", revenue: 920000 },
  { month: "Dec", revenue: 1350000 },
  { month: "Jan", revenue: 820000 },
  { month: "Feb", revenue: 950000 },
  { month: "Mar", revenue: 1100000 },
];

const occupancyTrend = [
  { month: "Oct", rate: 65 },
  { month: "Nov", rate: 72 },
  { month: "Dec", rate: 92 },
  { month: "Jan", rate: 68 },
  { month: "Feb", rate: 75 },
  { month: "Mar", rate: 78 },
];

const revenueConfig: ChartConfig = { revenue: { label: "Revenue", color: "hsl(27 95% 53%)" } };
const occConfig: ChartConfig = { rate: { label: "Occupancy %", color: "hsl(220 70% 55%)" } };

const reports = [
  { title: "Revenue Report", desc: "Monthly revenue breakdown by source", icon: TrendingUp },
  { title: "Occupancy Report", desc: "Room occupancy rates and trends", icon: BedDouble },
  { title: "Guest Analytics", desc: "Guest demographics and preferences", icon: Users },
  { title: "Financial Summary", desc: "P&L statement and tax reports", icon: FileText },
];

const DashboardReports = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Reports</h1>
          <p className="text-muted-foreground text-sm">Analytics and business intelligence</p>
        </div>
        <Button variant="outline" size="sm"><Download className="h-4 w-4 mr-1" /> Export All</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="border-none shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={revenueConfig} className="h-[250px] w-full">
              <BarChart data={monthlyRevenue} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(220 13% 91%)" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} fontSize={12} />
                <YAxis axisLine={false} tickLine={false} fontSize={12} tickFormatter={(v) => `₹${(v/100000).toFixed(0)}L`} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="revenue" fill="hsl(27 95% 53%)" radius={[4,4,0,0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">Occupancy Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={occConfig} className="h-[250px] w-full">
              <LineChart data={occupancyTrend} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(220 13% 91%)" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} fontSize={12} />
                <YAxis axisLine={false} tickLine={false} fontSize={12} domain={[0,100]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="rate" stroke="hsl(220 70% 55%)" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-foreground mb-3">Available Reports</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reports.map((r) => (
            <Card key={r.title} className="border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <r.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{r.title}</p>
                  <p className="text-sm text-muted-foreground">{r.desc}</p>
                </div>
                <Button variant="outline" size="sm"><Download className="h-4 w-4" /></Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default DashboardReports;
