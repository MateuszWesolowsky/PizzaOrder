import type { ActionFunctionArgs } from "react-router";
import { updateOrder } from "../services/apiRestaurant";

export const updateOrderAction = async ({ params }: ActionFunctionArgs) => {
  const data = { priority: true };
  if (params.orderId) await updateOrder(params.orderId, data);
};
