//init
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoute = require('./Route/userRoute')
const petRoute = require('./Route/petRoute')
require('dotenv/config')

//decl
const app = express()

//middleware
app.use(express.json())
app.use(cors())

//default route
app.get('/',(req,res)=>{
    console.log('Running on 5000 port');
})

//main route
app.use('/api/user',userRoute)
app.use('/api/pet',petRoute)

app.listen(process.env.PORT,()=>{
    console.log('Running on 5000 port');
})

//CONNECTION
async function db() {
    try {
        const res = await mongoose.connect(process.env.DB);
        const data = await res.default;
        console.log(data.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}
db()