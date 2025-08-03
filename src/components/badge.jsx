import React from "react";
export const Badge = ({ children, className = "", variant }) => {
  return (
    <span className={`inline-block text-xs px-2 py-1 rounded ${className}`}>
      {children}
    </span>
  );
};
