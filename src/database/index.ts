import  mongoose from 'mongoose';



mongoose.connect( process.env.DATABASE_URL as string).then(() => {

    console.log('Connected !')
}).catch(e => console.log(e));