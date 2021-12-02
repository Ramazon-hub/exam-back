const clinicModel = require('../clinics/model')
const categoryModel = require('../category/model')
const queeModel = require('../quee/model')
const jwt = require('../../lib/jwt')
module.exports ={
    ALL_DATA:async(req,res)=>{
        try{
           const { token } =req.headers
           const userId = jwt.verify(token)
            const clinics = await clinicModel.allClinics();
            const categories = await categoryModel.allcategories();
            const quees = await queeModel.allQuees(userId);
            res.json({clinics,categories,quees})
        }catch(err){
            console.log(err);
        }
    }
}