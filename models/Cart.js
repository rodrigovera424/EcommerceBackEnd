const mongoose = require ("mongoose");


const CartSchema = new mongoose.Schema ({
   userId:{type : String , required:true},
    products:[ 
        {

        productId:{
            type:Number,
            default:1,
        },
     } ,
    ],
  
},
{
    // mongoose para la hora 
    timestamp : true 
}
)

module.exports = mongoose.model ("Cart",CartSchema);