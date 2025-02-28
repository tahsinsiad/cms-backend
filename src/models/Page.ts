import mongoose, { Model, Schema } from "mongoose";

export const PageSchema: any = new Schema({
    projectId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    header: {
        type: Schema.Types.ObjectId,
        required: false
    },
    footer: {
        type: Schema.Types.ObjectId,
        required: false
    },
    contents: {
        type: [Schema.Types.ObjectId],
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: {
        type: Date,
        default: Date.now
    }
});

PageSchema.statics.getAllPage = async function (projectId, limit, skip) {
    return await this.find({projectId: projectId}).sort({ modifiedAt: -1 }).skip(skip).limit(limit);
};

const Page: Model<any, any> | any = mongoose.model("Page", PageSchema);
// Export Page Model/Schema
export default Page;
