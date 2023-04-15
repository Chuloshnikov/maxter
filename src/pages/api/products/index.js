import nc from "next-connect";
import dbConnect from "../../../../db/dbConnect";
import { newProduct } from "../../../../controllers/productControlers";
import { getProducts } from "../../../../controllers/productControlers";


const handler = nc();

dbConnect();

handler.get(getProducts);
handler.post(newProduct);

export default handler;