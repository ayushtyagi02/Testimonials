import React from "react";
import Testimonials from "./components/Testimonials";
import reviews from "./data"
import "./App.css"
const App = () => {
  return (
    <div className="app">
      <h1 className="text-3xl font-bold">Our Testimonials</h1>
      <div className="underline"></div>
      <Testimonials reviews={reviews}/>
    </div>
  )
};

export default App;
