import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/index";
// import SearchBar from "./components/SearchBar/index";
import SideBar from "./components/SideBar/index";
import Products from "./components/Products/index";

function App() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    );
    const fetchedData = await response.json();
    console.log(fetchedData);
    setData(fetchedData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <SideBar />
        <Products data={data} />
      </div>
    </div>
  );
}

export default App;
