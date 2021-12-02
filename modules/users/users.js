const jwt = require("../../lib/jwt");
const model = require('./model')
module.exports = {
   GET:async(req,res)=>{
    try{
        const {token} = req.headers
        userId = jwt.verify(token);
        const users = await model.users(userId);
        console.log(users);
        res.status(200).json(users)
    }
    catch(err){
        console.log(err);
    }
   }
}