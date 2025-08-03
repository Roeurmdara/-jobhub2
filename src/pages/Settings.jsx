"use client"

import { useState } from "react"
import { Button } from "../components/button"
import  Input  from "../components/input"
import  Label  from "../components/label"
import  Textarea  from "../components/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "../components/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/select"
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
  Upload,
  X,
  Bold,
  Italic,
  List,
  Link,
  AlignLeft,
  Trash2,
  Plus,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Github,
} from "lucide-react"

export default function Component() {
  const [companyName, setCompanyName] = useState("This is placeholder")
  const [website, setWebsite] = useState("This is placeholder")
  const [locations, setLocations] = useState(["England", "Japan", "Australia"])
  const [employees, setEmployees] = useState("This is placeholder")
  const [industry, setIndustry] = useState("Design")
  const [foundedMonth, setFoundedMonth] = useState("July")
  const [foundedYear, setFoundedYear] = useState("2023")
  const [techStack, setTechStack] = useState(["HTML 5", "CSS 3", "Javascript"])
  const [description, setDescription] = useState(
    "Nomad is part of the Information Technology Industry. We believe travelers want to experience real life and meet local people. Nomad has 30 total employees across all of its locations and generates $1.5M million in sales.",
  )

  const [socialLinks, setSocialLinks] = useState({
    linkedin: "",
    twitter: "",
    facebook: "",
    instagram: "",
    website: "",
    github: "",
  })

  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Maria Kelly",
      email: "maria@company.com",
      role: "CEO & Founder",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "active",
    },
    {
      id: 2,
      name: "John Smith",
      email: "john@company.com",
      role: "CTO",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "active",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      email: "sarah@company.com",
      role: "Head of Design",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "pending",
    },
  ])

  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: "",
  })

  const removeLocation = (locationToRemove) => {
    setLocations(locations.filter((location) => location !== locationToRemove))
  }

  const removeTechStack = (techToRemove) => {
    setTechStack(techStack.filter((tech) => tech !== techToRemove))
  }

  const handleSocialLinkChange = (platform, value) => {
    setSocialLinks((prev) => ({
      ...prev,
      [platform]: value,
    }))
  }

  const addTeamMember = () => {
    if (newMember.name && newMember.email && newMember.role) {
      const member = {
        id: Date.now(),
        ...newMember,
        avatar: "/placeholder.svg?height=40&width=40",
        status: "pending",
      }
      setTeamMembers((prev) => [...prev, member])
      setNewMember({ name: "", email: "", role: "" })
    }
  }

  const removeTeamMember = (id) => {
    setTeamMembers((prev) => prev.filter((member) => member.id !== id))
  }

  const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: false },
    { icon: MessageSquare, label: "Messages", active: false, badge: "1" },
    { icon: Building2, label: "Company Profile", active: false },
    { icon: Users, label: "All Applicants", active: false },
    { icon: FileText, label: "Job Listing", active: false },
    { icon: Calendar, label: "My Schedule", active: false },
  ]

  const settingsItems = [
    { icon: Settings, label: "Settings", active: true },
    { icon: HelpCircle, label: "Help Center", active: false },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
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
        <nav className="flex-1 p-4">
          <div className="space-y-1">
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                </div>
                {item.badge && (
                  <Badge variant="secondary" className="bg-blue-100 text-blue-600 text-xs">
                    {item.badge}
                  </Badge>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="px-3 text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Settings</h3>
            <div className="space-y-1">
              {settingsItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer ${
                    item.active ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </nav>
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
                  <span className="text-sm text-gray-500">Company</span>
                  <div className="flex items-center space-x-1">
                    <span className="font-medium">Nomad</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">Post a job</Button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          <div className="max-w-4xl">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">Settings</h1>

            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 max-w-md">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="social-links">Social Links</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Basic Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Basic Information</CardTitle>
                    <p className="text-sm text-gray-500">This is company information that you can update anytime.</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Company Logo */}
                    <div>
                      <Label className="text-sm font-medium">Company Logo</Label>
                      <p className="text-xs text-gray-500 mb-3">
                        This image will be shown publicly as your company logo.
                      </p>
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                          <Building2 className="w-8 h-8 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                            <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-blue-600 mb-1">Click to replace or drag and drop</p>
                            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (max. 400 x 400px)</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      {/* Company Details */}
                      <div>
                        <Label className="text-sm font-medium">Company Details</Label>
                        <p className="text-xs text-gray-500 mb-3">
                          Introduce your company core info quickly to users by fill up company details
                        </p>

                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="company-name" className="text-sm">
                              Company Name
                            </Label>
                            <Input
                              id="company-name"
                              value={companyName}
                              onChange={(e) => setCompanyName(e.target.value)}
                              className="mt-1"
                            />
                          </div>

                          <div>
                            <Label htmlFor="website" className="text-sm">
                              Website
                            </Label>
                            <Input
                              id="website"
                              value={website}
                              onChange={(e) => setWebsite(e.target.value)}
                              className="mt-1"
                            />
                          </div>

                          <div>
                            <Label className="text-sm">Location</Label>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {locations.map((location, index) => (
                                <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700">
                                  {location}
                                  <button
                                    onClick={() => removeLocation(location)}
                                    className="ml-1 hover:bg-gray-200 rounded-full p-0.5"
                                  >
                                    <X className="w-3 h-3" />
                                  </button>
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="employees" className="text-sm">
                            Employee
                          </Label>
                          <Input
                            id="employees"
                            value={employees}
                            onChange={(e) => setEmployees(e.target.value)}
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label className="text-sm">Industry</Label>
                          <div className="mt-2">
                            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">{industry}</Badge>
                          </div>
                        </div>

                        <div>
                          <Label className="text-sm">Date Founded</Label>
                          <div className="flex space-x-2 mt-2">
                            <Select value={foundedMonth} onValueChange={setFoundedMonth}>
                              <SelectTrigger className="flex-1">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="January">January</SelectItem>
                                <SelectItem value="February">February</SelectItem>
                                <SelectItem value="March">March</SelectItem>
                                <SelectItem value="April">April</SelectItem>
                                <SelectItem value="May">May</SelectItem>
                                <SelectItem value="June">June</SelectItem>
                                <SelectItem value="July">July</SelectItem>
                                <SelectItem value="August">August</SelectItem>
                                <SelectItem value="September">September</SelectItem>
                                <SelectItem value="October">October</SelectItem>
                                <SelectItem value="November">November</SelectItem>
                                <SelectItem value="December">December</SelectItem>
                              </SelectContent>
                            </Select>
                            <Select value={foundedYear} onValueChange={setFoundedYear}>
                              <SelectTrigger className="flex-1">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="2023">2023</SelectItem>
                                <SelectItem value="2022">2022</SelectItem>
                                <SelectItem value="2021">2021</SelectItem>
                                <SelectItem value="2020">2020</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <Label className="text-sm">Tech Stack</Label>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {techStack.map((tech, index) => (
                              <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700">
                                {tech}
                                <button
                                  onClick={() => removeTechStack(tech)}
                                  className="ml-1 hover:bg-gray-200 rounded-full p-0.5"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* About Company */}
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <Label className="text-sm font-medium">About Company</Label>
                        <p className="text-xs text-gray-500 mb-3">
                          Brief description for your company. URLs are hyperlinked.
                        </p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium">Description</Label>
                        <div className="mt-2">
                          <div className="border border-gray-300 rounded-lg">
                            <div className="flex items-center space-x-2 p-2 border-b border-gray-200">
                              <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                                <Bold className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                                <Italic className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                                <List className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                                <AlignLeft className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                                <Link className="w-4 h-4" />
                              </Button>
                            </div>
                            <Textarea
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              className="border-0 resize-none focus:ring-0 min-h-[120px]"
                              placeholder="Write about your company..."
                            />
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Maximum 500 characters</p>
                          <p className="text-xs text-gray-400 text-right">0 / 500</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="social-links" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Social Media Profiles</CardTitle>
                    <p className="text-sm text-gray-500">
                      Add your company's social media links to help people find and connect with you.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="linkedin" className="text-sm font-medium flex items-center space-x-2">
                          <Linkedin className="w-4 h-4 text-blue-600" />
                          <span>LinkedIn</span>
                        </Label>
                        <Input
                          id="linkedin"
                          placeholder="https://linkedin.com/company/yourcompany"
                          value={socialLinks.linkedin}
                          onChange={(e) => handleSocialLinkChange("linkedin", e.target.value)}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="twitter" className="text-sm font-medium flex items-center space-x-2">
                          <Twitter className="w-4 h-4 text-blue-400" />
                          <span>Twitter</span>
                        </Label>
                        <Input
                          id="twitter"
                          placeholder="https://twitter.com/yourcompany"
                          value={socialLinks.twitter}
                          onChange={(e) => handleSocialLinkChange("twitter", e.target.value)}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="facebook" className="text-sm font-medium flex items-center space-x-2">
                          <Facebook className="w-4 h-4 text-blue-700" />
                          <span>Facebook</span>
                        </Label>
                        <Input
                          id="facebook"
                          placeholder="https://facebook.com/yourcompany"
                          value={socialLinks.facebook}
                          onChange={(e) => handleSocialLinkChange("facebook", e.target.value)}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="instagram" className="text-sm font-medium flex items-center space-x-2">
                          <Instagram className="w-4 h-4 text-pink-600" />
                          <span>Instagram</span>
                        </Label>
                        <Input
                          id="instagram"
                          placeholder="https://instagram.com/yourcompany"
                          value={socialLinks.instagram}
                          onChange={(e) => handleSocialLinkChange("instagram", e.target.value)}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="github" className="text-sm font-medium flex items-center space-x-2">
                          <Github className="w-4 h-4 text-gray-800" />
                          <span>GitHub</span>
                        </Label>
                        <Input
                          id="github"
                          placeholder="https://github.com/yourcompany"
                          value={socialLinks.github}
                          onChange={(e) => handleSocialLinkChange("github", e.target.value)}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="company-website" className="text-sm font-medium flex items-center space-x-2">
                          <Globe className="w-4 h-4 text-green-600" />
                          <span>Company Website</span>
                        </Label>
                        <Input
                          id="company-website"
                          placeholder="https://yourcompany.com"
                          value={socialLinks.website}
                          onChange={(e) => handleSocialLinkChange("website", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="team" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Team Members</CardTitle>
                    <p className="text-sm text-gray-500">
                      Manage your team members and their roles within the company.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Add New Member */}
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="text-sm font-medium mb-4">Add New Team Member</h3>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <Input
                          placeholder="Full Name"
                          value={newMember.name}
                          onChange={(e) => setNewMember((prev) => ({ ...prev, name: e.target.value }))}
                        />
                        <Input
                          placeholder="Email Address"
                          type="email"
                          value={newMember.email}
                          onChange={(e) => setNewMember((prev) => ({ ...prev, email: e.target.value }))}
                        />
                        <Input
                          placeholder="Role/Position"
                          value={newMember.role}
                          onChange={(e) => setNewMember((prev) => ({ ...prev, role: e.target.value }))}
                        />
                        <Button onClick={addTeamMember} className="bg-blue-600 hover:bg-blue-700">
                          <Plus className="w-4 h-4 mr-2" />
                          Add Member
                        </Button>
                      </div>
                    </div>

                    {/* Team Members List */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Current Team Members ({teamMembers.length})</h3>
                      <div className="space-y-3">
                        {teamMembers.map((member) => (
                          <div
                            key={member.id}
                            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                          >
                            <div className="flex items-center space-x-4">
                              <Avatar className="w-10 h-10">
                                <AvatarImage src={member.avatar || "/placeholder.svg"} />
                                <AvatarFallback>
                                  {member.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="text-sm font-medium">{member.name}</h4>
                                <p className="text-sm text-gray-500">{member.email}</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium">{member.role}</p>
                                <Badge
                                  variant={member.status === "active" ? "default" : "secondary"}
                                  className={
                                    member.status === "active"
                                      ? "bg-green-100 text-green-700"
                                      : "bg-yellow-100 text-yellow-700"
                                  }
                                >
                                  {member.status}
                                </Badge>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeTeamMember(member.id)}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Team Statistics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">
                          {teamMembers.filter((m) => m.status === "active").length}
                        </div>
                        <div className="text-sm text-gray-600">Active Members</div>
                      </div>
                      <div className="text-center p-4 bg-yellow-50 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-600">
                          {teamMembers.filter((m) => m.status === "pending").length}
                        </div>
                        <div className="text-sm text-gray-600">Pending Invites</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{teamMembers.length}</div>
                        <div className="text-sm text-gray-600">Total Team Size</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>MK</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Maria Kelly</p>
                <p className="text-xs text-gray-500">maria@company.com</p>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
          </div>
        </footer>
      </div>
    </div>
  )
}
