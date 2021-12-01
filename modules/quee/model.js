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
const newQuee = (userId,userPhone,clinicId,categoryId) => fetch(NEW_QUEE,userId,userPhone,clinicId,categoryId);
module.exports ={
    newQuee,
}