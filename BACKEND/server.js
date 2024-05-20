//this will set up the express server and define a route for our audit api endpoint

const express = require('express');
const bodyParser = require('body-parser');
const { performAudit } = require('./audit');

const app = express();
app.use(bodyParser.json());

app.post('/api/audit', async (req, res) => {
  const { url } = req.body;
  try {
    const auditResults = await performAudit(url);
    res.json(auditResults);
  } catch (error) {
    res.status(500).json({ error: 'Audit failed' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
