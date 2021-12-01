const jwt = require('jsonwebtoken')
module.exports = {
    sign : (data)=>{
      return  jwt.sign(data,'roma')
    },
    verify: (data)=>{
      return jwt.verify(data,'roma')
    }
}