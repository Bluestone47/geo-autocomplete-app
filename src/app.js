const express = require('express')
const router = require('./routes/router')
require('dotenv').config()

const PORT = process.env.PORT || 3000
const app = express()
app.use(router)

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
