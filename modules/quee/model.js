const { fetch,fetchAll } = require('../../lib/postgres')
const NEW_QUEE = `
    insert into quee(
        user_id,
        user_phone,
        clinic_id,
        category_id
    )values($1,$2,$3,$4) 
    returning *
`
const ALL_QUEES=`
select * from quee where quee.clinic_id=(select clinic_id from clinics where clinic_id = (select users.clinic_id from users where user_id=$1));
`
const QUEE_COUNT =`
    select count(quee_id) as count from quee ;
`
const queeCount = ()=>fetch(QUEE_COUNT);
const newQuee = (userId,userPhone,clinicId,categoryId) => fetch(NEW_QUEE,userId,userPhone,clinicId,categoryId);
const allQuees = (userId)=>fetchAll(ALL_QUEES,userId);
module.exports ={
    newQuee,
    allQuees,
    queeCount
}