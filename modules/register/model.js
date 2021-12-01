const { fetch,fetchAll } = require('../../lib/postgres')

const NEW_USER = `
    insert into users(
        user_first_name,
        user_last_name,
        user_email,
        user_name,
        password
    )values($1,$2,$3,$4,$5)
    returning *
`
const ALL_USERS = `
        select * from users;
`
const newUser = (fName,lName,email,uName,password) => fetch(NEW_USER,fName,lName,email,uName,password);
const allUsers = ()=>fetchAll(ALL_USERS);
module.exports ={
    newUser,
    allUsers
}