const { Schema , model} = require("mongoose");

const councilSchema = new Schema({
    doctor:{
        type:Schema.Types.ObjectId,
        ref:'Doctor'
    },
    schedule:{
        day:{
            type:String,
            trim:true,
            required:true
        },
        startTime:{
            type:String,
            trim:true,
            required:true
        },
        endTime:{
            type:String,
            trim:true,
            required:true
        },
        slots: [
            {
                type: String
            }
        ]
    }
})


const Council = model('Council' , councilSchema);
module.exports = Council;


// how to make slot array of appointment id