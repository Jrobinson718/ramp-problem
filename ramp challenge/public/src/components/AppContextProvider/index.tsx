// Import necessary modules and components
import React, { useRef, useState } from "react";
import { AppContext } from "../../utils/context"; // Import AppContext from the appropriate path
import { AppContextProviderComponent } from "./types"; // Import the necessary type for AppContextProviderComponent

// Define the AppContextProvider component
export const AppContextProvider: AppContextProviderComponent = ({ children }) => {
  // Create a ref to store a cache map
  const cache = useRef(new Map());

  // Create a state to hold error messages
  const [error, setError] = useState("");

  // Return the context provider with the value of cache and setError
  return (
    <AppContext.Provider value={{ setError, cache }}>
      {/* Conditionally render error message */}
      {error ? (
        <div className="RampError">
          <h1 className="RampTextHeading--l">Oops. Application broken</h1>
          <div className="RampBreak--l" />
          Error: {error}
        </div>
      ) : (
        /* Render the children components */
        children
      )}
    </AppContext.Provider>
  );
}
