import { initMongoose } from "@/lib/mongoose";
import { getServerSession } from "next-auth";
import Post from "../../models/Post";
import { authOptions } from "./auth/[...nextauth]";

export default async function handle(req, res) {
    await initMongoose();
    const session = await getServerSession(req, res, authOptions);

    if (req.method === 'GET') {
        const posts = await Post.find()
        .populate('author')
        .sort({createdAt: -1}).exec();
        res.json(posts);
    }

    if (req.method = 'POST') {
        const {text} = req.body;
        const post = await Post.create({
            author: session.user.id,
            text,
        });
        res.json(post);
    }
}