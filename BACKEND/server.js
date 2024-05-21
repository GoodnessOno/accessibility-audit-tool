const express = require('express');
const bodyParser = require('body-parser');
const { performAudit } = require('./audit');
const cors = require('cors'); // Import the CORS middleware

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

app.post('/api/audit', async (req, res) => {
  const { url } = req.body;
  try {
    const auditResults = await performAudit(url);
    res.json(auditResults);
  } catch (error) {
    res.status(500).json({ error: 'Audit failed' });
  }
});

// Export the app for testing
module.exports = app;

// Only start the server if not in test environment
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
