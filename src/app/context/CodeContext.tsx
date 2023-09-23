"use client";

import { createContext, useContext, useState } from "react";

// main context and hook for accessing editor-related functions and states
const CodeContext = createContext<any>(null);

// hook to access the editor context.
export const useCode = () => {
  return useContext(CodeContext);
};

export const CodeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showCode, setShowCode] = useState(false);

  const value = {
    showCode,
    setShowCode,
  };

  return <CodeContext.Provider value={value}>{children}</CodeContext.Provider>;
}
