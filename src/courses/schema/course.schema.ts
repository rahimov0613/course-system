import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CourseDocument = Course & Document;

@Schema({ timestamps: true })
export class Course {
    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop()
    startDate: Date;

    @Prop()
    endDate: Date;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
