import mongoose from "mongoose";

interface OrderProduct {
  quantity: string;
  weapon: [];
}

const orderProduct = new mongoose.Schema<OrderProduct>(
  {
    quantity: String,
    weapon: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Weapon",
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

orderProduct.virtual("order", {
  ref: "Order",
  foreignField: "Weapon",
  localField: "_id",
});

const cart = mongoose.model("Cart", orderProduct);

export default cart;
