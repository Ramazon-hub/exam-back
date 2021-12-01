const { fetch,fetchAll } = require('../../lib/postgres')

const USER = `
    select * from users where user_id = $1
`

const user = (userId)=>fetch(USER,userId);
module.exports ={
   user,
}