import { Schema, model, models } from "mongoose";

const videosSchema = new Schema({
    title: {
        type: String,
        require: [true, 'Title is required'],
        unique: [true, 'Title should be unique'],
        maxlength: [40, 'Title must be less than 40'],
        trim: true,
    },
    description: {
        type: String,
        require: false,
        maxlength: [200, 'Description mus be less than 200 characters'],
    },
    url: {
        type: String,
        require: [true, 'Url is required'],
        trim: true,
    }

})

export default models.Videos || model('Videos', videosSchema);