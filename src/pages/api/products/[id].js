import nc from "next-connect";
import dbConnect from "../../../../db/dbConnect";
import { getProduct } from "../../../../controllers/productControlers";


const handler = nc();

dbConnect();

handler.get(getProduct);


export default handler; 