const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const connecDatabase = require('./database');

const taskRoute = require('./routes/task');
const userRoute = require('./routes/user')

class App{
    constructor(){
        this.app = express()
        this.config()
        this.routes()
        this.listen()
    }
    

    config(){
        this.app.use(morgan('dev'))
        this.app.use(express.json())
        this.app.use(cors())
        connecDatabase()
    }

    routes(){
        this.app.get('/', (req,res)=> res.json('works'))
        this.app.use('/api/todos', taskRoute)
        this.app.use('/api/users', userRoute)
    }

    listen(){
        this.app.listen(process.env.PORT | 4000,()=>{
            console.log('server on port 4000')
        })
    }


}

module.exports = App