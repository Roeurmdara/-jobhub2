"use client";

import { useState } from "react";
import {
  Search,
  MapPin,
  ChevronDown,
  Grid3X3,
  List,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

const JobHuntly = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    employment: [],
    categories: ["Business", "Technology"],
    jobLevel: ["Director"],
    salary: ["$3000 or above"],
  });

  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("Most relevant");

  const jobs = [
    {
      id: 1,
      title: "Social Media Assistant",
      company: "Nomad",
      location: "Paris, France",
      type: "Full-Time",
      tags: ["Marketing", "Design"],
      applied: 5,
      capacity: 10,
      logo: "🏢",
    },
    {
      id: 2,
      title: "Brand Designer",
      company: "Dropbox",
      location: "San Fransisco, USA",
      type: "Full-Time",
      tags: ["Marketing", "Design"],
      applied: 2,
      capacity: 10,
      logo: "🏢",
    },
    {
      id: 3,
      title: "Interactive Developer",
      company: "Terraform",
      location: "Hamburg, Germany",
      type: "Full-Time",
      tags: ["Marketing", "Design"],
      applied: 8,
      capacity: 12,
      logo: "🏢",
    },
    {
      id: 4,
      title: "Email Marketing",
      company: "Revolut",
      location: "Madrid, Spain",
      type: "Full-Time",
      tags: ["Marketing", "Design"],
      applied: 0,
      capacity: 10,
      logo: "🔴",
    },
    {
      id: 5,
      title: "Lead Engineer",
      company: "Canva",
      location: "Ankara, Turkey",
      type: "Full-Time",
      tags: ["Marketing", "Design"],
      applied: 5,
      capacity: 10,
      logo: "🟢",
    },
    {
      id: 6,
      title: "Product Designer",
      company: "ClassPass",
      location: "Berlin, Germany",
      type: "Full-Time",
      tags: ["Marketing", "Design"],
      applied: 5,
      capacity: 10,
      logo: "🅽",
    },
    {
      id: 7,
      title: "Customer Manager",
      company: "Pitch",
      location: "Berlin, Germany",
      type: "Full-Time",
      tags: ["Marketing", "Design"],
      applied: 5,
      capacity: 10,
      logo: "🏢",
    },
  ];

  const FilterSection = ({ title, children, defaultOpen = true }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
      <div className="mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          {title}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && <div className="space-y-2">{children}</div>}
      </div>
    );
  };

  const CheckboxItem = ({ label, count, checked = false }) => (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        readOnly
      />
      <span className="text-sm text-gray-700">{label}</span>
      {count && <span className="text-sm text-gray-500">({count})</span>}
    </label>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">J</span>
                </div>
                <span className="text-xl font-bold text-gray-900">
                  JobHuntly
                </span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a
                  href="#"
                  className="text-blue-600 font-medium border-b-2 border-blue-600"
                >
                  Find Jobs
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 pb-4">
                  Browse Companies
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Login
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find your{" "}
            <span className="text-blue-600 relative">
              dream job
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-200 rounded"></div>
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Find your next career at companies like HubSpot, Nike, and Dropbox
          </p>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select className="appearance-none pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white min-w-[200px]">
                <option>Florence, Italy</option>
                <option>New York, USA</option>
                <option>London, UK</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-medium">
              Search
            </button>
          </div>

          {/* Popular Tags */}
          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-sm text-gray-500">Popular:</span>
            {["UI Designer", "UX Researcher", "Android", "Admin"].map((tag) => (
              <button
                key={tag}
                className="text-sm text-gray-600 hover:text-blue-600 underline"
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
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <FilterSection title="Type of Employment">
                <CheckboxItem label="Full-time" count={3} />
                <CheckboxItem label="Part-Time" count={5} />
                <CheckboxItem label="Remote" count={2} />
                <CheckboxItem label="Internship" count={24} />
                <CheckboxItem label="Contract" count={3} />
              </FilterSection>

              <FilterSection title="Categories">
                <CheckboxItem label="Design" count={24} />
                <CheckboxItem label="Sales" count={3} />
                <CheckboxItem label="Marketing" count={3} />
                <CheckboxItem label="Business" count={3} checked={true} />
                <CheckboxItem label="Human Resource" count={6} />
                <CheckboxItem label="Finance" count={4} />
                <CheckboxItem label="Engineering" count={4} />
                <CheckboxItem label="Technology" count={5} checked={true} />
              </FilterSection>

              <FilterSection title="Job Level">
                <CheckboxItem label="Entry Level" count={57} />
                <CheckboxItem label="Mid Level" count={3} />
                <CheckboxItem label="Senior Level" count={5} />
                <CheckboxItem label="Director" count={12} checked={true} />
                <CheckboxItem label="VP or Above" count={8} />
              </FilterSection>

              <FilterSection title="Salary Range">
                <CheckboxItem label="$700 - $1000" count={4} />
                <CheckboxItem label="$100 - $1500" count={6} />
                <CheckboxItem label="$1500 - $2000" count={10} />
                <CheckboxItem label="$3000 or above" count={4} checked={true} />
              </FilterSection>
            </div>
          </div>

          {/* Job Listings */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">All Jobs</h2>
                <p className="text-gray-600">Showing 73 results</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>Most relevant</option>
                    <option>Newest</option>
                    <option>Salary</option>
                  </select>
                </div>
                <div className="flex border border-gray-300 rounded">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${
                      viewMode === "grid"
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${
                      viewMode === "list"
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Job Cards */}
            <div className="space-y-4">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                        {job.logo}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {job.title}
                        </h3>
                        <p className="text-gray-600 mb-3">
                          {job.company} • {job.location}
                        </p>
                        <div className="flex space-x-2">
                          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                            {job.type}
                          </span>
                          {job.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium mb-2">
                        Apply
                      </button>
                      <p className="text-sm text-gray-500">
                        <span className="text-green-600 font-medium">
                          {job.applied} applied
                        </span>{" "}
                        of {job.capacity} capacity
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2 mt-8">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <ChevronLeft className="w-5 h-5" />
              </button>
              {[1, 2, 3, 4, 5, "...", 33].map((page, index) => (
                <button
                  key={index}
                  className={`px-3 py-2 rounded ${
                    page === 1
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="p-2 text-gray-600 hover:text-gray-800">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">J</span>
                </div>
                <span className="text-xl font-bold">JobHuntly</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Great platform for the job seeker that passionate about
                startups. Find your dream job easier.
              </p>
              <p className="text-gray-400 text-sm">
                2021 © JobHuntly. All rights reserved.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-gray-300">
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
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-300">
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

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="font-semibold mb-2">Get job notifications</h3>
                <p className="text-gray-300 text-sm">
                  The latest job news, articles, sent to your inbox weekly.
                </p>
              </div>
              <div className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                />
                <button className="px-6 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="flex justify-center space-x-4 mt-6">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JobHuntly;
