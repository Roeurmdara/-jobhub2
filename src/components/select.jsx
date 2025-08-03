import React, { useState, useContext, createContext } from "react";

// Context to share select state
const SelectContext = createContext();

export const Select = ({ value, onValueChange, children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const selectValue = (val) => {
    onValueChange(val);
    setOpen(false);
  };

  return (
    <SelectContext.Provider value={{ value, open, toggle, selectValue }}>
      <div className="relative w-full">{children}</div>
    </SelectContext.Provider>
  );
};

export const SelectTrigger = ({ children }) => {
  const { toggle } = useContext(SelectContext);

  return (
    <button
      onClick={toggle}
      className="w-full p-2 border rounded bg-white text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {children}
    </button>
  );
};

export const SelectValue = () => {
  const { value } = useContext(SelectContext);
  return <span>{value || "Select an option"}</span>;
};

export const SelectContent = ({ children }) => {
  const { open } = useContext(SelectContext);

  if (!open) return null;

  return (
    <div className="absolute w-full mt-1 border bg-white rounded shadow z-10">
      {children}
    </div>
  );
};

export const SelectItem = ({ value, children }) => {
  const { selectValue } = useContext(SelectContext);

  return (
    <div
      onClick={() => selectValue(value)}
      className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
    >
      {children}
    </div>
  );
};
