const express = require('express');
const treatmentRoutes = require('./routes/treatmentRoutes');
require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/treatments', treatmentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

