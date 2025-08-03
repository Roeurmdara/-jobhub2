"use client"

import { useState } from "react"
import { Button } from "../components/button"
import { Card, CardContent, CardHeader } from "../components/card"
import  Textarea  from "../components/textarea"
import {
  BarChart3,
  MessageSquare,
  Building2,
  Users,
  FileText,
  Calendar,
  Settings,
  HelpCircle,
  ChevronLeft,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link,
  Search,
  Bell,
} from "lucide-react"

export default function JobPostingInterface() {
  const [activeStep, setActiveStep] = useState(1)
  const [formData, setFormData] = useState({
    jobDescription: "",
    responsibilities: "",
    qualifications: "",
    niceToHaves: "",
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const getCharacterCount = (text) => {
    return text ? text.length : 0
  }

  const RichTextEditor = ({ placeholder, value, onChange, maxLength = 500 }) => {
    return (
      <div className="border rounded-lg">
        <div className="flex items-center gap-2 p-2 border-b bg-gray-50">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Bold className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Italic className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Underline className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <List className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <ListOrdered className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Link className="h-4 w-4" />
          </Button>
        </div>
        <div className="relative">
          <Textarea
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="min-h-[120px] border-0 resize-none focus-visible:ring-0"
            maxLength={maxLength}
          />
          <div className="absolute bottom-2 right-2 text-xs text-gray-400">
            {getCharacterCount(value)} / {maxLength}
          </div>
        </div>
      </div>
    )
  }

  const sidebarItems = [
    { icon: BarChart3, label: "Dashboard", active: false },
    { icon: MessageSquare, label: "Messages", active: false, badge: "1" },
    { icon: Building2, label: "Company Profile", active: false },
    { icon: Users, label: "All Applicants", active: true },
    { icon: FileText, label: "Job Listing", active: false },
    { icon: Calendar, label: "My Schedule", active: false },
  ]

  const settingsItems = [
    { icon: Settings, label: "Settings", active: false },
    { icon: HelpCircle, label: "Help Center", active: false },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">J</span>
            </div>
            <span className="font-bold text-lg">JobHunty</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4">
          <nav className="space-y-1">
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                  item.active ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-blue-600 text-white text-xs rounded-full px-2 py-1">{item.badge}</span>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-8">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">SETTINGS</div>
            <nav className="space-y-1">
              {settingsItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">MK</span>
            </div>
            <div>
              <div className="font-medium text-sm">Maria Kelly</div>
              <div className="text-xs text-gray-500">maria@example.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="p-0">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-xl font-semibold">Post a Job</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button variant="ghost" size="sm" className="p-2">
                <Bell className="h-5 w-5" />
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Post a Job</Button>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                1
              </div>
              <div>
                <div className="text-xs text-gray-500">Step 1/3</div>
                <div className="font-medium">Job Information</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                2
              </div>
              <div>
                <div className="text-xs text-gray-500">Step 2/3</div>
                <div className="font-medium">Job Description</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-sm font-medium">
                3
              </div>
              <div>
                <div className="text-xs text-gray-500">Step 3/3</div>
                <div className="font-medium text-gray-400">Perks & Benefits</div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl">
            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">Details</h2>
                <p className="text-sm text-gray-600">
                  Add the description of the job, responsibilities, who you are, and nice-to-haves.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Job Description */}
                <div>
                  <label className="block text-sm font-medium mb-2">Job Descriptions</label>
                  <p className="text-sm text-gray-600 mb-3">Job titles must be describe one position</p>
                  <RichTextEditor
                    placeholder="Enter job description"
                    value={formData.jobDescription}
                    onChange={(value) => handleInputChange("jobDescription", value)}
                    maxLength={500}
                  />
                </div>

                {/* Responsibilities */}
                <div>
                  <label className="block text-sm font-medium mb-2">Responsibilities</label>
                  <p className="text-sm text-gray-600 mb-3">Outline the core responsibilities of the position</p>
                  <RichTextEditor
                    placeholder="Enter job responsibilities"
                    value={formData.responsibilities}
                    onChange={(value) => handleInputChange("responsibilities", value)}
                    maxLength={500}
                  />
                </div>

                {/* Who You Are */}
                <div>
                  <label className="block text-sm font-medium mb-2">Who You Are</label>
                  <p className="text-sm text-gray-600 mb-3">Add your preferred candidate qualifications</p>
                  <RichTextEditor
                    placeholder="Enter qualifications"
                    value={formData.qualifications}
                    onChange={(value) => handleInputChange("qualifications", value)}
                    maxLength={500}
                  />
                </div>

                {/* Nice-To-Haves */}
                <div>
                  <label className="block text-sm font-medium mb-2">Nice-To-Haves</label>
                  <p className="text-sm text-gray-600 mb-3">
                    Add nice-to-have skills and qualifications for the role to encourage a more diverse set of
                    candidates to apply
                  </p>
                  <RichTextEditor
                    placeholder="Enter nice-to-haves"
                    value={formData.niceToHaves}
                    onChange={(value) => handleInputChange("niceToHaves", value)}
                    maxLength={500}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Next Step Button */}
            <div className="flex justify-end mt-6">
              <Button className="bg-blue-600 hover:bg-blue-700 px-8">Next Step</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
