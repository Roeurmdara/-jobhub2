// src/components/CompanyAosCard.jsx

import React from 'react';
// Assuming you might have a dedicated CSS file for this card:
// import './CompanyAosCard.css';

// Import Lucide React icons if this card uses them, e.g., for categories or quick stats
// import { Briefcase, MapPin } from 'lucide-react';

/**
 * CompanyAosCard Component
 * A reusable card component designed to display brief company information.
 * It includes data-aos attributes for animation on scroll,
 * though these will not function in the current Canvas environment
 * due to the inability to resolve the 'aos' library.
 *
 * @param {object} props - Component properties.
 * @param {string} props.companyName - The name of the company.
 * @param {string} props.description - A brief description of the company.
 * @param {string} props.imageUrl - URL for the company's image/logo.
 * @param {string} [props.location] - Optional: Company's location.
 * @param {string} [props.openJobs] - Optional: Number of open job positions.
 */
const CompanyAosCard = ({ companyName, description, imageUrl, location, openJobs }) => {
    return (
        // The main container for the card, with a zoom-in animation
        // (Note: data-aos attributes won't work in this specific Canvas environment)
        <div
            className="bg-white rounded-lg p-6 shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center"
            data-aos="zoom-in"
            data-aos-duration="700"
        >
            {/* Company Image/Logo */}
            {imageUrl && (
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-blue-200">
                    <img
                        src={imageUrl}
                        alt={`${companyName} logo`}
                        className="w-full h-full object-cover"
                        // Optional: Animation for the image itself
                        data-aos="fade-in"
                        data-aos-delay="100"
                    />
                </div>
            )}

            {/* Company Name */}
            <h3
                className="text-xl font-semibold text-gray-900 mb-2"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                {companyName}
            </h3>

            {/* Company Description */}
            <p
                className="text-gray-600 text-sm mb-4 flex-grow"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                {description}
            </p>

            {/* Optional: Location and Open Jobs */}
            {(location || openJobs) && (
                <div
                    className="mt-auto pt-4 border-t border-gray-200 w-full flex justify-around items-center"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    {location && (
                        <div className="flex items-center text-gray-500 text-xs">
                            {/* <MapPin className="w-3 h-3 mr-1" /> */} {/* Example Lucide icon */}
                            <span>{location}</span>
                        </div>
                    )}
                    {openJobs && (
                        <div className="flex items-center text-gray-500 text-xs">
                            {/* <Briefcase className="w-3 h-3 mr-1" /> */} {/* Example Lucide icon */}
                            <span>{openJobs} Open Jobs</span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CompanyAosCard;