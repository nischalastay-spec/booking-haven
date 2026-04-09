import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Star, User } from "lucide-react";

const guests = [
  { name: "Rajesh Kumar", email: "rajesh@email.com", phone: "+91 98765 43210", visits: 5, totalSpent: "₹67,800", lastVisit: "Apr 10, 2026", tier: "Gold" },
  { name: "Sarah Johnson", email: "sarah@email.com", phone: "+1 555-0123", visits: 3, totalSpent: "₹86,700", lastVisit: "Apr 09, 2026", tier: "Platinum" },
  { name: "Amit Patel", email: "amit@email.com", phone: "+91 87654 32109", visits: 1, totalSpent: "₹9,450", lastVisit: "Apr 11, 2026", tier: "Standard" },
  { name: "Maria Garcia", email: "maria@email.com", phone: "+34 612 345 678", visits: 2, totalSpent: "₹22,400", lastVisit: "Apr 09, 2026", tier: "Silver" },
  { name: "John Smith", email: "john@email.com", phone: "+44 7700 900123", visits: 8, totalSpent: "₹1,52,300", lastVisit: "Apr 12, 2026", tier: "Platinum" },
  { name: "Priya Sharma", email: "priya@email.com", phone: "+91 76543 21098", visits: 4, totalSpent: "₹31,200", lastVisit: "Apr 08, 2026", tier: "Gold" },
];

const tierColor: Record<string, string> = {
  Standard: "bg-muted text-muted-foreground",
  Silver: "bg-slate-100 text-slate-700",
  Gold: "bg-amber-50 text-amber-700",
  Platinum: "bg-violet-50 text-violet-700",
};

const DashboardGuests = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Guests</h1>
            <p className="text-muted-foreground text-sm">Guest profiles and loyalty management</p>
          </div>
          <Button size="sm"><Plus className="h-4 w-4 mr-1" /> Add Guest</Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total Guests", value: "1,284" },
            { label: "Repeat Guests", value: "342" },
            { label: "Avg Satisfaction", value: "4.6/5" },
            { label: "VIP Guests", value: "58" },
          ].map((s) => (
            <Card key={s.label} className="border-none shadow-sm">
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-none shadow-sm">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4">
            <CardTitle className="text-base font-semibold">Guest Directory</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search guests..." className="pl-9 h-9 w-56 bg-muted/50 border-none" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">Guest</TableHead>
                  <TableHead className="text-xs hidden md:table-cell">Phone</TableHead>
                  <TableHead className="text-xs hidden sm:table-cell">Visits</TableHead>
                  <TableHead className="text-xs hidden lg:table-cell">Total Spent</TableHead>
                  <TableHead className="text-xs hidden md:table-cell">Last Visit</TableHead>
                  <TableHead className="text-xs">Tier</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {guests.map((g) => (
                  <TableRow key={g.email} className="cursor-pointer">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <User className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{g.name}</p>
                          <p className="text-xs text-muted-foreground">{g.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm hidden md:table-cell text-muted-foreground">{g.phone}</TableCell>
                    <TableCell className="text-sm hidden sm:table-cell">{g.visits}</TableCell>
                    <TableCell className="text-sm hidden lg:table-cell font-medium">{g.totalSpent}</TableCell>
                    <TableCell className="text-sm hidden md:table-cell text-muted-foreground">{g.lastVisit}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`text-xs ${tierColor[g.tier]}`}>{g.tier}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DashboardGuests;
