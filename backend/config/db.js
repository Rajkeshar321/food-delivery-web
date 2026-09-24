import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rajkesharyadav91_db_user:leDBKALyx8PNjszV@cluster0.nsvx00i.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}