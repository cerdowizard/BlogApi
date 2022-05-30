import { mongoose } from "mongoose";

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true,
    },
    shortdesc: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        unique: true,
    },
    categories: {
        type: Array,
        require: true
    },
    author: {
        type: String,
        required: true,
    },
    images: {
        type: Array
    },
    avater: {
        type: String,
    },

},
    {
        timestamps: true
    }
);

//Export the model
export default mongoose.model("Post", postSchema);