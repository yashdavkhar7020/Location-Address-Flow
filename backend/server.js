const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const addressRoutes = require('./routes/addressRoutes');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/api/address', addressRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
