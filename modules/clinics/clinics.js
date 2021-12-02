const model = require('./model')
module.exports = {
    NEW_CLINIC:async(req,res)=>{
        try{
            const { ClinicName,ClinicAdres,ClinicPhone,ClinicRate } = req.body;
            const newClinic = await model.newClinic(ClinicName,ClinicAdres,ClinicPhone,ClinicRate);
            if(newClinic){
                res.status(200).json(newClinic)
            }else{
                res.status(400).json({message:'Failed ...'})
            }

        }catch(err){
            console.log(err);
        }
    },
    ALL_CLINICS:async(_,res)=>{
        try{
            const clinics = await model.allClinics();
            if(clinics){
                res.status(200).json(clinics )
            }else{
                res.status(400).json({message:'Failed ...'})
            }

        }catch(err){
            console.log(err);
        }
    }
}