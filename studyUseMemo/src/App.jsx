import React from "react";
import { useState, useMemo } from "react";
import Product from './Product';
import {products as productsData} from './buy.json'
import ExampleTitle from "./ExampleTitle";

function App() {
  const [products, setProducts] = useState(productsData);
  const [newProduct, setNewProduct] = useState("");
  const [title] = useState('Example Title')

  function handleSubmit(event) {
    event.preventDefault();
    setProducts([...products, { name: newProduct }]);
  }

  const memorizedExampleTitle = useMemo(() => <ExampleTitle title={title} />, [title])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newProduct}
          onChange={(event) => setNewProduct(event.target.value)}
        />
      </form>
      <ul>
        {products.map((product) => (
          <Product key={product.name} name={product.name} />
        ))}
      </ul>
      {memorizedExampleTitle}
    </div>
  );
}

export default App;
