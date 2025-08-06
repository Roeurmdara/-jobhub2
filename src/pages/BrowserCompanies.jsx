"use client"

import { Search, MapPin, ArrowRight } from 'lucide-react'
import React from 'react'; // Ensure React is imported for local components

// Simple Button component
const Button = ({ children, className = "", variant = "default", size = "default", ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    ghost: "hover:bg-gray-100 hover:text-gray-900",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50",
    primary: "bg-blue-600 text-white hover:bg-blue-700",
  }

  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 text-sm",
    lg: "h-11 px-8",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

// Simple Input component
const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  )
}

// Simple Select component
const Select = ({ children, defaultValue, onValueChange, className = "" }) => {
  return (
    <select
      defaultValue={defaultValue}
      onChange={(e) => onValueChange && onValueChange(e.target.value)}
      className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      {children}
    </select>
  )
}

const SelectOption = ({ value, children }) => {
  return <option value={value}>{children}</option>
}

// Simple Card component
const Card = ({ children, className = "" }) => {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm ${className}`}>{children}</div>
  )
}

const CardContent = ({ children, className = "" }) => {
  return <div className={`p-6 ${className}`}>{children}</div>
}

// Simple Checkbox component
const Checkbox = ({ id, label, count, className = "", ...props }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <input
        type="checkbox"
        id={id}
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        {...props}
      />
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      {count && <span className="text-xs text-gray-500">({count})</span>}
    </div>
  )
}

export default function BrowserCompanies() {
  const recommendedCompanies = [
    {
      name: "Nomad",
      logo: "N",
      description: "Nomad is located in Paris, France. Nomad has generated $728,000 in sales (USD).",
      jobs: 3,
      tags: ["Business Service"],
    },
    {
      name: "Discord",
      logo: "D",
      description: "We'd love to work with someone like you. We care about creating a delightful experience.",
      jobs: 3,
      tags: ["Business Service"],
    },
    {
      name: "Maze",
      logo: "M",
      description:
        "We're a passionate bunch working from all over the world to build the future of rapid testing together.",
      jobs: 3,
      tags: ["Business Service"],
    },
    {
      name: "Udacity",
      logo: "U",
      description: "Udacity is a new type of online university that teaches the actual programming skills.",
      jobs: 3,
      tags: ["Business Service"],
    },
    {
      name: "Webflow",
      logo: "W",
      description: "Webflow is the first design and hosting platform built from the ground up for the mobile age.",
      jobs: 3,
      tags: ["Business Service", "SaaS"],
    },
    {
      name: "Foundation",
      logo: "F",
      description:
        "Foundation helps creators mint and auction their digital artworks as NFTs on the Ethereum blockchain.",
      jobs: 3,
      tags: ["Business Service", "SaaS"],
    },
  ]

  const categories = [
    { name: "Design", active: true },
    { name: "Fintech", active: false },
    { name: "Hosting", active: false },
    { name: "Business Service", active: false },
    { name: "Development", active: false },
  ]

  const companies = [
    { name: "Pentagram", logo: "P", jobs: 3, color: "bg-red-500" },
    { name: "Wolff Olins", logo: "W", jobs: 3, color: "bg-blue-500" },
    { name: "Clay", logo: "C", jobs: 3, color: "bg-green-500" },
    { name: "MediaMonks", logo: "M", jobs: 3, color: "bg-black" },
    { name: "Packer", logo: "R", jobs: 3, color: "bg-orange-500" },
    { name: "Square", logo: "S", jobs: 3, color: "bg-gray-700" },
    { name: "Divy", logo: "D", jobs: 3, color: "bg-purple-500" },
    { name: "WebFlow", logo: "W", jobs: 3, color: "bg-teal-500" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">J</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">JobHunty</span>
            </div>
            <nav className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 pb-4 border-b-2 border-transparent">
                Find Jobs
              </a>
              <a href="#" className="text-blue-600 pb-4 border-b-2 border-blue-600 font-medium">
                Browse Companies
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-blue-600">
              Login
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Find your <span className="text-blue-500">dream companies</span>
          </h1>
          <p className="text-gray-600 mb-12">Find the dream companies you dream work for</p>

          <div className="flex flex-col sm:flex-row max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-2">
            <div className="flex items-center flex-1 px-4 py-2 sm:py-0">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <Input placeholder="Company name or keyword" className="border-0 focus-visible:ring-0 text-gray-600" />
            </div>
            <div className="flex items-center px-4 py-2 sm:py-0 sm:border-l border-gray-200">
              <MapPin className="w-5 h-5 text-gray-400 mr-3" />
              <Select defaultValue="florence">
                <SelectOption value="florence">Florence, Italy</SelectOption>
                <SelectOption value="rome">Rome, Italy</SelectOption>
                <SelectOption value="milan">Milan, Italy</SelectOption>
              </Select>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 px-8 mt-2 sm:mt-0">Search</Button>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <span className="mr-2">Popular:</span>
            <span className="space-x-2">
              <span className="text-blue-600">Twitter</span>
              <span>, Microsoft, Apple, Facebook</span>
            </span>
          </div>
        </div>
      </section>

      {/* Recommended Companies */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Recommended Companies</h2>
            <p className="text-gray-600">Based on your profile, company preferences, and recent activity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedCompanies.map((company, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <span className="text-green-600 font-bold text-lg">{company.logo}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{company.name}</h3>
                      </div>
                    </div>
                    <span className="text-blue-600 text-sm font-medium">{company.jobs} Jobs</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{company.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {company.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-orange-100 text-orange-600 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Companies by Category */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Companies by Category</h2>

          <div className="flex space-x-4 overflow-x-auto pb-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`flex-shrink-0 p-6 rounded-lg min-w-[200px] cursor-pointer transition-colors ${
                  category.active ? "bg-blue-600 text-white" : "bg-white text-gray-900 hover:bg-gray-100"
                }`}
              >
                <div className="w-8 h-8 mb-4">
                  <div className={`w-full h-full rounded ${category.active ? "bg-white/20" : "bg-blue-100"}`}></div>
                </div>
                <h3 className="font-semibold">{category.name}</h3>
              </div>
            ))}
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-white rounded-lg cursor-pointer hover:bg-gray-100">
              <ArrowRight className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="flex-1 p-12 text-white">
                <h2 className="text-4xl font-bold mb-4">
                  Start posting
                  <br />
                  jobs today
                </h2>
                <p className="text-blue-100 mb-8 text-lg">Start posting jobs for only $10.</p>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3">
                  Sign Up For Free
                </Button>
              </div>
              <div className="flex-1 p-8">
                <div className="bg-white rounded-lg shadow-xl p-6 max-w-md mx-auto">
                  {/* Dashboard Mockup */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                      <span className="font-semibold text-gray-900">Dashboard</span>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs">
                      Post a job
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">Good morning, Mark</span>
                      <span className="text-xs text-gray-400">Dec 20, 2021</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-gray-900">21,457</div>
                        <div className="text-xs text-gray-500 flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                          Job Statistic
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-gray-900">5</div>
                        <div className="text-xs text-gray-500">Applicants</div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm font-medium text-gray-900 mb-2">Recent Applicants</div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600">John Doe Email</span>
                          <span className="text-gray-400">Just Applied</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Listings */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">24 Results</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companies.map((company, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 ${company.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                  >
                    <span className="text-white font-bold text-xl">{company.logo}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{company.name}</h3>
                  <span className="text-blue-600 text-sm font-medium">{company.jobs} Jobs</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent">
              View more Design companies →
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">J</span>
                </div>
                <span className="text-xl font-semibold">JobHunty</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Great platform for the job seeker that passionate about startups. Find your dream job easier.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Companies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Advice
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h4 className="font-semibold mb-2">Get job notifications</h4>
                <p className="text-gray-400 text-sm">The latest job news, articles, sent to your inbox weekly.</p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
                <Input
                  placeholder="Email Address"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 w-full sm:w-auto"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">Subscribe</Button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">2021 © JobHunty. All rights reserved.</p>
              <div className="flex space-x-4">
                {/* Social media icons would go here */}
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.7 5 4.9 9 5.1 0-.4.1-.8.1-1.2 0-3 2.5-5.5 5.5-5.5 1.5 0 2.9.6 4 1.7 1.2-.4 2.3-.9 3.4-1.3-.4 1.3-1.3 2.4-2.5 3.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
