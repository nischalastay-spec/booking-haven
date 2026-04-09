import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import DashboardReservations from "./pages/DashboardReservations.tsx";
import DashboardRooms from "./pages/DashboardRooms.tsx";
import DashboardGuests from "./pages/DashboardGuests.tsx";
import DashboardChannels from "./pages/DashboardChannels.tsx";
import DashboardReports from "./pages/DashboardReports.tsx";
import DashboardSettings from "./pages/DashboardSettings.tsx";
import DashboardBilling from "./pages/DashboardBilling.tsx";
import DashboardReviews from "./pages/DashboardReviews.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/reservations" element={<DashboardReservations />} />
          <Route path="/dashboard/rooms" element={<DashboardRooms />} />
          <Route path="/dashboard/guests" element={<DashboardGuests />} />
          <Route path="/dashboard/channels" element={<DashboardChannels />} />
          <Route path="/dashboard/reports" element={<DashboardReports />} />
          <Route path="/dashboard/settings" element={<DashboardSettings />} />
          <Route path="/dashboard/billing" element={<DashboardBilling />} />
          <Route path="/dashboard/reviews" element={<DashboardReviews />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
