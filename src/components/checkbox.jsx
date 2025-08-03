import React from "react"

export function Checkbox({ checked = false, onChange, className = "", ...props }) {
  return (
    <input
      type="checkbox"
      className={`w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 ${className}`}
      checked={checked}
      onChange={onChange}
      {...props}
    />
  )
}
