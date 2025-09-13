import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

// Mock data - TODO: Connect to backend API for real market data
const marketIndices = [
  { name: "S&P 500", value: "4,537.45", change: "+1.24%", isPositive: true },
  { name: "Dow Jones", value: "35,842.67", change: "-0.87%", isPositive: false },
  { name: "NASDAQ", value: "14,221.33", change: "+2.15%", isPositive: true },
  { name: "Russell 2000", value: "2,089.44", change: "+0.56%", isPositive: true },
];

const topSectors = [
  { sector: "Technology", "1Day": "+2.1%", "1Week": "+5.4%", "1Month": "+12.3%", "3Months": "+18.7%", "YTD": "+28.9%", "1Year": "+32.1%" },
  { sector: "Healthcare", "1Day": "+1.8%", "1Week": "+3.2%", "1Month": "+8.9%", "3Months": "+15.2%", "YTD": "+22.4%", "1Year": "+28.7%" },
  { sector: "Financial Services", "1Day": "+1.5%", "1Week": "+4.1%", "1Month": "+7.6%", "3Months": "+12.8%", "YTD": "+19.3%", "1Year": "+24.5%" },
  { sector: "Consumer Cyclical", "1Day": "+1.2%", "1Week": "+2.8%", "1Month": "+6.4%", "3Months": "+11.5%", "YTD": "+16.8%", "1Year": "+21.2%" },
];

const bottomSectors = [
  { sector: "Real Estate", "1Day": "-2.3%", "1Week": "-4.2%", "1Month": "-8.9%", "3Months": "-12.4%", "YTD": "-15.7%", "1Year": "-18.9%" },
  { sector: "Energy", "1Day": "-1.8%", "1Week": "-3.5%", "1Month": "-7.2%", "3Months": "-10.1%", "YTD": "-13.6%", "1Year": "-16.4%" },
  { sector: "Utilities", "1Day": "-1.5%", "1Week": "-2.9%", "1Month": "-5.8%", "3Months": "-8.7%", "YTD": "-11.2%", "1Year": "-13.8%" },
  { sector: "Materials", "1Day": "-1.2%", "1Week": "-2.4%", "1Month": "-4.6%", "3Months": "-7.3%", "YTD": "-9.8%", "1Year": "-12.1%" },
];

// Mock VIX data - TODO: Connect to backend API for real VIX data
const vixData = [
  { month: "Jan", value: 18.2 },
  { month: "Feb", value: 22.1 },
  { month: "Mar", value: 28.7 },
  { month: "Apr", value: 16.8 },
  { month: "May", value: 14.2 },
  { month: "Jun", value: 19.5 },
  { month: "Jul", value: 15.3 },
  { month: "Aug", value: 21.4 },
  { month: "Sep", value: 17.8 },
  { month: "Oct", value: 23.6 },
  { month: "Nov", value: 16.2 },
  { month: "Dec", value: 19.9 },
];

// Mock sector momentum data - TODO: Connect to backend API for real momentum data
const sectorMomentum = [
  { sector: "Technology", momentum: 85 },
  { sector: "Healthcare", momentum: 72 },
  { sector: "Financial", momentum: 68 },
  { sector: "Consumer", momentum: 58 },
  { sector: "Industrial", momentum: 45 },
  { sector: "Materials", momentum: 32 },
  { sector: "Energy", momentum: 28 },
  { sector: "Utilities", momentum: 22 },
  { sector: "Real Estate", momentum: 18 },
];

const MarketTrends = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Market Trends Analysis</h1>
          <p className="text-muted-foreground">Real-time market data and sector performance insights</p>
        </motion.div>

        {/* Market Indices */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Market Indices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketIndices.map((index, i) => (
              <div key={index.name} className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">{index.name}</h3>
                <p className="text-2xl font-bold text-foreground mb-1">{index.value}</p>
                <div className="flex items-center space-x-2">
                  {index.isPositive ? (
                    <TrendingUp className="w-4 h-4 text-success" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-destructive" />
                  )}
                  <span className={`font-medium ${index.isPositive ? 'text-success' : 'text-destructive'}`}>
                    {index.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Top Performing Sectors */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Top Performing Sectors</h2>
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Sector</th>
                    <th className="text-right p-4 font-semibold text-foreground">1 Day</th>
                    <th className="text-right p-4 font-semibold text-foreground">1 Week</th>
                    <th className="text-right p-4 font-semibold text-foreground">1 Month</th>
                    <th className="text-right p-4 font-semibold text-foreground">3 Months</th>
                    <th className="text-right p-4 font-semibold text-foreground">YTD</th>
                    <th className="text-right p-4 font-semibold text-foreground">1 Year</th>
                  </tr>
                </thead>
                <tbody>
                  {topSectors.map((sector, i) => (
                    <tr key={sector.sector} className="border-t border-border">
                      <td className="p-4 font-medium text-foreground">{sector.sector}</td>
                      <td className="p-4 text-right text-success font-medium">{sector["1Day"]}</td>
                      <td className="p-4 text-right text-success font-medium">{sector["1Week"]}</td>
                      <td className="p-4 text-right text-success font-medium">{sector["1Month"]}</td>
                      <td className="p-4 text-right text-success font-medium">{sector["3Months"]}</td>
                      <td className="p-4 text-right text-success font-medium">{sector["YTD"]}</td>
                      <td className="p-4 text-right text-success font-medium">{sector["1Year"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* Bottom Performing Sectors */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Bottom Performing Sectors</h2>
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Sector</th>
                    <th className="text-right p-4 font-semibold text-foreground">1 Day</th>
                    <th className="text-right p-4 font-semibold text-foreground">1 Week</th>
                    <th className="text-right p-4 font-semibold text-foreground">1 Month</th>
                    <th className="text-right p-4 font-semibold text-foreground">3 Months</th>
                    <th className="text-right p-4 font-semibold text-foreground">YTD</th>
                    <th className="text-right p-4 font-semibold text-foreground">1 Year</th>
                  </tr>
                </thead>
                <tbody>
                  {bottomSectors.map((sector, i) => (
                    <tr key={sector.sector} className="border-t border-border">
                      <td className="p-4 font-medium text-foreground">{sector.sector}</td>
                      <td className="p-4 text-right text-destructive font-medium">{sector["1Day"]}</td>
                      <td className="p-4 text-right text-destructive font-medium">{sector["1Week"]}</td>
                      <td className="p-4 text-right text-destructive font-medium">{sector["1Month"]}</td>
                      <td className="p-4 text-right text-destructive font-medium">{sector["3Months"]}</td>
                      <td className="p-4 text-right text-destructive font-medium">{sector["YTD"]}</td>
                      <td className="p-4 text-right text-destructive font-medium">{sector["1Year"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* VIX Chart */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Market Volatility (VIX)</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={vixData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.section>

          {/* Sector Momentum */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Sector Momentum</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sectorMomentum} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                    <YAxis type="category" dataKey="sector" stroke="hsl(var(--muted-foreground))" width={80} />
                    <Bar dataKey="momentum" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default MarketTrends;