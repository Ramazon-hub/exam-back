const { fetch,fetchAll } = require('../../lib/postgres')
const USERS = `
    select user_name  from quee inner join users on quee.clinic_id= (select clinic_id from users where user_id=$1) group by user_name
`
const users = (userId) =>fetchAll(USERS,userId)
module.exports={
    users
}