import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BedDouble,
  TrendingUp,
  Users,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  CalendarCheck,
  MoreHorizontal,
} from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const stats = [
  {
    label: "Total Revenue",
    value: "₹12,45,800",
    change: "+12.5%",
    up: true,
    icon: DollarSign,
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    label: "Occupancy Rate",
    value: "78%",
    change: "+4.2%",
    up: true,
    icon: BedDouble,
    color: "text-primary bg-primary/10",
  },
  {
    label: "Total Guests",
    value: "1,284",
    change: "+8.1%",
    up: true,
    icon: Users,
    color: "text-blue-600 bg-blue-50",
  },
  {
    label: "Avg Daily Rate",
    value: "₹4,520",
    change: "-2.3%",
    up: false,
    icon: TrendingUp,
    color: "text-violet-600 bg-violet-50",
  },
];

const revenueData = [
  { month: "Jan", revenue: 820000, bookings: 145 },
  { month: "Feb", revenue: 950000, bookings: 162 },
  { month: "Mar", revenue: 1100000, bookings: 178 },
  { month: "Apr", revenue: 980000, bookings: 155 },
  { month: "May", revenue: 1250000, bookings: 198 },
  { month: "Jun", revenue: 1180000, bookings: 185 },
  { month: "Jul", revenue: 1350000, bookings: 210 },
];

const occupancyData = [
  { day: "Mon", occupancy: 72, available: 28 },
  { day: "Tue", occupancy: 85, available: 15 },
  { day: "Wed", occupancy: 68, available: 32 },
  { day: "Thu", occupancy: 91, available: 9 },
  { day: "Fri", occupancy: 95, available: 5 },
  { day: "Sat", occupancy: 98, available: 2 },
  { day: "Sun", occupancy: 76, available: 24 },
];

const recentBookings = [
  { id: "BK-1042", guest: "Rajesh Kumar", room: "Deluxe 204", checkIn: "Apr 10", checkOut: "Apr 13", status: "Confirmed", amount: "₹13,560" },
  { id: "BK-1041", guest: "Sarah Johnson", room: "Suite 501", checkIn: "Apr 09", checkOut: "Apr 12", status: "Checked In", amount: "₹28,900" },
  { id: "BK-1040", guest: "Amit Patel", room: "Standard 108", checkIn: "Apr 11", checkOut: "Apr 14", status: "Pending", amount: "₹9,450" },
  { id: "BK-1039", guest: "Maria Garcia", room: "Deluxe 302", checkIn: "Apr 09", checkOut: "Apr 11", status: "Checked In", amount: "₹11,200" },
  { id: "BK-1038", guest: "John Smith", room: "Suite 502", checkIn: "Apr 12", checkOut: "Apr 15", status: "Confirmed", amount: "₹32,400" },
];

const channelPerformance = [
  { channel: "Booking.com", bookings: 45, revenue: "₹4,52,000", share: "36%" },
  { channel: "Direct Website", bookings: 32, revenue: "₹3,84,000", share: "28%" },
  { channel: "MakeMyTrip", bookings: 28, revenue: "₹2,10,000", share: "18%" },
  { channel: "Goibibo", bookings: 18, revenue: "₹1,62,000", share: "12%" },
  { channel: "Walk-in", bookings: 12, revenue: "₹98,000", share: "6%" },
];

const revenueConfig: ChartConfig = {
  revenue: { label: "Revenue", color: "hsl(27 95% 53%)" },
};

const occupancyConfig: ChartConfig = {
  occupancy: { label: "Occupied", color: "hsl(27 95% 53%)" },
  available: { label: "Available", color: "hsl(220 14% 91%)" },
};

const statusColor = (status: string) => {
  switch (status) {
    case "Confirmed": return "bg-blue-50 text-blue-700 border-blue-200";
    case "Checked In": return "bg-emerald-50 text-emerald-700 border-emerald-200";
    case "Pending": return "bg-amber-50 text-amber-700 border-amber-200";
    default: return "bg-muted text-muted-foreground";
  }
};

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground text-sm">Welcome back! Here's your hotel overview.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <CalendarCheck className="h-4 w-4 mr-1" /> Today
            </Button>
            <Button size="sm">+ New Booking</Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="border-none shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <span className={`text-xs font-medium flex items-center gap-0.5 ${stat.up ? "text-emerald-600" : "text-red-500"}`}>
                    {stat.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                    {stat.change}
                  </span>
                </div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Revenue Chart */}
          <Card className="lg:col-span-2 border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-semibold">Revenue Trend</CardTitle>
              <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
            </CardHeader>
            <CardContent>
              <ChartContainer config={revenueConfig} className="h-[280px] w-full">
                <AreaChart data={revenueData} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(27 95% 53%)" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="hsl(27 95% 53%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(220 13% 91%)" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} fontSize={12} />
                  <YAxis axisLine={false} tickLine={false} fontSize={12} tickFormatter={(v) => `₹${(v / 100000).toFixed(0)}L`} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area type="monotone" dataKey="revenue" stroke="hsl(27 95% 53%)" strokeWidth={2} fill="url(#revenueGrad)" />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Occupancy Chart */}
          <Card className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-semibold">Weekly Occupancy</CardTitle>
              <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
            </CardHeader>
            <CardContent>
              <ChartContainer config={occupancyConfig} className="h-[280px] w-full">
                <BarChart data={occupancyData} margin={{ top: 5, right: 5, left: 5, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(220 13% 91%)" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} fontSize={12} />
                  <YAxis axisLine={false} tickLine={false} fontSize={12} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="occupancy" fill="hsl(27 95% 53%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="available" fill="hsl(220 14% 91%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Tables Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Recent Bookings */}
          <Card className="lg:col-span-2 border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-semibold">Recent Bookings</CardTitle>
              <Button variant="link" size="sm" className="text-primary">View All</Button>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs">Booking ID</TableHead>
                    <TableHead className="text-xs">Guest</TableHead>
                    <TableHead className="text-xs hidden md:table-cell">Room</TableHead>
                    <TableHead className="text-xs hidden sm:table-cell">Check-in</TableHead>
                    <TableHead className="text-xs">Status</TableHead>
                    <TableHead className="text-xs text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentBookings.map((b) => (
                    <TableRow key={b.id} className="cursor-pointer">
                      <TableCell className="font-medium text-sm">{b.id}</TableCell>
                      <TableCell className="text-sm">{b.guest}</TableCell>
                      <TableCell className="text-sm hidden md:table-cell text-muted-foreground">{b.room}</TableCell>
                      <TableCell className="text-sm hidden sm:table-cell text-muted-foreground">{b.checkIn}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={`text-xs ${statusColor(b.status)}`}>{b.status}</Badge>
                      </TableCell>
                      <TableCell className="text-sm text-right font-medium">{b.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Channel Performance */}
          <Card className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-semibold">Channel Performance</CardTitle>
              <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {channelPerformance.map((ch) => (
                <div key={ch.channel} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">{ch.channel}</p>
                    <p className="text-xs text-muted-foreground">{ch.bookings} bookings</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">{ch.revenue}</p>
                    <p className="text-xs text-muted-foreground">{ch.share}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
