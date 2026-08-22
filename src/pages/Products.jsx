import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="card shadow p-4">
        <h4 className="mb-4">All Products</h4>

        {loading && (
          <div className="text-center">
            <div className="spinner-border text-primary"></div>
            <p className="mt-2">Loading Products...</p>
          </div>
        )}

        {error && <div className="alert alert-danger">{error}</div>}

        <div className="row">
          {!loading &&
            !error &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
