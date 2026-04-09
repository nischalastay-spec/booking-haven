import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BedDouble, Plus, Wifi, Wind, Tv, Bath } from "lucide-react";

const rooms = [
  { number: "101", type: "Standard", floor: "1st", status: "Available", price: "₹3,200", beds: "1 King", amenities: ["wifi", "ac", "tv"] },
  { number: "102", type: "Standard", floor: "1st", status: "Occupied", price: "₹3,200", beds: "2 Twin", amenities: ["wifi", "ac", "tv"] },
  { number: "108", type: "Standard", floor: "1st", status: "Reserved", price: "₹3,200", beds: "1 Queen", amenities: ["wifi", "ac"] },
  { number: "112", type: "Standard", floor: "1st", status: "Maintenance", price: "₹3,200", beds: "1 King", amenities: ["wifi", "ac", "tv"] },
  { number: "204", type: "Deluxe", floor: "2nd", status: "Occupied", price: "₹4,800", beds: "1 King", amenities: ["wifi", "ac", "tv", "bath"] },
  { number: "210", type: "Deluxe", floor: "2nd", status: "Available", price: "₹4,800", beds: "1 King", amenities: ["wifi", "ac", "tv", "bath"] },
  { number: "302", type: "Deluxe", floor: "3rd", status: "Occupied", price: "₹4,800", beds: "1 King", amenities: ["wifi", "ac", "tv", "bath"] },
  { number: "501", type: "Suite", floor: "5th", status: "Occupied", price: "₹9,500", beds: "1 King + Sofa", amenities: ["wifi", "ac", "tv", "bath"] },
  { number: "502", type: "Suite", floor: "5th", status: "Reserved", price: "₹9,500", beds: "1 King + Sofa", amenities: ["wifi", "ac", "tv", "bath"] },
];

const statusColor: Record<string, string> = {
  "Available": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Occupied": "bg-blue-50 text-blue-700 border-blue-200",
  "Reserved": "bg-amber-50 text-amber-700 border-amber-200",
  "Maintenance": "bg-red-50 text-red-700 border-red-200",
};

const amenityIcon: Record<string, React.ElementType> = { wifi: Wifi, ac: Wind, tv: Tv, bath: Bath };

const summary = [
  { label: "Total Rooms", value: "52" },
  { label: "Available", value: "18" },
  { label: "Occupied", value: "28" },
  { label: "Maintenance", value: "3" },
];

const DashboardRooms = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Rooms</h1>
            <p className="text-muted-foreground text-sm">Room inventory and status management</p>
          </div>
          <Button size="sm"><Plus className="h-4 w-4 mr-1" /> Add Room</Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {summary.map((s) => (
            <Card key={s.label} className="border-none shadow-sm">
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms.map((room) => (
            <Card key={room.number} className="border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <BedDouble className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Room {room.number}</p>
                      <p className="text-xs text-muted-foreground">{room.type} · {room.floor} Floor</p>
                    </div>
                  </div>
                  <Badge variant="outline" className={`text-xs ${statusColor[room.status]}`}>{room.status}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {room.amenities.map((a) => {
                      const Icon = amenityIcon[a];
                      return Icon ? <Icon key={a} className="h-3.5 w-3.5 text-muted-foreground" /> : null;
                    })}
                  </div>
                  <p className="text-sm font-semibold text-foreground">{room.price}<span className="text-xs text-muted-foreground font-normal">/night</span></p>
                </div>
                <p className="text-xs text-muted-foreground mt-2">{room.beds}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardRooms;
