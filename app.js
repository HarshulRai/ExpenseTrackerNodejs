const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const sequelize = require('./utils/database')

const signupRoute = require('./routes/signup')
const loginRoute = require('./routes/login')

const app = express()
app.use(cors())
app.use(express.json())
app.use(signupRoute)
app.unsubscribe(loginRoute)

sequelize
    .sync()
    .then(() => {
        console.log('table created');
    })
    .catch((err) => {
        console.log(`><><<><`,err);
    })
app.listen(3000)    
