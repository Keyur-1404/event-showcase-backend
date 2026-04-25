import Event from "../models/Event.js";

export const createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();

    res.status(201).json({
      message: "Event created successfully",
      event
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getEvents = async (req, res) => {
  try {
    const { category, status, search } = req.query;

    let query = {};

    // Filter by category
    if (category) {
      query.category = category;
    }

    // Filter by status
    if (status) {
      query.status = status;
    }

    // Search by title
    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    const events = await Event.find(query);

    res.json(events);

  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

export const getEventById = async (req, res) => {
  const event = await Event.findById(req.params.id);
  res.json(event);
};

export const updateEvent = async (req, res) => {
  const event = await Event.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json({
    message: "Event updated",
    event
  });
};

export const deleteEvent = async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);

  res.json({ message: "Event deleted" });
};