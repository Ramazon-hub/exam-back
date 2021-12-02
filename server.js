const express = require('express')
const app = new express();
const router = require('./modules/routes')
const cors = require('cors')
const PORT = process.env.PORT || 777
app.use(express.json())
app.use(cors())
app.use(router)

app.listen(PORT)