import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const product = [
  {
    id: 1,
    name: "Classic Watch",
    price: 129.99,
    img: "https://i.pinimg.com/564x/2d/4c/af/2d4caf6c3eb6dd3dfe2ed804360663b1.jpg",
    description: "A timeless classic watch with a leather strap.",
  },
  {
    id: 2,
    name: "Sporty Watch",
    price: 99.99,
    img: "https://i.pinimg.com/564x/1b/50/76/1b5076a29ace738abffc0b289ff87aa3.jpg",
    description:
      "A durable sporty watch with a rubber band and water resistance.",
  },
  {
    id: 3,
    name: "Elegant Shirt",
    price: 49.99,
    img: "https://i.pinimg.com/564x/6d/2d/fd/6d2dfdc7783502c1975ed71f1806b41e.jpg",
    description:
      "An elegant shirt made from premium cotton, perfect for formal occasions.",
  },
  {
    id: 4,
    name: "Casual Shirt",
    price: 34.99,
    img: "https://i.pinimg.com/564x/da/86/a9/da86a981b0357c0d5fa67d5f62e445b0.jpg",
    description:
      "A comfortable casual shirt with a relaxed fit, ideal for everyday wear.",
  },
  {
    id: 5,
    name: "Leather Shoes",
    price: 89.99,
    img: "https://i.pinimg.com/564x/28/95/00/28950024fe8c875e5615d02a9439f33e.jpg",
    description:
      "Stylish leather shoes that combine sophistication with comfort.",
  },
  {
    id: 6,
    name: "Running Shoes",
    price: 79.99,
    img: "https://i.pinimg.com/564x/22/cd/8c/22cd8cbc0383208248d18ef029775651.jpg",
    description:
      "High-performance running shoes designed for optimal support and durability.",
  },
];

app.get("/api/someEndpoint", (req, res) => {
  res.json(product);
});

// Route for root path
app.get("/", (req, res) => {
  res.send("Welcome to the e-commerce backend server!");
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
