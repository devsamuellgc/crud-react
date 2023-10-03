import axios from "axios";
import { useState, useEffect } from "react";
import Table from "../../components/Table";
import Header from "../../components/Header";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [userName, setUserName] = useState("");

  async function getAllProducts() {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=5"
    );
    if (response.data) {
      setProducts(response.data);
    }
  }

  async function getUserName() {
    const response = await axios.get("https://fakestoreapi.com/users/1");
    if (response.data) {
      const name = response.data.name.firstname;
      const firstLetterUppercase = name[0].toUpperCase() + name.substring(1);
      setUserName(firstLetterUppercase);
    }
  }

  useEffect(() => {
    getAllProducts();
    getUserName();
  }, []);

  return (
    <>
      <Header userName={userName} />
      <main className="bg-gray-50 px-20 py-8">
        <Table products={products} />
      </main>
    </>
  );
}
