import React, { useState, useEffect } from "react";
import TwitterHandles from "./TwitterHandles"; // Import the TwitterHandles component
import fetchTwitterHandles from "./api"; // Import the function to fetch Twitter handles

function App() {
  const [handles, setHandles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const twitterHandles = await fetchTwitterHandles();
      setHandles(twitterHandles);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Twitter Handles App</h1>
      </header>
      <main>
        <TwitterHandles handles={handles} /> {/* Pass handles as a prop */}
      </main>
    </div>
  );
}

export default App;
