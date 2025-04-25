const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

require('dotenv').config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to InsZap Backend');
});

const userRoutes = require('./Routes/userRoutes');
const stationRoutes = require('./Routes/stationRoutes');

app.use('/api/users', userRoutes);
app.use('/api/stations', stationRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));