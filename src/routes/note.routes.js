const express = require("express");
const router = express.Router();
const { createNote } = require("../controllers/note.controller");

// CRUD single-item routes LAST — /:id must always be last
router.post("/", createNote);

module.exports = router;
