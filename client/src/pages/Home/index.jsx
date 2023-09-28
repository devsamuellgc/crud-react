import axios from "axios";
import { useState, useEffect } from "react";
import Table from "../../components/Table";

export default function Home() {
  const [products, setProducts] = useState([]);

  async function getAllProducts() {
    const response = await axios.get(
      "https://fakestoreapi.com/products?sort=desc"
    );
    if (response.data) {
      setProducts(response.data);
      console.log(response.data);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <h1>Página inicial</h1>
      <Table products={products} />
    </>
  );
}
