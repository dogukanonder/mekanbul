var mongoose = require( "mongoose" );
var hour = new mongoose.Schema(
    {   
        days: {type:String,required:true},
        open: String,
        close: String,
        isClosed: {type:Boolean,required:false}
    }
);

var comment = new mongoose.Schema(
    {   
        author: {type:String,required:true},
        rating: {type:Number,min:0,max:5,required:true},
        text: {type:String,required:true},
        date: {type:Date,default:Date.now}
    }
);




var venue = new mongoose.Schema({
    name: {type:String, required:true},
    address: String,
    rating: {type:Number,min:0,max:5,default:0},
    coordinates: {type: [Number], index: '2dsphere'},
    foodanddrink: [String],
    hours: [hour],
    comments: [comment]
    
});
mongoose.model("venue",venue,"venues");