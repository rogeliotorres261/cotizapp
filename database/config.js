const mongoose = require('mongoose');

const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log('BD CONNECTION COMPLETE!')   
    }catch(err){
        throw new Error('ERROR AL INICIAR LA BD')
    }
}
module.exports={
    dbConnection
}