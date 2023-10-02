import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import CommentModel from "@/app/models/comment";
import mongoose from 'mongoose';

export async function GET(req: any, res: any) {

    await connectDB();

    try {
        const comments = await CommentModel.find();
        return NextResponse.json(comments);
    }

    catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: error.message })
    }
}

export async function POST(req: any) {
    await connectDB();

    const { commentForm } = await req.json();

    try {
        await CommentModel.create({ comment: commentForm })

        return NextResponse.json({
            msg: ['Comment uploaded successfully!'],
            success: true
        })
    }

    catch (error: any) {
        if (error instanceof mongoose.Error.ValidationError) {
            const errorList = [];
            for (let key in error.errors) {
                const e = error.errors[key];
                if (e && e.message) {
                    errorList.push(e.message);
                }
            }
            return NextResponse.json({ msg: errorList })
        } else {
            return NextResponse.json(error);
        }
    }
}