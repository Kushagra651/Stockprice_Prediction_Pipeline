import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Shield, Target, AlertTriangle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts";

// Mock comprehensive stock data - TODO: Connect to backend API for real stock analysis data
const stockOverview = {
  symbol: "MSFT - AAPL",
  confidenceScore: "0.87",
  liftScore: "2.3"
};

const companyData = {
  name: "Apple Inc.",
  sector: "Technology",
  industry: "Consumer Electronics",
  currentPrice: "$185.27",
  fiftyTwoWeekHigh: "$198.45",
  fiftyTwoWeekLow: "$164.08",
  marketCap: "$2.85T",
  peRatio: "28.7",
  dividendYield: "0.52%",
  beta: "1.26"
};

// Mock monthly returns data - TODO: Connect to backend API for performance data
const monthlyReturns = [
  { month: "Jan", return: 5.2 },
  { month: "Feb", return: -2.8 },
  { month: "Mar", return: 8.1 },
  { month: "Apr", return: -1.5 },
  { month: "May", return: 6.7 },
  { month: "Jun", return: 3.4 },
  { month: "Jul", return: -4.2 },
  { month: "Aug", return: 7.9 },
  { month: "Sep", return: 2.1 },
  { month: "Oct", return: -3.6 },
  { month: "Nov", return: 9.3 },
  { month: "Dec", return: 4.8 },
];

const performanceMetrics = {
  volatility: "22.4%",
  sharpeRatio: "1.43",
  riskLevel: "Medium",
  recommendation: "Buy"
};

const StockAnalysis = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stockOverview.symbol}
              </h1>
              <p className="text-muted-foreground">Comprehensive Stock Analysis</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Confidence Score</div>
              <div className="text-2xl font-bold text-primary">{stockOverview.confidenceScore}</div>
              <div className="text-sm text-muted-foreground">Lift: {stockOverview.liftScore}</div>
            </div>
          </div>
        </motion.div>

        {/* Top Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Company Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-card p-6 rounded-xl border border-border"
          >
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2 text-primary" />
              Company Overview
            </h2>
            <div className="space-y-3">
              <div>
                <span className="text-muted-foreground">Company Name:</span>
                <span className="ml-2 text-foreground font-medium">{companyData.name}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Sector:</span>
                <span className="ml-2 text-foreground font-medium">{companyData.sector}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Industry:</span>
                <span className="ml-2 text-foreground font-medium">{companyData.industry}</span>
              </div>
            </div>
          </motion.div>

          {/* Price Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card p-6 rounded-xl border border-border"
          >
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-success" />
              Price Metrics
            </h2>
            <div className="space-y-3">
              <div>
                <span className="text-muted-foreground">Current Price:</span>
                <span className="ml-2 text-foreground font-bold text-lg">{companyData.currentPrice}</span>
              </div>
              <div>
                <span className="text-muted-foreground">52-Week High:</span>
                <span className="ml-2 text-success font-medium">{companyData.fiftyTwoWeekHigh}</span>
              </div>
              <div>
                <span className="text-muted-foreground">52-Week Low:</span>
                <span className="ml-2 text-destructive font-medium">{companyData.fiftyTwoWeekLow}</span>
              </div>
            </div>
          </motion.div>

          {/* Financial Health */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-card p-6 rounded-xl border border-border"
          >
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-primary" />
              Financial Health
            </h2>
            <div className="space-y-3">
              <div>
                <span className="text-muted-foreground">Market Cap:</span>
                <span className="ml-2 text-foreground font-medium">{companyData.marketCap}</span>
              </div>
              <div>
                <span className="text-muted-foreground">P/E Ratio:</span>
                <span className="ml-2 text-foreground font-medium">{companyData.peRatio}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Dividend Yield:</span>
                <span className="ml-2 text-success font-medium">{companyData.dividendYield}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Beta:</span>
                <span className="ml-2 text-foreground font-medium">{companyData.beta}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Performance Analysis */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-card p-6 rounded-xl border border-border"
          >
            <h2 className="text-xl font-bold text-foreground mb-6">Performance Analysis</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="text-muted-foreground text-sm">Volatility</div>
                <div className="text-lg font-bold text-foreground">{performanceMetrics.volatility}</div>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="text-muted-foreground text-sm">Sharpe Ratio</div>
                <div className="text-lg font-bold text-primary">{performanceMetrics.sharpeRatio}</div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-foreground mb-4">Monthly Returns</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyReturns}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Bar dataKey="return" fill="hsl(var(--primary))">
                    {monthlyReturns.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.return > 0 ? "hsl(var(--success))" : "hsl(var(--destructive))"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Risk & Recommendations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-card p-6 rounded-xl border border-border"
          >
            <h2 className="text-xl font-bold text-foreground mb-6">Risk & Recommendations</h2>
            
            <div className="space-y-6">
              {/* Risk Level */}
              <div className="bg-muted/50 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">Investment Risk Level</h3>
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-yellow-500 mb-2">
                  {performanceMetrics.riskLevel}
                </div>
                <p className="text-sm text-muted-foreground">
                  Based on volatility, beta, and market conditions. Suitable for moderate risk tolerance investors.
                </p>
              </div>

              {/* Analyst Recommendation */}
              <div className="bg-muted/50 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">Analyst Recommendation</h3>
                  {performanceMetrics.recommendation === "Buy" && <TrendingUp className="w-5 h-5 text-success" />}
                  {performanceMetrics.recommendation === "Hold" && <Target className="w-5 h-5 text-yellow-500" />}
                  {performanceMetrics.recommendation === "Sell" && <TrendingDown className="w-5 h-5 text-destructive" />}
                </div>
                <div className={`text-2xl font-bold mb-2 ${
                  performanceMetrics.recommendation === "Buy" ? "text-success" :
                  performanceMetrics.recommendation === "Hold" ? "text-yellow-500" : "text-destructive"
                }`}>
                  {performanceMetrics.recommendation}
                </div>
                <p className="text-sm text-muted-foreground">
                  Strong fundamentals and positive AI sentiment analysis suggest favorable outlook for the next 6-12 months.
                </p>
              </div>

              {/* AI Insights */}
              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2 flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-primary" />
                  AI Risk Assessment
                </h3>
                <p className="text-sm text-muted-foreground">
                  Machine learning models indicate strong correlation with market leaders and consistent performance patterns. 
                  Risk-adjusted returns show positive momentum with manageable downside exposure.
                </p>
              </div>
            </div>

            {/* TODO: Connect to backend API for comprehensive analysis data */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StockAnalysis;