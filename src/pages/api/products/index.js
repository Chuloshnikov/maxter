import nc from "next-connect";
import dbConnect from "../../../../db/dbConnect";
import { newProduct } from "../../../../controllers/productControlers";


const handler = nc();

dbConnect();

handler.post(newProduct);

export default handler;