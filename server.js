const express = require('express')
const api = require('./routes/index')
const app = express()
const PORT = 8000
const errorHandler = require('./handler/errorHandler')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(errorHandler)

app.use('/api/v1', api)

app.listen(PORT, () => {
    console.log(`Server is connected to PORT: ${PORT}`)
})