import express from "express";
import { createStripePaymentIntent } from "../controllers/transactionsController";

const router = express.Router();

router.post("/stripe/payment-intent", createStripePaymentIntent);

export default router;
