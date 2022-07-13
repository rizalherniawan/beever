const api = require('express')()
const SystemController = require('../controller/system.js') 

api.get('/get/quotes', SystemController.getApi) 
api.get('/quotes', SystemController.viewData)
api.post('/quotes', SystemController.postData)
api.put('/quotes/:id', SystemController.updateData)
api.delete('/quotes/:id', SystemController.deleteData)

module.exports = api