import mongoose from "mongoose";

export interface ISubject {
    title: string;
    description?: string;
    created_at: Date;
    updated_at: Date;
    category: string;
    level: string
}

export interface SchemaType extends Document {
    name: string;
    description?: string;
    created_at: Date;
    updated_at: Date;
}

const subjectSchema = new mongoose.Schema<SchemaType>(
    {
        title: { type: String, required: true },
        description: { type: String },
        // @ts-ignore
        thumbnail: { type: String },
        category: { type: String },
        level: { type: String },
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

export default mongoose.model('Subject', subjectSchema);
