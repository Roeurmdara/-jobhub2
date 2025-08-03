import React from "react";

export const Avatar = ({ children, className = "" }) => (
  <div className={`rounded-full overflow-hidden ${className}`}>{children}</div>
);

export const AvatarImage = ({ src }) => <img src={src} alt="avatar" />;
export const AvatarFallback = ({ children }) => <div className="bg-gray-300 text-white p-2">{children}</div>;
