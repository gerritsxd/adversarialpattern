import React from "react";
import "./App.css";
import ProductPage from "./ProductPage";

// Other components (Header, Product, Footer)...

function App() {
  // ...

  // Example product data
  const exampleProduct = {
    name: "Adversarial T-Shirt",
    imageUrl: "https://via.placeholder.com/150",
    description: "A stylish t-shirt with an adversarial pattern.",
    colors: ["#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    patterns: [
      { name: "Pattern 1", imageUrl: "https://via.placeholder.com/50" },
      { name: "Pattern 2", imageUrl: "https://via.placeholder.com/50" },
      { name: "Pattern 3", imageUrl: "https://via.placeholder.com/50" },
    ],
  };

  return (
    <div className="App">
     
