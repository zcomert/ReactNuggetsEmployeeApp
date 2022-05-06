import React, { useState, useEffect } from "react";
import List from "./components/List";

function App() {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);

  const fetchGetAllEmployeesFromApi = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/employees");
      const data = await response.json(); 
      setEmployees(data);
      setLoading(false);
    } catch(err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchGetAllEmployeesFromApi();
  },[])

  if (loading) {
    return (
      <main>
        <section className="container">
          <h1>Loading...</h1>
        </section>
      </main>
    );
  } else {
    return (
      <main>
        <section className="container">
          <h3> {employees.length} Employee has been listed. </h3>
          <List employees={employees} />
          <button onClick={() => setEmployees([])}>Clear All</button>
        </section>
      </main>
    );
  }
}

export default App;
