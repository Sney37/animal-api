const route = require('express').Router()

const {getPet,postPet,updatePet,deletePet} = require('../Controller/petController')
const auth = require('../Middleware/auth')


route.get('/',getPet)
route.post('/',auth,postPet)
route.put('/:id',updatePet)
route.delete('/:id',deletePet)


 module.exports = route