import './App.css';
import { 
  Leaf, 
  Users, 
  Handshake, 
  TrendingUp, 
  Store,
  Recycle,
  Heart,
  Globe,
  Award,
  Target,
  BarChart3,
  AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block mb-4 sm:mb-6">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider shadow-lg">
              HARVARD BUSINESS SCHOOL CASE STUDY
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900 bg-clip-text text-transparent leading-tight px-4">
            THE BODY SHOP
            <br />
            INTERNATIONAL
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl text-gray-700 font-semibold mb-4 sm:mb-6 px-4">
            Revolutionizing Cosmetics Through Values-Driven Business
          </p>
          
          <div className="bg-emerald-900 text-white px-4 sm:px-8 py-4 sm:py-6 rounded-2xl max-w-4xl mx-4 sm:mx-auto shadow-xl">
            <p className="text-sm sm:text-base md:text-lg italic leading-relaxed">
              "Business people have got to be the instigators of change. A company that makes a profit from society has a responsibility to return something to that society."
            </p>
            <p className="text-xs sm:text-sm mt-2 text-emerald-200">— Anita Roddick, Founder</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-6 sm:mt-8 text-gray-600 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
              <span className="font-semibold">1976 - 1991</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
              <span className="font-semibold">38 Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <Store className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
              <span className="font-semibold">586 Shops</span>
            </div>
          </div>
        </motion.div>

        {/* Founder Section */}
        <motion.div 
          {...fadeInUp}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 mb-8 sm:mb-12 border-2 border-emerald-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="md:col-span-1 flex flex-col items-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 p-1 shadow-xl mb-4">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl font-bold text-gray-600">
                  AR
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-emerald-900 mb-2">ANITA RODDICK</h3>
              <p className="text-sm sm:text-base text-gray-600 font-semibold">Founder & Visionary</p>
            </div>
            
            <div className="md:col-span-2">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="bg-emerald-50 rounded-xl p-3 sm:p-4 border-l-4 border-emerald-600">
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold mb-1">Founded</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-black text-emerald-900">March 1976</p>
                </div>
                <div className="bg-teal-50 rounded-xl p-3 sm:p-4 border-l-4 border-teal-600">
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold mb-1">Starting Capital</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-black text-teal-900">£4,000</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-3 sm:p-4 border-l-4 border-emerald-600">
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold mb-1">Location</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-black text-emerald-900">Brighton, UK</p>
                </div>
                <div className="bg-teal-50 rounded-xl p-3 sm:p-4 border-l-4 border-teal-600">
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold mb-1">Age at Start</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-black text-teal-900">33 years</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl p-4 sm:p-6">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <span className="font-bold text-emerald-900">Background:</span> Former UN International Labor Organization worker who traveled extensively through South Pacific and Africa, learning indigenous beauty practices. Her philosophy: use trade as an instrument for positive change.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Unconventional Approach */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mb-8 sm:mb-12"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 sm:mb-10 text-emerald-900 px-4"
          >
            THE UNCONVENTIONAL APPROACH
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Products */}
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-white/20 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <Leaf className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6">PRODUCTS</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>Natural ingredients (jojoba, cocoa butter)</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>Refillable & recyclable containers</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>NO animal testing</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>Honest, transparent labeling</span>
                </li>
              </ul>
            </motion.div>

            {/* Marketing */}
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-white/20 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <Target className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6">MARKETING</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span><strong>NO</strong> advertising budget</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>£2M in FREE publicity annually</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>NO miracle claims or promotions</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>Education over persuasion</span>
                </li>
              </ul>
            </motion.div>

            {/* Retail */}
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-emerald-700 to-teal-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-white/20 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <Store className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6">RETAIL</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>"Theater & Trading" concept</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>Brightly-lit, honest environment</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>Educational pamphlets in-store</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>Self-service perfume bar</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Growth Timeline */}
        <motion.div 
          {...fadeInUp}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 mb-8 sm:mb-12 border-2 border-emerald-100"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 sm:mb-10 text-emerald-900 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10" />
            <span>PHENOMENAL GROWTH</span>
          </h2>
          
          <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
            {/* 1976 */}
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-emerald-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
                <p className="text-3xl sm:text-4xl font-black text-emerald-900 mb-2">1976</p>
                <p className="text-sm sm:text-base text-gray-700 font-semibold">First shop in Brighton</p>
                <p className="text-xs sm:text-sm text-gray-600">25 natural products</p>
              </div>
            </div>
            
            {/* 1984 */}
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-teal-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
                <p className="text-3xl sm:text-4xl font-black text-teal-900 mb-2">1984</p>
                <p className="text-sm sm:text-base text-gray-700 font-semibold">Public listing on LSE</p>
                <p className="text-xs sm:text-sm text-gray-600">Stock opened 95p, closed 165p</p>
              </div>
            </div>
            
            {/* 1991 */}
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-emerald-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
                <p className="text-3xl sm:text-4xl font-black text-emerald-900 mb-2">1991</p>
                <p className="text-sm sm:text-base text-gray-700 font-semibold">586 shops worldwide</p>
                <p className="text-xs sm:text-sm text-gray-600">38 countries, 18 languages</p>
              </div>
            </div>
          </div>
          
          {/* Financial Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border-2 border-emerald-200">
              <p className="text-xs sm:text-sm text-gray-600 font-semibold mb-2">Turnover Growth</p>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-900">£4.9M → £115.6M</p>
              <p className="text-xs text-gray-500 mt-2">1984-1991</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border-2 border-teal-200">
              <p className="text-xs sm:text-sm text-gray-600 font-semibold mb-2">Profit Growth</p>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-teal-900">£1.0M → £20.0M</p>
              <p className="text-xs text-gray-500 mt-2">1984-1991</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border-2 border-emerald-200">
              <p className="text-xs sm:text-sm text-gray-600 font-semibold mb-2">Market Value (1991)</p>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-900">£350M</p>
              <p className="text-xs text-gray-500 mt-2">$591 million</p>
            </div>
          </div>
        </motion.div>

        {/* Three Pillars */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mb-8 sm:mb-12"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 sm:mb-10 text-emerald-900 px-4"
          >
            THREE PILLARS OF PHILOSOPHY
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Environmental */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border-4 border-emerald-200 hover:border-emerald-400 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                <Recycle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black mb-4 text-emerald-900">ENVIRONMENTAL</h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>2M refillable containers annually</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Biodegradable packaging</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Rainforest protection campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Recycled paper usage</span>
                </li>
              </ul>
            </motion.div>

            {/* Social Responsibility */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border-4 border-teal-200 hover:border-teal-400 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black mb-4 text-teal-900">SOCIAL RESPONSIBILITY</h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>75% women employees under 30</span>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>£1M daycare facility</span>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Community Care Department</span>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Education & training programs</span>
                </li>
              </ul>
            </motion.div>

            {/* Trade Not Aid */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border-4 border-emerald-200 hover:border-emerald-400 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                <Handshake className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black mb-4 text-emerald-900">TRADE NOT AID</h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Fair wages 4× local rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Boys' Town India (85 employed)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Soapworks Scotland factory</span>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>3,000+ jobs created globally</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div 
          {...fadeInUp}
          className="bg-gradient-to-br from-emerald-900 to-teal-900 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 mb-8 sm:mb-12 text-white"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 sm:mb-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10" />
            <span>OUTSTANDING PERFORMANCE</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-white/10 backdrop-blur rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
              <p className="text-emerald-200 text-xs sm:text-sm font-semibold mb-2">Return on Capital</p>
              <p className="text-4xl sm:text-5xl font-black mb-2">43.6%</p>
              <p className="text-emerald-300 text-xs sm:text-sm">vs Industry: 16.5%</p>
              <div className="mt-3 sm:mt-4 bg-white/20 rounded-full h-2">
                <div className="bg-emerald-400 h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
              <p className="text-teal-200 text-xs sm:text-sm font-semibold mb-2">Profit Margin</p>
              <p className="text-4xl sm:text-5xl font-black mb-2">17.2%</p>
              <p className="text-teal-300 text-xs sm:text-sm">vs Industry: 4.8%</p>
              <div className="mt-3 sm:mt-4 bg-white/20 rounded-full h-2">
                <div className="bg-teal-400 h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
              <p className="text-emerald-200 text-xs sm:text-sm font-semibold mb-2">Sales per Employee</p>
              <p className="text-4xl sm:text-5xl font-black mb-2">£66,783</p>
              <p className="text-emerald-300 text-xs sm:text-sm">vs Industry: £50,484</p>
              <div className="mt-3 sm:mt-4 bg-white/20 rounded-full h-2">
                <div className="bg-emerald-400 h-2 rounded-full" style={{width: '80%'}}></div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 text-center">
            <p className="text-emerald-200 text-xs sm:text-sm font-semibold mb-2">Stock Performance</p>
            <p className="text-base sm:text-lg mb-2">Known as <span className="text-2xl sm:text-3xl font-black block sm:inline mt-1 sm:mt-0">"The Shares That Defy Gravity"</span></p>
            <p className="text-emerald-300 text-xs sm:text-sm">Peak: £2.923 (1989) | Market Value: £350M (1991)</p>
          </div>
        </motion.div>

        {/* Challenges */}
        <motion.div 
          {...fadeInUp}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 mb-8 sm:mb-12 border-2 border-orange-200"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 sm:mb-10 text-orange-900 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10" />
            <span>CHALLENGES AHEAD</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-orange-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-l-4 border-orange-500">
              <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-orange-900">INTERNAL</h3>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>Risk of complacency as company grows</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>Leadership succession concerns</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>Maintaining culture at scale</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-l-4 border-red-500">
              <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-red-900">EXTERNAL</h3>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>U.S. market struggles (still at loss)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>Competition from Origins, Revlon</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>Political activism criticism</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Final Quote */}
        <motion.div 
          {...fadeInUp}
          className="bg-gradient-to-r from-emerald-800 to-teal-800 rounded-2xl sm:rounded-3xl shadow-2xl p-8 sm:p-12 text-white text-center mb-8 sm:mb-12"
        >
          <Award className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 opacity-50" />
          <blockquote className="text-lg sm:text-2xl md:text-3xl font-bold italic leading-relaxed mb-4 sm:mb-6">
            "The responsibility of business is not to create profits but to create live, vibrant, honorable organizations with real commitment to the community."
          </blockquote>
          <p className="text-emerald-200 text-base sm:text-lg">— Anita Roddick</p>
        </motion.div>

        {/* Footer */}
        <motion.div 
          {...fadeInUp}
          className="text-center text-gray-600 text-xs sm:text-sm"
        >
          <p className="mb-2">Harvard Business School Case Study 9-392-032</p>
          <p>The Body Shop International | 1976-1991</p>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
