import React, { useState, useEffect } from "react";
import TwitterHandles from "./TwitterHandles"; 
import fetchTwitterHandles from "./api"; 

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
        <TwitterHandles handles={handles} /> 
      </main>
    </div>
  );
}

export default App;
