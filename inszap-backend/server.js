const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./Routes/userRoutes');

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

// Connect to MongoDB without deprecated options
mongoose.connect('mongodb://localhost:27017/inszap').then(() => {
  console.log('Connected to MongoDB successfully');
}).catch((error) => {
  console.error('MongoDB connection error:', error.message);
});


const userroutes = require('./Routes/userRoutes'); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port 'http://localhost:${PORT}'`));

const userRoutes = require('./Routes/userRoutes');
const stationRoutes = require('./Routes/stationRoutes');

app.use('/api/users', userroutes);
app.use('/api/stations', stationRoutes);

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

