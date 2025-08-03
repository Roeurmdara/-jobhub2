"use client"

import { useState } from "react"
import { Button } from "../components/button"
import  Input  from "../components/input"
import  Label  from "../components/label"
import  {Checkbox}  from "../components/checkbox"
import  Slider  from "../components/slider"
import { Badge } from "../components/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../components/avatar"
import {
  LayoutDashboard,
  MessageSquare,
  Building2,
  Users,
  FileText,
  Calendar,
  Settings,
  HelpCircle,
  ArrowLeft,
  Plus,
  X,
  Bell,
} from "lucide-react"

export default function JobPostingForm() {
  const [jobTitle, setJobTitle] = useState("")
  const [employmentTypes, setEmploymentTypes] = useState([])
  const [salaryRange, setSalaryRange] = useState([5000, 22000])
  const [skills, setSkills] = useState(["Graphic Design", "Communication", "Illustrator"])

  const handleEmploymentTypeChange = (type, checked) => {
    if (checked) {
      setEmploymentTypes([...employmentTypes, type])
    } else {
      setEmploymentTypes(employmentTypes.filter((t) => t !== type))
    }
  }

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove))
  }

  const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: false },
    { icon: MessageSquare, label: "Messages", active: false, badge: "1" },
    { icon: Building2, label: "Company Profile", active: false },
    { icon: Users, label: "All Applicants", active: false },
    { icon: FileText, label: "Job Listing", active: true },
    { icon: Calendar, label: "My Schedule", active: false },
  ]

  const settingsItems = [
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
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">J</span>
            </div>
            <span className="font-semibold text-lg">JobHuntly</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 py-6">
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
                {item.badge && <Badge className="ml-auto bg-blue-600 text-white text-xs px-2 py-1">{item.badge}</Badge>}
              </div>
            ))}
          </nav>

          <div className="mt-8">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-3">Settings</div>
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
            <Avatar className="w-10 h-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-gray-900">Maria Kelly</p>
              <p className="text-xs text-gray-500 truncate">maria@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Gray Background */}
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Post a Job              
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 flex mt-0.5">
                <Plus className="w-4 h-4 mr-2 mt-0.5" />
                Post a job
              </Button>
            </div>
          </div>
        </div>

        {/* Form Content - Gray Background */}
        <div className="flex-1 p-6 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="flex items-center space-x-8 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">1</span>
                </div>
                <div>
                  <p className="text-sm text-blue-600 font-medium">Step 1/3</p>
                  <p className="text-sm font-semibold">Job Information</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm font-medium">2</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Step 2/3</p>
                  <p className="text-sm text-gray-500">Job Description</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm font-medium">3</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Step 3/3</p>
                  <p className="text-sm text-gray-500">Perks & Benefit</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              {/* Basic Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Basic Information</h3>
                <p className="text-sm text-gray-500 mb-6">This information will be displayed publicly</p>

                <div>
                  <Label htmlFor="jobTitle" className="text-sm font-medium mb-2 block">
                    Job Title
                  </Label>
                  <p className="text-xs text-gray-500 mb-2">Job title must be describe one position</p>
                  <Input
                    id="jobTitle"
                    placeholder="e.g. Software Engineer"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    className="max-w-md"
                  />
                  <p className="text-xs text-gray-400 mt-1">At least 80 characters</p>
                </div>
              </div>

              {/* Type of Employment */}
              <div className="mb-8">
                <h4 className="font-medium mb-2">Type of Employment</h4>
                <p className="text-sm text-gray-500 mb-4">You can select multiple type of employment</p>

                <div className="grid grid-cols-2 gap-4 max-w-md">
                  {["Full-time", "Part-time", "Remote", "Internship", "Contract"].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox
                        id={type}
                        checked={employmentTypes.includes(type)}
                        onCheckedChange={(checked) => handleEmploymentTypeChange(type, checked)}
                      />
                      <Label htmlFor={type} className="text-sm">
                        {type}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Salary */}
              <div className="mb-8">
                <h4 className="font-medium mb-2">Salary</h4>
                <p className="text-sm text-gray-500 mb-4">
                  Please specify the estimated salary range for the role. *You can leave this blank
                </p>

                <div className="max-w-md">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">$</span>
                      <Input value={salaryRange[0].toLocaleString()} readOnly className="w-20 text-center" />
                    </div>
                    <span className="text-sm text-gray-500">to</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">$</span>
                      <Input value={salaryRange[1].toLocaleString()} readOnly className="w-20 text-center" />
                    </div>
                  </div>
                  <Slider
                    value={salaryRange}
                    onValueChange={setSalaryRange}
                    max={50000}
                    min={1000}
                    step={1000}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Required Skills */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-medium">Required Skills</h4>
                    <p className="text-sm text-gray-500">Add required skills for the job</p>
                  </div>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 bg-transparent">
                    Add Skills
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                      {skill}
                      <button onClick={() => removeSkill(skill)} className="ml-2 hover:text-blue-900">
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

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
