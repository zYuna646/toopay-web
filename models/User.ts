import mongoose, { Schema, Document } from "mongoose";
import { IRole } from "./Role";

export interface IUser extends Document {
  name: string;
  email: string;
  role: IRole["_id"];
  alamat: string;
  jk: boolean;
  tgl_lahir: Date;
  no_hp: string;
  tempat_lahir: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: Schema.Types.ObjectId, ref: "Role", required: true },
  alamat: { type: String, required: true },
  jk: { type: Boolean, required: true },
  tgl_lahir: { type: Date, required: true },
  no_hp: { type: String, required: true },
  tempat_lahir: { type: String, required: true },
});

export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);
