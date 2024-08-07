const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 5000;

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://localhost:27017/trello-clone');
}