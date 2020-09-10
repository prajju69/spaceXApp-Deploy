import React from "react";
import Header from "./header";
// import Filter from './components/filter/filter'
import Base from "./components/base/base";
import Footer from './footer'
import "./index.css";

const App = () => {
  return (
    <div>
      <Header />
      <Base />
      <Footer/>
    </div>
  );
};

export default App;
