const express = require('express');
const app = express();

// Parse JSON bodies
app.use(express.json());

// Example route for getting a list of items
app.get('/api/items', (req, res) => {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];
  res.json(items);
});

// Example route for creating a new item
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  // Logic for creating a new item
  res.status(201).json(newItem);
});

// Example route for getting a specific item
app.get('/api/items/:id', (req, res) => {
  const itemId = req.params.id;
  // Logic for getting a specific item
  const item = { id: itemId, name: `Item ${itemId}` };
  res.json(item);
});

// Example route for updating an item
app.put('/api/items/:id', (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;
  // Logic for updating the item
  updatedItem.id = itemId;
  res.json(updatedItem);
});

// Example route for deleting an item
app.delete('/api/items/:id', (req, res) => {
  const itemId = req.params.id;
  // Logic for deleting the item
  res.sendStatus(204);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
