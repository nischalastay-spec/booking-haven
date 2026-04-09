import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MessageSquare, User } from "lucide-react";

const reviews = [
  { guest: "Rajesh Kumar", source: "Booking.com", rating: 5, date: "Apr 08, 2026", comment: "Excellent service and beautiful rooms. The staff was very helpful and the breakfast buffet was amazing.", replied: true },
  { guest: "Sarah Johnson", source: "Google", rating: 4, date: "Apr 06, 2026", comment: "Great location and clean rooms. The pool area could use some updating but overall a wonderful stay.", replied: true },
  { guest: "Amit Patel", source: "MakeMyTrip", rating: 3, date: "Apr 04, 2026", comment: "Decent hotel for the price. Room was a bit small but the location is convenient.", replied: false },
  { guest: "Maria Garcia", source: "TripAdvisor", rating: 5, date: "Apr 02, 2026", comment: "Absolutely loved our stay! The spa was incredible and the suite had a gorgeous view.", replied: false },
  { guest: "John Smith", source: "Booking.com", rating: 4, date: "Mar 30, 2026", comment: "Professional staff and well-maintained property. Would recommend for business travelers.", replied: true },
];

const DashboardReviews = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Reviews</h1>
        <p className="text-muted-foreground text-sm">Guest feedback and reputation management</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Overall Rating", value: "4.6/5" },
          { label: "Total Reviews", value: "284" },
          { label: "This Month", value: "18" },
          { label: "Response Rate", value: "87%" },
        ].map((s) => (
          <Card key={s.label} className="border-none shadow-sm">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        {reviews.map((r, i) => (
          <Card key={i} className="border-none shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{r.guest}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{r.source}</span>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground">{r.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`h-4 w-4 ${j < r.rating ? "text-amber-400 fill-amber-400" : "text-muted"}`} />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{r.comment}</p>
              <div className="flex items-center gap-2">
                {r.replied ? (
                  <Badge variant="outline" className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200">Replied</Badge>
                ) : (
                  <Button variant="outline" size="sm"><MessageSquare className="h-3 w-3 mr-1" /> Reply</Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </DashboardLayout>
);

export default DashboardReviews;
