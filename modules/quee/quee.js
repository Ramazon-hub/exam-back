const model = require('./model')

module.exports = {
    NEW_QUEE:async(req,res)=>{
        try{
            const { userId,userPhone,clinicId,categoryId } = req.body
            const newQuee = await model.newQuee(userId,userPhone,clinicId,categoryId)
            res.status(200).json(newQuee)
        }catch(err){
            console.log(err);
        }
    }
}