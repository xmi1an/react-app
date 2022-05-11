import React, { useState } from "react";
import "./App.css";
// import Student from "./includes/Student";
// import User from "./User";

// Get Data From input Field
function App() {
  const [students, setStudents] = useState(null);
  function getData(val) {
    setStudents(val.target.value);
  }

  return (
    <div className="App">
      <h1>Student List</h1>
      <h1> {students} </h1>
      <input type="text" onChange={getData} />
    </div>
  );
}

export default App;
