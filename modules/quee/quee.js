const jwt = require('../../lib/jwt')
const model = require('./model')

module.exports = {
    NEW_QUEE:async(req,res)=>{
        try{
            const { userId,userPhone,clinicId,categoryId } = req.body
            const queeCount =await model.queeCount();
            const newQuee = await model.newQuee(jwt.verify(userId),userPhone,clinicId,categoryId)
            if(newQuee){
                res.status(200).json({messege:'ok',count:queeCount.count})
                console.log({messege:'ok',count:queeCount.count});

            }else{
                res.status(400).res.json({message:'values invalid'})
            }
        }catch(err){
            console.log(err);
        }
    }
}