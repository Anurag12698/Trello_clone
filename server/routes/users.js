const express = require('express')
const router = express.Router();

const User = require('./modles/User');

module.exports = router;

router.get('/check',(req,res)=>{
    const {username } = req.query;
    const userExists = db.collection.find(username);
    if(userExists){
        res.json({success:true, message:'User found'});
    } else {
        res.json({success:false, message:'User not found'})
    }
});
