import mongoose from "mongoose";

interface fantansy {
  name: string;
  type: string;
  weight?: string;
}

const interfaceSchema = new mongoose.Schema<fantansy>({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
});

const Weapon = mongoose.model("Weapon", interfaceSchema);

export default Weapon;
