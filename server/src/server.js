import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: "Premium Headphones", price: 2499, category: "Audio", icon: "??" },
  { id: 2, name: "Smart Watch", price: 3999, category: "Wearables", icon: "?" },
  { id: 3, name: "Wireless Earbuds", price: 1499, category: "Audio", icon: "??" },
  { id: 4, name: "Smart Phone", price: 19999, category: "Mobiles", icon: "??" }
];

app.get("/", (req, res) => {
  res.json({
    message: "NOVA Smart Commerce Backend is Running ??"
  });
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`NOVA backend running on http://localhost:${PORT}`);
});
