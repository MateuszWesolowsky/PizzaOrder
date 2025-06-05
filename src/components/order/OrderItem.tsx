import type { CartItemTypes } from "../../types/types";
import { formatCurrency } from "../../utils/helpers";

interface Props {
  item: CartItemTypes;
  isLoadingIngredients: boolean;
  ingredients: string[];
}

export const OrderItem = ({
  item,
  isLoadingIngredients,
  ingredients,
}: Props) => {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm text-stone-500 capitalize italic">
        {isLoadingIngredients ? "Loading..." : ingredients.join(", ")}
      </p>
    </li>
  );
};
