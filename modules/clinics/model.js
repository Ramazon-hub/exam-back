const { fetch,fetchAll } = require('../../lib/postgres')

const ALL_CLINICS = `
    select * from clinics;
`

const NEW_CLINIC = `
    insert into clinics(
        clinic_name,
        clinic_adress,
        clinic_phone,
        clinic_rate
    )values($1,$2,$3,$4 ) 
    returning *;
    
`

const newClinic = (ClinicName,ClinicAdres,ClinicPhone,ClinicRate) => fetch(NEW_CLINIC,ClinicName,ClinicAdres,ClinicPhone,ClinicRate)
const allClinics = ()=>fetchAll(ALL_CLINICS);
module.exports={
    allClinics,
    newClinic

}
