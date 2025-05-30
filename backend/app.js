require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

// middlewares
    app.use(express.json())
    app.use(cors())
    app.use((req, res, next) => {
        console.log(req.path, req.method)
        next()
    })
    
// destructure
    const { MONGO_LOCAL_URI, PORT } = process.env
    const userRoute = require('./routers/user')


// api routes
    app.use('/api/user', userRoute)

// app listening
    mongoose.connect(MONGO_LOCAL_URI).then(() => {
        return app.listen(PORT, () => {
            console.log(`DB CONNECTED & Server is listening at ${PORT}`);
        })
    }).catch(error => {
        console.error('Database connection error:', error)
        process.exit(1);
    })