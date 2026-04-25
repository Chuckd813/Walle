import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2023-10-16" as any,
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Stripe Checkout API
  app.post("/api/create-checkout-session", async (req, res) => {
    try {
      const { items } = req.body;

      if (!items || items.length === 0) {
        return res.status(400).json({ error: "No items in cart" });
      }

      const lineItems = items.map((item: any) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: `${item.name}${item.selectedVariant ? ` - ${item.selectedVariant.name}` : ''}`,
            description: `${item.strength} - Research Use Only`,
            images: [item.image],
          },
          unit_amount: Math.round((item.selectedVariant?.price || item.price) * 100),
        },
        quantity: item.quantity,
      }));

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: `${process.env.APP_URL || "http://localhost:3000"}/?success=true`,
        cancel_url: `${process.env.APP_URL || "http://localhost:3000"}/?canceled=true`,
      });

      res.json({ id: session.id });
    } catch (err: any) {
      console.error("Stripe Session Error:", err.message);
      res.status(500).json({ error: err.message });
    }
  });

  // Health Check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
