import type { CartItemTypes } from "../../types/types";
import { formatCurrency } from "../../utils/helpers";
import { DeleteItem } from "./DeleteItem";
import { UpdateItemQuantity } from "./UpdateItemQuantity";

interface Props {
  item: CartItemTypes;
}

export const CartItem = ({
  item: { pizzaId, name, quantity, totalPrice },
}: Props) => {
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={quantity} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
};
