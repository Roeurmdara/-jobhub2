"use client"

import { useState } from "react"
import {
  Search,
  MapPin,
  ChevronDown,
  Grid3X3,
  List,
  ChevronLeft,
  ChevronRight,
  Share2,
  Bookmark,
  Clock,
  DollarSign,
  Users,
  Building2,
} from "lucide-react"

const JobListing = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    employment: [],
    categories: ["Marketing", "Design"],
    jobLevel: ["Mid Level"],
    salary: ["$75k - $85k"],
  })

  const [viewMode, setViewMode] = useState("grid")
  const [sortBy, setSortBy] = useState("Most relevant")

  const jobs = [
    {
      id: 1,
      title: "Social Media Assistant",
      company: "Stripe",
      location: "Paris, France",
      type: "Full-Time",
      salary: "$75-$85k USD",
      tags: ["Marketing", "Design"],
      applied: 5,
      capacity: 10,
      postedDate: "2 days ago",
      logo: "🟢",
      featured: true,
    },
    {
      id: 2,
      title: "Brand Designer",
      company: "Dropbox",
      location: "San Francisco, USA",
      type: "Full-Time",
      salary: "$80-$95k USD",
      tags: ["Design", "Creative"],
      applied: 12,
      capacity: 15,
      postedDate: "1 week ago",
      logo: "🔵",
      featured: false,
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Terraform",
      location: "Hamburg, Germany",
      type: "Full-Time",
      salary: "$70-$90k USD",
      tags: ["Development", "React"],
      applied: 8,
      capacity: 12,
      postedDate: "3 days ago",
      logo: "🟣",
      featured: true,
    },
    {
      id: 4,
      title: "Email Marketing Specialist",
      company: "Revolut",
      location: "Madrid, Spain",
      type: "Full-Time",
      salary: "$65-$75k USD",
      tags: ["Marketing", "Email"],
      applied: 3,
      capacity: 8,
      postedDate: "5 days ago",
      logo: "🔴",
      featured: false,
    },
    {
      id: 5,
      title: "Lead Engineer",
      company: "Canva",
      location: "Sydney, Australia",
      type: "Full-Time",
      salary: "$95-$120k USD",
      tags: ["Engineering", "Leadership"],
      applied: 15,
      capacity: 20,
      postedDate: "1 day ago",
      logo: "🟡",
      featured: true,
    },
    {
      id: 6,
      title: "Product Designer",
      company: "ClassPass",
      location: "Berlin, Germany",
      type: "Full-Time",
      salary: "$85-$100k USD",
      tags: ["Design", "Product"],
      applied: 7,
      capacity: 10,
      postedDate: "4 days ago",
      logo: "🟠",
      featured: false,
    },
  ]

  const FilterSection = ({ title, children, defaultOpen = true }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen)

    return (
      <div className="mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-4 hover:text-blue-600 transition-colors"
        >
          {title}
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </button>
        {isOpen && <div className="space-y-3">{children}</div>}
      </div>
    )
  }

  const CheckboxItem = ({ label, count, checked = false }) => (
    <label className="flex items-center space-x-3 cursor-pointer group">
      <input
        type="checkbox"
        checked={checked}
        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        readOnly
      />
      <span className="text-sm text-gray-700 group-hover:text-gray-900 flex-1">{label}</span>
      {count && <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{count}</span>}
    </label>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JH</span>
                </div>
                <span className="text-xl font-bold text-gray-900">JobHub</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-4">
                  Find Jobs
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 pb-4 transition-colors">
                  Browse Companies
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">Login</button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium transition-colors shadow-sm">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover your{" "}
            <span className="text-blue-600 relative">
              perfect job
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-200 rounded-full"></div>
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore thousands of job opportunities with all the information you need. Find your next career at top
            companies.
          </p>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select className="appearance-none pl-12 pr-12 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white min-w-[220px] shadow-sm">
                <option>Paris, France</option>
                <option>New York, USA</option>
                <option>London, UK</option>
                <option>Berlin, Germany</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 font-medium transition-colors shadow-sm">
              Search Jobs
            </button>
          </div>

          {/* Popular Tags */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="text-sm text-gray-500 font-medium">Popular searches:</span>
            {["Social Media", "Designer", "Developer", "Marketing", "Manager"].map((tag) => (
              <button
                key={tag}
                className="text-sm text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Filters</h2>

              <FilterSection title="Employment Type">
                <CheckboxItem label="Full-time" count={45} />
                <CheckboxItem label="Part-Time" count={12} />
                <CheckboxItem label="Remote" count={28} />
                <CheckboxItem label="Contract" count={8} />
                <CheckboxItem label="Internship" count={15} />
              </FilterSection>

              <FilterSection title="Categories">
                <CheckboxItem label="Design" count={24} />
                <CheckboxItem label="Development" count={18} />
                <CheckboxItem label="Marketing" count={16} checked={true} />
                <CheckboxItem label="Sales" count={12} />
                <CheckboxItem label="Business" count={9} />
                <CheckboxItem label="Engineering" count={22} />
                <CheckboxItem label="Product" count={14} />
                <CheckboxItem label="Data Science" count={11} />
              </FilterSection>

              <FilterSection title="Experience Level">
                <CheckboxItem label="Entry Level" count={32} />
                <CheckboxItem label="Mid Level" count={28} checked={true} />
                <CheckboxItem label="Senior Level" count={18} />
                <CheckboxItem label="Lead/Manager" count={12} />
                <CheckboxItem label="Executive" count={5} />
              </FilterSection>

              <FilterSection title="Salary Range">
                <CheckboxItem label="$40k - $60k" count={15} />
                <CheckboxItem label="$60k - $80k" count={22} />
                <CheckboxItem label="$80k - $100k" count={18} />
                <CheckboxItem label="$100k - $120k" count={12} />
                <CheckboxItem label="$120k+" count={8} />
              </FilterSection>

              <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium transition-colors">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Job Listings */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Job Descriptions</h2>
                <p className="text-gray-600 mt-1">Showing 15 results</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 font-medium">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    <option>Most relevant</option>
                    <option>Newest first</option>
                    <option>Salary: High to Low</option>
                    <option>Salary: Low to High</option>
                  </select>
                </div>
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 transition-colors ${
                      viewMode === "grid" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 transition-colors ${
                      viewMode === "list" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Job Cards */}
            <div className="space-y-6">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className={`bg-white rounded-xl p-6 shadow-sm border transition-all duration-200 hover:shadow-md hover:border-blue-200 ${
                    job.featured ? "border-blue-200 bg-blue-50/30" : "border-gray-200"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex space-x-4 flex-1">
                      <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-2xl shadow-sm">
                        {job.logo}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1 hover:text-blue-600 cursor-pointer transition-colors">
                              {job.title}
                            </h3>
                            <div className="flex items-center space-x-4 text-gray-600 mb-3">
                              <div className="flex items-center space-x-1">
                                <Building2 className="w-4 h-4" />
                                <span className="font-medium">{job.company}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{job.postedDate}</span>
                              </div>
                            </div>
                          </div>
                          {job.featured && (
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                              Featured
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                            {job.type}
                          </span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full flex items-center space-x-1">
                            <DollarSign className="w-3 h-3" />
                            <span>{job.salary}</span>
                          </span>
                          {job.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1 text-sm text-gray-600">
                            <Users className="w-4 h-4" />
                            <span>
                              <span className="text-green-600 font-medium">{job.applied} applied</span> of{" "}
                              {job.capacity} positions
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                              <Bookmark className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                              <Share2 className="w-4 h-4" />
                            </button>
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium transition-colors shadow-sm">
                              Apply Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2 mt-12">
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              {[1, 2, 3, "...", 8].map((page, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    page === 1 ? "bg-blue-600 text-white shadow-sm" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobListing
