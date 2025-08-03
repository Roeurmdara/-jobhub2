import React, { createContext, useContext, useState } from "react";

// Create context for Tabs
const TabsContext = createContext();

export const Tabs = ({ defaultValue, children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="w-full">{children}</div>
    </TabsContext.Provider>
  );
};

export const TabsList = ({ children }) => {
  return (
    <div className="flex border-b border-gray-200 mb-2 gap-2">
      {children}
    </div>
  );
};

export const TabsTrigger = ({ value, children }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);

  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-4 py-2 text-sm font-medium rounded-t ${
        isActive
          ? "bg-white border border-b-transparent text-blue-600"
          : "bg-gray-100 border border-transparent text-gray-600 hover:text-blue-500"
      }`}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, children }) => {
  const { activeTab } = useContext(TabsContext);
  return activeTab === value ? (
    <div className="p-4 border border-t-0 rounded-b bg-white">
      {children}
    </div>
  ) : null;
};
