const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 5000;


main().catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://localhost:27017/trello');
}

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',()=>{
    console.log('Connected to MongoDB');
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
});

app.get('/',(req,res)=>{
    res.send('Hello, Trello App!');
})

