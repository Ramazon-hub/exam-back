const express = require('express')
const app = new express();
const router = require('./modules/routes')
const cors = require('cors')
app.use(express.json())
app.use(cors())
app.use(router)

app.listen(2000,()=>console.log('app is run 2000'))