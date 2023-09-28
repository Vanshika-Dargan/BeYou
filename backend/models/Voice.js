import mongoose from 'mongoose'


const voiceSchema=mongoose.Schema({
title:{
    type:String
},
message:{
    type:String
},
support:{
    type:Number
},
image:{
    type:String
}
})