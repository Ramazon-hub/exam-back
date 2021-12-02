const jwt = require('../../lib/jwt');
const model = require('./model')
module.exports ={
    LOGIN:async(req,res)=>{
        try{
            const { uName,password } = req.body
            console.log(uName,password );
            const findUser = await model.login(uName,password);
            console.log(findUser);
            if(findUser){
                const token = jwt.sign(findUser.user_id)
                const position = findUser.clinic_id ?'admin' :'user' 
                res.status(200).json({token,position})

            }else{
                res.status(400).json({m:'username or password is invalid'})
                
            }

        }catch(err){
            console.log(err);
        }
    }
}