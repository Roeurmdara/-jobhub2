"use client"

import { useState } from "react"
import {
  BarChart3,
  MessageSquare,
  Building2,
  Users,
  FileText,
  Calendar,
  Settings,
  HelpCircle,
  Bell,
  Plus,
  ArrowLeft,
  Eye,
  UserPlus,
  TrendingUp,
  TrendingDown,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/card";
import { Button } from "../components/button" 
import { Badge } from "../components/badge"

export default function DashboardAnalystic() {
  const [activeTab, setActiveTab] = useState("Analytics")

  const sidebarItems = [
    { icon: BarChart3, label: "Dashboard", active: false },
    { icon: MessageSquare, label: "Messages", active: false, badge: 1 },
    { icon: Building2, label: "Company Profile", active: false },
    { icon: Users, label: "All Applicants", active: false },
    { icon: FileText, label: "Job Listing", active: true },
    { icon: Calendar, label: "My Schedule", active: false },
  ]

  const settingsItems = [
    { icon: Settings, label: "Settings", active: false },
    { icon: HelpCircle, label: "Help Center", active: false },
  ]

  const tabs = ["Applicants", "Job Details", "Analytics"]

  const chartData = [
    { date: "19 Jul", views: 280 },
    { date: "20 Jul", views: 150 },
    { date: "21 Jul", views: 380 },
    { date: "22 Jul", views: 200 },
    { date: "23 Jul", views: 450 },
    { date: "24 Jul", views: 320 },
    { date: "25 Jul", views: 243 },
  ]

  const countryData = [
    { country: "USA", flag: "🇺🇸", visitors: "3,240" },
    { country: "France", flag: "🇫🇷", visitors: "3,188" },
    { country: "Italy", flag: "🇮🇹", visitors: "2,938" },
    { country: "Germany", flag: "🇩🇪", visitors: "2,624" },
    { country: "Japan", flag: "🇯🇵", visitors: "2,414" },
    { country: "Netherlands", flag: "🇳🇱", visitors: "1,916" },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">J</span>
            </div>
            <span className="font-bold text-xl">JobHuntly</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4">
          <nav className="space-y-2">
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                  item.active ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                {item.badge && <Badge className="ml-auto bg-red-500 text-white text-xs">{item.badge}</Badge>}
              </div>
            ))}
          </nav>

          <div className="mt-8">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">SETTINGS</p>
            <nav className="space-y-2">
              {settingsItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">MK</span>
            </div>
            <div>
              <p className="font-medium text-sm">Maria Kelly</p>
              <p className="text-xs text-gray-500">mariakelly@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Company</p>
                  <p className="font-semibold">Nomad</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="w-5 h-5 text-gray-400" />
              <Button className="bg-blue-600 hover:bg-blue-700 flex">
                <Plus className="w-4 h-4 mr-2 mt-0.5" />
                Post a job
                
              </Button>
            </div>
          </div>
        </header>

        {/* Job Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div>
                <h1 className="text-xl font-semibold">Social Media Assistant</h1>
                <p className="text-sm text-gray-500">Design • Full-Time • 4 / 11 Hired</p>
              </div>
            </div>
            <Button variant="outline" className="text-blue-600 border-blue-600 bg-transparent">
              More Action
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white border-b border-gray-200 px-6">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Metrics Cards */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Total Views</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold">23,564</span>
                      <div className="flex items-center text-green-600 text-sm">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        6.4%
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">vs last day</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Eye className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Total Applied</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold">132</span>
                      <div className="flex items-center text-red-600 text-sm">
                        <TrendingDown className="w-4 h-4 mr-1" />
                        0.4%
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">vs last day</p>
                  </div>
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <UserPlus className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Traffic Channel */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Traffic channel</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="2"
                      strokeDasharray="48, 100"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeDasharray="23, 100"
                      strokeDashoffset="-48"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      strokeDasharray="24, 100"
                      strokeDashoffset="-71"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeDasharray="5, 100"
                      strokeDashoffset="-95"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold">243</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      <span>Direct</span>
                    </div>
                    <span className="font-medium">48%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>Social</span>
                    </div>
                    <span className="font-medium">23%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span>Organic</span>
                    </div>
                    <span className="font-medium">24%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Other</span>
                    </div>
                    <span className="font-medium">5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Job Listing View Stats */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Job Listing View stats</CardTitle>
                  <Badge variant="outline" className="text-blue-600">
                    Last 7 days
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-64 relative">
                  <svg className="w-full h-full" viewBox="0 0 700 200">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Grid lines */}
                    {[0, 50, 100, 150, 200].map((y) => (
                      <line key={y} x1="0" y1={y} x2="700" y2={y} stroke="#f3f4f6" strokeWidth="1" />
                    ))}

                    {/* Chart line */}
                    <path
                      d="M 50 120 Q 150 160 200 80 T 350 40 T 500 60 T 650 157"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    {/* Fill area */}
                    <path
                      d="M 50 120 Q 150 160 200 80 T 350 40 T 500 60 T 650 157 L 650 200 L 50 200 Z"
                      fill="url(#gradient)"
                    />

                    {/* Data points */}
                    {chartData.map((point, index) => (
                      <circle key={index} cx={50 + index * 100} cy={200 - point.views / 5} r="4" fill="#10b981" />
                    ))}
                  </svg>

                  {/* Tooltip */}
                  <div className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Views</span>
                    </div>
                    <div className="font-bold">243</div>
                  </div>
                </div>

                {/* X-axis labels */}
                <div className="flex justify-between text-xs text-gray-500 mt-4">
                  {chartData.map((point, index) => (
                    <span key={index}>{point.date}</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Visitors by Country */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Visitors by country</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {countryData.map((country, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{country.flag}</span>
                        <span className="text-sm font-medium">{country.country}</span>
                      </div>
                      <span className="text-sm font-semibold">{country.visitors}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
