import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description: {type:String, required:true},
    price: {type:String, required:true},
    image: {type:String, required:true}, // here image type is string since we will pass the image URL not a jpg or other format image directly
    category: {type:String, required:true}
})

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;