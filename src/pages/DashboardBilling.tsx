import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CreditCard, Download } from "lucide-react";

const invoices = [
  { id: "INV-2026-04", date: "Apr 01, 2026", amount: "₹4,999", status: "Paid" },
  { id: "INV-2026-03", date: "Mar 01, 2026", amount: "₹4,999", status: "Paid" },
  { id: "INV-2026-02", date: "Feb 01, 2026", amount: "₹4,999", status: "Paid" },
  { id: "INV-2026-01", date: "Jan 01, 2026", amount: "₹3,999", status: "Paid" },
];

const DashboardBilling = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Billing</h1>
        <p className="text-muted-foreground text-sm">Subscription and payment management</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-none shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Professional Plan</p>
                <p className="text-sm text-muted-foreground">₹4,999/month</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Status</span><Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">Active</Badge></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Next billing</span><span className="text-foreground">Apr 30, 2026</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Payment method</span><span className="text-foreground">•••• 4242</span></div>
            </div>
            <Button className="w-full mt-4" variant="outline">Manage Subscription</Button>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardContent className="p-5">
            <p className="font-semibold text-foreground mb-2">Plan Features</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Up to 100 rooms", "Unlimited bookings", "5 OTA channels", "Advanced reports", "Priority support", "Channel manager"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {f}
                </li>
              ))}
            </ul>
            <Button className="w-full mt-4" size="sm">Upgrade to Enterprise</Button>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-base font-semibold">Invoice History</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs">Invoice</TableHead>
                <TableHead className="text-xs">Date</TableHead>
                <TableHead className="text-xs">Amount</TableHead>
                <TableHead className="text-xs">Status</TableHead>
                <TableHead className="text-xs text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((inv) => (
                <TableRow key={inv.id}>
                  <TableCell className="font-medium text-sm">{inv.id}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{inv.date}</TableCell>
                  <TableCell className="text-sm font-medium">{inv.amount}</TableCell>
                  <TableCell><Badge variant="outline" className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200">{inv.status}</Badge></TableCell>
                  <TableCell className="text-right"><Button variant="ghost" size="sm"><Download className="h-4 w-4" /></Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  </DashboardLayout>
);

export default DashboardBilling;
