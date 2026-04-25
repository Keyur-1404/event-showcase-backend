import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String, // Cultural, Sports, etc.
  status: {
    type: String,
    enum: ["Upcoming", "Ongoing", "Completed"],
    default: "Upcoming"
  },
  date: String,
  time: String,
  location: String,
  image: String,
  video: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Event", eventSchema);