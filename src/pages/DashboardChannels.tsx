import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, CheckCircle2, AlertCircle, RefreshCw, Settings } from "lucide-react";

const channels = [
  { name: "Booking.com", status: "Connected", lastSync: "2 min ago", rooms: 52, bookings: 45, revenue: "₹4,52,000", commission: "15%" },
  { name: "MakeMyTrip", status: "Connected", lastSync: "5 min ago", rooms: 52, bookings: 28, revenue: "₹2,10,000", commission: "18%" },
  { name: "Goibibo", status: "Connected", lastSync: "5 min ago", rooms: 52, bookings: 18, revenue: "₹1,62,000", commission: "16%" },
  { name: "Expedia", status: "Connected", lastSync: "8 min ago", rooms: 40, bookings: 12, revenue: "₹98,000", commission: "17%" },
  { name: "Agoda", status: "Disconnected", lastSync: "3 hours ago", rooms: 0, bookings: 0, revenue: "₹0", commission: "15%" },
  { name: "Airbnb", status: "Pending", lastSync: "Never", rooms: 0, bookings: 0, revenue: "₹0", commission: "3%" },
];

const statusIcon: Record<string, { icon: React.ElementType; color: string }> = {
  Connected: { icon: CheckCircle2, color: "text-emerald-600" },
  Disconnected: { icon: AlertCircle, color: "text-red-500" },
  Pending: { icon: RefreshCw, color: "text-amber-500" },
};

const DashboardChannels = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Channel Manager</h1>
            <p className="text-muted-foreground text-sm">Manage OTA connections and rate distribution</p>
          </div>
          <Button size="sm"><Globe className="h-4 w-4 mr-1" /> Add Channel</Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Active Channels", value: "4" },
            { label: "Total OTA Bookings", value: "103" },
            { label: "OTA Revenue", value: "₹9,22,000" },
            { label: "Avg Commission", value: "16.5%" },
          ].map((s) => (
            <Card key={s.label} className="border-none shadow-sm">
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {channels.map((ch) => {
            const si = statusIcon[ch.status];
            return (
              <Card key={ch.name} className="border-none shadow-sm">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Globe className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{ch.name}</p>
                        <div className="flex items-center gap-1">
                          <si.icon className={`h-3 w-3 ${si.color}`} />
                          <span className={`text-xs ${si.color}`}>{ch.status}</span>
                          <span className="text-xs text-muted-foreground ml-1">· Synced {ch.lastSync}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon"><Settings className="h-4 w-4" /></Button>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <p className="text-lg font-bold text-foreground">{ch.bookings}</p>
                      <p className="text-xs text-muted-foreground">Bookings</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-foreground">{ch.revenue}</p>
                      <p className="text-xs text-muted-foreground">Revenue</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-foreground">{ch.commission}</p>
                      <p className="text-xs text-muted-foreground">Commission</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardChannels;
