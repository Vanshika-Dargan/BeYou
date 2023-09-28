import express,{urlencoded} from 'express'
import page from './routes/page.js'
import mongoose from 'mongoose';

const app=express();

app.use(urlencoded({extended:true}))

const PORT=5000;

app.use('/',page)
console.log(process.env.CONNECTION_URL)
mongoose.connect(process.env.CONNECTION_URL)
.then(()=>app.listen(PORT,()=>console.log(`Server running on Port: http://locahost:${PORT}`)))
.catch((error)=>console.log(`${error} not able to connect`));