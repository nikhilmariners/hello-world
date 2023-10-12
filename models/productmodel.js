const mongoose= require('mongoose')

const productschema =mongoose.Schema(
    {
        name:{
            type:String,
            require: [true,"Please enter a product name"]
        },
        quantity:{
            type:Number,
            required:true,
            default: 0
        },
        price:{
            type:Number,
            required: true,
        },
        image:{
            type:String,
            required: false,
        }
    },
)
const product=mongoose.model('Product', productschema);
module.exports=product;