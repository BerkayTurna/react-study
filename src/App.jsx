import React from "react";
import "./App.css";

function App() {
  //use HTML syntax after return in JSX
  // return accepts only one parent
  // curly brackets for JS syntax
  const userName = "Berkay";
  const users = ["Berkay", "Cansu", "Atlas", "Can"];

  return (
    <>
      <h1>Hello {userName} </h1>
      <h2 className="background">Number of users: {users.length} </h2>
    </>
  );
}

export default App;
