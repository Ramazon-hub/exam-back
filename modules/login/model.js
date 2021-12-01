const { fetch,fetchAll } = require('../../lib/postgres')
const LOGIN =`
select * from users where user_name =$1 and password = $2
`
const login = (uName,password)=>fetch(LOGIN,uName,password)
module.exports={
    login
}