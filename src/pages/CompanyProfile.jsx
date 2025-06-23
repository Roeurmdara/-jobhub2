import React, { useEffect } from 'react';
// Removed AOS imports as they cannot be resolved in this environment.
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// Removed local CSS imports as they cannot be resolved in this environment.
// import './App.css';
// import './index.css';

// The entire CompanyProfile component is now defined directly within this file
// to make the React immersive self-contained and resolve the import error.
// (Original CompanyProfile.jsx content starts here)
import { MapPin, Calendar, Users, Briefcase, Globe, Mail, Share2, Linkedin, Facebook, Twitter, ChevronDown, MessageCircle, CheckCircle, AlertTriangle } from 'lucide-react';

const CompanyProfile = () => {
  // Removed AOS.refresh() if it was present, as AOS itself is not being used.
  return (
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        {/* AOS attributes are still here, but will not function without AOS library */}
        <header className="bg-white shadow-sm border-b" data-aos="fade-down" data-aos-duration="800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <div className="text-2xl font-bold text-blue-600">Job folio</div>
                <nav className="hidden md:flex space-x-6">
                  <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer" data-aos="fade-down" data-aos-delay="100">
                    <span>Home</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                  <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer" data-aos="fade-down" data-aos-delay="200">
                    <span>Find work</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                  <a href="#" className="text-gray-700 hover:text-gray-900" data-aos="fade-down" data-aos-delay="300">
                    For Employers
                  </a>
                  <a href="#" className="text-gray-700 hover:text-gray-900" data-aos="fade-down" data-aos-delay="400">
                    Companies
                  </a>
                  <a href="#" className="text-gray-700 hover:text-gray-900" data-aos="fade-down" data-aos-delay="500">
                    Blog
                  </a>
                </nav>
              </div>
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50" data-aos="fade-down" data-aos-delay="600">
                  Log in
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" data-aos="fade-down" data-aos-delay="700">Post a Job</button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-12" data-aos="fade-in" data-aos-duration="1000">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start space-x-6">
              {/* Company Logo: Zooms in */}
              <div className="bg-white p-4 rounded-lg shadow-sm" data-aos="zoom-in" data-aos-delay="200">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 rounded-lg flex items-center justify-center">
                  <div className="text-white font-bold text-xl">#</div>
                </div>
              </div>

              {/* Company Info: Fades in from the right */}
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2" data-aos="fade-right" data-aos-delay="300">
                  <h1 className="text-3xl font-bold text-gray-900">Slack Company</h1>
                  <CheckCircle className="w-6 h-6 text-blue-500" />
                </div>
                <div className="flex items-center space-x-4 text-gray-600 mb-4" data-aos="fade-right" data-aos-delay="400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Member since 2020</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>Los Angeles, CA</span>
                  </div>
                </div>
              </div>

              {/* Actions (Share buttons, Send Message): Fades in from the left */}
              <div className="flex items-center space-x-4" data-aos="fade-left" data-aos-delay="500">
                <div className="flex items-center space-x-2 text-gray-500">
                  <span className="text-sm">Share on</span>
                  <Linkedin className="w-4 h-4 cursor-pointer hover:text-blue-600" data-aos="zoom-in" data-aos-delay="600" />
                  <Facebook className="w-4 h-4 cursor-pointer hover:text-blue-600" data-aos="zoom-in" data-aos-delay="650" />
                  <Twitter className="w-4 h-4 cursor-pointer hover:text-blue-600" data-aos="zoom-in" data-aos-delay="700" />
                  <Share2 className="w-4 h-4 cursor-pointer hover:text-blue-600" data-aos="zoom-in" data-aos-delay="750" />
                </div>
                <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" data-aos="fade-left" data-aos-delay="800">
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content Column */}
            <div className="lg:col-span-2">
              {/* Navigation Tabs: Fades up */}
              <div className="border-b border-gray-200 mb-6" data-aos="fade-up" data-aos-delay="100">
                <nav className="flex space-x-8">
                  <button className="py-2 px-1 border-b-2 border-blue-500 text-blue-600 font-medium">About</button>
                  <button className="py-2 px-1 text-gray-500 hover:text-gray-700">Open jobs</button>
                </nav>
              </div>

              {/* About Company Section: Zooms in */}
              <div className="bg-white rounded-lg p-6 shadow-sm" data-aos="zoom-in" data-aos-delay="200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900" data-aos="fade-right" data-aos-delay="300">About Company</h2>
                  <button className="flex items-center space-x-1 text-red-500 hover:text-red-600" data-aos="fade-left" data-aos-delay="350">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-sm">Report Company</span>
                  </button>
                </div>

                {/* Paragraphs within About Company fade up with increasing delays */}
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p data-aos="fade-up" data-aos-delay="400">
                    Slack Technologies, Inc. is a prominent software company headquartered in San Francisco, California.
                    Founded in 2009 by Stewart Butterfield, Eric Costello, Cal Henderson, and Serguei Mourachov, the
                    company has revolutionized team communication and collaboration with its innovative platform, Slack.
                  </p>

                  <p data-aos="fade-up" data-aos-delay="500">
                    Slack offers various subscription plans to cater to the needs of different businesses, from small
                    startups to large enterprises. These plans include free, standard, plus, and enterprise versions, each
                    with its own set of features and capabilities. Since its official launch in 2013, Slack has
                    experienced remarkable growth and adoption across various industries.
                  </p>

                  <p data-aos="fade-up" data-aos-delay="600">
                    In December 2020, Salesforce, a leading customer relationship management (CRM) software company,
                    announced its intention to acquire Slack Technologies, Inc. The acquisition aimed to combine
                    Salesforce's CRM capabilities with Slack's collaboration platform to create a more integrated and
                    comprehensive solution for businesses.
                  </p>

                  <p data-aos="fade-up" data-aos-delay="700">
                    As part of Salesforce, Slack continues to evolve and innovate, offering new features and capabilities
                    to support remote work, hybrid work models, and the changing landscape of business communication and
                    collaboration.
                  </p>

                  <p data-aos="fade-up" data-aos-delay="800">
                    At the heart of Slack's offerings is its eponymous collaboration platform, Slack. Slack is designed to
                    streamline communication within teams and organizations, enabling users to collaborate, share files,
                    exchange messages, and integrate with a wide range of other software tools. It provides an intuitive
                    interface that organizes conversations into channels, making it easy for teams to discuss projects,
                    share updates, and stay informed.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Sidebar Column */}
            <div className="space-y-6">
              {/* Company Stats Card: Zooms in */}
              <div className="bg-white rounded-lg p-6 shadow-sm" data-aos="zoom-in" data-aos-delay="100">
                <div className="space-y-4">
                  {/* Individual stat items fade in from the left with staggered delays */}
                  <div className="flex items-center space-x-3" data-aos="fade-left" data-aos-delay="150">
                    <Users className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="text-2xl font-bold text-gray-900">300-500</div>
                      <div className="text-sm text-gray-500">Total Employees</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3" data-aos="fade-left" data-aos-delay="200">
                    <Briefcase className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="text-2xl font-bold text-gray-900">102</div>
                      <div className="text-sm text-gray-500">Current open position</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3" data-aos="fade-left" data-aos-delay="250">
                    <Globe className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="font-medium text-gray-900">www.slack.com</div>
                      <div className="text-sm text-gray-500">Website</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3" data-aos="fade-left" data-aos-delay="300">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="font-medium text-gray-900">Los Angeles, CA</div>
                      <div className="text-sm text-gray-500">Location</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3" data-aos="fade-left" data-aos-delay="350">
                    <Mail className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="font-medium text-gray-900">info.rachel@slack.com</div>
                      <div className="text-sm text-gray-500">Contact</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200" data-aos="fade-up" data-aos-delay="400">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Share on</span>
                    <div className="flex space-x-2">
                      <Linkedin className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer" data-aos="zoom-in" data-aos-delay="450" />
                      <Facebook className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer" data-aos="zoom-in" data-aos-delay="500" />
                      <Twitter className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer" data-aos="zoom-in" data-aos-delay="550" />
                      <Share2 className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer" data-aos="zoom-in" data-aos-delay="600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Card: Zooms in */}
              <div className="bg-white rounded-lg p-6 shadow-sm" data-aos="zoom-in" data-aos-delay="200">
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-8 h-8 mx-auto mb-2" data-aos="zoom-in" data-aos-delay="300" />
                    <p data-aos="fade-up" data-aos-delay="350">Los Angeles, CA</p>
                    <p className="text-sm" data-aos="fade-up" data-aos-delay="400">Interactive map would be here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer is omitted from this code block as it was not provided in the original input,
          but would typically go here if it's a separate component. */}

      </div>
  );
}
// (Original CompanyProfile.jsx content ends here)


function App() {
  useEffect(() => {
    // AOS initialization is removed because the 'aos' library cannot be resolved.
    // Therefore, the data-aos attributes will not produce animations.
    // AOS.init({
    //   duration: 800,
    //   once: false,
    //   mirror: true,
    // });
  }, []);

  return (
      <div className="App">
        {/*
        This is where your main application content goes.
        The CompanyProfile component is rendered directly as it's now self-contained.

        If you had a CompanyAosCard component, its definition would also need to be here
        or within CompanyProfile, and then you would render it like:
        <CompanyAosCard
          // pass props if any
        />
      */}
        <CompanyProfile />

        {/* You might have other components here like a global Footer or Navbar that are not part of routing */}
      </div>
  );
}

export default App;
