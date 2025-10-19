const mongoose = require('mongoose');

const receipeSchema = mongoose.Schema({ //Here you’re defining a schema for your collection.
    //A Schema is like a blueprint that tells MongoDB what fields each document (record) should have and what type of data is allowed.
    title:{
        type:String,
        required:true,

    },
    ingredients:{
        type:String,
        required:true,

    },
    instructions:{
        type:String,
        required:true,

    },
    time:{
        type:String,
      

    },
    image:{
        type:String,
      
    },

},{timestamp:true})

module.exports = mongoose.model("Receipes",receipeSchema) //This creates a Model called Receipes based on your schema.