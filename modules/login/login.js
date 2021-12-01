const jwt = require('../../lib/jwt');
const model = require('./model')
module.exports ={
    LOGIN:async(req,res)=>{
        try{
            const { uName,password } = req.body
            console.log(uName,password );
            const findUser = await model.login(uName,password);
            // const allUsers = await model.allUsers();
            // const findUser = allUsers.find(u=>u.user_name && u.password)
            if(findUser){
                const token = jwt.sign({user_id:findUser.user_id,clinic_id:findUser.clinic_id})
                res.status(200).json({token})

            }else{
                res.status(400).json({m:'username or password is invalid'})
                
            }

        }catch(err){
            console.log(err);
        }
    }
}