import React from "react";
import { useState, useCallback } from "react";
import { ProductList } from "./ProductList";

function App() {
  const [products, setProducts] = useState("");
  const [productList, setProductList] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setProductList([...productList, products]);
    setProducts("");
  }

  const listModifier = useCallback((list) => {
    const spacedList = list.map((item) => item.split("").join(" "));
    return spacedList;
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={products}
          onChange={(event) => setProducts(event.target.value)}
        />
      </form>
      <ProductList list={productList} listModifier={listModifier} />
    </div>
  );
}

export default App;