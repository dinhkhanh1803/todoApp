import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);
    console.log("ket noi csdl thanh cong");
  } catch (error) {
    console.error("Loi ket moi CSDL", error);
    process.exit(1); //exit with error
  }
};
