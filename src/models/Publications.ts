import mongoose, { Schema, model } from "mongoose";
import { prop, getModelForClass, modelOptions } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: false,
    _id: false,
  },
})
class Publication {
  @prop({ type: String, required: true, trim: true })
  title: string;

  @prop({ type: String, required: true, trim: true })
  url: string;
}

@modelOptions({
  schemaOptions: {
    versionKey: false,
    timestamps: true,
  },
})
class Publications {
  @prop({ type: String, required: true, trim: true })
  title: string;

  @prop({ type: String, required: true, trim: true })
  text: string;

  @prop({ type: () => [String], required: true, trim: true })
  tags: string[];

  @prop({ required: true })
  type: "Normal" | "Slideshow";

  @prop({ type: () => [Publication], required: true })
  publications: Publication[];
}

const publicationModel = getModelForClass(Publications);
export default publicationModel;
