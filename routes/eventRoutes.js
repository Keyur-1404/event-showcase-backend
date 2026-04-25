import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";


import {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent
} from "../controllers/eventController.js";



const router = express.Router();

// Admin protected
router.post("/", authMiddleware, createEvent);
router.put("/:id", authMiddleware, updateEvent);
router.delete("/:id", authMiddleware, deleteEvent);

// Public
router.get("/", getEvents);
router.get("/:id", getEventById);

export default router;