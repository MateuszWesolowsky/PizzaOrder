import type { LoaderFunctionArgs } from "react-router";
import { getOrder } from "../services/apiRestaurant";

export const orderIdLoader = async ({
  params: { orderId },
}: LoaderFunctionArgs) => {
  if (orderId) {
    const order = getOrder(orderId);
    return order;
  }
};
