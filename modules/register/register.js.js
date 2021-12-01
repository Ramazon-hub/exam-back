const jwt = require('../../lib/jwt');
const model = require('./model')
module.exports ={
    NEW_USER:async(req,res)=>{
        try{
            const { fName,lName,email,uName,password } = req.body
            console.log(fName,lName,email,uName,password );
            const newUser = await model.newUser(fName,lName,email,uName,password);
            // const allUsers = await model.allUsers();
            // const findUser = allUsers.find(u=>u.user_name && u.password)
            const token = jwt.sign({user_id:newUser.user_id,clinic_id:newUser.clinic_id})
            console.log(token);
            res.status(200).json({token})
        }catch(err){
            console.log(err);
        }
    }
}