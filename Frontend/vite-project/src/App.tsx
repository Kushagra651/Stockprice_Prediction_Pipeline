import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navigation from "./components/Navigation";
const Landing = lazy(() => import("./pages/Landing"));
const MarketTrends = lazy(() => import("./pages/MarketTrends"));
const Predictions = lazy(() => import("./pages/Predictions"));
const StockAnalysis = lazy(() => import("./pages/StockAnalysis"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

console.log("[FINSTOCK] App module loaded");

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <Suspense fallback={<div className="p-6 text-muted-foreground">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/market-trends" element={<MarketTrends />} />
              <Route path="/predictions" element={<Predictions />} />
              <Route path="/stock-analysis" element={<StockAnalysis />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;