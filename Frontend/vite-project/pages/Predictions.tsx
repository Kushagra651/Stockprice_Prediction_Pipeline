import { motion } from "framer-motion";
import { useState } from "react";
import { Search, TrendingUp, Brain } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

// Mock historical and predicted price data - TODO: Connect to backend API for real stock data
const mockPriceData = [
  { date: "2023-07", historical: 180.5, predicted: null },
  { date: "2023-08", historical: 175.2, predicted: null },
  { date: "2023-09", historical: 171.8, predicted: null },
  { date: "2023-10", historical: 168.4, predicted: null },
  { date: "2023-11", historical: 172.9, predicted: null },
  { date: "2023-12", historical: 178.3, predicted: null },
  { date: "2024-01", historical: 185.1, predicted: 186.2 },
  { date: "2024-02", historical: null, predicted: 192.8 },
  { date: "2024-03", historical: null, predicted: 198.4 },
  { date: "2024-04", historical: null, predicted: 201.7 },
  { date: "2024-05", historical: null, predicted: 205.3 },
  { date: "2024-06", historical: null, predicted: 210.8 },
];

// Mock market insights data - TODO: Connect to backend API for Apriori algorithm correlation results
const mockInsights = [
  { pair: "AAPL - GOOG", support: "0.75", confidence: "0.82" },
  { pair: "GOOG - AAPL", support: "0.68", confidence: "0.79" },
  { pair: "TSLA - NVDA", support: "0.62", confidence: "0.71" },
  { pair: "MSFT - AAPL", support: "0.58", confidence: "0.68" },
  { pair: "NVDA - AMD", support: "0.54", confidence: "0.65" },
];

const Predictions = () => {
  const [searchSymbol, setSearchSymbol] = useState("AAPL");
  const [isSearching, setIsSearching] = useState(false);

  const handlePredict = async () => {
    setIsSearching(true);
    // TODO: Connect to backend API for stock prediction
    // Simulate API call delay
    setTimeout(() => {
      setIsSearching(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">AI-Powered Stock Predictions</h1>
          <p className="text-muted-foreground">Advanced machine learning models for accurate stock price forecasting</p>
        </motion.div>

        {/* Search Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >
          <div className="bg-card p-6 rounded-xl border border-border">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Enter stock symbol (e.g., AAPL, GOOG, TSLA)"
                  value={searchSymbol}
                  onChange={(e) => setSearchSymbol(e.target.value.toUpperCase())}
                  className="text-lg"
                />
              </div>
              <Button
                onClick={handlePredict}
                disabled={isSearching}
                className="px-8"
              >
                {isSearching ? (
                  <>
                    <Brain className="w-4 h-4 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Predict
                  </>
                )}
              </Button>
            </div>
          </div>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Price Forecast Chart */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">Price Forecast - {searchSymbol}</h2>
                <Link to="/stock-analysis">
                  <Button variant="outline" size="sm">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    View Full Analysis
                  </Button>
                </Link>
              </div>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockPriceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="date" 
                      stroke="hsl(var(--muted-foreground))" 
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      domain={['dataMin - 10', 'dataMax + 10']}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="historical" 
                      stroke="hsl(var(--muted-foreground))" 
                      strokeWidth={2}
                      connectNulls={false}
                      name="Historical Price"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="predicted" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      strokeDasharray="5 5"
                      connectNulls={false}
                      name="Predicted Price"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="flex items-center justify-center mt-4 space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-1 bg-muted-foreground rounded"></div>
                  <span className="text-sm text-muted-foreground">Historical Price</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-1 bg-primary rounded" style={{ background: "repeating-linear-gradient(to right, hsl(var(--primary)) 0, hsl(var(--primary)) 4px, transparent 4px, transparent 8px)" }}></div>
                  <span className="text-sm text-muted-foreground">AI Prediction</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Market Insights */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-card p-6 rounded-xl border border-border">
              <h2 className="text-xl font-bold text-foreground mb-6">Market Insights</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Stock correlations based on AI analysis
                {/* TODO: Connect to backend Apriori algorithm correlation results */}
              </p>
              
              <div className="space-y-4">
                {mockInsights.map((insight, index) => (
                  <motion.div
                    key={insight.pair}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-muted/50 p-4 rounded-lg"
                  >
                    <div className="font-medium text-foreground mb-2">{insight.pair}</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Support:</span>
                        <span className="ml-2 text-primary font-medium">{insight.support}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Confidence:</span>
                        <span className="ml-2 text-primary font-medium">{insight.confidence}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">AI Recommendation</h3>
                <p className="text-sm text-muted-foreground">
                  Based on correlation analysis, {searchSymbol} shows strong positive correlation with major tech stocks. 
                  Market sentiment suggests a <span className="text-success font-medium">bullish trend</span> for the next quarter.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Predictions;