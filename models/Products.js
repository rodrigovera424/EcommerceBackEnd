const mongoose = require ("mongoose");

//creacion de nuevos  usuarios
const ProductSchema = new mongoose.Schema ({
    title:{type : String , required:true, unique:true},
    desc:{ type:String, required: true, },
    categories:{type:array},
    size:{type:String },
    color:{type:String},
    price:{type:Number, required:true},
},
{
    // mongoose para la hora 
    timestamp : true 
}
)

module.exports = mongoose.model ("Product",ProductSchema);