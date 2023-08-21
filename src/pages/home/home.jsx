import React from "react";
import Slide from "../../components/slide/slide";
import Products from "../../components/products/products"
import "./home.css"

export default function home() {
  document.title = ("Shaftoli Market")
  return (
    <div className="home">
      <Slide />
      <Products />
    </div>
  );
}
