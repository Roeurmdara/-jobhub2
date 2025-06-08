"use client"

import { useState } from "react"

// Custom MapPin icon component to replace Lucide React
const MapPinIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 mr-1 text-blue-400"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
)

export default function Loading() {
  const [hoveredCategory, setHoveredCategory] = useState(null)
  const [hoveredCompany, setHoveredCompany] = useState(null)
  const [hoveredStep, setHoveredStep] = useState(null)

  // Job Categories Data
  const categories = [
    {
      id: 1,
      title: "Web & Software Developer",
      subtitle: "Software Engineer, Web developer & more",
      jobs: 612,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="#E6F0FF" />
          <path d="M12 14H28V24H12V14Z" stroke="#4285F4" strokeWidth="1.5" />
          <path
            d="M16 28H24V28C24 29.1046 23.1046 30 22 30H18C16.8954 30 16 29.1046 16 28V28Z"
            stroke="#4285F4"
            strokeWidth="1.5"
          />
          <path d="M20 24V28" stroke="#4285F4" strokeWidth="1.5" />
        </svg>
      ),
      color: "#E6F0FF",
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      subtitle: "Data Specialist, Data Analyst & more",
      jobs: 102,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="#E6FFF9" />
          <circle cx="20" cy="20" r="6" stroke="#0CCE9C" strokeWidth="1.5" />
          <path d="M20 14V12" stroke="#0CCE9C" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M26 20H28" stroke="#0CCE9C" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M20 28V26" stroke="#0CCE9C" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 20H14" stroke="#0CCE9C" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M24.5 15.5L26 14" stroke="#0CCE9C" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M24.5 24.5L26 26" stroke="#0CCE9C" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M15.5 24.5L14 26" stroke="#0CCE9C" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M15.5 15.5L14 14" stroke="#0CCE9C" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      color: "#E6FFF9",
    },
    {
      id: 3,
      title: "Education & Training",
      subtitle: "Advisor, Coach, Coordinator & more",
      jobs: 1012,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="#FFF1E6" />
          <path d="M20 12L28 16L20 20L12 16L20 12Z" stroke="#FF9966" strokeWidth="1.5" />
          <path d="M28 16V24" stroke="#FF9966" strokeWidth="1.5" />
          <path d="M15 17.5V23C15 23 17 25 20 25C23 25 25 23 25 23V17.5" stroke="#FF9966" strokeWidth="1.5" />
        </svg>
      ),
      color: "#FFF1E6",
    },
    {
      id: 4,
      title: "Graphics & Design",
      subtitle: "Graphic Designer, Art Director & more",
      jobs: 1012,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="#FFE6F0" />
          <circle cx="20" cy="18" r="6" stroke="#FF66A1" strokeWidth="1.5" />
          <path d="M14 28L18 22" stroke="#FF66A1" strokeWidth="1.5" />
          <path d="M26 28L22 22" stroke="#FF66A1" strokeWidth="1.5" />
        </svg>
      ),
      color: "#FFE6F0",
    },
    {
      id: 5,
      title: "Accounting & Consulting",
      subtitle: "Financial Analyst, Accountant & more",
      jobs: 308,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="#EEE6FF" />
          <rect x="14" y="14" width="12" height="4" stroke="#8866FF" strokeWidth="1.5" />
          <rect x="14" y="18" width="12" height="4" stroke="#8866FF" strokeWidth="1.5" />
          <rect x="14" y="22" width="12" height="4" stroke="#8866FF" strokeWidth="1.5" />
        </svg>
      ),
      color: "#EEE6FF",
    },
    {
      id: 6,
      title: "Writing & Translation",
      subtitle: "Content Creator, Copywriter & more",
      jobs: 802,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="#E6F5FF" />
          <path d="M14 14H26V26H14V14Z" stroke="#66B2FF" strokeWidth="1.5" />
          <path d="M17 18H23" stroke="#66B2FF" strokeWidth="1.5" />
          <path d="M17 22H23" stroke="#66B2FF" strokeWidth="1.5" />
        </svg>
      ),
      color: "#E6F5FF",
    },
    {
      id: 7,
      title: "Digital Marketing",
      subtitle: "UX Designer, UI Designer & more",
      jobs: 1012,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="#FFFDE6" />
          <path d="M14 20L20 14L26 20L20 26L14 20Z" stroke="#FFD966" strokeWidth="1.5" />
          <circle cx="20" cy="20" r="2" stroke="#FFD966" strokeWidth="1.5" />
        </svg>
      ),
      color: "#FFFDE6",
    },
    {
      id: 8,
      title: "Sales & Marketing",
      subtitle: "Advisor, Coach, Coordinator & more",
      jobs: 1012,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="#E6FFE8" />
          <rect x="14" y="16" width="12" height="8" rx="1" stroke="#66CC6A" strokeWidth="1.5" />
          <path d="M18 16V14" stroke="#66CC6A" strokeWidth="1.5" />
          <path d="M22 16V14" stroke="#66CC6A" strokeWidth="1.5" />
          <path d="M16 24L16 26" stroke="#66CC6A" strokeWidth="1.5" />
          <path d="M20 24L20 26" stroke="#66CC6A" strokeWidth="1.5" />
          <path d="M24 24L24 26" stroke="#66CC6A" strokeWidth="1.5" />
        </svg>
      ),
      color: "#E6FFE8",
    },
  ]

  // Featured Companies Data
  const companies = [
    // Top row
    {
      id: 1,
      name: "Millenniumsoft Agency",
      location: "Los Angeles",
      openJobs: 7,
      logo: "📊",
      isSelected: true,
    },
    {
      id: 2,
      name: "Millenniumsoft Agency",
      location: "Los Angeles",
      openJobs: 7,
      logo: "✚",
      logoColor: "text-green-500",
    },
    {
      id: 3,
      name: "Millenniumsoft Agency",
      location: "Los Angeles",
      openJobs: 7,
      logo: "G",
      logoColor: "text-blue-500 text-2xl font-bold",
    },
    {
      id: 4,
      name: "Millenniumsoft Agency",
      location: "Los Angeles",
      openJobs: 7,
      logo: "a",
      logoColor: "text-black text-2xl",
      fontFamily: "font-serif",
    },
    // Bottom row
    {
      id: 5,
      name: "Millenniumsoft Agency",
      location: "Los Angeles",
      openJobs: 7,
      logo: "W",
      logoColor: "text-orange-500 text-xl font-bold",
    },
    {
      id: 6,
      name: "Millenniumsoft Agency",
      location: "Los Angeles",
      openJobs: 7,
      logo: "a",
      logoColor: "text-black text-2xl",
      fontFamily: "font-serif",
    },
    {
      id: 7,
      name: "Millenniumsoft Agency",
      location: "Los Angeles",
      openJobs: 7,
      logo: "📐",
      logoColor: "text-red-500",
    },
    {
      id: 8,
      name: "Millenniumsoft Agency",
      location: "Los Angeles",
      openJobs: 7,
      logo: "G",
      logoColor: "text-blue-500 text-2xl font-bold",
    },
  ]

  // How It Works Steps Data
  const steps = [
    {
      id: 1,
      title: "Create an Account",
      description: "Go to the website's homepage and click on the 'Register' or 'Sign Up' button.",
      icon: (
        <div className="w-full h-32 bg-blue-50 rounded-lg flex flex-col items-center justify-center p-4 step-card-content">
          <div className="w-full h-4 bg-blue-200 rounded mb-4"></div>
          <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
          <div className="w-3/4 h-4 bg-gray-200 rounded mb-4"></div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded text-sm font-medium">Register</button>
        </div>
      ),
    },
    {
      id: 2,
      title: "Search Desired Job",
      description: "Start browsing job listings and applying to positions that interest you.",
      icon: (
        <div className="w-full h-32 bg-blue-50 rounded-lg flex flex-col items-center justify-center p-4 step-card-content">
          <div className="w-full h-4 bg-blue-200 rounded mb-4"></div>
          <div className="flex items-center justify-between w-full mb-2">
            <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex items-center justify-between w-full mb-2">
            <div className="w-2/3 h-3 bg-gray-200 rounded"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Send Resume",
      description: "Upload your resume and cover letter, if applicable.",
      icon: (
        <div className="w-full h-32 bg-blue-50 rounded-lg flex flex-col items-center justify-center p-4 step-card-content">
          <div className="w-full h-4 bg-blue-200 rounded mb-4"></div>
          <div className="flex items-center justify-between w-full mb-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center mr-2">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="w-16 h-2 bg-gray-300 rounded mb-1"></div>
                <div className="w-12 h-2 bg-gray-200 rounded"></div>
              </div>
            </div>
            <button className="bg-green-500 text-white px-4 py-1 rounded text-xs font-medium flex items-center">
              Send
              <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      ),
    },
  ]

  const handleCategoryMouseEnter = (id) => {
    setHoveredCategory(id)
  }

  const handleCategoryMouseLeave = () => {
    setHoveredCategory(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="px-6 py-12 bg-gray-50 relative">
        {/* Floating background elements */}
        <div className="floating-bg-1"></div>
        <div className="floating-bg-2"></div>

        <div className="max-w-7xl mx-auto">
          {/* Trust Badge */}
          <div className="flex justify-end mb-8">
            <div className="bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200 flex items-center gap-2 trust-badge">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm text-gray-600">100% Trusted</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="hero-content">
              {/* Hero Text */}
              <div className="mb-8">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 hero-title">
                  Your Next <span className="text-blue-500">Career Move Starts</span>
                  <br />
                  Here. Search for Jobs <span className="text-blue-500">Nationwide</span>
                </h1>
              </div>

              {/* Search Form */}
              <div className="bg-white rounded-2xl p-2 shadow-lg mb-8 search-form">
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="flex-1 relative w-full">
                    <svg
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search Jobs"
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl outline-none text-base focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <select className="bg-white border border-gray-200 rounded-xl px-6 py-4 outline-none text-base min-w-[120px] focus:border-blue-500 transition-colors">
                    <option>Category</option>
                    <option>Design</option>
                    <option>Development</option>
                    <option>Marketing</option>
                  </select>

                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all text-base find-job-btn">
                    Find Job
                  </button>
                </div>
              </div>

              {/* Popular Searches */}
              <div className="mb-8 popular-searches">
                <p className="text-gray-600 font-medium mb-3">Popular Searches:</p>
                <div className="flex flex-wrap gap-4">
                  {["Designer", "Developer", "UX&UI Designer", "Contentwriter"].map((search) => (
                    <span
                      key={search}
                      className="text-gray-700 cursor-pointer transition-colors hover:text-blue-500 popular-tag"
                    >
                      {search}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 stats-container">
                {[
                  { icon: "📄", number: "+200k", label: "Active jobs" },
                  { icon: "🏢", number: "+2k", label: "Companies" },
                  { icon: "👥", number: "+15k", label: "Candidates" },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className="text-center stat-item"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3 text-xl">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative hero-image">
              <div className="w-72 h-72 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full absolute -top-8 -right-8 opacity-50 z-10"></div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqIcSdQWCMrZ6OUzfy3MKe9nhNgjrsdm6Adw&s"
                alt="Professional woman with laptop"
                className="relative z-20 w-full max-w-md h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Job Categories Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-15 categories-header">
            <div className="inline-block bg-blue-50 text-blue-500 px-4 py-2 rounded-full text-sm font-medium mb-4 categories-badge">
              Jobs by Categories
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 categories-title">
              Select the Category of Your Choice
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-15 categories-grid">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="border border-gray-200 rounded-xl p-6 cursor-pointer transition-all duration-300 bg-white category-card"
                style={{ animationDelay: `${0.1 * index}s` }}
                onMouseEnter={() => handleCategoryMouseEnter(category.id)}
                onMouseLeave={handleCategoryMouseLeave}
              >
                <div className="mb-4 category-icon">{category.icon}</div>
                <h3 className="text-lg font-semibold mb-1 text-gray-900 category-title">{category.title}</h3>
                <p className="text-sm text-gray-600 mb-4 category-subtitle">{category.subtitle}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-500 category-jobs">
                    {category.jobs} jobs available
                  </span>
                  <div
                    className="flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 category-arrow"
                    style={{
                      backgroundColor: hoveredCategory === category.id ? "#3B82F6" : "#F3F4F6",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        transition: "all 0.3s ease",
                        transform: hoveredCategory === category.id ? "translateX(2px)" : "translateX(0)",
                      }}
                    >
                      <path
                        d="M8 3L14 8L8 13"
                        stroke={hoveredCategory === category.id ? "#FFFFFF" : "#6B7280"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      

      {/* Featured Companies Section */}
      <div className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12 companies-header">
            <div className="inline-block bg-blue-100 text-blue-500 px-4 py-1.5 rounded-full text-sm font-medium mb-4 companies-badge">
              Featured Companies
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 companies-title">Get hired in top companies</h2>
          </div>

          {/* Companies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 companies-grid">
            {companies.map((company, index) => (
              <div
                key={company.id}
                className={`group relative bg-white rounded-xl p-6 cursor-pointer company-card ${
                  company.isSelected ? "border-2 border-blue-300 shadow-md" : "border border-gray-200 shadow-sm"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCompany(company.id)}
                onMouseLeave={() => setHoveredCompany(null)}
              >
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Company Logo */}
                <div className="flex justify-center mb-4 relative z-10">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 logo-container">
                    <span
                      className={`${company.logoColor || "text-gray-600"} ${company.fontFamily || ""} logo-animation`}
                    >
                      {company.logo}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center justify-center text-gray-500 text-sm mb-3 relative z-10 company-location">
                  <div className="icon-hover">
                    <MapPinIcon />
                  </div>
                  <span>{company.location}</span>
                </div>

                {/* Company Name */}
                <h3 className="text-center font-medium text-gray-900 text-base mb-4 leading-tight relative z-10 company-name">
                  {company.name}
                </h3>

                {/* Open Jobs Button */}
                <div className="text-center relative z-10">
                  <button className="text-blue-500 hover:text-blue-600 text-sm font-medium relative overflow-hidden company-button">
                    <span className="inline-block button-text">Open Jobs {company.openJobs}</span>
                    <div className="absolute bottom-0 left-0 h-0.5 bg-blue-500 button-underline"></div>
                  </button>
                </div>

                {/* Floating particles */}
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 how-it-works-header">
            <div className="inline-block bg-blue-100 text-blue-500 px-4 py-2 rounded-full text-sm font-medium mb-4 how-it-works-badge">
              How It Works
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 how-it-works-title">
              Finding Your Next Career Move. A Step-by-Step Process
            </h2>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 steps-container">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="relative step-card"
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-6 z-10">
                  <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold step-number">
                    {step.id}
                  </div>
                </div>

                {/* Step Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                  {/* Step Icon/Visual */}
                  <div className="mb-6 step-icon">{step.icon}</div>

                  {/* Step Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 step-title">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed step-description">{step.description}</p>
                  </div>
                </div>

                {/* Connection Line (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 connection-line"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Featured Cities Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 cities-header">
            <div className="inline-block bg-blue-100 text-blue-500 px-4 py-2 rounded-full text-sm font-medium mb-4 cities-badge">
              Featured Cities
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Selecting your desired location</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 cities-grid">
            {/* Tokyo - Large Card */}
            <div className="md:col-span-1 row-span-2 relative rounded-xl overflow-hidden h-[400px] md:h-full city-card">
              <img
                src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Tokyo cityscape with busy intersection"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h4 className="text-2xl font-bold mb-1">Tokyo</h4>
                <p className="text-sm font-medium bg-blue-500/80 px-3 py-1 rounded-full inline-block">608 jobs</p>
              </div>
            </div>

            {/* Los Angeles - Large Card */}
            <div className="md:col-span-1 row-span-2 relative rounded-xl overflow-hidden h-[400px] md:h-full city-card">
              <img
                src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Los Angeles with palm trees and skyline"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h4 className="text-2xl font-bold mb-1">Los Angeles</h4>
                <p className="text-sm font-medium bg-blue-500/80 px-3 py-1 rounded-full inline-block">247 jobs</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:col-span-1">
              {/* California */}
              <div className="relative rounded-xl overflow-hidden h-48 city-card">
                <img
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="California Golden Gate Bridge"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h4 className="text-lg font-bold mb-1">California</h4>
                  <p className="text-xs font-medium bg-blue-500/80 px-2 py-0.5 rounded-full inline-block">107 jobs</p>
                </div>
              </div>

              {/* Baku */}
              <div className="relative rounded-xl overflow-hidden h-48 city-card">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Baku architecture"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h4 className="text-lg font-bold mb-1">Baku</h4>
                  <p className="text-xs font-medium bg-blue-500/80 px-2 py-0.5 rounded-full inline-block">77 jobs</p>
                </div>
              </div>

              {/* New York */}
              <div className="relative rounded-xl overflow-hidden h-48 city-card">
                <img
                  src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="New York City skyline"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h4 className="text-lg font-bold mb-1">New York</h4>
                  <p className="text-xs font-medium bg-blue-500/80 px-2 py-0.5 rounded-full inline-block">105 jobs</p>
                </div>
              </div>

              {/* Paris */}
              <div className="relative rounded-xl overflow-hidden h-48 city-card">
                <img
                  src="https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Paris with Eiffel Tower"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h4 className="text-lg font-bold mb-1">Paris</h4>
                  <p className="text-xs font-medium bg-blue-500/80 px-2 py-0.5 rounded-full inline-block">408 jobs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Base Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes logoWiggle {
          0%, 100% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.2) rotate(-10deg); }
          75% { transform: scale(1.2) rotate(10deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }

        @keyframes floatReverse {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(20px) scale(0.9); }
        }

        @keyframes particleFloat {
          0% { 
            opacity: 0; 
            transform: translateY(0) scale(1); 
          }
          50% { 
            opacity: 1; 
            transform: translateY(-20px) scale(1.5); 
          }
          100% { 
            opacity: 0; 
            transform: translateY(-40px) scale(1); 
          }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        /* Hero Section Animations */
        .trust-badge {
          animation: fadeIn 0.5s ease-in-out;
        }

        .hero-content {
          animation: slideInLeft 0.8s ease-out;
        }

        .hero-title {
          animation: fadeIn 0.8s ease-out 0.2s both;
        }

        .search-form {
          animation: fadeIn 0.8s ease-out 0.4s both;
        }

        .popular-searches {
          animation: fadeIn 0.8s ease-out 0.6s both;
        }

        .popular-tag:hover {
          transform: translateY(-2px);
        }

        .stats-container .stat-item {
          opacity: 0;
          animation: fadeIn 0.5s ease-in-out both;
        }

        .hero-image {
          animation: slideInRight 0.8s ease-out;
        }

        .find-job-btn:hover {
          transform: translateY(-2px);
        }

        /* Categories Section Animations */
        .categories-header {
          animation: fadeIn 0.5s ease-in-out;
        }

        .categories-badge {
          animation: scaleIn 0.6s ease-out 0.2s both;
        }

        .categories-title {
          animation: fadeIn 0.8s ease-out 0.4s both;
        }

        .category-card {
          opacity: 0;
          animation: fadeInUp 0.5s ease-in-out both;
          transition: all 0.3s ease;
        }

        .category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .category-icon {
          transition: transform 0.3s ease;
        }

        .category-card:hover .category-icon {
          transform: scale(1.1);
        }

        /* How It Works Section Animations */
        .how-it-works-header {
          animation: fadeIn 0.8s ease-out;
        }

        .how-it-works-badge {
          animation: scaleIn 0.6s ease-out 0.2s both;
        }

        .how-it-works-title {
          animation: fadeIn 0.8s ease-out 0.4s both;
        }

        .step-card {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out both;
          transition: all 0.3s ease;
        }

        .step-card:hover {
          transform: translateY(-8px);
        }

        .step-number {
          animation: pulse 2s infinite;
        }

        .step-icon {
          transition: transform 0.3s ease;
        }

        .step-card:hover .step-icon {
          transform: scale(1.05);
        }

        .step-card-content {
          transition: all 0.3s ease;
        }

        .step-card:hover .step-card-content {
          transform: scale(1.02);
        }

        .connection-line {
          animation: fadeIn 1s ease-out 1s both;
        }

        /* Companies Section Animations */
        .companies-header {
          animation: fadeIn 0.8s ease-out;
        }

        .companies-badge {
          animation: scaleIn 0.6s ease-out 0.2s both;
        }

        .companies-title {
          animation: fadeIn 0.8s ease-out 0.4s both;
        }

        .company-card {
          opacity: 0;
          animation: fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          transition: all 0.3s ease;
        }

        .company-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .company-card:active {
          transform: translateY(-6px) scale(0.98);
        }

        .logo-container:hover .logo-animation {
          animation: logoWiggle 0.4s ease-in-out;
        }

        .company-location {
          animation: slideInLeft 0.5s ease-out both;
        }

        .company-name {
          animation: fadeIn 0.5s ease-out both;
        }

        .icon-hover {
          transition: all 0.2s ease;
        }

        .icon-hover:hover {
          transform: scale(1.1);
          color: #3B82F6;
        }

        .company-button {
          transition: all 0.2s ease;
        }

        .company-button:hover {
          transform: scale(1.05);
        }

        .company-button:hover .button-text {
          transform: translateY(-2px);
        }

        .button-text {
          transition: transform 0.2s ease;
        }

        .button-underline {
          width: 0;
          transition: width 0.3s ease;
        }

        .company-button:hover .button-underline {
          width: 100%;
        }

        /* Floating Particles */
        .particle {
          position: absolute;
          border-radius: 50%;
          opacity: 0;
          pointer-events: none;
        }

        .particle-1 {
          top: 1rem;
          right: 1rem;
          width: 8px;
          height: 8px;
          background-color: #DBEAFE;
        }

        .particle-2 {
          top: 1.5rem;
          right: 2rem;
          width: 6px;
          height: 6px;
          background-color: #BFDBFE;
        }

        .group:hover .particle-1 {
          animation: particleFloat 2s infinite;
        }

        .group:hover .particle-2 {
          animation: particleFloat 2.5s infinite 0.5s;
        }

        /* Background Elements */
        .floating-bg-1 {
          position: absolute;
          top: 5rem;
          left: 2.5rem;
          width: 5rem;
          height: 5rem;
          background-color: #DBEAFE;
          border-radius: 50%;
          opacity: 0.2;
          animation: float 4s ease-in-out infinite;
        }

        .floating-bg-2 {
          position: absolute;
          bottom: 5rem;
          right: 2.5rem;
          width: 4rem;
          height: 4rem;
          background-color: #E0E7FF;
          border-radius: 50%;
          opacity: 0.2;
          animation: floatReverse 5s ease-in-out infinite 1s;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .hero-content {
            animation-delay: 0.2s;
          }
          
          .category-card {
            animation-delay: 0.3s;
          }
          
          .step-card {
            animation-delay: 0.3s;
          }
          
          .company-card {
            animation-delay: 0.3s;
          }

          .connection-line {
            display: none;
          }
        }

        /* Featured Cities Section */
        .cities-header {
          animation: fadeIn 0.8s ease-out;
        }

        .cities-badge {
          animation: scaleIn 0.6s ease-out 0.2s both;
        }

        .cities-grid {
          position: relative;
        }

        .city-card {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out both;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .city-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .city-card:nth-child(1) {
          animation-delay: 0.1s;
        }

        .city-card:nth-child(2) {
          animation-delay: 0.2s;
        }

        .city-card:nth-child(3) {
          animation-delay: 0.3s;
        }

        .city-card img {
          transition: transform 0.5s ease;
        }

        .city-card:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  )
}
