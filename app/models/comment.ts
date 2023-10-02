import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
    comment: {
        type: String,
        require: [true, 'Comment is required.'],
        trim: true,
        minLength: [2, 'Comment must be larger than two characters.'],
        maxLength: [50, 'Comment must be shorter than 50 characters.']
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const CommentModel = mongoose.models.Comment || mongoose.model('Comment', commentSchema)

export default CommentModel;