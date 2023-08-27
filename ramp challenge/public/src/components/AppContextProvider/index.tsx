// Import necessary modules and components
import React, { useRef, useState } from "react";
// Import AppContext from the appropriate path
// import { AppContext } from "../../utils/context";
// Import the necessary type for AppContextProviderComponent
// import { AppContextProviderComponent } from "./types";

// Create a basic context object since we're not using the actual context
const AppContext = React.createContext(null);

// Define the AppContextProvider component
const AppContextProvider = ({ children }) => {
  // Create a ref to store a cache map
  const cache = useRef(new Map());

  // Create a state to hold error messages
  const [error, setError] = useState("");

  // Return the context provider with the value of cache and setError
  return (
    <AppContext.Provider value={{ setError, cache }}>
      {/* Comment out the error display logic for now */}
      {/* {error ? (
        <div className="RampError">
          <h1 className="RampTextHeading--l">Oops. Application broken</h1>
          <div className="RampBreak--l" />
          Error: {error}
        </div>
      ) : ( */}
        {/* Render the children components */}
        {children}
      {/* )} */}
    </AppContext.Provider>
  );
};

// Export the AppContextProvider component
export { AppContextProvider };
