import React, { useState } from "react";

const Slider = ({ label, name, min = 0, max = 100, step = 1, value, onChange }) => (
  <div>
    {label && (
      <label htmlFor={name}>
        {label}: <strong>{value}</strong>
      </label>
    )}
    <input
      type="range"
      id={name}
      name={name}
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default function App() {
  const [val, setVal] = useState(50);
  return (
    <div>
      <Slider
        label="Volume"
        name="volume"
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
      />
    </div>
  );
}
