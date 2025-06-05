import { redirect, type ActionFunctionArgs } from "react-router";
import { createOrder } from "../services/apiRestaurant";
import { clearCart } from "../components/cart/cartSlice";
import { store } from "../store";

const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

type OrderFormData = {
  customer: string;
  phone: string;
  address: string;
  cart: string;
  priority?: string;
};

export const createNewOrderAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData) as OrderFormData;

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };
  console.log(order);
  const errors: { phone?: string } = {};

  if (!isValidPhone(order.phone))
    errors.phone = "Please give us your correct phone number.";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
};
