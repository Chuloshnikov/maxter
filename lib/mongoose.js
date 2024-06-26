import mongoose from "mongoose";

export async function initMongoose() {
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection.asPromise();
    }
    mongoose.connect(process.env.MONGODB_URI);
}