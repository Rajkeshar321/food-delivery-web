import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI,{dbName: "food-del"}).then(()=>console.log("DB Connected"));
}