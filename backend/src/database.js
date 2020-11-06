const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://Jota:jose4529735@cluster0.k7crs.mongodb.net/todo_proyect?retryWrites=true&w=majority'

const connectDatabase =  async () =>{
    try {
        const db = await mongoose.connect(MONGO_URI ,{
            useCreateIndex:true,
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        })
        console.log(`database is connected to : ${db.connection.name}`);

    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDatabase