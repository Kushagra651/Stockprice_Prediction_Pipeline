import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  console.log("[FINSTOCK] Rendering Landing page");
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                New Real-time Market Analysis
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Predict Stock Markets
              <br />
              <span className="text-primary">With AI Precision</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Harness the power of advanced AI for precise stock predictions and comprehensive market analysis. 
              Get real-time insights, trend analysis, and smart investment recommendations tailored to your portfolio.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/predictions">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(217 91% 60% / 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all flex items-center space-x-2 shadow-lg"
                >
                  <span>Try Analysis</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <Link to="/market-trends">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-border bg-card text-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-muted transition-all"
                >
                  View Market Trends
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose FINSTOCK?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI algorithms provide you with the most accurate predictions and insights in the market.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-lg mb-6 group-hover:bg-success/20 transition-colors">
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                <span className="text-success">93%</span> Prediction Accuracy
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our advanced machine learning models achieve industry-leading accuracy in stock price predictions, 
                giving you confidence in your investment decisions.
              </p>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6 group-hover:bg-primary/20 transition-colors">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                <span className="text-primary">24/7</span> Market Monitoring
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Continuous market surveillance ensures you never miss important trends or opportunities. 
                Real-time alerts keep you informed of significant market movements.
              </p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6 group-hover:bg-primary/20 transition-colors">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                <span className="text-primary">50K+</span> Active Traders
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Join a thriving community of successful traders who rely on FINSTOCK for their investment strategies. 
                Learn from shared insights and market sentiment analysis.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;