import "./App.css";
import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeDashbord from "./components/Dashbord/EmployeDashbord";
import AdminDashbord from "./components/Dashbord/AdminDashbord";
import { AuthContext } from "./context/AuthProvider";
import { data } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState();
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(()=>{
    const loggdInUser = localStorage.getItem('loggedInUser')
    if(loggdInUser){
      const userData = JSON.parse(loggdInUser);
      console.log(userData)
      setUser(userData.role);
      setLoggedInUserData(userData.data)
    }
  },[])


  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "1234") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => e.email == email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
      }
    } else {
      alert("Invelid User & Password");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? ( <AdminDashbord changeUser={setUser} />) : (user == 'employee' ? <EmployeDashbord changeUser={setUser} data={loggedInUserData} /> : null)}
    </>
  );
}

export default App;
