const mongoose = require ("mongoose");


const OrderSchema = new mongoose.Schema ({
   userId:{type : String , required:true},
    products:[ 
        {

        productId:{
            type:String,
          
        },
        quantity:{
            tipe:Number,
            default:1,
        }
     } ,
    ],
    amount: { type:Number,required:true  },
    address:{ tyoe:Object, required :true },
    status :{ type:String ,default : "pending" } ,

  
},
{
    // mongoose para la hora 
    timestamp : true 
}
)

module.exports = mongoose.model ("Order",OrderSchema);