const clinicModel = require('../clinics/model')
const categoryModel = require('../category/model')
const queeModel = require('../quee/model')
const jwt = require('../../lib/jwt')
module.exports ={
    ALL_DATA:async(req,res)=>{
        try{
           
           
            const clinics = await clinicModel.allClinics();
            const categories = await categoryModel.allcategories();
       
            res.json({clinics,categories})
        }catch(err){
            console.log(err);
        }
    }
}