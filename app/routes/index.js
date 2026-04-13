// bringing in express so I can use routing
const express = require("express");

// creating a router so I can separate my routes from the main app
const router = express.Router();

// this is my in-memory storage for inventory items
// each item represents a product with a name and stock amount
let items = [
  { id: 1, name: "MacBook Pro", stock: 5 },
  { id: 2, name: "iPhone 15", stock: 10 },
];

// ======================
// GET ALL ITEMS
// ======================

// this route runs when I go to /api
// it returns all the items from my array
router.get("/", (req, res) => {
  res.status(200).json({
    message: "GET all items",
    data: items,
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

// ======================
// GET ITEM BY ID
// ======================

// this route lets me get one item using its id from the URL
// example: /api/1
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const item = items.find((i) => i.id === id);

  if (!item) {
    return res.status(404).json({
      message: "Item not found",
    });
  }

  res.status(200).json({
    message: "GET item by ID",
    data: item,
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

// ======================
// POST (CREATE NEW ITEM)
// ======================

// this route lets me create a new item
// I send data from Postman in the body
router.post("/", (req, res) => {
  const newItem = {
    id: items.length + 1,
    ...req.body,
  };

  items.push(newItem);

  res.status(201).json({
    message: "Item created",
    data: newItem,
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

// ======================
// PUT (UPDATE ITEM BY ID)
// ======================

// this route updates an existing item using its id
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = items.findIndex((i) => i.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Item not found",
    });
  }

  items[index] = {
    id,
    ...req.body,
  };

  res.status(200).json({
    message: "Item updated",
    data: items[index],
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

// ======================
// DELETE ITEM BY ID
// ======================

// this route deletes an item using its id
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = items.findIndex((i) => i.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Item not found",
    });
  }

  const deletedItem = items.splice(index, 1);

  res.status(200).json({
    message: "Item deleted",
    data: deletedItem,
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

// exporting the router so app.js can use it
module.exports = router;
