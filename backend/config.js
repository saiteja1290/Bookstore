import dotenv from "dotenv";

dotenv.config()
export const PORT = 5555;
export const mongourl = `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@cluster0.jvtt3so.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;