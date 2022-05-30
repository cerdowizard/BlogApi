import { mongoose } from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true,
    }
},
    {
        timestamps: true
    }
);

//Export the model
export default mongoose.model("Category", userSchema);