import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Card from "../components/Card";

const data = [
  {
    key: 1,
    name: "man's shirt",
    price: "500 rs",
  },
  {
    key: 2,
    name: "man's T-shirt",
    price: "350 rs",
  },
  {
    key: 3,
    name: "woman's collection",
    price: "400-1200 rs",
  },
  {
    key: 4,
    name: "kids collection",
    price: "250-750 rs",
  },
  {
    key: 5,
    name: "toys collection",
    price: "200-700 rs",
  },
  {
    key: 6,
    name: "man's shirt",
    price: "500 rs",
  },
  {
    key: 7,
    name: "man's T-shirt",
    price: "350 rs",
  },
  {
    key: 8,
    name: "woman's collection",
    price: "400-1200 rs",
  },
  {
    key: 9,
    name: "kids collection",
    price: "250-750 rs",
  },
  {
    key: 10,
    name: "toys collection",
    price: "200-700 rs",
  },
  {
    key: 11,
    name: "man's shirt",
    price: "500 rs",
  },
  {
    key: 12,
    name: "man's T-shirt",
    price: "350 rs",
  },
  {
    key: 13,
    name: "woman's collection",
    price: "400-1200 rs",
  },
  {
    key: 14,
    name: "kids collection",
    price: "250-750 rs",
  },
  {
    key: 15,
    name: "toys collection",
    price: "200-700 rs",
  },
];

const Dashboard = () => {
  return (
    <div>
      <h2>Welcome Gulshan 👋</h2>
      <p>This is your Genzy Shop Admin Dashboard.</p>
      <div className="row mt-4">
        {data.map((d) => (
          <Card key={d.key} name={d.name} price={d.price} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
