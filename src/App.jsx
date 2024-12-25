import React from "react";
import "./App.css";
import UserList from "./components/UserList";
import Images from "./components/Images";

function App() {
  //use HTML syntax after return in JSX
  // return accepts only one parent
  // curly brackets for JS syntax
  // classes should write with className (camel case)
  // list items should have unique "key" prop, first child after map!!
  // styles should write with camel case too and {{second curly brackets for object}}
  const userName = "Berkay";
  const users = ["Berkay", "Cansu", "Atlas", "Can"];
  const brands = [
    { name: "Gillette", inStock: true, id: 1 },
    { name: "Bic", inStock: false, id: 2 },
    { name: "Permatik", inStock: true, id: 3 },
    { name: "Wilkinson", inStock: true, id: 4 },
  ];

  return (
    <>
      <h1>Hello {userName} </h1>
      <h2 className="background">Number of users: {users.length} </h2>
      <ul
        style={{
          textAlign: "center",
          backgroundColor: "blue",
        }}
      >
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
      <UserList />
      <Images />
      <ul>
        {brands
          .filter((brand) => brand.inStock)
          .map((brand) => (
            <li key={brand.id}>{brand.name.toUpperCase()}</li>
          ))}
      </ul>
    </>
  );
}

export default App;
