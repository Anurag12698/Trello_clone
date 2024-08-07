const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

const userRoutes = require('./routes/users'); // Ensure this path is correct
const User = require('./models/User'); // Ensure this path is correct

app.use(cors());
app.use(express.json());

async function main() {
    await mongoose.connect('mongodb://localhost:27017/trello');
}

main().catch(err => console.log(err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.get('/test', async (req, res) => {
    try {
        const allUsers = await User.find(); 
        console.log('All users:', allUsers); 
        res.json(allUsers);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


app.use('/users', userRoutes);


app.get('/', (req, res) => {
    res.send('Hello, Trello App!');
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
