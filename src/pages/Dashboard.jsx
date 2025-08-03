import React from "react";
import { Bell, MapPin, Calendar, DollarSign, Users, Building2, Heart, Settings, HelpCircle } from "lucide-react";
import { Button } from "../components/button";
import { Badge } from "../components/badge";
import { Card, CardContent } from "../components/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/avatar";
import { Check } from "lucide-react";

 function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">J</span>
              </div>
              <span className="font-semibold text-lg">JobHub</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Bell className="w-4 h-4 mr-2" />
            </Button>
           <Button
  size="sm"
  className="bg-blue-600 text-white hover:bg-blue-700"
>
  <div className="flex items-center justify-center gap-2 w-full">
    <span className="text-xl leading-none">+</span>
    <span>Post a Job</span>
  </div>
</Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 border-r border-gray-200 min-h-screen">
          <nav className="p-6">
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-lg p-2">
                  <Building2 className="w-5 h-5" />
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-lg p-2">
                 <Building2 className="w-5 h-5" />
                  <span>Messages</span>
                  <Badge className="ml-auto bg-blue-600 text-white rounded-2xl">1</Badge>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-lg p-2">
                  <Building2 className="w-5 h-5" />
                  <span>Company Profile</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-lg p-2">
                  <Users className="w-5 h-5" />
                  <span>All Applicants</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 text-blue-600 bg-purple-50 rounded-lg p-2">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">Job Listing</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-lg p-2">
                  <Calendar className="w-5 h-5" />
                  <span>My Schedule</span>
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">SETTINGS</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-lg p-2">
                    <Settings Settings />
                    <span>Setting</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-lg p-2">
                    <HelpCircle />
                    <span>Help Center</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-70 p-4  rounded-lg">
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" />
                  <AvatarFallback>MK</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">Maria Kelly</p>
                  <p className="text-xs text-gray-500">maria.kelly@gmail.com</p>
                </div>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <span className="text-3xl text-bold ">←</span>
              </Button>
              <div>
                <h1 className="text-xl font-semibold">Social Media Assistant</h1>
                <p className="text-sm text-gray-600">Design • Nomad</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="text-blue-600 border border-blue-600">
              More Action
            </Button>
          </div>

          <div className="flex space-x-6">
            {/* Job Content */}
            <div className="flex-1">
              {/* Tabs */}
              <div className="flex space-x-8 border-b border-gray-200 mb-6">
                <button className="pb-2 border-b-2 border-purple-600 text-purple-600 font-medium">Job Details</button>
                <button className="pb-2 text-gray-600">Applicants</button>
                <button className="pb-2 text-gray-600">Analytics</button>
              </div>

              {/* Job Details */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border border-gray-300 p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold">S</span>
                    </div>
                    <h2 className="text-xl font-bold">Social Media Assistant</h2>
                  </div>
                  <Button variant="outline" size="sm" className="text-blue-600 border border-blue-600">
                    <span>Edit Job Details</span>
                  </Button>
                </div>

                <div className="grid grid-cols-4 gap-8">
  {/* Left Section - spans 2 columns */}
  <div className="col-span-3">
    <h3 className="font-semibold mb-3">Description</h3>
    <div className="text-gray-700 space-y-3 text-sm leading-relaxed">
      <p>
        Stripe is looking for Social Media Marketing expert to help manage our online networks. You will
        be responsible for monitoring our social media channels, creating content, following up with
        users, and maintaining our brand voice.
      </p>
    </div>

    <h3 className="font-semibold mb-3 mt-6">Responsibilities</h3>
   <ul className="text-gray-700 space-y-2 text-sm">
  <li className="flex items-start gap-2"><Check size={16} className="text-green-600 mt-1" />Community engagement to ensure that is supported and actively represented online</li>
  <li className="flex items-start gap-2"><Check size={16} className="text-green-600 mt-1" />Focus on social media content development and publication</li>
  <li className="flex items-start gap-2"><Check size={16} className="text-green-600 mt-1" />Marketing and strategy support</li>
  <li className="flex items-start gap-2"><Check size={16} className="text-green-600 mt-1" />Stay on top of trends on social media platforms, and suggest content ideas to the team</li>
  <li className="flex items-start gap-2"><Check size={16} className="text-green-600 mt-1" />Engage with online communities</li>
</ul>


    <h3 className="font-semibold mb-3 mt-6">Who You Are</h3>
<ul className="text-gray-700 space-y-2 text-sm">
  <li className="flex items-start gap-2"><Check size={16} className="text-green-600 mt-1" />You get energy from people and building the ideal work environment</li>
  <li className="flex items-start gap-2"><Check size={16} className="text-green-600 mt-1" />You have a sense for beautiful spaces and office experiences</li>
  <li className="flex items-start gap-2"><Check size={16} className="text-green-600 mt-1" />You are a strong communicator, comfortable working with executives</li>
  <li className="flex items-start gap-2"><Check size={16} className="text-green-600 mt-1" />You're detail-oriented and creative</li>
  <li className="flex items-start gap-2"><Check size={16} className="text-green-600 mt-1" />You're a growth mindset and are comfortable with ambiguity</li>
</ul>


   <h3 className="font-semibold mb-3 mt-6">Nice-To-Haves</h3>
<ul className="text-gray-700 space-y-2 text-sm">
  <li className="flex items-start gap-2">
    <Check size={16} className="text-green-600 mt-1" />Fluent in English
  </li>
  <li className="flex items-start gap-2">
    <Check size={16} className="text-green-600 mt-1" />Project management skills
  </li>
  <li className="flex items-start gap-2">
    <Check size={16} className="text-green-600 mt-1" />Copy editing skills
  </li>
</ul>

  </div>

  {/* Right Section - spans 1 column (default) */}
  <div>
    <div className="flex space-x-8 border-b border-gray-200 mb-6" >
      <h3 className="font-semibold mb-3">About this role</h3>
    <div className="space-y-4 text-sm">
      <div className="flex justify-between">
        <span className="text-gray-600">5 applied</span>
        <span className="text-purple-600">of 10 capacity</span>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Days online</span>
          <span className="font-bold">July 31, 2021</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Job Posted</span>
          <span className="font-bold">July 1, 2021</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Job Type</span>
          <span className="font-bold">Full-Time</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Salary</span>
          <span className="font-bold mb-6">$75k-86k USD</span>
        </div>
      </div>
    </div>
    </div>
<div className="border-b border-gray-200 mb-6">
  <h3 className="font-semibold mb-3">Categories</h3>
  <div className="flex flex-wrap gap-2 mb-3">
    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 rounded-lg">
      Marketing
    </Badge>
    <Badge variant="secondary" className="bg-blue-100 text-blue-800 rounded-lg">
      Design
    </Badge>
  </div>
</div>


    <h3 className="font-semibold mb-3 mt-6">Required Skills</h3>
    <div className="flex flex-wrap gap-2 text-blue-600">
      <Badge variant="outline" className="bg-gray-200 rounded-none">Project Management</Badge>
      <Badge variant="outline" className="bg-gray-200 rounded-none">Copywriting</Badge>
      <Badge variant="outline" className="bg-gray-200 rounded-none">Social Media Marketing</Badge>
      <Badge variant="outline"className="bg-gray-200 rounded-none">English</Badge>
      <Badge variant="outline"className="bg-gray-200 rounded-none">Copy Editing</Badge>
    </div>
  </div>
</div>


                {/* Perks & Benefits */}
                <div className="mt-8">
                  <h3 className="font-semibold mb-4">Perks & Benefits</h3>
                  <p className="text-sm text-gray-600 mb-6">This job comes with several perks and benefits</p>

                  <div className="grid grid-cols-3 gap-6">
                    <Card>
                      <CardContent className="p-4 text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <Heart className="w-6 h-6 text-blue-600" />
                        </div>
                        <h4 className="font-medium mb-2">Full Healthcare</h4>
                        <p className="text-xs text-gray-600">
                          We believe in thriving communities and that starts with our team being happy and healthy.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <Calendar className="w-6 h-6 text-green-600" />
                        </div>
                        <h4 className="font-medium mb-2">Unlimited Vacation</h4>
                        <p className="text-xs text-gray-600">
                          We believe you should have a flexible schedule that makes space for family, wellness, and fun.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 text-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <Building2 className="w-6 h-6 text-purple-600" />
                        </div>
                        <h4 className="font-medium mb-2">Skill Development</h4>
                        <p className="text-xs text-gray-600">
                          We believe in always learning and leveling up, whether it's a conference or online course.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 text-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <Users className="w-6 h-6 text-orange-600" />
                        </div>
                        <h4 className="font-medium mb-2">Team Summits</h4>
                        <p className="text-xs text-gray-600">
                          Every 6 months we have a full team summit where we have fun, reflect, and plan for the
                          upcoming quarter.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 text-center">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <MapPin className="w-6 h-6 text-red-600" />
                        </div>
                        <h4 className="font-medium mb-2">Remote Working</h4>
                        <p className="text-xs text-gray-600">
                          You know how you perform your best. Work from home, coffee shop or anywhere when you feel like
                          it.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 text-center">
                        <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <DollarSign className="w-6 h-6 text-teal-600" />
                        </div>
                        <h4 className="font-medium mb-2">Commuter Benefits</h4>
                        <p className="text-xs text-gray-600">
                          We're grateful for all the time and energy each team member puts into getting to work every
                          day.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard