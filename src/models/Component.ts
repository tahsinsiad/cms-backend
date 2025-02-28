import mongoose, { Model, Schema } from "mongoose";

export const ComponentSchema: any = new Schema({
    importSignature: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    vendor: {
        type: String,
        required: true
    },
    props: {
        type: Schema.Types.Mixed,
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

ComponentSchema.statics.getAllComponent = async function (limit, skip) {
    return await this.find().sort({ modifiedAt: -1 }).skip(skip).limit(limit);
};

ComponentSchema.statics.findByImportSignature = async function (importSignature) {
    return await this.findOne({
        importSignature: importSignature,
    });
};

const Component: Model<any, any> | any = mongoose.model("Component", ComponentSchema);
// Export Footer Model/Schema
export default Component;
