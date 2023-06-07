import mongoose from "mongoose";

interface iOrder {
  status: string;
  user: []
}

const orderSchema = new mongoose.Schema<iOrder>(
  {
    status: String,
    user: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// orderSchema.virtual("orders", {
//     ref: "User",
//     foreignField: "Weapon",
//     localField: "_id"
// })

const Order = mongoose.model("Order", orderSchema);

export default Order;
