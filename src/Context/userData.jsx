import React, { createContext, useState } from "react";

export const UserDataContext = createContext({});

export default function UserDataProvider({ children }) {
  const [percentage, setPercentage] = useState(0);

  const stringfyData = localStorage.getItem("userDataString");
  const data = JSON.parse(stringfyData);

  function calculatePercentage(items) {
    const doneItems = items.filter((h) => h.done !== false);
    const percentages = doneItems.length
      ? (doneItems.length / items.length) * 100
      : 0;
    setPercentage(percentages.toFixed(0));
  }

  const config = {
    headers: {
      Authorization: `Bearer ${data === null ? "" : data.token}`,
    },
  };

  return (
    <UserDataContext.Provider
      value={{ data, percentage, setPercentage, calculatePercentage, config }}
    >
      {children}
    </UserDataContext.Provider>
  );
}