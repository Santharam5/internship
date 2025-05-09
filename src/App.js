// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router";
// import Contact from "./webpage/contact_page";
// const App=()=>{
//   <>
//   return(
// <BrowserRouter>
// <link to="/contact">
// <ul>
// <li>
// Contact Page
// </li></ul>
// </link>
// <Routes>
//   <Route path="/contact" element={<Contact/>} />
// </Routes>
// </BrowserRouter>)</>
// }
// export default App;
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Contact from "./webpage/contact_page";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/contact">Contact Page</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
