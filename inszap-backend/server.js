const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

require('dotenv').config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to InsZap Backend');
});

const userroutes = require('./Routes/userRoutes'); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port 'http://localhost:${PORT}'`));

const userRoutes = require('./Routes/userRoutes');
const stationRoutes = require('./Routes/stationRoutes');

app.use('/api/users', userroutes);
app.use('/api/stations', stationRoutes);
