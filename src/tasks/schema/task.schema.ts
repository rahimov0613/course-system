import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";


export type TaskDocument = Task & Document;

export enum taskStatus {
    PENDING = 'pending',
    IN_PROGRESS = 'in-progress',
    DONE = 'done',
}

@Schema({ timestamps: true })
export class Task {
    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop({ enum: taskStatus, default: taskStatus.PENDING })
    status: taskStatus

    @Prop()
    dueDate: Date

    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    createdBy: Types.ObjectId
}

export const taskSchema = SchemaFactory.createForClass(Task)
