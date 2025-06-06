
import { useState } from "react"

export default function Loading() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories= [
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

  const handleMouseEnter = (id) => {
    setHoveredCategory(id)
  }

  const handleMouseLeave = () => {
    setHoveredCategory(null)
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F8FAFC" }}>
      {/* Hero Section */}
      <div style={{ padding: "24px", backgroundColor: "#F8FAFC" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Trust Badge */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "32px" }}>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "9999px",
                padding: "8px 16px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                border: "1px solid #E5E7EB",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                animation: "fadeIn 0.5s ease-in-out",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#10B981",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg style={{ width: "12px", height: "12px", color: "white" }} fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span style={{ fontSize: "14px", color: "#6B7280" }}>100% Trusted</span>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "center",
            }}
          >
            {/* Left Content */}
            <div style={{ animation: "slideInLeft 0.8s ease-out" }}>
              {/* Hero Text */}
              <div style={{ marginBottom: "32px" }}>
                <h1
                  style={{
                    fontSize: "48px",
                    fontWeight: "bold",
                    color: "#1A1A1A",
                    lineHeight: "1.1",
                    marginBottom: "16px",
                  }}
                >
                  Your Next <span style={{ color: "#3B82F6" }}>Career Move Starts</span>
                  <br />
                  Here. Search for Jobs <span style={{ color: "#3B82F6" }}>Nationwide</span>
                </h1>
              </div>

              {/* Search Form */}
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "16px",
                  padding: "8px",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  marginBottom: "32px",
                }}
              >
                <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                  <div style={{ flex: 1, position: "relative" }}>
                    <svg
                      style={{
                        position: "absolute",
                        left: "16px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "20px",
                        height: "20px",
                        color: "#9CA3AF",
                      }}
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
                      style={{
                        width: "100%",
                        paddingLeft: "48px",
                        paddingRight: "16px",
                        paddingTop: "16px",
                        paddingBottom: "16px",
                        border: "1px solid #E5E7EB",
                        borderRadius: "12px",
                        outline: "none",
                        fontSize: "16px",
                      }}
                    />
                  </div>

                  <select
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #E5E7EB",
                      borderRadius: "12px",
                      padding: "16px 24px",
                      outline: "none",
                      fontSize: "16px",
                      minWidth: "120px",
                    }}
                  >
                    <option>Category</option>
                    <option>Design</option>
                    <option>Development</option>
                    <option>Marketing</option>
                  </select>

                  <button
                    style={{
                      backgroundColor: "#3B82F6",
                      color: "white",
                      padding: "16px 32px",
                      borderRadius: "12px",
                      fontWeight: "600",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      fontSize: "16px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#2563EB"
                      e.currentTarget.style.transform = "translateY(-2px)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#3B82F6"
                      e.currentTarget.style.transform = "translateY(0)"
                    }}
                  >
                    Find Job
                  </button>
                </div>
              </div>

              {/* Popular Searches */}
              <div style={{ marginBottom: "32px" }}>
                <p style={{ color: "#6B7280", fontWeight: "500", marginBottom: "12px" }}>Popular Searches:</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                  {["Designer", "Developer", "UX&UI Designer", "Contentwriter"].map((search) => (
                    <span
                      key={search}
                      style={{
                        color: "#374151",
                        cursor: "pointer",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#3B82F6"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#374151"
                      }}
                    >
                      {search}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "32px" }}>
                {[
                  { icon: "📄", number: "+200k", label: "Active jobs" },
                  { icon: "🏢", number: "+2k", label: "Companies" },
                  { icon: "👥", number: "+15k", label: "Candidates" },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    style={{
                      textAlign: "center",
                      animation: `fadeIn 0.5s ease-in-out ${0.2 + index * 0.1}s`,
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: "#DBEAFE",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 12px auto",
                        fontSize: "20px",
                      }}
                    >
                      {stat.icon}
                    </div>
                    <div style={{ fontSize: "24px", fontWeight: "bold", color: "#1A1A1A" }}>{stat.number}</div>
                    <div style={{ color: "#6B7280", fontSize: "14px" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div style={{ position: "relative", animation: "slideInRight 0.8s ease-out" }}>
              <div
                style={{
                  width: "300px",
                  height: "300px",
                  background: "linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "-32px",
                  right: "-32px",
                  opacity: 0.5,
                  zIndex: 1,
                }}
              ></div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqIcSdQWCMrZ6OUzfy3MKe9nhNgjrsdm6Adw&s"
                alt="Professional woman with laptop"
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: "100%",
                  maxWidth: "400px",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Job Categories Section */}
      <div style={{ padding: "80px 20px", backgroundColor: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center",
              marginBottom: "60px",
              animation: "fadeIn 0.5s ease-in-out",
            }}
          >
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#EBF3FF",
                color: "#4285F4",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: 500,
                marginBottom: "16px",
              }}
            >
              Jobs by Categories
            </div>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: 600,
                color: "#1A1A1A",
                margin: 0,
              }}
            >
              Select the Category of Your Choice
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                style={{
                  border: "1px solid #E5E7EB",
                  borderRadius: "12px",
                  padding: "24px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  transform: hoveredCategory === category.id ? "translateY(-5px)" : "translateY(0)",
                  boxShadow: hoveredCategory === category.id ? "0 10px 25px rgba(0, 0, 0, 0.1)" : "none",
                  animation: `fadeIn 0.5s ease-in-out ${category.id * 0.1}s`,
                  backgroundColor: "white",
                }}
                onMouseEnter={() => handleMouseEnter(category.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div style={{ marginBottom: "16px" }}>{category.icon}</div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    margin: "0 0 4px 0",
                    color: "#1A1A1A",
                  }}
                >
                  {category.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#6B7280",
                    margin: "0 0 16px 0",
                  }}
                >
                  {category.subtitle}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#4285F4",
                    }}
                  >
                    {category.jobs} jobs available
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      backgroundColor: hoveredCategory === category.id ? "#4285F4" : "#F3F4F6",
                      transition: "all 0.3s ease",
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

      <style jsx>{`
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
      `}</style>
    </div>
  )
}
