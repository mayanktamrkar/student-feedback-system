import "./App.css";
import Nav from "./component/navbar";
import { Routes, Route, Link,useLocation } from "react-router-dom";
import { Footer } from "./component/footer";
import pic from "./img/stu1.jpg";
import { Login } from "./component/login";
import { useState } from "react";
import { Register } from "./component/Register";
import { Enter } from "./component/Enter";
import { Logout } from "./component/Logout";
import User from "./component/User";
import Show from "./component/show";
import New from "./component/New";


function App() {
  const loc=useLocation()
  const m=localStorage.getItem("user") 

  const [username, setUsername] = useState("");

  const setusername = (d) => {
    setUsername(d);
  };

  return (
    <div className="App">
      <Nav username={username} />
      <img id="may" src={pic}></img>
      <Routes>
        <Route path="/feedbacks" element={<Show />} />
        <Route path="/user" element={<User />} />
        <Route path="/logout" element={<Logout pass={setusername} />} />
        <Route path="/feedback" element={<Enter />} />
        <Route path="/login" element={<Login pass={setusername} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {!localStorage.getItem("user") && loc.pathname=="/" ? (
        <Link class="nav-link " to="/login">
        <div className="text-center"><button className="btn btn-primary">Pls Login for feedback </button></div>
        </Link>
      ) : (
        <div>your login</div>
      )}
      {localStorage.getItem("user") === "admin" ? <Show /> : <span></span>}
      {localStorage.getItem("user") === "superadmin" ? <User /> : <span></span>}

       
      {loc.pathname=="/"   && m === "normal" ||  loc.pathname=="/" &&  !m  &&  ( m!=="admin" && m!=="superadmin") ?<New/>:<span></span>}
      <Footer />
    </div>
  );
}

export default App;
