const express = require('express');
const app = express();

const dotenv = require('dotenv')
const cors = require('cors');

const authRoutes = require('./routes/user');

dotenv.config();


app.use(cors());
app.use(express.json())




const connectDB = require('./config/connectionDb')

connectDB();

app.use('/api', authRoutes);

app.use('/receipe', require('./routes/receipe'));



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});