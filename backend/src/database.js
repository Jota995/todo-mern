const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI

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