import mongoose from "mongoose";

interface iUser {
  name: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<iUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
