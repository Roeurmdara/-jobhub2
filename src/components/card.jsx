import React from "react";

export const Card = ({ children }) => (
  <div className="bg-white rounded-lg shadow">{children}</div>
);

export const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);
export const CardHeader = ({ children }) => <div className="card-header">{children}</div>
export const CardTitle = ({ children }) => <h2 className="card-title">{children}</h2>