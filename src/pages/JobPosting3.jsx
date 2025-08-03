"use client"

import { useState } from "react"
import { Button } from "../components/button"
import { Card, CardContent } from "../components/card"
import { Badge } from "../components/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../components/avatar"
import {
  ArrowLeft,
  Plus,
  X,
  MessageSquare,
  LayoutDashboard,
  Building2,
  Users,
  FileText,
  Calendar,
  Settings,
  HelpCircle,
  Heart,
  Plane,
  GraduationCap,
} from "lucide-react"

export default function JobPostingDashboard() {
  const [benefits, setBenefits] = useState([
    {
      id: 1,
      title: "Full Healthcare",
      description: "We believe in thriving communities and that starts with our team being happy and healthy.",
      icon: Heart,
    },
    {
      id: 2,
      title: "Unlimited Vacation",
      description: "We believe you should have a flexible schedule that makes space for family, wellness, and fun.",
      icon: Plane,
    },
    {
      id: 3,
      title: "Skill Development",
      description:
        "We believe in always learning and leveling up our skills. Whether it's a conference or online course.",
      icon: GraduationCap,
    },
  ])

  const removeBenefit = (id) => {
    setBenefits(benefits.filter((benefit) => benefit.id !== id))
  }

  const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: false },
    { icon: MessageSquare, label: "Messages", active: false, badge: "1" },
    { icon: Building2, label: "Company Profile", active: false },
    { icon: Users, label: "All Applicants", active: false },
    { icon: FileText, label: "Job Listing", active: true },
    { icon: Calendar, label: "My Schedule", active: false },
    { icon: Settings, label: "Settings", active: false },
    { icon: HelpCircle, label: "Help Center", active: false },
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">J</span>
            </div>
            <span className="font-bold text-lg">JobHuntly</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    item.active ? "bg-indigo-50 text-indigo-600" : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                  {item.badge && <Badge className="ml-auto bg-indigo-600 text-white text-xs">{item.badge}</Badge>}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Settings Section */}
        <div className="p-4 border-t border-gray-200">
          <div className="text-xs font-medium text-gray-500 mb-3">SETTINGS</div>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50"
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50"
              >
                <HelpCircle className="w-5 h-5" />
                <span>Help Center</span>
              </a>
            </li>
          </ul>
        </div>
        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">Maria Kelly</p>
              <p className="text-xs text-gray-500 truncate">maria@email.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Header */}
        <div className="bg-gray-100 border-b border-gray-300 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Company</p>
                  <p className="text-sm font-medium">Nomad</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white flex">
                <Plus className="w-4 h-4 mr-2 mt-0.5" />
                Post a job
              </Button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 bg-gray-100">
          {/* Back Button and Title */}
          <div className="flex items-center space-x-4 mb-8">
            
              <ArrowLeft className="w-4 h-4 mr-2" />
              Post a Job
            
          </div>

          {/* Progress Steps */}
          <div className="flex items-center space-x-8 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Step 1/3</p>
                <p className="text-sm font-medium">Job Information</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <FileText className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Step 2/3</p>
                <p className="text-sm font-medium text-gray-400">Job Description</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Step 3/3</p>
                <p className="text-sm font-medium text-gray-400">Perks & Benefit</p>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="max-w-2xl">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Basic Information</h2>
              <p className="text-sm text-gray-600">List out your top perks and benefits</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-medium text-gray-900">Perks and Benefits</h3>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-indigo-600 border-indigo-600 hover:bg-indigo-50 bg-transparent"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Benefit
                </Button>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                Encourage more people to apply by sharing the attractive rewards and benefits you offer your employees
              </p>

              {/* Benefits Cards */}
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <Card key={benefit.id} className="relative">
                    <CardContent className="p-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 h-6 w-6 p-0 hover:bg-gray-100"
                        onClick={() => removeBenefit(benefit.id)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 mb-1">{benefit.title}</h4>
                          <p className="text-sm text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Do a Review Button - Bottom Right */}
        <div className="fixed bottom-6 right-6">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg">Do a Review</Button>
        </div>
      </div>
    </div>
  )
}
