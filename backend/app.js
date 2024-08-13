const express = require('express');
const cors = require('cors');
const app = express()
const db = require('./db/db');
const transactionRoute = require('./routes/transactionRoute')

require('dotenv').config()

const PORT = process.env.PORT

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())
app.use('/',transactionRoute);


const server = ()=>{
    db()
app.listen(PORT,()=>{
    console.log('You are listening to port:',PORT)
})
}
server()