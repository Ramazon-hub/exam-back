const model = require('./model')
module.exports = {
    NEW_CLINIC:async(req,res)=>{
        try{
            const { ClinicName,ClinicAdres,ClinicPhone,ClinicRate } = req.body;
            const newClinic = await model.newClinic(ClinicName,ClinicAdres,ClinicPhone,ClinicRate);
            console.log('hello');
            console.log(req.body);
            console.log(newClinic);
            res.status(200).json(newClinic)

        }catch(err){
            console.log(err);
        }
    },
    ALL_CLINICS:async(_,res)=>{
        try{
            const clinics = await model.allClinics();
            res.status(200).json(clinics )

        }catch(err){
            console.log(err);
        }
    }
}