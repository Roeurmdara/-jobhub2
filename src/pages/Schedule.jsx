"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Plus, Bell } from "lucide-react"
import { Button } from "../components/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/card"
import { Checkbox } from "../components/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "../components/avatar"

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const sidebarItems = [
  { name: "Dashboard", icon: "🏠", active: false },
  { name: "Messages", icon: "💬", active: false, badge: 1 },
  { name: "Company Profile", icon: "🏢", active: false },
  { name: "All Applicants", icon: "👥", active: false },
  { name: "Job Listing", icon: "📋", active: false },
  { name: "My Schedule", icon: "📅", active: true },
]

const categories = [
  { name: "Interview Schedule", color: "bg-blue-500", checked: true },
  { name: "Internal Meeting", color: "bg-green-500", checked: true },
  { name: "Team Schedule", color: "bg-purple-500", checked: false },
  { name: "My Task", color: "bg-orange-500", checked: false },
  { name: "Reminders", color: "bg-red-500", checked: false },
]

const events = [
  {
    id: 1,
    title: "Interview Session with Kathryn Murphy",
    time: "02:00 - 05:00 AM",
    date: 24,
    type: "interview",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Interview Session",
    time: "09:00 - 09:00 AM",
    date: 24,
    type: "interview",
    color: "bg-blue-500",
  },
  {
    id: 3,
    title: "Meeting with a...",
    time: "09:00 - 10:00 AM",
    date: 26,
    type: "meeting",
    color: "bg-green-500",
  },
]

export default function JobScheduleApp() {
  const [currentDate, setCurrentDate] = useState(new Date(2021, 10, 24)) // November 24, 2021
  const [viewMode, setViewMode] = useState("Month")
  const [selectedCategories, setSelectedCategories] = useState(categories)

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }

    return days
  }

  const navigateMonth = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const toggleCategory = (index) => {
    setSelectedCategories((prev) => prev.map((cat, i) => (i === index ? { ...cat, checked: !cat.checked } : cat)))
  }

  const getEventForDay = (day) => {
    return events.filter((event) => event.date === day)
  }

  const timeSlots = Array.from({ length: 13 }, (_, i) => i + 1)

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r">
        {/* Logo */}
        <div className="p-6 border-b">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">JH</span>
            </div>
            <span className="font-semibold text-lg">JobHuntly</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                item.active ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </div>
              {item.badge && (
                <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </nav>

        {/* Settings */}
        <div className="absolute bottom-0 w-64 p-4 border-t">
          <div className="space-y-2">
            <div className="flex items-center space-x-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
              <span className="text-lg">⚙️</span>
              <span className="font-medium">Settings</span>
            </div>
            <div className="flex items-center space-x-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
              <span className="text-lg">❓</span>
              <span className="font-medium">Help Center</span>
            </div>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3 p-3 mt-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" />
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-sm">Maria Kelly</div>
              <div className="text-xs text-gray-500">mariakelly@email.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Calendar Section */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">My Schedule</h1>
                <p className="text-sm text-blue-600">Today</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">🟢</span>
                <span className="text-sm font-medium">Company</span>
                <span className="text-sm text-gray-500">Nomad</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
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

          {/* Calendar Navigation */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={() => navigateMonth("prev")}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <h2 className="text-lg font-semibold">
                {months[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <Button variant="outline" size="sm" onClick={() => navigateMonth("next")}>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex space-x-2">
              {["Day", "Week", "Month"].map((mode) => (
                <Button
                  key={mode}
                  variant={viewMode === mode ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode(mode)}
                >
                  {mode}
                </Button>
              ))}
            </div>
          </div>

          {/* Week View Header */}
          <div className="grid grid-cols-8 gap-4 mb-4">
            <div className="text-center text-sm font-medium text-gray-500">GMT +07</div>
            {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day, index) => {
              const dayNumber = 23 + index
              const isToday = dayNumber === 24
              return (
                <div key={day} className="text-center">
                  <div className="text-sm font-medium text-gray-500 mb-1">{day}</div>
                  <div
                    className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center text-sm font-medium ${
                      isToday
                        ? "bg-blue-600 text-white"
                        : dayNumber === 27
                          ? "bg-red-100 text-red-600"
                          : "text-gray-900"
                    }`}
                  >
                    {dayNumber}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Calendar Grid */}
          <div className="bg-white rounded-lg border">
            <div className="grid grid-cols-8 h-96">
              {/* Time Column */}
              <div className="border-r">
                {timeSlots.map((hour) => (
                  <div key={hour} className="h-12 border-b flex items-center justify-center text-xs text-gray-500">
                    {hour} AM
                  </div>
                ))}
              </div>

              {/* Day Columns */}
              {Array.from({ length: 7 }, (_, dayIndex) => {
                const dayNumber = 23 + dayIndex
                const dayEvents = getEventForDay(dayNumber)

                return (
                  <div key={dayIndex} className="border-r relative">
                    {timeSlots.map((hour, hourIndex) => (
                      <div key={hour} className="h-12 border-b relative">
                        {/* Render events */}
                        {dayEvents.map((event) => {
                          if (hourIndex === 1 && dayNumber === 24) {
                            // First event
                            return (
                              <div
                                key={event.id}
                                className={`absolute inset-x-1 top-1 ${event.color} text-white text-xs p-2 rounded shadow-sm z-10`}
                                style={{ height: "140px" }}
                              >
                                <div className="font-medium">{event.title}</div>
                                <div className="text-xs opacity-90">{event.time}</div>
                                <div className="flex items-center mt-2">
                                  <Avatar className="w-4 h-4 mr-1">
                                    <AvatarImage src="/placeholder.svg?height=16&width=16" />
                                    <AvatarFallback className="text-xs">KM</AvatarFallback>
                                  </Avatar>
                                  <Avatar className="w-4 h-4">
                                    <AvatarImage src="/placeholder.svg?height=16&width=16" />
                                    <AvatarFallback className="text-xs">+2</AvatarFallback>
                                  </Avatar>
                                </div>
                              </div>
                            )
                          }
                          if (hourIndex === 7 && dayNumber === 24) {
                            // Second event
                            return (
                              <div
                                key={event.id}
                                className={`absolute inset-x-1 top-1 ${event.color} text-white text-xs p-2 rounded shadow-sm`}
                              >
                                <div className="font-medium">Interview Session</div>
                                <div className="text-xs opacity-90">09:00 - 09:00 AM</div>
                              </div>
                            )
                          }
                          if (hourIndex === 8 && dayNumber === 26) {
                            // Meeting event
                            return (
                              <div
                                key={event.id}
                                className="absolute inset-x-1 top-1 bg-green-500 text-white text-xs p-2 rounded shadow-sm"
                              >
                                <div className="font-medium">Meeting with a...</div>
                                <div className="text-xs opacity-90">09:00 - 10:00 AM</div>
                              </div>
                            )
                          }
                          return null
                        })}
                      </div>
                    ))}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 p-6 bg-white border-l">
          {/* Create Event Button */}
          <Button className="w-full mb-6 bg-blue-600 hover:bg-blue-700 flex">
            <Plus className="w-4 h-4 mr-2 mt-0.5" />
            Create Event
          </Button>

          {/* Mini Calendar */}
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">NOVEMBER 2021</CardTitle>
                <div className="flex space-x-1">
                  <Button variant="ghost" size="sm" onClick={() => navigateMonth("prev")}>
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => navigateMonth("next")}>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="text-gray-500 font-medium p-1">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {getDaysInMonth(currentDate).map((day, index) => (
                  <div
                    key={index}
                    className={`p-1 cursor-pointer rounded ${
                      day === 24
                        ? "bg-blue-600 text-white"
                        : day === 27
                          ? "bg-red-100 text-red-600"
                          : day
                            ? "hover:bg-gray-100"
                            : ""
                    }`}
                  >
                    {day || ""}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Categories */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Categories</CardTitle>
                <Button variant="ghost" size="sm" className="text-blue-600">
                  <Plus className="w-4 h-4 mr-1" />
                  Add Category
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {selectedCategories.map((category, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Checkbox checked={category.checked} onCheckedChange={() => toggleCategory(index)} />
                    <div className={`w-3 h-3 rounded ${category.color}`}></div>
                    <span className="text-sm">{category.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
