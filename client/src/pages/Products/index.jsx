import { useState, useEffect } from "react";
import Table from "../../components/Table";
import axios from "axios";
import ToolBar from "../../components/ToolBar";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(5);
  const [sort, setSort] = useState("asc");

  async function getAllProducts() {
    const response = await axios.get(
      `https://fakestoreapi.com/products?limit=${limit}&sort=${sort}`
    );
    if (response.data) {
      setProducts(response.data);
    }
  }

  function handleLimit(value) {
    const finalValue = Number(value);
    setLimit(finalValue);
  }

  function handleSort(value) {
    setSort(value);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    getAllProducts();
  }, [limit, sort]);

  return (
    <>
      <ToolBar handleSort={handleSort} />
      <Table products={products} handleLimit={handleLimit} />
    </>
  );
}
