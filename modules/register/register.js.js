const jwt = require('../../lib/jwt');
const model = require('./model')
module.exports ={
    NEW_USER:async(req,res)=>{
        try{
            const { fName,lName,email,uName,password } = req.body
            console.log(fName,lName,email,uName,password );
            const newUser = await model.newUser(fName,lName,email,uName,password);
           if(newUser){
               const token = jwt.sign(findUser.user_id)
               const position = findUser.clinic_id ?'admin' :'user' 
               res.status(200).json({token,position})

           }else{
               res.status(400).json({message:'values invalid'})
           }
        }catch(err){
            console.log(err);
        }
    }
}