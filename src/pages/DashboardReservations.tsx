import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Plus, CalendarCheck, Clock, CheckCircle2, XCircle } from "lucide-react";

const reservations = [
  { id: "BK-1042", guest: "Rajesh Kumar", email: "rajesh@email.com", room: "Deluxe 204", type: "Deluxe", checkIn: "2026-04-10", checkOut: "2026-04-13", nights: 3, status: "Confirmed", amount: "₹13,560", source: "Booking.com" },
  { id: "BK-1041", guest: "Sarah Johnson", email: "sarah@email.com", room: "Suite 501", type: "Suite", checkIn: "2026-04-09", checkOut: "2026-04-12", nights: 3, status: "Checked In", amount: "₹28,900", source: "Direct" },
  { id: "BK-1040", guest: "Amit Patel", email: "amit@email.com", room: "Standard 108", type: "Standard", checkIn: "2026-04-11", checkOut: "2026-04-14", nights: 3, status: "Pending", amount: "₹9,450", source: "MakeMyTrip" },
  { id: "BK-1039", guest: "Maria Garcia", email: "maria@email.com", room: "Deluxe 302", type: "Deluxe", checkIn: "2026-04-09", checkOut: "2026-04-11", nights: 2, status: "Checked In", amount: "₹11,200", source: "Goibibo" },
  { id: "BK-1038", guest: "John Smith", email: "john@email.com", room: "Suite 502", type: "Suite", checkIn: "2026-04-12", checkOut: "2026-04-15", nights: 3, status: "Confirmed", amount: "₹32,400", source: "Direct" },
  { id: "BK-1037", guest: "Priya Sharma", email: "priya@email.com", room: "Standard 112", type: "Standard", checkIn: "2026-04-08", checkOut: "2026-04-10", nights: 2, status: "Checked Out", amount: "₹7,800", source: "Booking.com" },
  { id: "BK-1036", guest: "David Lee", email: "david@email.com", room: "Deluxe 210", type: "Deluxe", checkIn: "2026-04-07", checkOut: "2026-04-09", nights: 2, status: "Cancelled", amount: "₹0", source: "MakeMyTrip" },
];

const statusConfig: Record<string, { color: string; icon: React.ElementType }> = {
  "Confirmed": { color: "bg-blue-50 text-blue-700 border-blue-200", icon: CalendarCheck },
  "Checked In": { color: "bg-emerald-50 text-emerald-700 border-emerald-200", icon: CheckCircle2 },
  "Pending": { color: "bg-amber-50 text-amber-700 border-amber-200", icon: Clock },
  "Checked Out": { color: "bg-muted text-muted-foreground border-border", icon: CheckCircle2 },
  "Cancelled": { color: "bg-red-50 text-red-700 border-red-200", icon: XCircle },
};

const summaryStats = [
  { label: "Total Reservations", value: "135", sub: "This month" },
  { label: "Check-ins Today", value: "8", sub: "3 pending" },
  { label: "Check-outs Today", value: "5", sub: "All processed" },
  { label: "Cancellations", value: "3", sub: "2.2% rate" },
];

const DashboardReservations = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Reservations</h1>
            <p className="text-muted-foreground text-sm">Manage all bookings and reservations</p>
          </div>
          <Button size="sm"><Plus className="h-4 w-4 mr-1" /> New Reservation</Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {summaryStats.map((s) => (
            <Card key={s.label} className="border-none shadow-sm">
              <CardContent className="p-4">
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm font-medium text-foreground">{s.label}</p>
                <p className="text-xs text-muted-foreground">{s.sub}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-none shadow-sm">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4">
            <CardTitle className="text-base font-semibold">All Reservations</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search..." className="pl-9 h-9 w-56 bg-muted/50 border-none" />
              </div>
              <Button variant="outline" size="sm"><Filter className="h-4 w-4 mr-1" /> Filter</Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">Booking ID</TableHead>
                  <TableHead className="text-xs">Guest</TableHead>
                  <TableHead className="text-xs hidden lg:table-cell">Room</TableHead>
                  <TableHead className="text-xs hidden md:table-cell">Check-in</TableHead>
                  <TableHead className="text-xs hidden md:table-cell">Check-out</TableHead>
                  <TableHead className="text-xs hidden sm:table-cell">Source</TableHead>
                  <TableHead className="text-xs">Status</TableHead>
                  <TableHead className="text-xs text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reservations.map((r) => {
                  const sc = statusConfig[r.status];
                  return (
                    <TableRow key={r.id} className="cursor-pointer">
                      <TableCell className="font-medium text-sm">{r.id}</TableCell>
                      <TableCell>
                        <div>
                          <p className="text-sm font-medium">{r.guest}</p>
                          <p className="text-xs text-muted-foreground">{r.email}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm hidden lg:table-cell text-muted-foreground">{r.room}</TableCell>
                      <TableCell className="text-sm hidden md:table-cell text-muted-foreground">{r.checkIn}</TableCell>
                      <TableCell className="text-sm hidden md:table-cell text-muted-foreground">{r.checkOut}</TableCell>
                      <TableCell className="text-sm hidden sm:table-cell text-muted-foreground">{r.source}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={`text-xs ${sc?.color}`}>{r.status}</Badge>
                      </TableCell>
                      <TableCell className="text-sm text-right font-medium">{r.amount}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DashboardReservations;
