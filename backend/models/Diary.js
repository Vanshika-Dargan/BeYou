import mongoose from 'mongoose'


const diarySchema=mongoose.Schema({
pages:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Page'
}]
})