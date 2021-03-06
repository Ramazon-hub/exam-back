const model = require('./model')
module.exports ={
    NEW_CATEGORY :async(req,res)=>{
        try{
            const { categoryName,clinicId } = req.body
            const newCategory = await model.newCategory(categoryName,clinicId);
            res.json(newCategory)
        }catch(err){
            console.log(err);
        }
    },
    ALL_CATEGORIES:async(_,res)=>{
        try{
            const allcategories = await model.allcategories();
            if(allcategories){
                res.status(200).json(allcategories)
            }else{
                res.status(400).json({message:'Failed ...'})
            }

        }catch(err){
            console.log(err);
        }
    }
}